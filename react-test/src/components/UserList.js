import User from './User';

const UserList = ({list, deleteCallback})=>{
   
    return (
        <div>
            <h1>All User List</h1>
            {
                list.map((u)=>{
                   return  <User key={u.id} {...u} callback={deleteCallback}/>
                })
            }
        </div>
    );
}

export default UserList;