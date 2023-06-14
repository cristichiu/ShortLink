import axios from "axios";
interface OptionI {
    name: string
    originalLink: string
    persLink: string
}
export function create(option: OptionI, username: string | undefined, {setAddLink, setLinks, setErrorMessage}: any) {
    setErrorMessage("Această acțiune ar putea dura un pic.")
    if(option.name == "") return setErrorMessage("Link-ul trebuie să aibă un nume!")
    if(option.originalLink == "") return setErrorMessage("Trebuie să pui link-ul original!")
    if(option.originalLink.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) == null) return setErrorMessage("Link-ul original trebuie se fie un link VALID!")
    axios.post(import.meta.env.VITE_BACKEND_LINK + "/createLink", { option, username }).then(res => { if(!res.data.error) { setLinks(res.data.links); setAddLink(false) } else { setErrorMessage(res.data.message); } })
}
export function del(name: string, username: string | undefined, setLinks: any) {
    axios.post(import.meta.env.VITE_BACKEND_LINK + "/deleteLink", { name, username }).then(res => { if(!res.data.error) { setLinks(res.data.links) } })
}
export function shere(link: string, setShereCopied: any) {
    navigator.clipboard.writeText(link)
    setShereCopied(true)
    setTimeout( async () => {
        setShereCopied(false)
    }, 5000)
}
export function findAllLinks(username: string | undefined, setLinks: any) {
    axios.post(import.meta.env.VITE_BACKEND_LINK + "/findAllLinks", { username }).then(res => { if(!res.data.error) { setLinks(res.data.links) } })
}