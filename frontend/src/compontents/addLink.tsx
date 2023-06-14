import "../../setPublic/scss/loginregister.scss"

import { useState } from 'react'

interface AddLinkI {
    create(option: OptionI): void
    giveUp(): void
    errorMessage: String
}
interface OptionI {
     name: string
     originalLink: string
     persLink: string
}

const AddLink = ({ create, giveUp, errorMessage }: AddLinkI) => {
    const [options, setOptions] = useState<OptionI>({name: '', originalLink: '', persLink: ''})
    return (<>
    <div className="addLinkContainer">
        <div className="main">
            <div className="title">Adaugă un nou link</div>
            <input value={options.name} type="text" placeholder="Nume" className="name input" onChange={(event) => setOptions({...options, name: event.target.value})}/>
            <input value={options.originalLink} type="text" placeholder="Link-ul original" className="link input" onChange={(event) => setOptions({...options, originalLink: event.target.value})}/>
            <input value={options.persLink} type="text" placeholder="Nume link personalizat (opțional)" className="linkPers input" onChange={(event) => setOptions({...options, persLink: event.target.value})}/>
            { errorMessage != "" && <div className="error">{errorMessage}</div> }
            <button className="button" onClick={() => create(options)}>Crează</button>
            <button className="button" onClick={giveUp}>Renunță</button>
        </div>
    </div>
    </>)
}

export default AddLink