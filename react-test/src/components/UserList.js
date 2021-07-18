import User from './User';

const UserList = ({list})=>{
   
    return (
        
        <div>
            <h1>All User List</h1>
            {
                list.map((u)=>{
                   return  <User key={u.id} {...u} />
                })
            }
        </div>
    );
}

export default UserList;

