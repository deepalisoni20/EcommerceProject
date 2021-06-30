import { Typography,Menu,makeStyles,MenuItem } from "@material-ui/core";
import { useState } from "react";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link } from "react-router-dom";
const usestyle=makeStyles({
component:{
    marginTop: 40
},
logout:{
    marginLeft: 20,
    fontSize:14
}
})


const Profile=({account,setAccount})=>{
    const [open,setOpen]=useState(false);
    const classes=usestyle();
    const handleClose=()=>{
        setOpen(false);
    }
    const handleClick=(event)=>{
        setOpen(event.currentTarget);
    }
    const logout =()=>{
        setAccount('');
    }
    return(
<>
<Link><Typography onClick={handleClick} style={{marginTop:2}}>{account}</Typography></Link>

<Menu
    anchorEl={open}
    open={Boolean(open)}
    onClose={handleClose}
    className={classes.component}
    >
        <MenuItem onClick={()=>{handleClose();logout();}}>
            <PowerSettingsNewIcon fontSize="small"/><Typography className={classes.logout}>Logout</Typography></MenuItem>
</Menu>
</>
    )
}
export default Profile;