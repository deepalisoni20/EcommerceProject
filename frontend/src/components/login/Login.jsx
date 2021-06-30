import { useState } from "react";
import { authenticateSignup, authenticateLogin } from '../../service/api';

import {
  Dialog,
  DialogContent,
  makeStyles,
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from "@material-ui/core";

const usestyle = makeStyles({
  component: {
    height: "85vh",
    width: "95vh",
  },
  text: {
    fontWeight: 600,
    textAlign: "center",
  },
  login: {
    
    padding: "25px 35px",
    display: "flex",

    flex: 1,
    flexDirection: "column",
    "& > *": {
      marginTop: 20,
    },
  },
  terms: {
    color: "#878787",
    fontSize: 12,
    margin: "10px 10px",
  },
  loginbtn: {
    backgroundColor: "#f44336",
    width: "40%",
    margin: '30px 30px 30px 150px',
    fontWeight: 600,
    textTransform: "none",
  },
  createtext: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: 15,
    color: " #f44336",
    cursor: "pointer",
  },
  signbtn: {

    backgroundColor: "#f44336",
    width: "40%",
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "2px",
    marginLeft: '125px',
    fontWeight: 600,
    textTransform: "none",

  },
  error: {
    fontSize: 10,
    color: '#ff6161',
    marginTop: 0,
    fontWeight: 600
  }
});

const initialValue = {
  login: {
    marginTop: 100,
    view: 'login',
    heading: 'Login To Begin'
  },
  signup: {
    view: 'signup',
    heading: 'Register Yourself To Begin'
  }
}
const signupInitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: ''
}
const loginInitialValues = {
  username: '',
  password: '',
}
const Login = ({ open, setOpen, setAccount }) => {
  const classes = usestyle();

  const [account, toggleAccount] = useState(initialValue.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(initialValue.login)
  }

  const toggleUserAccount = () => {
    toggleAccount(initialValue.signup)
  }

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.username)
  }

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (!response) {
      setError(true)
      return;
    }
    handleClose();
    setAccount(login.username)
  }

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value })
    console.log(signup);
  }
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })

  }
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent
        className={classes.component}
        style={{ backgroundColor: "#ffffff" }}
      >
        <Box style={{ display: "flex" }}>
          <Typography
            variant="h5"
            className={classes.text}
            style={{ marginTop: 20 }}
          >
            {account.heading}
          </Typography>
        </Box>
        {account.view === "login" ? (
          <Box className={classes.login}>
            <TextField onChange={((e) => onValueChange(e))}
              variant="outlined"
              name="username"
              label="Enter your username"
            />
            <TextField onChange={((e) => onValueChange(e))}
              variant="outlined"
              name="password"
              label="Enter your Password"
            />
            {error && <Typography className={classes.error}>Invalid username or password</Typography>}
            <Link href="#" variant="body2" style={{ marginTop: 10 }}>
              Forgot password?
            </Link>

            <Typography className={classes.terms}>
              By continuing,you agree to our terms and conditions.
            </Typography>
            <Button variant="contained" className={classes.loginbtn} onClick={() => loginUser()} >
              Login
            </Button>
            <Typography className={classes.createtext} onClick={() => toggleUserAccount()}>
              New to Megamart?Create an account.
            </Typography>
          </Box>
        ) : (
          <Box className={classes.login}>
            <TextField onChange={(e) => onInputChange(e)}
              variant="outlined"
              name="firstname"
              label="Enter your firstname"
            />
            <TextField onChange={(e) => onInputChange(e)}
              variant="outlined"
              name="lastname"
              label="Enter your lastname"
            />
            <TextField onChange={(e) => onInputChange(e)}
              variant="outlined"
              name="username"
              label="Enter your username"
            /><TextField onChange={(e) => onInputChange(e)}
              variant="outlined"
              name="email"
              label="Enter your email id"
            />
            <TextField onChange={(e) => onInputChange(e)}
              variant="outlined"
              name="password"
              label="Enter your Password"
            /> <TextField onChange={(e) => onInputChange(e)}
              variant="outlined"
              name="phone"
              label="Enter your mobile number"
            />

            <Button variant="contained" className={classes.signbtn} onClick={() => signupUser()}>
              SignUp
            </Button>

          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};
export default Login;