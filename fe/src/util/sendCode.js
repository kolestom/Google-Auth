import axios from 'axios'
const sendCode = async(code) => {
    const resp = await axios.post('http://localhost:3333/api/login', {
                code
            })
    return resp.data;
}
 
export default sendCode;