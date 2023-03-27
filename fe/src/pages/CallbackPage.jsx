// import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import sendCode from "../util/sendCode";

const CallbackPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        
        const urlSearchParams = new URLSearchParams(window.location.search)
        const code = urlSearchParams.get("code")
        console.log(code);
        
        const init = async () =>{

            const data = await sendCode(code)
            console.log(data);
            localStorage.setItem("name", JSON.stringify(data.name))
            localStorage.setItem("token", JSON.stringify(data.token))
            navigate('/home')
        }
        init()
    }, []);

    
    return ( 
        <>
            <h2>Callback Page</h2>
        </>
     );
}
 
export default CallbackPage;