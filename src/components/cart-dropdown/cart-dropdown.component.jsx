import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect, Connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import './cart-dropdown.styles.scss';

const CartDropdown= ({cartItems , history , dispatch}) =>(

    <div className="cart-dropdown">
        
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />) :
                <span className="empty-message">your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>
            Go To CheckOut </CustomButton>

    </div>

);

const mapDispatchToProps = createStructuredSelector({
    cartItems : selectCartItems
})

export default withRouter(connect(mapDispatchToProps)(CartDropdown));