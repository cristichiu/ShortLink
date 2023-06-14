import { useState } from "react"
import "../../setPublic/scss/loginregister.scss"
import { useNavigate } from 'react-router-dom'
import register from "./utilitis/register"

interface userDataI {
    username: string
    password: string
    confirm: string
}

const Register = () => {
    const [userData, setUserData] = useState<userDataI>({username: "", password: "", confirm: ""})
    const [errorMessage, setErrorMessage] = useState<String>("")
    const navigate = useNavigate()
    return (<>
    <div className="loginContainer">
        <div className="main">
            <div className="title">Bine ai venit!!!</div>
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
                onChange={(event) => setUserData({...userData, password: event.target.value})}/>
            <input
                value={userData.confirm}
                type="text"
                placeholder="confirmă parolă"
                className="repassword input"
                onChange={(event) => setUserData({...userData, confirm: event.target.value})}/>
            { errorMessage != "" && <div className="error">{errorMessage}</div> }
            <button className="login button" onClick={() => register(userData, navigate, setErrorMessage)}>Register</button>
            <div className="desc">Ai deja cont? <a href="/app/login">Loghează-te</a></div>
        </div>
    </div>
    </>)
}

export default Register