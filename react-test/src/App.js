import UserList from './components/UserList';

function App() {

  const users =[ 
    {id: 1, name: 'alamin', dept: 'SE'},
    {id: 2, name: 'xyz', dept: 'CSE'},
    {id: 3, name: 'abc', dept: 'CIS'},
    {id: 4, name: 'prq', dept: 'CS'},
  ];

  return (
    <div>
        <UserList list={users} />
    </div>
  );
}

export default App;
