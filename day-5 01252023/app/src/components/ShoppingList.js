import { useState } from "react";

export default function ShoppingList(){

    const [ shopping, updateShopping ] = useState(   []  );
    const [ inputValue, updateInput ] =useState( "" );

    return(

        <div>
            <h3>Shopping List</h3>
            <ul>
               
               {
                shopping.map((e)=>{
                    return (<li> { e } </li>)
                })
               }
                    
            </ul>
            <input type="text" className="form-control" placeholder="type in ..."
            onChange={ (event)=>{ 
                console.log(event.target.value);

                updateInput(event.target.value);

             } }
            /> 


            <button className="btn btn-primary"
            onClick={ ()=>{
                
                updateShopping( [ ...shopping, inputValue] );

            } }
            >Add</button>

            <button className="btn btn-danger"
            onClick={ ()=>{
                
                updateShopping( [] );

            } }
            >Clear all</button>

        </div>
    );
}