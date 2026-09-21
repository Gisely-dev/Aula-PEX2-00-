# English & Logic — Aula 1

Material da primeira aula de **Inglês + Lógica de Programação** para alunos do 8º ano do Ensino Fundamental.

A proposta é trabalhar os dois conteúdos de forma simples e prática. Primeiro, os alunos entram em contato com palavras e frases básicas em inglês. Depois, a aula apresenta lógica, algoritmos e situações do cotidiano que ajudam a entender como funciona a programação.

## Sobre a aula

O material foi preparado para alunos que estão tendo o primeiro contato com esses assuntos.

A aula principal tem duração de **1h30**, mas também existe uma versão adaptada para **45 minutos**.

O conteúdo foi organizado para começar com atividades mais simples e ir chegando aos conceitos de lógica de programação aos poucos.

## Conteúdo

A página está dividida nas seguintes partes:

- Objetivos da aula
- Inglês básico
- Vocabulário relacionado à tecnologia
- Apresentação pessoal em inglês
- Diálogo em duplas
- Inglês usado na programação
- O que é lógica
- O que é um algoritmo
- Exemplo de algoritmo do cotidiano
- Desafio do robô humano
- Lógica com `SE` e `SENÃO`
- Atividade final
- Desafio para encontrar um bug
- Fechamento da aula
- Tarefa para casa
- Versão de 45 minutos
- Estrutura da próxima aula
- Exercícios de fixação

## Inglês

A primeira parte trabalha palavras e frases que os alunos provavelmente já encontram no dia a dia, como:

- `game`
- `computer`
- `internet`
- `smartphone`
- `mouse`
- `keyboard`
- `password`
- `login`
- `online`
- `code`

Também são apresentadas frases simples para uma primeira apresentação:

```text
Hello!
My name is...
I am...
I am from Brazil.
I am a student.
```

A atividade em duplas usa um diálogo curto para que os alunos pratiquem as frases aprendidas.

## Inglês na tecnologia

Depois do vocabulário inicial, o material apresenta palavras que aparecem com frequência em tecnologia e programação, como:

```text
code
program
developer
website
app
data
user
button
error
save
delete
search
```

A ideia é mostrar que o inglês está presente em várias partes da tecnologia.

## Lógica de programação

Na segunda parte da aula, o conteúdo começa a trabalhar lógica.

A explicação parte de situações conhecidas pelos alunos para mostrar que lógica é organizar ideias e passos para chegar a um resultado.

O material apresenta a seguinte definição:

> Algoritmo é uma sequência de passos para realizar uma tarefa ou resolver um problema.

Um dos exemplos utilizados é o passo a passo para escovar os dentes, mostrando que a ordem das instruções também é importante.

## Desafio do robô humano

Uma das atividades práticas é o **robô humano**.

Um aluno representa o robô e outro precisa dar instruções para que ele chegue até determinado ponto da sala.

Por exemplo:

```text
dê 3 passos para frente
vire para a direita
dê 2 passos
pare
```

O objetivo é mostrar que um computador precisa receber instruções claras e que ele não consegue simplesmente adivinhar o que deve fazer.

## SE / SENÃO

A aula também apresenta uma situação simples usando decisões:

```text
SE estiver chovendo
    pegar o guarda-chuva
SENÃO
    sair normalmente
```

Depois, o mesmo conceito é relacionado à programação:

```text
SE a senha estiver correta
    entrar
SENÃO
    mostrar "senha incorreta"
```

## Atividades

O material possui atividades para serem realizadas durante e depois da aula.

Entre elas estão:

- montar uma apresentação simples em inglês;
- criar um primeiro algoritmo;
- ligar palavras em inglês aos seus significados;
- completar um diálogo;
- responder verdadeiro ou falso;
- organizar os passos de uma atividade;
- criar exemplos usando `SE` e `SENÃO`;
- testar uma lógica de senha;
- encontrar um erro em um algoritmo;
- criar um algoritmo como tarefa de casa.

## Versão de 45 minutos

Também existe uma versão mais curta da aula.

Ela inclui:

- apresentação;
- vídeo sobre saudações em inglês;
- prática de frases em duplas;
- explicação curta sobre algoritmos;
- atividade impressa;
- correção e conversa final.

O cronograma está dividido em blocos de tempo dentro da própria página.

## Próxima aula

O material também apresenta uma prévia da segunda aula:

**Como um computador entende nossas instruções?**

Os assuntos previstos são:

- revisão do inglês;
- comandos básicos;
- algoritmo;
- sequência;
- entrada, processamento e saída;
- exercícios de lógica;
- introdução ao conceito de programação;
- atividade prática em grupo.

## Tecnologias utilizadas

O projeto foi desenvolvido usando:

- HTML5
- CSS3
- JavaScript

Não utiliza framework ou sistema de build.

As fontes utilizadas na página são:

- IBM Plex Mono
- Inter

## Estrutura do projeto

```text
english-logic-aula1/
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contém todo o conteúdo e a estrutura da aula, incluindo as seções, atividades, exercícios, cronograma e links dos vídeos.

### `style.css`

Responsável pelo visual da página.

O arquivo controla cores, fontes, espaçamentos, cards, tabelas, navegação, exercícios, responsividade e os temas claro e escuro.

### `script.js`

Controla a troca entre o modo claro e o modo escuro.

A preferência escolhida fica salva no navegador usando `localStorage`, mantendo o tema selecionado quando a página é acessada novamente.

## Como executar

O projeto não precisa de instalação de dependências.

Basta abrir o arquivo:

```text
index.html
```

diretamente no navegador.

Também é possível utilizar um servidor local. Com Python:

```bash
python3 -m http.server 8000
```

Depois, abra:

```text
http://localhost:8000
```

## GitHub Pages

Como o projeto utiliza arquivos estáticos, ele pode ser publicado pelo GitHub Pages.

Para isso:

1. envie os arquivos para um repositório;
2. abra **Settings**;
3. entre em **Pages**;
4. selecione a branch principal;
5. escolha a pasta `/ (root)`;
6. salve.

O arquivo `index.html` ficará como página inicial do projeto.

## Material complementar

O projeto também pode ser acompanhado por um material em PDF para impressão no drive:

```text
Aula00PEXII.txt
```

Esse arquivo não faz parte dos três arquivos usados para o funcionamento da página, mas pode ser mantido no repositório como material complementar da aula.

## Objetivo

A ideia do material é fazer com que o aluno tenha um primeiro contato com inglês e lógica de programação sem começar diretamente por códigos.

A partir de palavras, situações do cotidiano, atividades e desafios, a aula mostra que organizar instruções, seguir uma sequência e tomar decisões também fazem parte da programação.
