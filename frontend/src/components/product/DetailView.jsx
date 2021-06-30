import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from '../../redux/actions/productActions';
import { Box, makeStyles, Typography, TableBody, TableCell, TableRow } from "@material-ui/core";
import clsx from 'clsx';
import ActionItems from "./ActionItems";


const usestyle = makeStyles({
    component: {
        marginTop: 55,
        backgroundColor: '#f2f2f2'//will change later if req
    },
    container: {

        margin: '10px 80px',
        background: '#fff',
        display: 'flex'
    },
    rightContainer: {
        marginLeft: 50,
        width: '500px',
        marginTop: 50,

        '& > *': {
            marginTop: 10
        }
    },
    delivery: {
        fontWeight: 400 ,
        fontSize: 20,
        fontStyle: 'Bold',
        color: '#43a047'
    },
    smallText: {
        marginBottom: 30,
        fontSize: 16,
        verticalAlign: 'baseline',
        '& > *': {
            fontSize: 14,
            marginTop: 10
        }
    },
    name: {
        fontWeight: 500 ,
        marginTop: 50,
        marginBottom: 30,
        fontSize: 24,
        fontStyle: 'Bold',
        color: '#01579b'
    },
    greyTextColor: {
        marginBottom: 30,
        color: '#878787'
    },
    greyText: {
       
            marginRight: 7,
     
    },
    available:{
        fontWeight: 400 ,
        marginTop: 30,
        fontSize: 20,
        fontStyle: 'Bold',
        color: '#512da8'
    }

})


const DetailView = ({ match }) => {
    const classes = usestyle();
    const { product } = useSelector(state => state.getProductDetails);

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getProductDetails(match.params.id));

    }, [dispatch, match.params.id])

    return (
        <Box className={classes.component}>
            {product && Object.keys(product).length &&
                <Box className={classes.container}>
                    <Box >
                        <ActionItems product={product} />
                    </Box>
                    <Box className={classes.rightContainer}>
                        <Typography className={classes.name}>{product.title.longTitle}</Typography>
                        <Typography className={clsx(classes.smallText, classes.greyTextColor)}>7 ratings and 1 review
                        </Typography>
                        <Typography>
                            <span style={{ fontWeight: 700 ,fontSize: 20, marginLeft: 7, marginRight: 7}}>₹{product.price.cost}</span>
                            <span className={classes.greyText}><strike>₹{product.price.mrp}</strike></span>
                            <span style={{ color: '#388E3C' }}>{product.price.discount}off</span>
                        </Typography>
                        <Typography className={classes.available}> Available offers</Typography>
                        <Box className={classes.smallText}>
                            <Typography>Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                            <Typography>Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</Typography>
                            <Typography>Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
                            <Typography>Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
                        </Box>
                        <TableBody>
                            <TableRow >
                                <TableCell className={classes.delivery}>Delivery</TableCell>
                                <TableCell>{date.toDateString()}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Box>
                </Box>
            }
        </Box>
    )
}

export default DetailView;