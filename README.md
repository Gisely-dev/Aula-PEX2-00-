# English & Logic — Aula 1

Material da primeira aula de **Inglês + Lógica de Programação** para alunos do 8º ano do Ensino Fundamental.

A aula foi montada para trabalhar inglês básico e, ao mesmo tempo, apresentar os primeiros conceitos de lógica de programação. A ideia é mostrar que programação não começa apenas com código, mas também com a capacidade de organizar pensamentos e resolver problemas passo a passo.

**Demo:** https://claude.ai/artifact/A1ws2vSvKbwbDc9Pe3K9pT

## Sobre o projeto

Este repositório reúne o material utilizado na primeira aula do curso.

O conteúdo começa com uma parte de inglês, passando por apresentações pessoais, vocabulário básico e algumas palavras comuns na área de tecnologia. Depois, a aula entra na parte de lógica, explicando o que é um algoritmo e como usamos decisões e sequências de passos no nosso dia a dia.

Também foram incluídas atividades para os alunos participarem durante a aula, como o desafio do robô humano e exercícios para identificar problemas em algoritmos.

O material foi planejado para uma aula de **1h30**, mas existe uma versão adaptada para **45 minutos**.

## O que tem na página

- Objetivos da aula
- Vocabulário básico de inglês
- Apresentação pessoal
- Diálogo em duplas
- Inglês usado na tecnologia
- Introdução à lógica de programação
- Conceito de algoritmo
- Desafio do robô humano
- Exemplos de lógica no cotidiano
- Estruturas de `SE` e `SENÃO`
- Atividade para os alunos
- Desafio para encontrar um bug em um algoritmo
- Exercícios de fixação
- Tarefa de casa
- Fechamento da aula
- Versão de 45 minutos
- Sugestões de vídeos
- Cronograma da aula
- Prévia da próxima aula

## Tecnologias

O projeto foi feito de forma simples, usando apenas:

- HTML
- CSS
- JavaScript

Também foram utilizadas as fontes **IBM Plex Mono** e **Inter**, disponíveis pelo Google Fonts.

Não existe framework ou processo de build. Os arquivos podem ser abertos diretamente no navegador.

## Estrutura do projeto

```text
english-logic-aula1/
├── index.html
├── style.css
├── script.js
└── README.md
```

### index.html

É onde ficam a estrutura e o conteúdo da aula.

Cada parte do material fica organizada em uma seção diferente para facilitar a edição.

### style.css

Cuida da parte visual da página, como fontes, cores, espaçamentos, navegação e responsividade.

As cores principais ficam em variáveis no começo do arquivo, então é possível mudar a aparência do projeto sem precisar procurar os valores pelo código inteiro.

### script.js

Contém o JavaScript da página.

Ele é usado principalmente para fazer a troca entre o tema claro e o escuro. A escolha do usuário também fica salva no navegador usando `localStorage`.

## Como rodar

Não precisa instalar nenhuma dependência.

Basta abrir o arquivo `index.html` no navegador.

Se quiser testar usando um servidor local, pode usar o Python:

```bash
python3 -m http.server 8000
```

Depois, acesse:

```text
http://localhost:8000
```

## Publicar no GitHub Pages

Para colocar o projeto no GitHub Pages:

1. Crie ou use um repositório no GitHub.
2. Envie os arquivos do projeto para o repositório.
3. Entre em **Settings**.
4. Acesse **Pages**.
5. Em **Build and deployment**, selecione a branch principal.
6. Escolha a pasta `/ (root)`.
7. Salve.

Como o `index.html` está na raiz do projeto, ele será usado como página inicial.

O endereço ficará parecido com:

```text
https://seu-usuario.github.io/nome-do-repositorio/
```

## Personalizando

O material pode ser adaptado para diferentes turmas e tempos de aula.

### Cores

As cores ficam nas variáveis do `style.css`.

### Textos e atividades

O conteúdo da aula está no `index.html`. É possível alterar os exemplos, perguntas, exercícios e explicações diretamente no arquivo.

### Vídeos

Os vídeos da versão de 45 minutos ficam na seção correspondente dentro do `index.html`.

### Tema claro e escuro

O botão no topo da página permite trocar entre os dois temas.

A escolha é salva no navegador com `localStorage`.

## Material complementar

Também existe uma versão em PDF para acompanhar a aula:

```text
Aula1_English_Logic_Material_de_Estudo.pdf
```

O arquivo reúne o conteúdo, exemplos e exercícios utilizados no material online.

## Objetivo da aula

A proposta é apresentar inglês e lógica de programação de uma maneira mais próxima da realidade dos alunos.

Antes de começar a escrever códigos, eles entram em contato com uma ideia básica da programação: **um problema pode ser dividido em etapas e resolvido seguindo uma sequência de instruções**.

A partir disso, situações simples do cotidiano são usadas para explicar conceitos que depois serão utilizados na programação.
