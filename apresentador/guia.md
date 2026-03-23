# Guia do Dinamizador

Este documento é o script completo da sessão, bloco a bloco. As notas de apresentador estão incorporadas nos slides — prime **S** no `presenter.html` para as ver. Lê este guia com antecedência e familiariza-te com cada transição.

---

## Visão geral

| Bloco | Duração | Tipo |
|---|---|---|
| Quebra-gelo: "Qual é a tua palavra-passe?" | 10 min | Debate |
| Como funcionam as palavras-passe | 15 min | Exposição |
| Demonstração: força bruta ao vivo | 15 min | Demonstração |
| Exercício: haveibeenpwned + análise | 20 min | Prático individual |
| Boas práticas + gestores de palavras-passe | 20 min | Interativo |
| Mini-desafio final | 15 min | Competição |
| Conclusão + perguntas | 5 min | Debate |

---

## Bloco 1: Quebra-gelo (10 min)

**Objetivo:** criar empatia e contexto imediato sem expor ninguém.

Antes de começar, projeta o Mentimeter no ecrã (URL na tua conta Mentimeter) e pede aos alunos que acedam pelo telemóvel ou computador.

Pergunta anónima: *"Qual é o tipo de palavra-passe que usas?"*
- Data de aniversário
- Nome do animal de estimação
- Sequência numérica (ex: 123456)
- Nome de uma pessoa
- Palavra aleatória
- Outra

Mostra os resultados em tempo real e comenta. Depois pergunta (não no Mentimeter, abertamente): *"Usas a mesma palavra-passe em mais do que um sítio?"*

Normalmente a maioria responde que sim. É o gancho perfeito para o bloco seguinte.

---

## Bloco 2: Como funcionam as palavras-passe (15 min)

**Objetivo:** desmistificar o que acontece "por baixo" quando fazemos início de sessão.

Pontos a cobrir:

1. **O servidor nunca guarda a tua palavra-passe em claro.**
   Quando crias uma conta num site, a tua palavra-passe é transformada antes de ser guardada.

2. **O que é um hash.**
   Usa a analogia do triturador de papel: metes um documento, sai papel picado — não há forma de recompor o original. O hash funciona assim: a palavra-passe entra, sai uma sequência de letras e números. Se mudares uma única letra da palavra-passe, o hash muda completamente.
   
   Mostra ao vivo: abre um terminal e gera o hash de `password123` e de `password124`.
   ```bash
   echo -n "password123" | md5sum
   echo -n "password124" | md5sum
   ```

3. **O que é uma fuga de dados.**
   Bases de dados de serviços online são roubadas por atacantes. O que fica exposto são os hashes, não as palavras-passe. Mas se o hash for fraco, pode ser revertido.

4. **O caso RockYou (2009).**
   Uma empresa teve a base de dados roubada com 32 milhões de utilizadores — as palavras-passe estavam guardadas em claro. A lista tornou-se o conjunto de dados mais usado em ataques de força bruta até hoje.

5. **Rainbow tables vs. salting.**
   Explica brevemente: rainbow tables são tabelas pré-calculadas de hashes. O "sal" é um valor aleatório adicionado antes de fazer o hash, que inutiliza essas tabelas.

---

## Bloco 3: Demonstração — força bruta ao vivo (15 min)

**Objetivo:** mostrar que quebrar palavras-passe fracas é trivial com ferramentas disponíveis gratuitamente.

Usa o `hashcat` na VM (ver `vm/README.md`) com a lista de palavras RockYou:

```bash
hashcat -m 0 -a 0 hashes.txt rockyou.txt
```

Mostra a quebrar ao vivo: `123456`, `password`, `filipe2008`.

Compara os tempos:
- `123456` — quebrada em menos de 1 segundo
- `filipe2008` — pode demorar alguns segundos a minutos
- `cavalo-bateria-grampo-correta` — apresenta o tempo estimado (anos ou séculos)

