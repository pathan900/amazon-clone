import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider'
import { auth } from './firebase';


function Header() {
    const [{ basket, user}, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
            console.log("user hellooo") 
        }
    }
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            <div className="header_search">
                <input type="text" className="header_searchinput" placeholder="Search" />
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to={!user && "/login"}>
                    <div className="nav" onClick={handleAuthentication}>
                        <span className="nav_line1">Hello {!user? "user" : user.email}</span>
                        <span className="nav_line2">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>

                <div className="nav">
                    <span className="nav_line1">Returns</span>
                    <span className="nav_line2">Orders</span>
                </div>
                <div className="nav">
                    <span className="nav_line1">Tour</span>
                    <span className="nav_line2">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="nav_basket">
                        <ShoppingCartIcon />
                        <span className="nav_line2 basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header;
