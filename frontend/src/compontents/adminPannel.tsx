import { useParams } from "react-router-dom";
import "../../setPublic/scss/adminPannel.scss"
import { useState, useEffect } from 'react'

import AddLink from "./addLink";
import adminCheck from "./utilitis/adminCheck";
import { create, findAllLinks } from "./utilitis/linkEdit"
import LinksArr from "./linksArr";

interface OptionI {
    name: string
    originalLink: string
    persLink: string
}

const AdminPannel = () => {
    const { username, admin } = useParams();
    const [userAdmin, setUserAdmin] = useState<String>("false")
    const [addLink, setAddLink] = useState<Boolean>(false)
    const [links, setLinks] = useState<any[]>([])
    const [errorMessage, setErrorMessage] = useState<String>("")
    useEffect(() => { adminCheck(admin, username, setUserAdmin); findAllLinks(username, setLinks) }, [])
    function createL(option: OptionI) { create(option, username, {setAddLink, setLinks, setErrorMessage}) }
    function giveUp() { setAddLink(false) }
    function logout() { localStorage.removeItem('userId'); window.location.reload() }
    return (<>
    { addLink && <AddLink create={createL} giveUp={giveUp} errorMessage={errorMessage} /> }
    <div className="adminPannelContainer">
        <div className="header">
            <div className="left">{username}</div>
            { userAdmin == "true" ?
                <div className="right">
                    <div className="addNew" onClick={() => setAddLink(true)}>+ adaugă un link</div>
                    <div className="logout" onClick={logout}>Logout</div>
                </div> :
                <div className="right">
                    <a className="login" href="/app/register">Register</a>
                    <a className="login" href="/app/login">Login</a>
                </div>
            }
        </div>
        <div className="main">
            <div className="scrollMain">
                { links.length == 0 && <div>Acest utilizator nu are niciun link creat!</div> }
                { links.map((link: any, key: number) => {
                    return <LinksArr link={link} key={key} username={username} setLinks={setLinks} userAdmin={userAdmin} />
                })}
            </div>
        </div>
    </div>
    </>)
}

export default AdminPannel