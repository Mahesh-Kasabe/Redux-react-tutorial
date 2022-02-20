import './App.css'
import { useSelector,useDispatch } from "react-redux"
import React,{ useState } from 'react';
import { addUser, deleteUser, update } from './features/users';

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  return (
    <div className="App">

      <input placeholder='Name..' onChange={(e) => {setName(e.target.value)}} />
      <input placeholder='Username...' onChange={(e) => {setUsername(e.target.value)}}/>
      <button onClick={() => {
        dispatch(addUser({ id:userList[userList.length - 1].id, name, username }))
      }}>Add User</button>

      <div className='adduser'>
      {
        userList.map((user) => {
          return( 
          <div className='block'>
          <h1>Name: {user.name}</h1>
          <p>Username: {user.username}</p>
          <p>Id : {user.id}</p>

      <input placeholder='Update' onChange={(e) => {setNewUsername(e.target.value)}}/>
      <button onClick={() => {
        dispatch(update({id: user.id, username: newUsername}))
      }}>Update</button>

      <button onClick={() => {
        dispatch(deleteUser({id: user.id}))
      }}>Delete User</button>

      
      </div>
          
          )
        })
      }

      </div>
    </div>
  )
}

export default App
