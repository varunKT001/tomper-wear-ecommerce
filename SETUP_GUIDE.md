# 📃 SETUP GUIDE

## ❗ System Requirements

- [Git](https://git-scm.com/downloads): Version control system.

- [Node.js](https://nodejs.org/en/): JavaScript runtime built on Chrome's V8 JavaScript engine (Please go with any latest LTS versions)

- [Google Chrome](https://www.google.com/chrome/) (or a decent latest web browser)

- [Visual Studio Code](https://code.visualstudio.com/) (or any other code editor).

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): helps you to format your JavaScript / TypeScript / CSS using [Prettier](https://github.com/prettier/prettier).

## 📝 Additional Requirements

- [Firebase](https://firebase.google.com/): The project uses firebase as an authentication provider for the users. I recommend you creating a firebase account (if you don't have on already).

- [Stripe](https://stripe.com/en-in) (optional): The project uses stripe as a payment-gateway. If you already have an account, it's awesome. You'll only need this if you are working on both frontend and backend.

## 🛠 Local Installation and Setup

1. Clone the repo to your local machine.
2. Install the required dependency for server using :

   ```javascript
   npm install
   ```

3. Create a `.env` file inside the root folder and copy-paste the following contents in the file:

   ```env
   REACT_APP_BACKEND_HOST=https://tomper-wear-server.herokuapp.com

   REACT_APP_FORMSPREE=xknyoepq

   REACT_APP_API_KEY=<firebase_api_key>

   REACT_APP_AUTH_DOMAIN=<firebase_auth_domain>

   REACT_APP_PROJECT_ID=<firebase_project_id>

   REACT_APP_STORAGE_BUCKET=<firebase_storage_bucket_url>

   REACT_APP_MESSAGING_SENDER_ID=<firebase_messaging_sender_id>

   REACT_APP_APP_ID=<firebase_app_id>

   REACT_APP_STRIPE_PUBLIC_KEY=<stripe_public_key>
   ```

4. Provide values for firebase configuration and stripe (optional). Without firebase configs, you won't be able to access the application.

5. Start the dev server using :

   ```javascript
   npm start
   ```
