import React from "react";
import { connect, Connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { selectCartItems , selectCartTotal} from "../../redux/cart/cart.selectors";

import './checkout.styles.scss';

const CheckOutPage = ({cartItems , total})=>(

    <div className="checkout-page">
        <div className="checkout-header">

            <div className="header-block">
                
                <span>
                    Product
                </span>
                
            </div>

            <div className="header-block">
                
                <span>
                    Desciption
                </span>
                
            </div>

            <div className="header-block">
                
                <span>
                    Quantity
                </span>
                
            </div>

            <div className="header-block">
                
                <span>
                    Price
                </span>
                
            </div>

            <div className="header-block">
                
                <span>
                    Remoev
                </span>
                
            </div>

        </div>

        {
            cartItems.map(cartItem =>(

                <CheckOutItem key={cartItem.id} cartItem={cartItem} />

            ))
        }

        <div className="total">
            <span>TOTAL : ${total}</span>
        </div>
        
    </div>

);

const mapDispatchToProps = createStructuredSelector({
    cartItems:selectCartItems , 
    total : selectCartTotal
});

export default connect(mapDispatchToProps)(CheckOutPage);