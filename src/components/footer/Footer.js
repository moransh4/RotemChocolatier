import React from 'react';
import './footer.scss';
import facebookIcon from './images/facebook-icon.png';
import instagramIcon from './images/instagram-icon.png';
import mailIcon from './images/mail-icon.png';
import whatsappIcon from './images/whatsapp-icon.png';
import callIcon from './images/call-icon.png';

const Footer = () => {

    return (
        <div className='footer'>
            <div className='media-wrapper'>
                <div class="mail"><a aria-label="send mail" target="_blank" rel="noreferrer"
                    href="mailto:Rotemfri1@gmail.com">
                    <img alt="mail" src={mailIcon} /></a></div>
                <div class="call"><a aria-label="Make a call" target="_blank" rel="noreferrer"
                    href="tel:+972504711139">
                    <img alt="call icon" src={callIcon} /></a></div>
                <div class="facebook"><a aria-label="facebook page" target="_blank" rel="noreferrer"
                        href="https://www.facebook.com/profile.php?id=100087858710634&mibextid=ZbWKwL"><img
                            alt="facebook" src={facebookIcon} /></a></div>
                <div class="whatapp"><a aria-label="Chat on WhatsApp" target="_blank" rel="noreferrer"
                        href="https://wa.me/+972504711139?text=%D7%A9%D7%9C%D7%95%D7%9D%20%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%90%D7%9C%D7%99%D7%9A%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%A8%D7%95%D7%A6%D7%94%20%D7%9C%D7%91%D7%A8%D7%A8%20%D7%91%D7%A7%D7%A9%D7%A8%20%D7%9C%D7%A1%D7%93%D7%A0%D7%94">
                        <img alt="WhatsApp" src={whatsappIcon} /></a></div>
                <div class="instagram"><a aria-label="instagram link" target="_blank" rel="noreferrer"
                    href="https://instagram.com/rotem_sharabi2?igshid=NGExMmI2YTkyZg==">
                    <img alt="instagram" src={instagramIcon} /></a></div>      
            </div>
        </div>
    );
};

export default Footer;




