import { Avatar } from '@material-ui/core';
import './Post.scss';

function Post({username, message}){
    return(
       <div className="Post">
           <Avatar className="avatar" alt={username} src="/static/images/avatar/1.jpg"/>
           <div>
            <div className="username">{username}</div>
            <div className="message">{message}</div>
           </div>
        </div>
    )
}

export default Post;