import {useState} from "react";
import axios from "axios";

function Login(){

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");

const login=async()=>{

const res=await axios.post(

"http://127.0.0.1:8000/api/token/",

{
username,
password
}

);

localStorage.setItem(
"token",
res.data.access
);

alert("Login Success");

};

return(

<div>

<input
placeholder="username"
onChange={(e)=>
setUsername(e.target.value)}
/>

<input
type="password"
placeholder="password"
onChange={(e)=>
setPassword(e.target.value)}
/>

<button onClick={login}>
Login
</button>

</div>

)

}

export default Login;