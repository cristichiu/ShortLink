import axios from "axios"

function adminCheck(admin: string | undefined, username: string | undefined, setUserAdmin: any) {
    if(admin == "true") {
        if(localStorage.getItem("userId")) {
            axios.post(import.meta.env.VITE_BACKEND_LINK + "/findByUserId", { userId: localStorage.getItem("userId") }).then(res => { if(!res.data.error) { if(res.data.username == username) { setUserAdmin("true") } } })
        }
    }
}

export default adminCheck