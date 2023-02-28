import axios from "axios";

const CallbackPage = () => {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const code = urlSearchParams.get("code")
    console.log(code);

    const getToken = async() => {
        const resp = await axios.post('http://localhost:3333/api/gettoken', {
            code
        })
        console.log(resp.data);
    }

    
    return ( 
        <>
            <h2>Callback Page</h2>
            <button onClick={getToken}>Get Access token</button>
        </>
     );
}
 
export default CallbackPage;