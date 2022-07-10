import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect, Connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import './cart-dropdown.styles.scss';

const CartDropdown= ({cartItems}) =>(

    <div className="cart-dropdown">
        
        <div className="cart-items">
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton> Go To CheckOut </CustomButton>

    </div>

);

const mapDispatchToProps = state => ({
    cartItems : selectCartItems(state)
})

export default connect(mapDispatchToProps)(CartDropdown);