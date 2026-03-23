# Notas e Dicas para o Dinamizador

---

## Gestão do tempo

O maior risco é o bloco 4 (exercício prático) demorar mais do que o previsto — os alunos ficam presos a explorar o haveibeenpwned e perdem a noção do tempo. Anuncia o tempo restante aos 15 minutos e aos 5 minutos.

Se estiveres adiantado, podes expandir a discussão do bloco 5 (gestores de palavras-passe) ou abrir mais tempo para perguntas no final.

Se estiveres atrasado, encurta o bloco 5 e mantém o mini-desafio final — é o momento de maior envolvimento e não deve ser sacrificado.

---

## Perguntas frequentes dos alunos

**"É ilegal fazer isto?"**
No contexto deste workshop, estás a trabalhar com hashes que foram gerados propositadamente para o exercício, em computadores que são teus ou que tens autorização para usar. Usar estas ferramentas em sistemas de terceiros sem autorização é ilegal. A distinção é importante e vale a pena sublinhar.

**"Como é que os hackers obtêm as bases de dados?"**
Através de vulnerabilidades em aplicações web (injeção de SQL, por exemplo), credenciais roubadas de administradores, ou servidores mal configurados. Não é necessário entrar em detalhe — o importante é que acontece, é mais comum do que se pensa, e o RockYou é prova disso.

**"O meu antivírus vai alertar se eu usar o hashcat?"**
Possivelmente. Alguns antivírus sinalizam ferramentas de segurança ofensiva. É uma boa oportunidade para explicar a diferença entre uma ferramenta e a intenção com que é usada.

**"O Bitwarden é mesmo seguro? E se hackearem o Bitwarden?"**
O Bitwarden é código aberto — qualquer pessoa pode auditar o código. O cofre é cifrado localmente antes de ser enviado para os servidores, o que significa que mesmo que os servidores sejam comprometidos, os dados ficam ilegíveis. Em 2023, o LastPass (concorrente) sofreu uma fuga de dados grave, precisamente porque a sua arquitetura era diferente.

**"O que são passkeys exatamente?"**
Em vez de uma palavra-passe (um segredo que conheces), usas um par de chaves criptográficas: uma chave pública (no servidor) e uma chave privada (no teu dispositivo). Para autenticares, o dispositivo prova que tem a chave privada sem nunca a revelar. É semelhante ao SSH para quem conhece.

---

## Dicas para manter o grupo envolvido

- **Usa nomes reais** nas demonstrações (ex: `filipe2008` como palavra-passe fraca) — cria imersão e humor pedagógico
- **Faz perguntas abertas** antes de dar a resposta — "O que acham que acontece se eu mudar uma letra?"
- **Celebra as equipas** no desafio final, mesmo as que encontraram menos palavras-passe — o objetivo é aprender, não ganhar
- **Não te importes se alguém já souber** algumas coisas — pede-lhe que explique ao grupo, transforma esse aluno em co-dinamizador

---

## Se a internet falhar

- O `hashcat` na VM funciona sem internet — a demonstração de força bruta pode continuar
- O desafio final com [crackstation.net](https://crackstation.net) pode ser substituído por hashcat localmente
- O exercício do haveibeenpwned não pode ser feito sem internet — substitui por uma discussão sobre fugas de dados conhecidas (RockYou, Adobe, LinkedIn)
- O Mentimeter não funciona sem internet — abre a discussão verbalmente e pede levantar o braço

---

## Sugestões de adaptação

**Para sessões mais curtas (50–60 min):**
Mantém os blocos 1, 3, 4 e 6. Reduz o bloco 2 a 5 minutos de explicação visual e elimina o bloco 5.

**Para público mais jovem (menos de 15 anos):**
Simplifica o bloco 2 — foca apenas na analogia do triturador de papel e no conceito de fuga de dados. Elimina os detalhes técnicos de hashing.

**Para público mais técnico:**
Podes expandir o bloco 2 com salting e bcrypt, e adicionar um exercício de geração de hashes no terminal.
