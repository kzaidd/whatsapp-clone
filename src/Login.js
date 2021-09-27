import React from 'react';
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { actionTypes } from './reducer';
import { useStateValue } from "./StateProvider"


function Login() {
    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type : actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt =""
            />
                <div className="login__text">
                    <h1>Sign in to Whatsapp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>
        </div>
    )
}

export default Login;