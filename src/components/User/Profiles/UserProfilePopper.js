import Popper from '@material-ui/core/Popper';
import { Fade, Paper, Typography, Button, Avatar } from '@material-ui/core';
import { useState } from 'react';

function UserProfilePopper({username}){

    const [anchorEl, setAnchorEl] = useState();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'spring-popper' : undefined;

    return(
        <div>
            <Button onClick={handleClick}>
              <Avatar className="post__avatar" alt={username} src="/static/images/avatar/1.jpg" />
            </Button>
      <Popper open={open} anchorEl={anchorEl} placement={'bottom-start'} transition>
        {({ TransitionProps }) => (
            <Paper elevation={3}>
              <Typography>The content of the Popper.</Typography>
            </Paper>
        )}
      </Popper>
        </div>
        
    )
}

export default UserProfilePopper;