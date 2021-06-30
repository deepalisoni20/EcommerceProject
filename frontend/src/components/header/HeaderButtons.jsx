import { useState , useContext  } from "react";

import { Box, Button, makeStyles, Typography, Badge} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
//components
import LoginDialog from "../login/Login";
import {LoginContext} from '../../context/ContextProvider';
import Profile from "../home/Profile";
const usestyle = makeStyles({
  login: {
    backgroundColor: "#FFFFFF",
    color: "#f44336",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 3,
    width: 100,
  },
  wrapper: {
    margin: "0 5% 0 auto",
    display: "flex", 
    "& > *": {
      //to pass css from parent to child ,parent is wrapper class
      marginRight: 50,
      textDecoration: "none",
      color: "#ffffff",
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
  },
});

const HeaderButtons = () => {
  const classes = usestyle();
  const [open, setOpen] = useState(false);
  const {account,setAccount}=useContext(LoginContext);

  const openLoginDialog = () => {
    setOpen(true);
  };
  return (
    <Box className={classes.wrapper}>
     { 
     account ? <Profile account={account} setAccount={setAccount}></Profile>:
       <Link>
        {" "}
        <Button
          variant="contained"
          onClick={() => openLoginDialog()}
          className={classes.login}
        >
          Login
        </Button>
      </Link>
}

      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={4} color="primary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount}/>
    </Box>
  );
};
export default HeaderButtons;