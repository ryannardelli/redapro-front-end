
# RedaPro (Front-end) — Plataforma de Correção de Redações

Interface moderna desenvolvida com React, Vite, TypeScript e TailwindCSS, conectada à API da plataforma de correção de redações.

## Tecnologias Utilizadas
- React — Biblioteca principal de UI
- Vite — Bundler rápido e leve
- TypeScript — Tipagem estática para maior segurança
- TailwindCSS — Estilização baseada em utility classes

## Estrutura inicial do projeto
  ```bash
📁 src/
 ┣ 📁 components/      → Componentes reutilizáveis
 ┣ 📁 pages/           → Páginas / telas do sistema
 ┣ 📁 hooks/           → Hooks customizados
 ┣ 📁 services/        → Serviços (APIs, Axios, configs)
 ┣ 📁 providers/       → Context API (Providers globais)
 ┣ 📁 reducers/        → Reducers da Context API
 ┣ 📁 models/          → Tipagens e interfaces globais (Types & Interfaces)
 ┣ 📁 adapters/        → Adapters para transformar dados entre camadas
 ┣ 📁 router/          → Configuração de rotas (React Router)
 ┣ 📁 templates/       → Layouts / estruturas base de UI
 ┣ 📁 utils/           → Funções utilitárias e helpers
 ┣ main.tsx            → Arquivo principal de inicialização
 ┗ App.tsx             → Configuração principal de rotas e layout
   ```

## Padrão de Commits (Conventional Commits)
Este projeto segue o padrão Conventional Commits para manter um histórico organizado, automatizar changelogs e facilitar releases.

### Tipos de Commits Suportados
- feat - nova funcionalidade
- fix: correção de bug
- docs: Alterações na documentação.
- style: Alterações de formatação, espaçamento, ponto e vírgula, sem alterar código.
- refactor: Refatoração do código, sem adicionar funcionalidade nem corrigir bug.
- perf: Alterações que melhoram performance.
- test: Adição ou alteração de testes.
- chore: Tarefas de manutenção, scripts, builds, deps, etc.
- ci: Integração contínua
### Relacionamento com Issues (fixes, closes, resolves)
#### Fechar issue automaticamente
  ```bash
closes #12
   ```
#### Resolver issue
  ```bash
resolves #87
   ```
#### Relacionar múltiplas issues
  ```bash
fixes #3 #5 closes #9
   ```

## Como iniciar o projeto
### 1. Clone o repositório
  ```bash
git clone https://github.com/ryannardelli/redapro-front-end.git
   ```

### 2. Navegue até o diretório
  ```bash
cd front-end-redapro
   ```
### 3. Instale as dependências
  ```bash
npm install
   ```

### 4. Execute em modo desenvolvimento
  ```bash
npm run dev
   ```
