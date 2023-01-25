import  {Link}  from "react-router-dom";

export default function ErrorPage(){
    return(
        <div>
            <h1>404 NOT FOUND</h1>

            <p>
                <Link  to={ '/' } >back to home page</Link>
            </p>
        </div>
    );
}