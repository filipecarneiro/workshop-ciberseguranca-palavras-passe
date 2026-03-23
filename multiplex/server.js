/**
 * Servidor de relay Multiplex para Reveal.js
 *
 * Serve os ficheiros do workshop (../index.html, ../presenter.html, etc.)
 * e faz relay dos eventos de sincronização entre o apresentador e os alunos.
 *
 * Uso:
 *   npm install   (apenas na primeira vez)
 *   npm start
 *
 * O terminal mostra o URL para os alunos abrirem na rede local.
 */

const express  = require('express');
const http     = require('http');
const { Server } = require('socket.io');
const crypto   = require('crypto');
const path     = require('path');
const os       = require('os');

const app    = express();
const server = http.createServer(app);
const io     = new Server(server, { cors: { origin: '*' } });

// Mapa socketId → secret (para validação)
const tokens = new Map();

// Serve os ficheiros estáticos do workshop (pasta raiz do repositório)
app.use(express.static(path.join(__dirname, '..')));

// Gera um par (socketId, secret) para uma sessão
app.get('/token', (req, res) => {
  const socketId = crypto.randomBytes(16).toString('hex');
  const secret   = crypto.randomBytes(32).toString('hex');
  tokens.set(socketId, secret);
  // Limpa tokens com mais de 8 horas para não acumular
  setTimeout(() => tokens.delete(socketId), 8 * 60 * 60 * 1000);
  res.json({ socketId, secret });
});

// Expõe o IP local para o presenter.html construir o URL dos alunos
app.get('/info', (req, res) => {
  const ifaces = os.networkInterfaces();
  let localIp  = 'localhost';
  Object.values(ifaces).forEach(list =>
    list.forEach(iface => {
      if (iface.family === 'IPv4' && !iface.internal) localIp = iface.address;
    })
  );
  res.json({ localIp, port: PORT });
});

// Relay de eventos entre o apresentador (master) e os alunos (followers)
io.on('connection', socket => {
  socket.on('multiplex-statechanged', data => {
    if (!data || !data.socketId || !data.secret) return;
    const expected = tokens.get(data.socketId);
    if (!expected || data.secret !== expected) return; // rejeita fontes não autorizadas
    socket.broadcast.emit(data.socketId, data);
  });
});

const PORT = process.env.PORT || 1948;
server.listen(PORT, () => {
  const ifaces = os.networkInterfaces();
  let localIp  = 'localhost';
  Object.values(ifaces).forEach(list =>
    list.forEach(iface => {
      if (iface.family === 'IPv4' && !iface.internal) localIp = iface.address;
    })
  );

  console.log('\n\x1b[32m🔐 Servidor de apresentação iniciado!\x1b[0m\n');
  console.log('  \x1b[36mApresentador:\x1b[0m  http://localhost:' + PORT + '/presenter.html');
  console.log('  \x1b[33mAlunos:\x1b[0m        http://' + localIp + ':' + PORT + '/');
  console.log('\n  (O URL exato para os alunos aparece também no presenter.html)\n');
});
