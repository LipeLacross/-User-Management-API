# User Management API

This project is an API for user management developed with Express.js and SQLite. It allows you to create, read, update, and delete users in an SQLite database.

## 🔨 Project Features

- **Create User**: Add new users to the database.
- **Read Users**: List all users or view a specific user.
- **Update User**: Update the details of an existing user.
- **Delete User**: Remove users from the database.

### Visual Example of the Project (Postman)

![Screenshot 2024-08-13 104926](https://github.com/user-attachments/assets/eeec7d80-ccc2-4db9-a2a4-3109a5544a35)
![Screenshot 2024-08-13 105002](https://github.com/user-attachments/assets/6d518d57-9454-47dc-a895-5c333881468a)
![Screenshot 2024-08-13 105335](https://github.com/user-attachments/assets/7548fc25-82b4-48c2-8d69-ae14b723efea)

## ✔️ Techniques and Technologies Used

- **Express.js**: Framework for building the API.
- **Sequelize**: ORM for interacting with the SQLite database.
- **SQLite**: Lightweight database for storing user data.
- **Pug**: Template engine for rendering views, if necessary.

## 📁 Project Structure

The project is organized as follows:

- **`bin/`**: Contains initialization scripts.
  - `www`: Script to start the server.

- **`config/`**: Contains additional project configurations.
  - `database.js`: Configuration for Sequelize and the database.

- **`models/`**: Contains the data model definitions.
  - `user.js`: Sequelize model for users.

- **`public/`**: Contains static files served by Express.
  - **`stylesheets/`**: Folder for CSS files.
    - `style.css`: Stylesheet file.

- **`routes/`**: Contains the API route definitions.
  - `index.js`: Main routes.
  - `users.js`: Routes for user management.

- **`views/`**: Contains Pug templates for rendering views.
  - `error.pug`: Template for displaying errors.
  - `index.pug`: Template for the home page.
  - `layout.pug`: Default layout for views.

- **`.gitignore`**: File to specify files and folders to be ignored by Git.

- **`LICENSE`**: Project license file.

- **`README.md`**: Project documentation.

- **`app.js`**: Main file that configures Express and Sequelize.

- **`database.sqlite`**: SQLite database.

- **`package-lock.json`**: Dependency management file.

- **`package.json`**: npm configuration file.

## 🛠️ Running the Project

To start the user management API, follow these steps:

1. **Install Dependencies**:
   - Make sure Node.js is installed. You can download and install Node.js from the [official website](https://nodejs.org/).
   - Navigate to the project directory in the terminal and run the following command to install all necessary dependencies:
     ```bash
     npm install
     ```

2. **Configure the Environment**:
   - Ensure that the `database.sqlite` file is present at the root of the project. This file is created automatically when the server starts for the first time, but you may need to ensure it is accessible.

3. **Start the Server**:
   - After installing dependencies and configuring the environment, you can start the server. In the terminal, run:
     ```bash
     npm start
     ```
   - The Express server will start, and the API will be available to receive requests. By default, the server will listen on port 3000.

4. **Verify the API**:
   - To check if the API is working correctly, you can use tools like [Postman](https://www.postman.com/) or [cURL](https://curl.se/).
   - Test the following endpoints:
     - **GET /users**: List all users.
     - **POST /users**: Add a new user. Send a request body with `name`, `email`, and `password` fields.
     - **GET /users/:id**: Get a specific user by ID.
     - **PUT /users/:id**: Update an existing user by ID. Send a request body with `name`, `email`, and `password` fields.
     - **DELETE /users/:id**: Remove a specific user by ID.

5. **Stop the Server**:
   - To stop the server, simply press `Ctrl + C` in the terminal where the server is running.

If you encounter issues or need further assistance, refer to the documentation or contact the support of the platform you are using.

## 🌐 Deploy

To deploy the user management API:

1. **Prepare the Production Environment**:
   - Configure environment variables and ensure that the database is accessible.

2. **Choose a Hosting Platform**:
   - **Heroku**:
     1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
     2. Log in with `heroku login`.
     3. Create an app with `heroku create`.
     4. Deploy with `git push heroku main`.
     5. Access the app with `heroku open`.
   - **Vercel**:
     1. Install the Vercel CLI: `npm install -g vercel`.
     2. Log in with `vercel login`.
     3. Deploy with `vercel`.
   - **Netlify**:
     1. Install the Netlify CLI: `npm install -g netlify-cli`.
     2. Log in with `netlify login`.
     3. Deploy with `netlify deploy`.

3. **Additional Configuration**:
   - Configure scalability and monitoring as needed.

4. **Maintenance**:
   - Keep dependencies up to date and monitor logs regularly.
