# WeatherDo

**WeatherDo** é um aplicativo de clima moderno que permite aos usuários pesquisar as condições climáticas atuais e a previsão de 5 dias usando a API OpenWeather. Com base na previsão do tempo, os usuários também podem criar uma lista de tarefas com tags específicas de clima e prioridades.

## Índice

- [Visão Geral](#visão-geral)
- [Recursos](#recursos)
- [Configuração do Frontend](#configuração-do-frontend)
- [Configuração do Backend](#configuração-do-backend)
- [Configuração Docker](#configuração-docker)
- [Scripts](#scripts)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Visão Geral

O WeatherDo consiste em dois componentes principais:

- **Frontend**: Desenvolvido com React, Vite e estilizado com TailwindCSS.
- **Backend**: Construído com Node.js e Express.js para lidar com as requisições da API e fornecer dados meteorológicos.

## Recursos

- Pesquisar dados meteorológicos usando a API OpenWeather.
- Ver condições meteorológicas atuais e a previsão para 5 dias.
- Criar e gerenciar itens de tarefas com base nas condições climáticas, com tags de prioridade.

## Configuração do Frontend

1. **Instalar dependências**:

   ```bash
   cd weatherdo-frontend
   npm install
   ```

2. **Scripts disponíveis**:

   - **Desenvolvimento**: Inicia o servidor de desenvolvimento.

     ```bash
     npm run dev
     ```

   - **Build**: Constrói o projeto para produção.

     ```bash
     npm run build
     ```

   - **Lint**: Executa o ESLint para verificar problemas no código.

     ```bash
     npm run lint
     ```

   - **Preview**: Previsualiza o build de produção localmente.

     ```bash
     npm run preview
     ```

## Configuração do Backend

1. **Instalar dependências**:

   ```bash
   cd weatherdo-backend
   npm install
   ```

2. **Scripts disponíveis**:

   - **Desenvolvimento**: Inicia o servidor backend com recarregamento automático.

     ```bash
     npm run dev
     ```

   - **Produção**: Inicia o servidor backend para produção.

     ```bash
     npm start
     ```

3. O servidor backend será executado na porta **3001** por padrão.

## Configuração Docker

O WeatherDo pode ser executado usando Docker para uma implantação containerizada simples. O aplicativo é composto por dois serviços: `frontend` e `backend`.

### Como construir e executar os containers Docker

- Para construir e executar os serviços, use:

  ```bash
  docker-compose up --build
  ```

- Acesse o frontend em `http://localhost:3000` e o backend em `http://localhost:3001`.

## Scripts

### Scripts do Frontend

- **`dev`**: Executa o frontend em modo de desenvolvimento usando Vite.
- **`build`**: Compila o TypeScript e constrói a versão de produção.
- **`lint`**: Executa o lint do projeto com ESLint.
- **`preview`**: Executa uma visualização local do build de produção.

### Scripts do Backend

- **`dev`**: Executa o servidor backend usando Nodemon para desenvolvimento.
- **`start`**: Inicia o servidor backend para produção.

## Tecnologias Utilizadas

- **Frontend**: React, Vite, TailwindCSS
- **Backend**: Node.js, Express.js
- **API**: OpenWeather API
- **Docker**: Serviços containerizados usando Docker

---

Com o WeatherDo, você pode acompanhar o clima e gerenciar suas tarefas diárias com base na previsão. Aproveite!
