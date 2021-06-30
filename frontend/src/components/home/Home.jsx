//components

import { Box, makeStyles } from "@material-ui/core";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection";
import { useEffect } from "react";
import { getProducts as listProducts } from '../../redux/actions/productActions'
// import { products } from "../../constants/data";
import { useSelector, useDispatch } from 'react-redux';


const usestyle = makeStyles({
  component: {
    padding: 10,
    backgroundColor: "#ffebee",
  }
});

const Home = () => {
  const classes = usestyle();

  const { products } = useSelector(state => state.getProducts)

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(listProducts())

  }, [dispatch])


  return (
    <div>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
        <Slide timer={true}
          title='Brand New Deals'
          products={products} />
      </Box>
      <MidSection />
      <Slide timer={false}
        title='Discounts'
        products={products} />
      <Slide timer={false}
        title='Bestsellers'
        products={products} />


    </div>
  );
};
export default Home;