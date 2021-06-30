import {AppBar,Toolbar,makeStyles} from '@material-ui/core';
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';
import { Link } from 'react-router-dom';

const usestyles = makeStyles({
    header:{
        backgroundColor:'#ff1744',
        height: 70  

    },
    logo:{
        width:200,
        

    }
});



 const Header=()=>{
     const classes = usestyles();
     const logourl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPKifCKc9P24xx2I2di8A0FdGA4D6_w0QGvlcfsRxF_6MPT3wh7MhtHe0JZGVC1vCNLw&usqp=CAU"

     return(
         <AppBar className={classes.header}>
             
             <Toolbar>
                 <Link to ='/' >
                 <img src={logourl} className={classes.logo}></img>
                 </Link>
                 <SearchBar/>
                 <HeaderButtons/>
                 </Toolbar>
                 
         </AppBar>
     )
 }
 export default Header;