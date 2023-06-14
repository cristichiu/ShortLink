import { useState } from "react";
import "../../setPublic/scss/loginregister.scss"
import { useNavigate } from 'react-router-dom'
import login from "./utilitis/login";

interface userDataI {
    username: string
    password: string
}

const Login = () => {
    const [userData, setUserData] = useState<userDataI>({username: "", password: ""})
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState<String>("")
    return (<>
    <div className="loginContainer">
        <div className="main">
            <div className="title">Bine ai revenit!!!</div>
            <input
                value={userData.username} autoFocus
                type="text"
                placeholder="nume"
                className="name input"
                onChange={(event) => setUserData({...userData, username: event.target.value})}/>
            <input
                value={userData.password}
                type="text"
                placeholder="parolă"
                className="password input"
                onChange={(event) => setUserData({...userData, password: event.target.value})} />
            { errorMessage != "" && <div className="error">{errorMessage}</div> }
            <button className="login button" onClick={() => login(userData, navigate, setErrorMessage)}>Login</button>
            <div className="desc">Nu ai cont încă? <a href="/app/register">Înregistrează-te</a></div>
        </div>
    </div>
    </>)
}

export default Login