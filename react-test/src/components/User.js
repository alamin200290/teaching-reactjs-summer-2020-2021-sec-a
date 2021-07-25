import './user.css';
import {Link} from "react-router-dom";

const User = ({id, name, dept, callback})=>{
    return (
        <div className= 'std'>
            <h3>Name: {name}</h3>
            <p>Id: {id} </p> 
            <p>Dept: {dept}</p>
            <button onClick={()=>callback(id)}>Delete</button>
            <Link to={`/edit/${id}`}> EDIT</Link>
        </div>
    );
}

export default User;