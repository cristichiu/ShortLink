import { shere, del } from "./utilitis/linkEdit"
import { useState } from 'react'

interface linksI {
    link: any
    key: number
    username: string | undefined
    setLinks: any
    userAdmin: String
}

const LinksArr = ({link, key, username, setLinks, userAdmin}: linksI) => {
    const [shereCopied, setShereCopied] = useState<Boolean>(false)
    function delL(name: string) { del(name, username, setLinks) }
    function shereL(link: string) { shere(link, setShereCopied) }
    return (<>
    <div className="link" key={key}>
        <div className="left">
            <div className="title">{link.name}</div>
            { userAdmin == "true" && <a className="originalLink" href={link.originalLink}>{link.originalLink}</a> }
            <a className="shortLink" href={import.meta.env.VITE_LINKS + username + '/' + link.persLink}>{import.meta.env.VITE_LINKS + username + '/' + link.persLink}</a>
        </div>
        <div className="mid">
            <div className="clickNumber">{link.clicks} clicuri</div>
            <div className={`${shereCopied && "copied"} shere`} onClick={() => shereL(import.meta.env.VITE_LINKS + username + '/' + link.persLink)}>Shere</div>
        </div>
        { userAdmin == "true" && <div className="right">
            <button className="delete" onClick={() => delL(link.name)}>Șterge</button>
        </div> }
    </div>
    </>)
}

export default LinksArr