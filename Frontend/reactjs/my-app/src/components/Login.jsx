import {auth} from '../config/fb-conf';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
let Login = () =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const signIn = async () =>{
        await createUserWithEmailAndPassword(auth,email,password);
    }
    return (
        <>
            <div>
                <input type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
                <input type="text" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
                <button onClick={signIn}>Login</button>
                
            </div>
        </>
    )
}

export default Login;