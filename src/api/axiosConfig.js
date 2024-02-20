import axios from 'axios';

export default axios.create({
    baseURL:'http://localhost:8080',
    timeout: 20000,
    headers: {"Content-type":"application/json"}
});

//Ngrok allows our requests to be made without being block by using 
//a remote api.