import React, {useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import {auth} from "./firebase"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = e =>{
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, password)
        .then(auth =>{
            history.push('/')
        })
        .catch(error => alert(error.message))
    }

    const register =e =>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            //it successfully created a new user with email and password
            if(auth){
                history.push('/')
            }
        })
        .catch(error =>alert(error.message))
    }
    return (
        <div className="login">
        <Link to="/">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG6.png" alt=""/>
        </Link> 
        <div className="login_container">
            <h1>Sing-in</h1>
            <form action="">
                <h5>E-mail</h5>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit" className="signin_buttton" onClick={signIn}>Sign In</button>
            </form>
            <p>By signing in you agree to the Amazon clone conditions of use and sale. Please see our Privacy Notice, our Cookies and our Interest-Based Ads Notice.</p>
            <button className="create_account_button" onClick={register}>Create your Amazon account</button>
        </div>  
        </div>
    )
}

export default Login;
