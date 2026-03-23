# Portfólio Gabriel Medeiros

Aplicação de portfólio pessoal desenvolvida com Angular (standalone components), apresentando perfil, experiência, projetos, habilidades e contatos.

## 📌 Visão geral

- Projeto tipo "one-page" (single-page application) para apresentação pessoal.
- Dados dinâmicos em `src/app/services/portfolio.service.ts`.
- Uso de Angular Material para componentes visuais (botões, ícones, ripples, chips).
- Responsividade para desktop e mobile.

## 📚 Conteúdo

1. [Instalação](#-instalação)
2. [Execução](#-execução)
3. [Build](#-build)
4. [Estrutura](#-estrutura)
5. [Componentes](#-componentes)
6. [Dados de serviço](#-dados-de-serviço)
7. [Estilização](#-estilização)
8. [Lista de melhorias](#-lista-de-melhorias)

## 🚀 Instalação

Pré-requisitos:
- Node.js (v18+ recomendado)
- npm (v9+ recomendado)

```bash
git clone <URL_DO_REPOSITÓRIO>
cd portifolio-gabriel
npm install
```

## ▶️ Execução local

```bash
npm start
```

Acesse `http://localhost:4200`.

## 🏗️ Build de produção

```bash
npm run build
```

Saída: `dist/portifolio-gabriel`.

## 🗂️ Estrutura do projeto

- `src/app/app.component.ts` - componente principal que importa todos os standalone components.
- `src/app/components/` - componentes de UI:
  - `navbar`, `hero`, `experience`, `projects`, `skills`, `about`, `contact`.
- `src/app/models/portfolio.models.ts` - tipos/objetos de dados (Experience, Project, SkillGroup, ContactItem, etc.).
- `src/app/services/portfolio.service.ts` - fornece dados estáticos para todas as sections.
- `src/assets/` - imagens, ícones para skills e PDFs.

## 🧩 Componentes principais

### Navbar
- Links para as seções: sobre, experiência, projetos, skills, contato.
- Scroll suave via `scrollIntoView`.

### Hero
- Texto dinâmico (efeito typing)
- CTA (download de CV)

### About
- Introdução
- Estatísticas e formação
- Botão "Baixar Currículo" com estilo moderno.

### Experience
- Lista de experiências com descrição, tags e chips.

### Projects
- Cards de projeto com imagem, nome, descrição, tags e botão abrir.

### Skills
- Grupo de skills com ícones SVG de `assets/icons`
- Cartões responsivos.

### Contact
- Lista de contatos com ação de clique (whatsapp, email, linkedin, github)
- Informações atualizadas em `portfolio.service`.

## 💾 Dados de serviço (atualizado)

`src/app/services/portfolio.service.ts` contém funções:
- `getExperiences()`
- `getProjects()`
- `getSkillGroups()`
- `getStats()`
- `getEducation()`
- `getContacts()`

Mantenha as URLs de imagem e PDF consistentes (sem espaços em nomes de arquivo para evitar 404s).

## 🎨 Estilização

- SCSS centralizado em cada componente (`component.scss`).
- Cores e variáveis globais em cada arquivo de componente.
- Responsividade via media queries (max-width: 900px).

## ✅ Melhorias aplicadas durante este trabalho

- Convertido todos os componentes para `standalone: true` + `styleUrls`.
- Correção de imports Angular e Material (CommonModule, MatIconModule, etc.).
- Ajustes de texto, formato e conteúdo (bullet strings, traduções, correções semânticas).
- Importação de ícones `assets/icons/*` para as skills.
- Botão de contato e download de CV com estilo, hover e fácil clique.
- Inclusão ou correção de link para WhatsApp: `https://api.whatsapp.com/send?phone=5583996704167`.

## 🚀 Sugestões de evoluções

- Implementar i18n para inglês e português.
- Adicionar testes unitários e e2e para validações de fluxo.
- Disponibilizar dark mode.
- Refatorar `PortfolioService` para buscar dados via API em vez de hardcoded.

