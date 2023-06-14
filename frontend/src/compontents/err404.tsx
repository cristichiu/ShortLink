const Err404 = () => {
    return (<>
    <div style={{display: "flex", flexDirection: "column", fontSize: "1.5rem", width: "90%"}}>
        <div style={{color: 'black'}}>Se pare că nu ai nimerit unde trebuie</div>
        <a href="/app/register">register</a>
        <a href="/app/login">login</a>
    </div>
    </>)
}

export default Err404