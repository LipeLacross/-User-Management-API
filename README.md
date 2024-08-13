# API de Gerenciamento de Usuários

Este projeto é uma API para gerenciamento de usuários desenvolvida com Express.js e SQLite. Ele permite criar, ler, atualizar e excluir usuários em um banco de dados SQLite.

## 🔨 Funcionalidades do Projeto

- **Criação de Usuário**: Adicione novos usuários ao banco de dados.
- **Leitura de Usuários**: Liste todos os usuários ou visualize um usuário específico.
- **Atualização de Usuário**: Atualize os dados de um usuário existente.
- **Exclusão de Usuário**: Remova usuários do banco de dados.

### Exemplo Visual do Projeto (Postman)

![Screenshot 2024-08-13 104926](https://github.com/user-attachments/assets/eeec7d80-ccc2-4db9-a2a4-3109a5544a35)
![Screenshot 2024-08-13 105002](https://github.com/user-attachments/assets/6d518d57-9454-47dc-a895-5c333881468a)
![Screenshot 2024-08-13 105335](https://github.com/user-attachments/assets/7548fc25-82b4-48c2-8d69-ae14b723efea)

## ✔️ Técnicas e Tecnologias Utilizadas

- **Express.js**: Framework para construir a API.
- **Sequelize**: ORM para interagir com o banco de dados SQLite.
- **SQLite**: Banco de dados leve para armazenamento dos dados dos usuários.
- **Pug**: Motor de templates para renderização de views, se necessário.

## 📁 Estrutura do Projeto

O projeto é organizado nas seguintes pastas e arquivos:

- **`bin/`**: Contém scripts de inicialização.
  - `www`: Script para iniciar o servidor.

- **`config/`**: Contém configurações adicionais do projeto.
  - `database.js`: Configuração do Sequelize e do banco de dados.

- **`models/`**: Contém a definição dos modelos de dados.
  - `user.js`: Modelo Sequelize para usuários.

- **`public/`**: Contém arquivos estáticos servidos pelo Express.
  - **`stylesheets/`**: Pasta para arquivos CSS.
    - `style.css`: Arquivo de estilos.

- **`routes/`**: Contém as definições das rotas da API.
  - `index.js`: Rotas principais.
  - `users.js`: Rotas para gerenciamento de usuários.

- **`views/`**: Contém os templates Pug para renderização das views.
  - `error.pug`: Template para exibição de erros.
  - `index.pug`: Template da página inicial.
  - `layout.pug`: Layout padrão para as views.

- **`.gitignore`**: Arquivo para especificar arquivos e pastas que devem ser ignorados pelo Git.

- **`LICENSE`**: Arquivo de licença do projeto.

- **`README.md`**: Documentação do projeto.

- **`app.js`**: Arquivo principal que configura o Express e o Sequelize.

- **`database.sqlite`**: Banco de dados SQLite.

- **`package-lock.json`**: Gerenciamento de dependências do projeto.

- **`package.json`**: Arquivo de configuração do npm.

## 🛠️ Abrir e Rodar o Projeto

Para iniciar a API de gerenciamento de usuários, siga estes passos:

1. **Instalação das Dependências**:
   - Verifique se o Node.js está instalado. Você pode baixar e instalar o Node.js a partir do [site oficial](https://nodejs.org/).
   - Navegue até o diretório do projeto no terminal e execute o comando abaixo para instalar todas as dependências necessárias:
     ```bash
     npm install
     ```

2. **Configuração do Ambiente**:
   - Certifique-se de que o arquivo `database.sqlite` está presente na raiz do projeto. Este arquivo é criado automaticamente quando o servidor é iniciado pela primeira vez, mas você pode precisar garantir que ele esteja acessível.

3. **Iniciar o Servidor**:
   - Após a instalação das dependências e configuração do ambiente, você pode iniciar o servidor. No terminal, execute:
     ```bash
     npm start
     ```
   - O servidor Express será iniciado e a API estará disponível para receber requisições. Por padrão, o servidor escutará na porta 3000. 

4. **Verificação da API**:
   - Para verificar se a API está funcionando corretamente, você pode usar ferramentas como [Postman](https://www.postman.com/) ou [cURL](https://curl.se/).
   - Teste os seguintes endpoints:
     - **GET /users**: Lista todos os usuários.
     - **POST /users**: Adiciona um novo usuário. Envie um corpo de requisição com os campos `name`, `email`, e `password`.
     - **GET /users/:id**: Obtém um usuário específico pelo ID.
     - **PUT /users/:id**: Atualiza um usuário existente pelo ID. Envie um corpo de requisição com os campos `name`, `email`, e `password`.
     - **DELETE /users/:id**: Remove um usuário específico pelo ID.

5. **Parar o Servidor**:
   - Para parar o servidor, simplesmente pressione `Ctrl + C` no terminal onde o servidor está rodando.

Se você encontrar problemas ou precisar de mais ajuda, consulte a documentação ou entre em contato com o suporte da plataforma que você está utilizando.

## 🌐 Deploy

Para realizar o deploy da API de gerenciamento de usuários:

1. **Preparar o Ambiente de Produção**:
   - Configure variáveis de ambiente e assegure que o banco de dados esteja acessível.

2. **Escolher uma Plataforma de Hospedagem**:
   - **Heroku**:
     1. Instale o [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
     2. Faça login com `heroku login`.
     3. Crie um app com `heroku create`.
     4. Faça o deploy com `git push heroku main`.
     5. Acesse o app com `heroku open`.
   - **Vercel**:
     1. Instale o Vercel CLI: `npm install -g vercel`.
     2. Faça login com `vercel login`.
     3. Faça o deploy com `vercel`.
   - **Netlify**:
     1. Instale o Netlify CLI: `npm install -g netlify-cli`.
     2. Faça login com `netlify login`.
     3. Faça o deploy com `netlify deploy`.

3. **Configuração Adicional**:
   - Configure escalabilidade e monitoramento conforme necessário.

4. **Manutenção**:
   - Mantenha dependências atualizadas e monitore logs regularmente.

