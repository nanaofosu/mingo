import { Avatar } from '@material-ui/core';
import './User.scss';

function User({username, personfrom, message}){
    return(
       <div className="User">
           <Avatar className="avatar" alt={username} src="/static/images/avatar/1.jpg"/>
            <div className="username">{username}</div>
        </div>
    )
}

export default User;