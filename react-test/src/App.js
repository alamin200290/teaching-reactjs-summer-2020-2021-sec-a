import UserList from './components/UserList';
import {users} from './usersData';
import {useState, useEffect} from 'react';
import CreateUser from './components/CreateUser';
import Navbar from './components/Navbar';
import { useFetch } from './components/useFetch';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

const url = `https://jsonplaceholder.typicode.com/posts`;

  const [userlist, setUserList] = useState([]);
  useFetch(url, setUserList);
  // const getData = (url)=>{
  //     return fetch(url)
  //             .then(response=>response.json())
  //             .then(json=>json);
  // }

  // useEffect(()=>{
  //   getData(url).then(data=>setUserList(data));
  // }, []);

  const deleteuser = (id)=>{
    const list = userlist.filter((user)=>user.id !== id);
    setUserList(list);
  }

  const addUser = (user)=>{
    setUserList([...userlist, user]);
  }

  return (
   
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path='/'> 
              <h1>Welcome Home!</h1>
          </Route>
          <Route path='/userlist'>
            <div>
                <UserList list={userlist} deleteCallback={deleteuser}/>
            </div>
          </Route>
          <Route path='/create'>
              <CreateUser status='add' addNewUser={addUser} />
          </Route>
          <Route path='/edit/:id' children={<CreateUser status='edit' />}></Route>
          <Route path='*'>
              404 not found
          </Route>          
      </Switch>
  </Router>
  );
}

export default App;
