WhatsApp React Clone A real-time chat application built with ReactJS and powered by Firebase for authentication and data handling. This is a clone of WhatsApp's core functionality, including live messaging, login/signup, and dynamic user chats.

Features
 * Firebase Authentication (Login/Signup with email & password)

 * Real-Time Messaging using Firebase Realtime Database

 * Multiple Users can chat simultaneously

 * ReactJS Functional Components with Hooks

 * Clean and responsive UI



Tech Stack


Frontend: ReactJS

Backend/Data: Firebase Realtime Database

Authentication: Firebase Auth

Styling: CSS /  Tailwind 




🛠️ Setup Instructions
Clone the Repository
git clone https://github.com/yourusername/whatsapp-react-clone.git
cd whatsapp-react-clone
Install Dependencies

npm install
Firebase Configuration

Create a Firebase project at https://console.firebase.google.com

Enable Email/Password Authentication

Enable Realtime Database (set rules to public for testing)

Replace the Firebase config object inside your project (usually in firebase.js or firebaseConfig.js):
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  databaseURL: "YOUR_DB_URL",
  projectId: "YOUR_PROJECT_ID",
  ...
};
Start the App


npm start
✅ Realtime Database Rules (for testing only)
json
Copy
Edit
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
⚠️ Don't use these rules in production! Always secure your database properly.



📁 Folder Structure

src/
├── components/
│   ├── Chat.js
│   ├── Login.js
│   ├── Home.js
│   └── About.js
├── firebase.js
├── App.js
├── index.js
└── index.css



🙋‍♂️ Author


👨‍💻 Developed by: Ningaraddi

📧 Email: ningaraddi225@gmail.com
