import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import Post from './components/Post/Post';
import User from './components/User/User';
import MessagePost from './components/MessagePost/MessagePost';
import Register from './components/User/Auth/Register';
import { auth, db } from './config/firebase';
import { Button, Input, Modal, Avatar, Popover, Box, Paper, MenuItem, MenuList, TextField , InputAdornment, IconButton, Popper} from '@material-ui/core';
import UserProfilePopper from './components/User/Profiles/UserProfilePopper';


function App() {
  const [posts, setPost] = useState([]);
  const [userLoggedin, setUserLoggedin] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState(null);
  const [openRegisterForm, setOpenRegisterForm] = useState(false);
  const [openUserPopover, setOpenUserPopover] = useState(false);

  const [message, setMessage] = useState('');


  // the method that handles the user signup
  const signup = (event)=>{
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) =>{
      return userCredential.user.updateProfile({
        displayName: username
      })
    })
    .catch((error) => alert(error.message));
  }
// The method that handles the user login
  const login = (event)=>{
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential)=>{
      return userCredential.user;
    })
    .catch((error) => alert(error.message))
  }

 
  // // When a post has been made, update the display with a snapshot of what the DB has
  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot =>{
      setPost(snapshot.docs.map(doc=>(
        {
          id: doc.id,
          post: doc.data()
        }
      )))
    })
  })


  // When there is an auth change, run this code
  useEffect(()=> {
    const unsubscribe = auth?.onAuthStateChanged((userCredential)=>{
      if(userCredential) {
        // user has logged in
        console.log(userCredential);
        setUser(userCredential);
      } else {
        // USER HAS LOGGED OUT
        setUser(null)
      }
    })
    return () => {
      // perform some cleanup actions
      unsubscribe();
    }
  }, [user, username])







  return (
    <div className="App">
      {
      user ?
      (
      <div className="App__container">
        <header className="header">
          <div className="left"></div>
          <div className="middle"></div>
          <div className="right">
            <UserProfilePopper username={user.displayName} />
          </div>
        </header>
        <aside className="sidebar">
          <User />
        </aside>
        <main className="main">
          <MessagePost username= {user.displayName} />
          
          <div className="posts-wrapper">
            {
            posts.map(({id, post})=>(
            <Post key={id} username={post.username} message={post.message} />
            ))
            }
          </div>



        </main>
      </div>
      )
      :
      (
      <>
        <div className="register">
          <form action="">
            <div className="auth-form-fields">
              {/* <img src="~/src/assets/images/mingoLogo.png" alt="Mingo Logo" /> */}
              <Input type="text" placeholder="username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
              <Input type="email" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
              <Input type="password" placeholder="password" value={password} onChange={(e)=>
              setPassword(e.target.value)}/>
            </div>
            <Button variant="contained" color="primary" onClick={signup}>Sign up</Button> 
          </form>
        </div>
      </>
      )
      }
    </div>
  );
}

export default App;
