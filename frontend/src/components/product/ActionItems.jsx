import {Button,Box,makeStyles} from"@material-ui/core";
import { ShoppingCart as Cart } from "@material-ui/icons";
import { FlashOn as Flash} from "@material-ui/icons";


const useStyle = makeStyles({
    leftContainer:{
        minWidth: '50%',
        padding:'40px 0 0 80px'

    },
    image:{
        marginTop: 25,
        padding:'15px 20px',
        width:'85%'
    },
    button:{
        width:'46%',
        height:50,
        margin: 5,
        marginLeft: 14,
        backgroundColor: '#ef5350'
        //give backgound colors AFTERWARDS
    }
    //GIVE COLORS AND CSS TO BUTTON aftrwars


})
const ActionItems=({product})=>{
    const classes=useStyle();
    return(
        <Box className={classes.leftContainer}>
            <img src={product.url} className={classes.image}/>
            <Button variant="contained" className={classes.button}><Cart/>Add to Cart</Button>
            <Button variant="contained" className={classes.button}><Flash/>Buy Now</Button>
        </Box>

    )
}
 export default ActionItems;