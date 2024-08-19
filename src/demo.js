import { useEffect, useState } from "react";
import './demo.css';

function Demo(){
    const[users,setUser]=useState([]);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(errors=>{
        console.error("message");
        setLoading(false);
      })
    },[])
    if(loading){
        return <h1>LOADING</h1>
    }
    return(
        <div class="container">
            <h1>List out users in API</h1>
            <ul style={{listStyle:"none"}}>
                {users.map(user=>(
                    <li key={user.id}>{user.id} . {user.name}</li>
                    
                ))}
            </ul>
        </div>
    )
}
export default Demo;