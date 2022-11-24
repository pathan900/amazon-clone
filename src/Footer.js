import React from 'react'
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="top_footer">
                Back to top
            </div>
            <div class="center_footer">
                <div className="part_1">
                    <h3>Get to Know Us</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Press Release</p>
                    <p>Amazon Cares</p>
                    <p>Gift a Smile</p>
                </div>
                <div className="part_1">
                    <h3>Contact with Us</h3>
                    <p><FacebookIcon />Facebook</p>
                    <p><TwitterIcon />Twitter</p>
                    <p><InstagramIcon />Instagram</p>
                </div>
                <div className="part_1">
                    <h3>Make Money with Us</h3>
                    <p>Sell on Amazon</p>
                    <p>Sell under Amazon</p>
                    <p>Become an Affiliate</p>
                    <p>Fulfilment by Amazon</p>
                    <p>Advertise Your Products</p>
                    <p>Amazon Pay on Merchants</p>
                </div>
                <div className="part_1">
                    <h3>Let Us Help You</h3>
                    <p>COVID-19 and Amazon</p>
                    <p>Your Account</p>
                    <p>Returns Centre</p>
                    <p>100% Purchase Protection</p>
                    <p>Help</p>
                </div>
            </div>
            <div className="bottom_footer">
            <Link to="/">
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <p>Australia Brazil Canada China France Germany Italy Japan Mexico Netherlands Singapore Spain United Arab Emirates United Kingdom United States</p>
            </div>
        </div>
    )
}

export default Footer;
