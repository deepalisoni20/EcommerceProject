import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import Countdown from "react-countdown";

import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const usestyle = makeStyles({
  component: {
    marginTop: 12,
    backgroundColor: "#ffffff",
  },
  image: {
    height: 150,
  },
  deal: {
    padding: "15px 20px",

    display: "flex",
  },
  dealtext: {
    fontWeight: 600,
    fontSize: 24,
  },
  timer: {
    marginLeft: "10px",
    display: "flex",
    alignItems: "center",
  },
  button: {
    marginLeft: "auto",
    backgroundColor: "#f44336",
    color: "#ffffff",
    fontSize: 13,
  },
  text: {
    fontSize: 15,
    fontWeight: 600,
  },
  wrapper: {
    padding: "30px 13px",
  },
});

const Slide = ({ timer, title, products }) => {
  const classes = usestyle();
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span className={classes.timer}>
        {hours}:{minutes}:{seconds}Left
      </span>
    );
  };
  return (
    <Box className={classes.component}>
      <Box className={classes.deal}>
        <Typography className={classes.dealtext}>{title}</Typography>
        {
          timer &&
          //react.fragment can also be writtenlike empty brackets
          <>
            <img src={timerURL} style={{ width: 24 }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
            <Button  variant="outlined" color="secondary" className={classes.button} > View more </Button>
          </>
        }
      </Box>
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoPlay={true}
        autoPlaySpeed={6000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {

          products.map(product=> (

            <Link to={`product/${product.id}`}>
              <Box textAlign="center" className={classes.wrapper}>
                <img src={product.url} className={classes.image} />
                <Typography className={classes.text}>
                  {product.title.shortTitle}
                </Typography>
                <Typography className={classes.text} style={{ color: "#689f38" }}>
                  {product.discount}
                </Typography>
                <Typography className={classes.text} style={{ color: "#d50000" }}>
                  {product.tagline}
                </Typography>
              </Box>
            </Link>
          ))
        }
      </Carousel>
    </Box>
  )
}


export default Slide;