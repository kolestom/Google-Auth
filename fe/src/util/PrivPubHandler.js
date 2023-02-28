import axios from "axios";

const PrivPubHandler = async(ending) => {
    if (ending === "public") {
        const response = await axios.get(`http://localhost:3333/api/words/${ending}`)
    
        console.log(response.data[0].content);
        return response.data[0].content

    } else {
        const response = await axios.get(`http://localhost:3333/api/words/${ending}`)
    
        console.log(response.data[0].content);
        return response.data[0].content
    }
}
 
export default PrivPubHandler;