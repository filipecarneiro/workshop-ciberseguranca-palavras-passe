# Hoje Vais Ser um Hacker

> Workshop de cibersegurança sobre palavras-passe e autenticação, pensado para grupos de jovens em contexto escolar ou eventos de divulgação científica.

Este repositório contém **todos os materiais necessários** para dinamizar o workshop: apresentação interativa com Reveal.js, guia do dinamizador com notas de apresentador, guia passo a passo para os alunos, ficheiros do desafio final e scripts de configuração da máquina virtual.

---

## Descrição

Uma sessão prática sobre palavras-passe e autenticação, com demonstração ao vivo de quebra de palavras-passe fracas, um exercício prático em que cada aluno verifica se o seu e-mail foi exposto em fugas de dados, e um desafio final em equipa em que os próprios alunos quebram palavras-passe cifradas, como hackers.

**Duração recomendada:** 100 minutos  
**Público-alvo:** Jovens a partir do 10º ano, com acesso a computadores e internet  
**Número de participantes:** até 30 (ideal: 15–20)

---

## Apresentação com Reveal.js + Multiplex

A apresentação usa **Reveal.js com o plugin Multiplex**: o dinamizador controla os slides no `presenter.html` e os alunos seguem automaticamente no `index.html` — sem precisarem de carregar em nada.

### Ficheiros principais

| Ficheiro | Quem abre | Para quê |
|---|---|---|
| `index.html` | **Alunos** — link partilhado | Slides em modo seguidor (sincronizados) |
| `presenter.html` | **Dinamizador** | Slides com controlo + notas de apresentador (prima **S**) |

### Fluxo de utilização

```
Dinamizador → presenter.html → avança slide → todos os alunos veem o slide avançar em index.html
```

### Configurar e iniciar o servidor (fazer uma vez por sesso)

O servidor relay corre localmente no computador do apresentador. Os alunos ligam-se via rede local (Wi-Fi da escola).

```powershell
cd multiplex
npm install   # só na primeira vez
npm start
```

O terminal mostra dois URLs:

```
Apresentador:  http://localhost:1948/presenter.html
Alunos:        http://192.168.x.x:1948/
```

- O `presenter.html` abre no computador do apresentador e mostra automaticamente o link a partilhar com os alunos.
- Os alunos abrem o URL da rede local no browser — os slides avançam automaticamente.
- O `socketId` e o `secret` são gerados automaticamente a cada sessão (não é necessário editar os ficheiros HTML).

> O GitHub Pages continua válido para partilhar o guia e os manuais, mas a sincronização de slides exige o servidor local.

### Ativar o GitHub Pages (opcional — para o guia dos alunos)

1. Vai a **Settings → Pages** no repositório
2. Em *Source*, escolhe **Deploy from a branch** → `main` → `/ (root)`
3. O link dos alunos fica em: `https://<utilizador>.github.io/<repositório>/`

---

## Estrutura do repositório

```
workshop-ciberseguranca-palavras-passe/
│
├── README.md                    # Este ficheiro
├── LICENSE                      # Licença CC BY-SA 4.0
├── CONTRIBUTING.md              # Como contribuir
│
├── index.html                   # Slides dos alunos (Reveal.js — Multiplex follower)
├── presenter.html               # Slides do dinamizador (Reveal.js — Multiplex master + notas)
│
├── multiplex/
│   ├── server.js                # Servidor relay (Node.js + socket.io)
│   └── package.json             # Dependências do servidor
│
├── dinamizador/
│   ├── guia.md                  # Script completo da sessão, bloco a bloco
│   ├── checklist.md             # Checklist de preparação e de sessão
│   └── notas.md                 # Dicas, perguntas frequentes, gestão do tempo
│
├── alunos/
│   └── guia.md                  # Guia de referência passo a passo para os alunos
│
├── desafio/
│   ├── README.md                # Regras e instruções do mini-desafio
│   ├── hashes-equipa-A.txt      # Hashes MD5 para a equipa A
│   ├── hashes-equipa-B.txt      # Hashes MD5 para a equipa B
│   ├── hashes-equipa-C.txt      # Hashes MD5 para a equipa C
│   ├── gerar-hashes.sh          # Script para gerar novos ficheiros de hashes
│   └── solucoes.md              # Soluções (não partilhar com os alunos)
│
└── vm/
    ├── README.md                # Como preparar o ambiente
    ├── setup.sh                 # Script de instalação manual
    └── Vagrantfile              # VM reproduzível com Vagrant
```

---

## Como usar este repositório

### Para um novo evento

1. Faz **fork** deste repositório para a tua conta GitHub
2. Clona o repositório para o computador que vais usar no evento
3. Segue a `dinamizador/checklist.md` para preparar a sessão
4. No dia: corre `cd multiplex && npm start` e abre o `presenter.html` no browser

### Para contribuir com melhorias

Consulta o ficheiro [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Licença

Este trabalho está licenciado sob [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](LICENSE).

Podes usar, adaptar e redistribuir livremente, desde que atribuas crédito ao autor original e partilhes nas mesmas condições.

**Autor original:** [Filipe Carneiro](https://github.com/filipecarneiro)
