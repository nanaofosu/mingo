import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import SendSharpIcon from '@material-ui/icons/SendSharp';
import firebase from "firebase";
import { useState } from "react";
import {storage, db} from "../../config/firebase";



function MessagePost({username}){

    const [message, setMessage] = useState('');
    const handleMessageSend = () => {
      if(message){
        db.collection('posts').add({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          message: message,
          username: username,
          personfrom: username,
          personto: "maiya"
      });
      }else{
        alert("Please enter a message first")
      }
        
        setMessage('');
    }



    return(
        <TextField 
            className="message-textfield" 
            id="outlined-multiline-static" 
            multiline 
            fullWidth 
            rows={1}
            placeholder="Message selected user" 
            variant="outlined" 
            value={message}
            onChange={event=> setMessage(event.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    onClick={handleMessageSend}
                  >
                    <SendSharpIcon />
                  </IconButton>
                </InputAdornment>
              )
            }} />
    )

}

export default MessagePost;