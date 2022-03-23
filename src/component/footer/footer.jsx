import React from 'react';
import classes from './footer.module.css'
import {FaFacebookF,FaTwitter, FaInstagram, FaWhatsapp, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <div className={classes.left}>
                <h3 className={classes.title}>Dapur Kita</h3>
                <ul>
                    <li><a href="#">Tentang kami</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Berita / promo</a></li>
                </ul>
            </div>
            <div className={classes.leftmiddle}>
            <h3 className={classes.title}>Bantuan dan Panduan</h3>
                <ul>
                    <li><a href="#">Bantuan</a></li>
                    <li><a href="#">Kebijakan Privacy</a></li>
                    
                </ul>
            </div>
            <div className={classes.rightmiddle}>
            <h3 className={classes.title}>Media Sosial</h3>
                <ul className={classes.social}>
                    <li><a href="#"><FaFacebookF/></a></li>
                    <li><a href="#"><FaInstagram/></a></li>
                    <li><a href="#"><FaLinkedin/></a></li>
                    <li><a href="#"><FaTwitter/></a></li>
                    <li><a href="#"><FaWhatsapp/></a></li>
                </ul>
            <p>Hubungi Kami</p>
            <ul>
                <li><span>Customer Service daputkita</span></li>
                <li><span>Whatsapp : 082340648926</span></li>
                <li><span>Email : dapurkita@gmail.com</span></li>
            </ul>
            </div>
            <div className={classes.right}>
            <h3 className={classes.title}>Download App</h3>


            </div>
        </div>
    </div>
  )
}

export default Footer