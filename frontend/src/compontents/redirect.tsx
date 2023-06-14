import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'

const Redirect = () => {
    const [errorMessage, setErrorMessage] = useState<String>("")
    const { link, user } = useParams()
    const [origianlLink, setOrigianlLink] = useState<any>("")
    useEffect(() => {
        axios.post(import.meta.env.VITE_BACKEND_LINK + "/linkRedirect", { persLink: link, username: user }).then(res => { if(!res.data.error) { setOrigianlLink(res.data.originalLink) } else { setErrorMessage(res.data.message); setOrigianlLink(null) } })
    }, [])
    function redirect() {
        axios.post(import.meta.env.VITE_BACKEND_LINK + "/addClick", { persLink: link, username: user })
        window.location.replace(origianlLink)
    }
    return (<>
    { origianlLink == "" ?
        <div style={{fontSize: "1.5rem", color: "black"}}>Așteaptă puțin, acestă operațiune poate dura un pic, in dependență de host!</div> :
        errorMessage != "" ? <div style={{fontSize: "1.5rem", color: "red"}}>{errorMessage}</div> :
        <div style={{display: "flex", flexDirection: "column", padding: "2rem", width: "90%"}}>
            <div style={{fontSize: "1.5rem", color: "black", textAlign: "center", overflowWrap: "break-word"}}>Vrei să deschizi acest link? {origianlLink}</div>
            <button style={{fontSize: "1.5rem", color: "black", cursor: "pointer"}} onClick={redirect}>Click aici!</button>
        </div>
    }
    </>)
}

export default Redirect