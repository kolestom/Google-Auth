import { useState, useEffect } from 'react'
import './App.css'
import PrivPubHandler from './util/PrivPubHandler'
import { GoogleLogin } from '@react-oauth/google'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  const credentialHandler = async (credResp) => {
    const resp = await axios.post('http://localhost:3333/api/login', {
      clientID: credResp.clientId,
      credential: credResp.credential
    })
    console.log(resp.data);
  }

  return (
    <div className="App">
      <div>
      <GoogleLogin
          
          onSuccess={(credentialResponse) => credentialHandler(credentialResponse)}
          onError={() => {
            console.log('Login Failed');
          }}
        />
        <button onClick={()=>{PrivPubHandler('public')}}>Get public</button>
        <button onClick={()=>PrivPubHandler('private')}>Get private</button>
      </div>
    </div>
  )
}

export default App
