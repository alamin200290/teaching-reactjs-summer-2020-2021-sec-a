import UserList from './components/UserList';
import {users} from './usersData';
import {useState} from 'react';

function App() {

 const [userlist, setUserList] = useState(users);

  const deleteuser = (id)=>{
    const list = userlist.filter((user)=>user.id !== id);
    setUserList(list);
  }

  return (
    <div>
        <UserList list={userlist} deleteCallback={deleteuser}/>
    </div>
  );
}

export default App;
