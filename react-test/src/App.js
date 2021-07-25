import UserList from './components/UserList';
import {users} from './usersData';
import {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

 const [userlist, setUserList] = useState(users);

  const deleteuser = (id)=>{
    const list = userlist.filter((user)=>user.id !== id);
    setUserList(list);
  }

  return (
   
    <Router>
      <Switch>
          <Route exect path='/'>
            <div>
                <UserList list={userlist} deleteCallback={deleteuser}/>
            </div>
          </Route>
          <Route path='/edit/' children={<h1>Edit form</h1>}></Route>
          <Route path='*'>
              404 not found
          </Route>          
      </Switch>
  </Router>
  );
}

export default App;
