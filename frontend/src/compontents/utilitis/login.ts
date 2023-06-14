interface userDataI {
    username: string
    password: string
}

import axios from "axios"

function login(userData: userDataI, navigate: any, setErrorMessage: any) {
    setErrorMessage("Această acțiune ar pute dura un pic.")
    if(userData.username == "") return setErrorMessage("Trebuie să-ți pui un username!")
    if(userData.password == "") return setErrorMessage("Trebuie să-ți pui o parolă!")
    axios.post(import.meta.env.VITE_BACKEND_LINK + "/login", userData).then(res => {
        if(!res.data.error) {
            localStorage.setItem('userId', res.data.userId);
            navigate(`/app/${userData.username}/true`)
        } else { setErrorMessage(res.data.message) }
    })
}

export default login