import axios from 'axios';
import * as actionTypes from '../constants/productConstant';

const url = 'http://localhost:8000';


export const getProducts = () => async (dispatch) => {                         // getting products from database
   try {
      const { data } = await axios.get(`${url}/products`);                       // api call   destucturing data
      dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });            // state update using dispatch

   } catch (error) {
      dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: error.response });
   }
}


export const getProductDetails = (id) => async (dispatch) => {                               //getting product Details from Database
   try {
      const { data } = await axios.get(`${url}/product/${id}`);
      dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });

   } catch (error) {
      dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.response });
   }
}