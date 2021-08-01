import './user.css';
import {Link} from "react-router-dom";

const User = ({id, userId, title, callback})=>{
    return (
        <div className= 'std'>
            <h3>Name: {userId}</h3>
            <p>Id: {id} </p> 
            <p>Dept: {title}</p>
            <button onClick={()=>callback(id)}>Delete</button>
            <Link to={`/edit/${id}`}> EDIT</Link>
        </div>
    );
}

export default User;