import { Modal } from "@material-ui/core";
import { useState } from "react";
import { Button , Input} from "@material-ui/core";



function Register({username, email, password}){
    const [open, setOpen] = useState(false)
    return(
       <div className="Register">
           {/* <Button onClick={()=> setOpen(true)}>Register</Button>
           <form action="" className="app__signup">
            <center>
              <img className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
                alt="instagram logo" />
            </center>
            <Input type="text" placeholder="username" value={username} onChange={(e)=> setUsername(e.target.value)}
            />
            <Input type="text" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}
            />
            <Input type="text" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}
            />
            <Button onClick={signup}>Sign up</Button>
            </form> */}
       </div>
    )
}

export default Register;


{/* <Modal open={open} onClose={()=> setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        >
        <div style={modalStyle} className={classes.paper}>
          <form action="" className="app__signup">
            <center>
              <img className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
                alt="instagram logo" />
            </center>
            <Input type="text" placeholder="username" value={username} onChange={(e)=> setUsername(e.target.value)}
            />
            <Input type="text" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}
            />
            <Input type="text" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}
            />
            <Button onClick={signup}>Sign up</Button>

          </form>
        </div>
      </Modal> */}