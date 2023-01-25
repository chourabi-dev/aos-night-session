import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function UsersPage(){

    const [users,updateUsers] = useState( [] );

    // AUTO CALL
    useEffect(()=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
            .then(response => response.json())
            .then(result =>{

                console.log(result)

                updateUsers(result);

            })
            .catch(error => console.log('error', error));
    })





    return(
        <div>
            <Navbar/>
            
            <h1>Users page</h1>


            <ul>
                {
                    users.map( (u)=>{
                        return(
                        <li key={ u.id } >
                            <h3>{ u.name }  </h3>
                            <p className="text-muted">{ u.email }</p>
                        </li>
                        
                        )
                    } )
                }
            </ul>
        </div>
    );
}