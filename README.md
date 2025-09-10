<h1 align="center">BataComics: Catálogo Interativo</h1>
<p align="center">Checkpoint 1 – WebDev com React</p>

<p align="center">
  <img src="https://img.shields.io/badge/Framework-React-blue.svg" alt="React">
  <img src="https://img.shields.io/badge/Linguagem-TypeScript-informational.svg" alt="TypeScript">
  <img src="https://img.shields.io/badge/Estilização-Tailwind_CSS-06B6D4.svg" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Roteamento-React_Router-CA4245.svg" alt="React Router">
  <img src="https://img.shields.io/badge/Ícones-React_Icons-E91E63.svg" alt="React Icons">
</p>

> `BatComics` é uma Single Page Application (SPA) moderna, imersiva e responsiva, dedicada ao universo dos quadrinhos do Batman. O projeto foi desenvolvido com uma arquitetura robusta em React e TypeScript, e uma interface de usuário visualmente impactante, criada com Tailwind CSS para replicar a atmosfera sombria e tecnológica de Gotham City.

---

### 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🔧 Como Executar](#-como-executar)
- [👤 Autor do Projeto](#-autor-do-projeto)

---

### 📖 Sobre o Projeto

O projeto **BatComics** é a materialização de um catálogo interativo para fãs do Cavaleiro das Trevas. A aplicação foi concebida para ser não apenas funcional, mas também visualmente agradável e fiel à temática, demonstrando a aplicação de bibliotecas modernas para criar uma experiência de usuário de alta qualidade.

O site oferece um catálogo das HQs mais icônicas do Batman, permitindo ao usuário navegar, visualizar detalhes, e interagir com cada item. Ao clicar em um quadrinho, o usuário é levado a uma página de detalhes completa, com sinopse, informações de autoria e um sistema de avaliação e comentários.

O design foi uma prioridade, utilizando uma paleta de cores escura, tipografia expressiva e microinterações para dar vida à interface. O resultado é um produto que se destaca pela sua fluidez e imersão na atmosfera de Gotham.

---

### ✨ Funcionalidades

- **Navegação e Roteamento:** Navegação fluida entre a página principal e os detalhes de cada HQ, gerenciada pelo React Router DOM.
- **Catálogo de HQs:** Exibição de uma lista de quadrinhos em cards elegantes e responsivos.
- **Página de Detalhes:** Ao clicar em um card, uma nova página é aberta com informações detalhadas, incluindo sinopse, autor e artista.
- **Sistema de Avaliação:** Os usuários podem adicionar uma avaliação por estrelas e um comentário para cada HQ.
- **Interatividade nos Cards:** Cada card possui um botão para "Marcar como Lido", que altera visualmente o estado do card.
- **Páginas Adicionais:** Inclui páginas "Sobre" e "Contato" para uma experiência de site mais completa.
- **Design Moderno e Temático:** Interface de usuário construída com **Tailwind CSS**, com animações e transições para uma experiência premium e imersiva.

---

### 🚀 Tecnologias Utilizadas

| Categoria | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Front-end** | **React** | Biblioteca principal para a construção da interface. |
| | **TypeScript**| Linguagem de programação para tipagem estática do código. |
| | **Vite** | Ferramenta de build para um ambiente de desenvolvimento rápido e otimizado. |
| | **React Router DOM**| Gerenciamento de roteamento e navegação entre as páginas. |
| | **Tailwind CSS** | Framework de CSS utility-first para estilização rápida e responsiva. |
| | **React Icons** | Biblioteca para a inclusão de ícones modernos e personalizáveis. |
| **Dados** | **(Estático)** | Os dados das HQs são servidos a partir de um arquivo local (`data.ts`) para simplicidade. |

---

### 📁 Estrutura do Projeto

O projeto está organizado de forma modular para facilitar a manutenção e o desenvolvimento.

```
BatComics/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── ComicCard.tsx
│   │   ├── ComicList.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── Navbar.tsx
│   ├── pages/
│   │   ├── ComicDetails.tsx
│   │   ├── Contato.tsx
│   │   ├── Home.tsx
│   │   └── Sobre.tsx
│   ├── types.ts
│   ├── data.ts
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.cjs
├── postcss.config.cjs
├── package.json
└── README.md
```
---

### 🔧 Como Executar

Para rodar o projeto localmente, siga os passos abaixo.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/TLean07/CP1WEB2.git](https://github.com/TLean07/CP1WEB2.git)
    cd BatComics
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

---

### 👥 Autores do Projeto

| Nome | RM | GitHub |
| :--- | :--- | :--- |
| Leandro Afonso Silva Santos Júnior | 561344 | [TLean07](https://github.com/TLean07) |
| Guilherme Barone Milani | 562114 | [GuilhermeBM3012](https://github.com/GuilhermeBM3012) |
| Luigi Escudero Grigoletto | 562505 | [Lueg2007](https://github.com/Lueg2007) |

