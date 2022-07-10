import React from "react";
import './header.styles.scss';

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

// const Header = () => (
const Header = ({currentUser , hidden}) => (

    <div className="header">

        <Link className="logo-container" to = "/">
            <Logo className="logo" />
        </Link>

        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            <Link className="option" to="/signin">SIGN IN</Link>
            <CartIcon/>
        </div>
        {
            hidden ? 
            null   :   <CartDropdown />
        }
    </div>

);

// const mapStateToProps = state =>({
//     currentUser:state.user.currentUser
// });

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
});

export default connect(mapStateToProps)(Header);