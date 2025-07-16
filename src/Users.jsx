import { useEffect, useState } from "react"
import Countries from "./Countries";

export default function Users(){

    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))

    }, []);


    


    return(
        <>
        <h3>useEffect</h3>
            <hr />

            <h3>Users Count: {users.length}</h3>
            {
                users.slice(0, 2).map(user => <Countries user={user} />)
            }






        </>

    )
}