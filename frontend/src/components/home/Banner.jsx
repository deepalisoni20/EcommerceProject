import Carousel from 'react-material-ui-carousel';
import { bannerData } from "../../constants/data";
import { makeStyles } from '@material-ui/core';
const usestyle = makeStyles({
    image:{
        width:'100%',
        height: 400
        
    }
    
})

const Banner=()=>{
    const classes = usestyle();
    return(
<Carousel 
     
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      autoPlay={true}
      autoPlaySpeed={7}
      navButtonsProps={{
          style:{
              backgroundColor:'#212121',
              color:'#ffffff',
          }
      }}
    >
            {
                bannerData.map( (image) =>
                ( <img src={image} className={classes.image}/>
                     ))
            }
        </Carousel>
    )
}
 export default Banner;