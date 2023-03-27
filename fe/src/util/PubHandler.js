import axios from "axios";

const PubHandler = async() => {
    
        const response = await axios.get(`http://localhost:3333/api/words/public`)
    
        console.log(response.data[0].content);
        return response.data[0].content
}
 
export default PubHandler;