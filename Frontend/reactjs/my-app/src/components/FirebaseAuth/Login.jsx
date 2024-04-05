import { auth } from '../../config/fb-conf';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
let Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const login = async () => {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate('/dashboard')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <>
            <div>
                <h1>Login User</h1>
                <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={login}>Login</button>

            </div>
        </>
    )
}

export default Login;