import React, { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { NavContainer, Logo, NavLinks, NavLink }from './navigation.styles.jsx';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const handleSignOut = () => {
        signOutUser();
    };

    return (
        <Fragment>
            <NavContainer>
                <Logo to="/">
                    <CrwnLogo className="logo" />
                </Logo>

                <NavLinks>
                    <NavLink to="/shop">
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={handleSignOut}>
                                SIGN OUT
                            </NavLink>
                        ) : (
                            <NavLink to="/auth">
                                SIGN IN
                            </NavLink>
                        )
                    }
                    <CartIcon />
                </NavLinks>
            </NavContainer>
            {isCartOpen ? <CartDropdown /> : null}
            <Outlet />
        </Fragment>
    );
};

export default Navigation;