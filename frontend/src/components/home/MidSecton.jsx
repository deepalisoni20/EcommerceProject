import { imageURL } from "../../constants/data";
import { Box } from "@material-ui/core";
import { makeStyles, mergeClasses } from "@material-ui/styles";

const usestyle=makeStyles({
    wrapper:{
        display:'flex',
        marginTop:20,
        justifyContent:'space-between'
        
    }
})
 const MidSection=()=>{
     const classes=usestyle();
     return(
         <Box className={mergeClasses.wrapper}>
             {
                 imageURL.map(image=>(
                     <img src={image} style={{width:"33%"}}/>
                 ))
             }
         </Box>
     )
 }
export default MidSection;