Alternativa sem VM: usa [crackstation.net](https://crackstation.net) para colar um hash e mostrar que é quebrado instantaneamente.

Ferramenta visual para os alunos explorarem: [howsecureismypassword.net](https://howsecureismypassword.net)

---

## Bloco 4: Exercício prático — haveibeenpwned (20 min)

**Objetivo:** cada aluno descobre, em tempo real, se os seus dados já foram expostos.

Instrução: cada aluno acede a [haveibeenpwned.com](https://haveibeenpwned.com) e verifica o próprio endereço de e-mail.

Perguntam que analisem:
- Quantas fugas de dados existem?
- Que serviços foram comprometidos?
- Que tipo de dados foram expostos (palavras-passe, moradas, números de telefone)?

No separador *Passwords*, cada aluno verifica se alguma palavra-passe conhecida sua já aparece na lista.

**Discussão em grupo (5 min no fim do bloco):**
*"O que fazias a seguir se descobrisses que estás comprometido?"*

Guiar para:
1. Revogar sessões ativas (sair em todos os dispositivos)
2. Alterar as palavras-passe nos serviços afetados
3. Ativar autenticação em dois passos (MFA)
4. Alertar contactos próximos, se aplicável

---

## Bloco 5: Boas práticas + gestores de palavras-passe (20 min)

### Frases-passe

4 palavras aleatórias são mais seguras do que uma palavra-passe complexa e curta, e muito mais fáceis de memorizar.

Exemplo: `cavalo-bateria-grampo-correta`

Referência visual: [XKCD 936](https://xkcd.com/936/) — mostra no ecrã.

### Autenticação Multi-Fator (MFA)

| Tipo | Exemplo | Nota |
|---|---|---|
| SMS | Código por mensagem | Fraco (vulnerável a SIM swapping) |
| TOTP | Google Authenticator, Aegis | Boa opção gratuita |
| Chave física | YubiKey | O mais seguro |

Se tiveres uma YubiKey, mostra-a fisicamente — desperta curiosidade.

Pergunta chave: *"Mesmo que alguém descubra a tua palavra-passe, consegue entrar na tua conta?"*  
Com MFA ativo: não.

### Gestores de palavras-passe

Demonstra o **Bitwarden** (gratuito, código aberto):
- Como funciona o cofre
- Como gera palavras-passe aleatórias fortes
- Porque é mais seguro do que reutilizar palavras-passe

Pergunta provocadora: *"É seguro confiar todas as palavras-passe a uma aplicação?"*  
Debate o compromisso: um gestor com uma palavra-passe mestra forte e MFA é muito mais seguro do que reutilizar palavras-passe fracas em todos os serviços.

### Passkeys (menção breve)

O futuro da autenticação — sem palavra-passe. Já disponível no Google, Apple e Microsoft. Usa um par de chaves criptográficas em vez de uma palavra secreta partilhada com o servidor.

---

## Bloco 6: Mini-desafio final (15 min)

**Objetivo:** os alunos experienciam o papel do atacante, de forma controlada e pedagógica.

Divide os participantes em equipas (recomendado: 3 equipas de 5–6 elementos).

Distribui a cada equipa o ficheiro de hashes correspondente (ver pasta `desafio/`):
- Equipa A: `hashes-equipa-A.txt` (palavras-passe mais fáceis)
- Equipa B: `hashes-equipa-B.txt` (dificuldade média)
- Equipa C: `hashes-equipa-C.txt` (ligeiramente mais difícil)

As equipas têm **10 minutos** para quebrar o maior número de palavras-passe usando [crackstation.net](https://crackstation.net) ou hashcat na VM.

Nos últimos **5 minutos**, revela as soluções (ficheiro `desafio/solucoes.md`) e discute porque cada palavra-passe era fraca.

A equipa com mais palavras-passe descobertas ganha.

---

## Bloco 7: Conclusão (5 min)

**3 pontos-chave para levar para casa:**

1. Usa uma frase-passe diferente em cada serviço importante
2. Ativa a autenticação em dois passos no e-mail, banco e redes sociais — hoje, não amanhã
3. Instala um gestor de palavras-passe

Abre para perguntas. Se não houver, lança uma questão: *"O que vos surpreendeu mais nesta sessão?"*
