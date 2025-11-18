# Portfolio DevEdu - React

Portfolio pessoal convertido para React com Vite.

## 🚀 Como executar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para produção

```bash
npm run build
```

### Preview do build

```bash
npm run preview
```

## 📁 Estrutura do Projeto (Atomic Design)

```
portfolio-edudev/
├── public/
│   ├── assets/          # Imagens e favicon
│   └── static/          # Arquivos estáticos (PDFs)
├── src/
│   ├── components/      # Componentes organizados por Atomic Design
│   │   ├── atoms/       # Componentes básicos e indivisíveis
│   │   │   ├── Button/  # index.js + styles.js
│   │   │   ├── Tag/     # index.js + styles.js
│   │   │   ├── Title/   # index.js + styles.js
│   │   │   ├── Text/    # index.js + styles.js
│   │   │   ├── Logo/    # index.js + styles.js
│   │   │   └── Icon/    # index.js + styles.js
│   │   ├── molecules/   # Combinação de atoms
│   │   │   ├── NavLink/      # index.js + styles.js
│   │   │   ├── SocialLink/   # index.js + styles.js
│   │   │   ├── IconLink/     # index.js + styles.js
│   │   │   ├── TagsList/     # index.js + styles.js
│   │   │   ├── ProjectImage/ # index.js + styles.js
│   │   │   └── ProjectCard/  # index.js + styles.js
│   │   └── organisms/   # Componentes complexos
│   │       ├── Header/       # index.js + styles.js
│   │       ├── Footer/       # index.js + styles.js
│   │       ├── HeroSection/  # index.js + styles.js
│   │       ├── AboutSection/ # index.js + styles.js
│   │       └── ProjectsGrid/ # index.js + styles.js
│   ├── templates/       # Templates de páginas
│   │   ├── HomePage/    # index.js
│   │   ├── AboutPage/   # index.js
│   │   └── ProjectsPage/# index.js
│   ├── data/            # Dados estáticos
│   │   └── projects.js
│   ├── styles/          # Estilos e tema
│   │   ├── GlobalStyle.js # Estilos globais
│   │   └── theme.js     # Tema centralizado
│   ├── hooks/           # Custom hooks
│   │   └── useTypeEffect.js
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Entry point
├── package.json
└── vite.config.js
```

## 🛠️ Tecnologias

- React 18
- React Router DOM
- Vite
- Styled Components
- Remix Icon
- Atomic Design (estrutura de componentes)

## 🏗️ Arquitetura

Este projeto utiliza **Atomic Design** para organização de componentes:

- **Atoms**: Componentes básicos e indivisíveis (Button, Tag, Title, etc.)
- **Molecules**: Combinação de atoms (NavLink, ProjectCard, etc.)
- **Organisms**: Componentes complexos (Header, Footer, ProjectsGrid)
- **Templates**: Páginas da aplicação (HomePage, AboutPage, ProjectsPage)

Cada componente segue o padrão:
- `index.js` - Componente principal
- `styles.js` - Estilos com styled-components

## 📝 Notas

- Os assets devem estar na pasta `public/assets/`
- O arquivo PDF do currículo deve estar em `public/static/`
- As rotas são: `/` (Home), `/about` (Sobre), `/projects` (Projetos)

## 🔄 Migração dos Assets

**IMPORTANTE**: Antes de executar o projeto, você precisa mover os arquivos:

1. Mova todos os arquivos de `assets/` para `public/assets/`
2. Mova todos os arquivos de `static/` para `public/static/`

Você pode usar os comandos PowerShell:

```powershell
# Mover assets
Move-Item -Path assets\* -Destination public\assets\ -Force

# Mover static  
Move-Item -Path static\* -Destination public\static\ -Force
```

Veja mais detalhes em `MIGRATION.md`

