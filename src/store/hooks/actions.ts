import { productActions } from './../product/product.slice';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";

const actions = {
  ...productActions,
}

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}