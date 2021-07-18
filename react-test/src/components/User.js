import './user.css';

const User = ({id, name, dept})=>{
    return (
        <div className= 'std'>
            <h3>Name: {name}</h3>
            <p>Id: {id} </p> 
            <p>Dept: {dept}</p>
            <button>Edit</button> 
            <button>Delete</button>
        </div>
    );
}

export default User;