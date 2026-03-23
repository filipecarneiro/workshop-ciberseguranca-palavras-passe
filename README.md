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

## Apresentação com Reveal.js + PeerJS

A apresentação usa **Reveal.js** com sincronização via **PeerJS** (WebRTC P2P). O dinamizador controla os slides e todos os alunos vêem o mesmo ecrã em tempo real.

### Ficheiros principais

| Ficheiro | Quem abre | Para quê |
|---|---|---|
| `index.html` | **Alunos** — link público | Slides sincronizados automaticamente |
| `apresentador/index.html` | **Dinamizador** | Slides com controlo + notas de apresentador (prima **S**) |

### Fluxo de utilização

```
1. O dinamizador abre apresentador/index.html → a apresentação inicia e fica à espera de ligações
2. Os alunos acedem à raiz (index.html) → os slides sincronizam automaticamente
```

A sincronização usa WebRTC (ligação direta entre browsers). Funciona de duas formas:

- **GitHub Pages** — usa o servidor cloud PeerJS (sem nada a instalar)
- **Localmente** — corre `npm start` para ter um servidor PeerJS local (mais fiável)

### Ativar o GitHub Pages

Para partilhar os slides online (funciona como fallback, mas depende do servidor cloud PeerJS):

1. Vai a **Settings → Pages** no repositório
2. Em *Source*, escolhe **Deploy from a branch** → `main` → `/ (root)`
3. O link dos alunos fica em:

```
https://<teu-username>.github.io/workshop-ciberseguranca-palavras-passe/
```

O dinamizador abre `apresentador/index.html` a partir de GitHub Pages ou localmente.

### Modo local (recomendado para o workshop)

O servidor cloud PeerJS pode ser instável. Para garantir a sincronização no dia do evento, corre um servidor local:

```bash
npm install   # só na primeira vez
npm start
```

O terminal mostra os links para o apresentador e para os alunos (IP local da rede).
Os alunos acedem ao IP mostrado no terminal em vez do GitHub Pages.

---

## Estrutura do repositório

```
workshop-ciberseguranca-palavras-passe/
│
├── README.md                    # Este ficheiro
├── LICENSE                      # Licença CC BY-SA 4.0
├── CONTRIBUTING.md              # Como contribuir
│
├── index.html                   # Slides dos alunos (Reveal.js + PeerJS follower)
│
├── server.js                    # Servidor local: ficheiros estáticos + PeerJS signaling
├── package.json                 # Dependências do servidor local
│
├── apresentador/
│   ├── index.html               # Slides do dinamizador (Reveal.js + PeerJS master + notas)
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
3. Corre `npm install` para instalar as dependências
4. Segue a `apresentador/checklist.md` para preparar a sessão
5. No dia: corre `npm start` e abre o link do apresentador mostrado no terminal

### Para contribuir com melhorias

Consulta o ficheiro [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Licença

Este trabalho está licenciado sob [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](LICENSE).

Podes usar, adaptar e redistribuir livremente, desde que atribuas crédito ao autor original e partilhes nas mesmas condições.

**Autor original:** [Filipe Carneiro](https://github.com/filipecarneiro)
