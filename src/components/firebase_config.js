import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB75rwm4zoUSUqUEUXAYqZfK3otPJWn6ZI",
    authDomain: "whatsapp-clone-react-c04c0.firebaseapp.com",
    projectId: "whatsapp-clone-react-c04c0",
    storageBucket: "whatsapp-clone-react-c04c0.firebasestorage.app",
    messagingSenderId: "265629599683",
    appId: "1:265629599683:web:e4838f656427a8babe5f76"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
 