import { combineReducers } from "redux";

import UserReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
export default combineReducers({
    user: UserReducer , 
    cart: cartReducer
}); 