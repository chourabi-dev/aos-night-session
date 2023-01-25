import { useState } from "react";

export default function Contact(props){

 


    return(
        <div className="card">
            <div className="card-body">
                <h3> { props.fullname } </h3>
                <p> { props.email } </p>
                
            </div>
        </div>
    );
}