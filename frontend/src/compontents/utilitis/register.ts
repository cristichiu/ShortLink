interface userDataI {
    username: string
    password: string
    confirm: string
}

import axios from "axios"

function register(userData: userDataI, navigate: any, setErrorMessage: any) {
    setErrorMessage("Această acțiune ar putea dura un pic.")
    if(userData.username == "") return setErrorMessage("Trebuie să-ți pui un username!")
    if(userData.password == "") return setErrorMessage("Trebuie să-ți pui o parolă!")
    if(userData.password != userData.confirm) return setErrorMessage("Confirmare parolă trebuie să fie la fel ca parola!")
    axios.post(import.meta.env.VITE_BACKEND_LINK + "/register", userData).then(res => {
        if(!res.data.error) {
            localStorage.setItem('userId', res.data.userId);
            navigate(`/app/${userData.username}/true`)
        } else { setErrorMessage(res.data.message) }
    })
}

export default register