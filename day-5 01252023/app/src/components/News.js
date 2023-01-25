import { useState } from "react";

export default function NewsFeed(props){

    const [ likes, updateLikes ] = useState(props.likes);
    const [ didLike, updateDidLikes ] = useState( false );



    return(
        <div className="card">
            <div className="card-body">
                <p>
                    { props.content }
                </p>

                <button className="btn btn-primary"

                onClick={ 
                    ()=>{

                       if (didLike == false) {
                        updateLikes( (likes + 1) )
                       } else {
                        updateLikes( (likes - 1) )
                       }

                       updateDidLikes( ! didLike )
                        
                    } 
                
                }
                
                
                > { likes }   {  didLike === false ? 'Like' : 'Dislike'  }  </button>
            </div>
        </div>
    );
}