import axios from 'axios'
const PrivHandler = async (token) => {
    try {
        const response = await axios.get(`http://localhost:3333/api/words/private`,
        {
            headers: {
                Authorization: token
            }
        }
        )
        console.log(response.data[0].content);
        return response.data[0].content
    } catch (err) {
        console.log(err.response.status);
        return err.response.status
    }
}
 
export default PrivHandler;