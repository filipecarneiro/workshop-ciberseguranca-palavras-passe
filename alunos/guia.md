# Guia do Participante

**Workshop: Hoje Vais Ser um Hacker**  
*Sessão de cibersegurança — palavras-passe e autenticação*

Bem-vindo a esta sessão de cibersegurança. Neste workshop vais perceber como os atacantes conseguem descobrir palavras-passe, e o mais importante: como te podes defender.

Os slides da apresentação avançam automaticamente no teu ecrã — segue-os em tempo real. Nos momentos de trabalho autónomo, usa este guia como referência.

---

## Parte 1 — A tua palavra-passe já foi roubada?

1. Abre o browser e vai a [haveibeenpwned.com](https://haveibeenpwned.com)
2. Escreve o teu endereço de e-mail (ou um e-mail que tenhas criado para testar)
3. Observa os resultados:
   - **Verde** — não há registos de fugas de dados com esse e-mail
   - **Vermelho** — esse e-mail apareceu em pelo menos uma fuga de dados
4. Clica em cada fuga de dados para ver que informação foi exposta

**Responde (para ti mesmo):**
- Algum dos sites afetados é um site que ainda usas?
- Mudaste a palavra-passe entretanto?

---

## Parte 2 — Quão rápido é quebrar uma palavra-passe?

1. Vai a [howsecureismypassword.net](https://www.security.org/how-secure-is-my-password/)
2. Testa as seguintes palavras-passe (escreve o tempo estimado ao lado de cada uma):

| Palavra-passe | Tempo estimado |
|---|---|
| `123456` | |
| `password` | |
| `Carros2024` | |
| `Tr$7!vkQ#2` | |
| `rio livro cavalo nuvem` | |

3. Qual foi a que demorou mais? Porquê?

---

## Parte 3 — O desafio das hashes

O dinamizador vai distribuir à tua equipa um ficheiro `.txt` com 5 hashes MD5.

Cada hash é uma palavra-passe comum que foi processada por uma função de hash. O teu objetivo é descobrir a palavra-passe original.

### Método 1 — Usando o CrackStation

1. Vai a [crackstation.net](https://crackstation.net)
2. Copia e cola as hashes da tua equipa (uma por linha) na caixa de texto
3. Resolve o captcha e clica em **Crack Hashes**
4. Anota os resultados

### Método 2 — Usando o hashcat (na VM)

Se tens a máquina virtual configurada, podes também usar o hashcat com o dicionário RockYou:

```
hashcat -m 0 -a 0 hashes-equipa-X.txt /usr/share/wordlists/rockyou.txt
```

Substitui `X` pela letra da tua equipa (A, B ou C).

**Atenção:** Não partilhes as soluções com as outras equipas antes do tempo ser dado!

---

## Parte 4 — Cria uma palavra-passe forte

Um bom método para criar palavras-passe fortes e memoráveis é a **frase-passe**: escolhe 4 ou 5 palavras aleatórias e junta-as.

Experimenta em [diceware.dmuth.org](https://diceware.dmuth.org/) ou gera palavras aleatórias mentalmente e verifica a resistência em [howsecureismypassword.net](https://www.security.org/how-secure-is-my-password/).

Exemplos:
- `rio livro cavalo nuvem` — extremamente difícil de quebrar, fácil de memorizar
- `Tr$7!vkQ#2plmK` — difícil de quebrar, impossível de memorizar

**Qual preferes usar no dia a dia?**

---

## Parte 5 — Experimenta um gestor de palavras-passe

1. Vai a [bitwarden.com](https://bitwarden.com)
2. Cria uma conta gratuita (podes usar um e-mail temporário como [temp-mail.org](https://temp-mail.org) se preferires)
3. Explora o gerador de palavras-passe integrado:
   - Gerador → Palavra-passe
   - Experimenta os diferentes comprimentos e tipos de caracteres
4. Observa como é impossível memorizar essas palavras-passe — e percebe por que é que um gestor é necessário

---

## Parte 6 — Liga o segundo fator de autenticação

Se tens conta no GitHub, Google, ou outro serviço, segue estes passos para ativar o MFA:

**GitHub:**
Definições → Segurança → Autenticação de dois fatores → Ativar

**Google:**
Conta Google → Segurança → Verificação em dois passos → Começar

A opção mais segura é usar uma aplicação de autenticação (como o **Aegis** para Android ou o **Raivo** para iOS) em vez de SMS.

---

## Resumo — O que levas daqui

- As palavras-passe comuns são quebradas em segundos
- As tuas credenciais podem já ter sido expostas (verifica no haveibeenpwned)
- Uma frase-passe forte é melhor do que uma palavra-passe complicada impossível de memorizar
- Um gestor de palavras-passe resolve o problema de ter palavras-passe únicas e fortes em todos os sites
- O segundo fator de autenticação é a melhor proteção adicional que podes ativar hoje
