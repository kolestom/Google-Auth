import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PubHandler from "../util/PubHandler";
import PrivHandler from "../util/PrivHandler";
const HomePage = () => {
    const [loggedInUser, setLoggedInUser] = useState();
    const [token, setToken] = useState();
    const navigate = useNavigate()
    
    useEffect(()=>{
        setLoggedInUser(JSON.parse(localStorage.getItem('name')))
        setToken(JSON.parse(localStorage.getItem('token')))
    },[])

    const getPrivate = async()=>{
        const resp = await PrivHandler(token)
        if (resp === 403) {
            alert('Session expired. Log in again')
            setLoggedInUser('')
            localStorage.clear()
            navigate("/")
        }
    }

    const handleLogOut = () =>{
        setLoggedInUser('')
        localStorage.clear()
    }
    
    return (
      <>
        <h1>Home Page</h1>
        {loggedInUser ? <h1>Hi, {loggedInUser}</h1> : <h1>Log in to use private button</h1>}
        <button onClick={() => navigate("/")}>To Login</button>
        <button onClick={PubHandler}>Public</button>
        <button style={{ display: loggedInUser ? "inline" : "none" }} onClick={getPrivate}>Private</button>
        <button style={{ display: loggedInUser ? "inline" : "none" }} onClick={handleLogOut}>Log out</button>
      </>
    );
}
 
export default HomePage;