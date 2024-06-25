import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import './navigation.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const handleSignOut = () => {
        signOutUser();
    };

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={handleSignOut}>
                                SIGN OUT
                            </span>
                        ) : (
                            <Link className="nav-link" to="/auth">
                                SIGN IN
                            </Link>
                        )
                    }
                    <CartIcon />
                </div>
            </div>
            { isCartOpen ? <CartDropdown /> : null }
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
