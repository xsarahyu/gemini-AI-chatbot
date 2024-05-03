# 🤖💬 Gemini AI Chatbot

## 👋 Introduction
Welcome to the **Gemini AI Chatbot**! This application allows users to interact with an AI chatbot using natural language. Built with React, Node, Express, and Gemini (Google's Generative AI), it offers a seamless experience for engaging in conversations with an intelligent virtual assistant.

## ⭐ Features
- 🔐 **User Authentication**: Users can create an account or log in securely using a Google account. *Please note that only Google login works currently.*
- 💬 **Real-time Messaging**: Users can engage in real-time conversations with the AI chatbot, receiving instant responses to their queries.
- 🤖 **AI-powered Responses**: The chatbot utilizes Google's Generative AI technology to generate intelligent responses based on user input.
- 🔒 **Secure Communication**: All user interactions are encrypted to ensure privacy and security.
- 🌐 **Multi-platform Compatibility**: The application is compatible across various platforms, including web browsers and mobile devices.
- ⚙️ **Customizable Settings**: Users can personalize their chat experience by adjusting settings such as language preferences and conversation themes.

## 🖼️ Preview
### Landing page
<img src="landing_page.png" width="600">

### Login page
<img src="login_page.png" width="600">

### Messaging page
<img src="messaging_page.png" width="600">

## 🚀 Getting Started
1. Clone the repository: `git clone https://github.com/xsarahyu/gemini-AI-chatbot.git`
2. Navigate to the backend directory: `cd backend`
3. Create an .env file with *your* Gemini API information:
    ```
    clientID={your clientID}
    clientSecret={your clientSecret}
    secret={your secret}
    PORT=8420
    geminiKey={your geminiKey}
    ```
4. Install backend dependencies: `npm install`
5. Run the backend: `node server`
6. Navigate to the frontend directory (in a new terminal): `cd app`
7. Install frontend dependencies: `npm install`
8. Run the frontend: `npm run dev`
9. The app is now live at http://localhost:5173!

## 🗂️ File Structure
```
app/src
├── components
│   ├── Footer.jsx
│   ├── LandingPage.jsx
│   ├── LoginPage.jsx
│   ├── MessagesComponent.jsx
│   └── NavBar.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
backend
└── server.js
```

<br>
<hr style="border: 5px solid black">
<br>

# 🧪 Testing
## Unit Tests — Using Jest
To run Jest tests locally:
1. Navigate to the frotnend directory: `cd app`
2. Install frontend dependencies: `npm install`
3. Run the tests: `npm test`
4. You should now see test coverage in your terminal.

### 👉 Footer component
#### Test #1: Ensures that the Footer component renders with the text "Resilient Coders".
https://github.com/xsarahyu/gemini-AI-chatbot/blob/c8ca1ae5431e7a7cb215a0bd574967c263f10b50/app/src/components/Footer.test.jsx#L5-L11

### 👉 LandingPage component
#### Test #1: Verifies that the LandingPage component renders with the welcome message.
https://github.com/xsarahyu/gemini-AI-chatbot/blob/c8ca1ae5431e7a7cb215a0bd574967c263f10b50/app/src/components/LandingPage.test.jsx#L5-L11

### 👉 LoginPage component
#### Test #1: Ensures that the LoginPage component renders with the username input field.
https://github.com/xsarahyu/gemini-AI-chatbot/blob/fb21df617d3dffdee3be497a66aa11bd98adbe2f/app/src/components/LoginPage.test.jsx#L17-L21

#### Test #2: LoginPage renders with the password input field.
https://github.com/xsarahyu/gemini-AI-chatbot/blob/fb21df617d3dffdee3be497a66aa11bd98adbe2f/app/src/components/LoginPage.test.jsx#L23-L27

#### Test #3: LoginPage renders with the regular login button.
https://github.com/xsarahyu/gemini-AI-chatbot/blob/fb21df617d3dffdee3be497a66aa11bd98adbe2f/app/src/components/LoginPage.test.jsx#L29-L33

#### Test #4: LoginPage renders with the Google login button.
https://github.com/xsarahyu/gemini-AI-chatbot/blob/fb21df617d3dffdee3be497a66aa11bd98adbe2f/app/src/components/LoginPage.test.jsx#L35-L39

### 👉 MessagesComponent
#### Test #1: Simulates entering text into the message input field, clicking the send button, and then verifies that the entered message renders.
https://github.com/xsarahyu/gemini-AI-chatbot/blob/c8ca1ae5431e7a7cb215a0bd574967c263f10b50/app/src/components/MessagesComponent.test.jsx#L7-L18

#### Test #2: Ensures that the message input field exists.
https://github.com/xsarahyu/gemini-AI-chatbot/blob/c8ca1ae5431e7a7cb215a0bd574967c263f10b50/app/src/components/MessagesComponent.test.jsx#L20-L25

#### Test #3: Confirms the existence of the button to send a message.
https://github.com/xsarahyu/gemini-AI-chatbot/blob/c8ca1ae5431e7a7cb215a0bd574967c263f10b50/app/src/components/MessagesComponent.test.jsx#L27-L32

### 👉 NavBar component
#### Test #1: Verifies that the NavBar renders with the "Home" and "Login" links.
https://github.com/xsarahyu/gemini-AI-chatbot/blob/c8ca1ae5431e7a7cb215a0bd574967c263f10b50/app/src/components/NavBar.test.jsx#L6-L17

## End-to-End Tests — Using Cypress
1. Make sure that the frontend and backend are running, with all dependencies installed.
2. Open the Cypress test runner (in a new terminal): `cd app` ➡️ `npx cypress open`

The following steps occur in the Cypress test runner:
1. In the test runner, select "E2E Testing."
2. You'll be prompted to choose a browser to run the tests in; any is fine.
3. Cypress will open a new window containing a list of all the end-to-end tests.
4. Click on a test file to run it.
5. The selected test will begin execution. You'll see each step being performed in real-time within the Cypress GUI.
6. If the test passes, the screen will turn green. If it fails, the screen will turn red, indicating which step failed.
7. To run other test files, navigate back to the main page by selecting the "Specs" label in the sidebar.
8. From the main page, you can select and run other test files one by one.

### 👉 login_page
#### This test suite ensures that the login page can be accessed from the homepage, and checks for the presence of username and password input fields on the login page.
https://github.com/xsarahyu/gemini-AI-chatbot/blob/c8ca1ae5431e7a7cb215a0bd574967c263f10b50/app/cypress/e2e/loginpage.cy.js#L1-L10

### 👉 messages_page
#### This test suite ensures that users can navigate to the messages page and post a message. It also verifies that the posted message is displayed on the page.
https://github.com/xsarahyu/gemini-AI-chatbot/blob/c8ca1ae5431e7a7cb215a0bd574967c263f10b50/app/cypress/e2e/messagesPage.cy.js#L1-L12