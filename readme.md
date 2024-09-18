# WeatherDo

**WeatherDo** é um aplicativo moderno de clima que permite aos usuários consultar as condições climáticas atuais e a previsão de 5 dias usando a API OpenWeather. Com base nas previsões do tempo, os usuários também podem criar uma lista de tarefas com tags específicas de clima e prioridades.

## Índice

- [Visão Geral](#visão-geral)
- [Recursos](#recursos)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Configuração do .env](#configuração-do-env)
- [Com Docker](#com-docker)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Visão Geral

WeatherDo consiste em dois componentes principais:

- **Frontend**: Desenvolvido com React, Vite e estilizado com TailwindCSS.
- **Backend**: Construído com Node.js e Express.js para lidar com requisições de API e fornecer dados meteorológicos.

## Recursos

- Pesquisar dados meteorológicos usando a API OpenWeather.
- Ver condições meteorológicas atuais e a previsão para 5 dias.
- Criar e gerenciar tarefas com base nas condições climáticas, com tags e prioridades.

### Como Executar o Projeto

Para executar o projeto WeatherDo, siga as instruções abaixo:

1. **Clone o repositório**:

   - Clone o repositório do GitHub:

     ```bash
     git clone https://github.com/Phingaz/inevent.git
     ```

2. **Configuração do Frontend**:

   - Navegue para o diretório `weatherdo-frontend`:

     ```bash
     cd weatherdo-frontend
     ```

   - Instale as dependências:

     ```bash
     npm install
     ```

   - Execute o servidor de desenvolvimento:

     ```bash
     npm run dev
     ```

3. **Configuração do Backend**:

   - Navegue para o diretório `weatherdo-backend`:

     ```bash
     cd weatherdo-backend
     ```

   - Instale as dependências:

     ```bash
     npm install
     ```

   - **Configuração do arquivo `.env`**:
     
     Crie um arquivo `.env` no diretório `weatherdo-backend` e adicione sua chave de API da OpenWeather:
     ```bash
     OPEN_WEATHER_API_KEY=SuaChaveAPI
     ```

   - Execute o servidor backend:

     ```bash
     npm run dev
     ```

4. **Acessar a Aplicação**:
   - O frontend estará disponível em `http://localhost:3000`.
   - O backend estará disponível em `http://localhost:3001`.

## Configuração do .env

Para que a aplicação possa se comunicar com a API OpenWeather, é necessário criar um arquivo `.env` no diretório `weatherdo-backend` com a seguinte variável:

```bash
OPEN_WEATHER_API_KEY=SUA_CHAVE_DA_API
```

Substitua `SUA_CHAVE_DA_API` pela chave da sua conta na [OpenWeather API](https://openweathermap.org/).

## Com Docker

WeatherDo pode ser executado usando Docker para facilitar o deploy. O aplicativo tem dois serviços principais: `frontend` e `backend`.

### Como Construir e Executar os Containers Docker

1. Para construir e executar os serviços, use:

   ```bash
   docker-compose up --build
   ```

2. Acesse o frontend em `http://localhost:3000` e o backend em `http://localhost:3001`.

### Scripts do Frontend

- **`dev`**: Executa o frontend em modo de desenvolvimento usando Vite.
- **`build`**: Compila o TypeScript e constrói a versão de produção.
- **`lint`**: Executa o ESLint para verificar problemas no código.
- **`preview`**: Previsualiza o build de produção localmente.

### Scripts do Backend

- **`dev`**: Executa o servidor backend usando Nodemon para desenvolvimento.
- **`start`**: Inicia o servidor backend para produção.

### Tecnologias Utilizadas

- **Frontend**: React, Vite, TailwindCSS
- **Backend**: Node.js, Express.js
- **API**: OpenWeather API
- **Docker**: Containerização com Docker

---

Com WeatherDo, você pode acompanhar a previsão do tempo e gerenciar suas tarefas diárias com base nas condições meteorológicas. Aproveite!