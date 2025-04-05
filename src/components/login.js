import React, { Component } from 'react';
import firebase from 'firebase';

class Login extends Component {
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user);
                if (this.props.history.location.pathname !== '/') {
                    this.props.history.push('/');
                }
            }
        });
    }

    click = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                console.log(result.user);

                // ✅ Fixed Firebase database reference
                let database = firebase.database();
                database.ref(`users/${result.user.uid}`).set({
                    name: result.user.displayName,
                    email: result.user.email,
                    dp: result.user.photoURL
                });

                // ✅ Store user info in local storage
                localStorage.setItem("name", result.user.displayName);
                localStorage.setItem("dp", result.user.photoURL);
                localStorage.setItem("user_id", result.user.uid);

                // ✅ Redirect after login
                this.props.history.push('/');
            })
            .catch((error) => {
                console.error("Error during sign-in:", error.message);
            });
    };

    render() {
        return (
            <div>
                <div className='navbar'>
                    <h3 className='text-white'>
                        <img 
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeS28ERq9_q2Og9131T04p8yZUdxNzL_OmsA&s' 
                            className='rounded-circle' 
                            style={{ width: 50, height: 50 }} 
                            alt="WhatsApp Logo"
                        />
                        <b> WhatsApp</b>
                    </h3>
                </div>

                <div className='container'>
                    <div className='row'>
                        <div className='col-6 offset-3'>
                            <div className='card'>
                                <div className='card-body'>
                                    <h1 className='display-4 text-center'>
                                        To chat with someone, sign in with Google
                                    </h1>
                                    <button 
                                        className='btn btn-outline-secondary btn-lg btn-block mt-5' 
                                        onClick={this.click}
                                    >
                                        Sign in with Google
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
