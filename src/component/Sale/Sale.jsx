import React from 'react';
import classes from './Sale.module.css';
import img1 from '../../assets/img-4.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import 'slick-carousel/slick/slick-theme.css';
import {FaHeart, FaShoppingCart, FaSearch} from 'react-icons/fa';
import { dataProduk } from './dataproduk';


const Sale = () => {
    let settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll:1,
        cssEase: "linear"
    }
  return (
    <div className={classes.container}>
        <div className={classes.head}>
            <h1 className={classes.header}>Belanja aneka sembako murah</h1>
        <h3 className={classes.subheader}>Selalu sediakan kebutuhan anda di rumah</h3>
        </div>
        <div className={classes.wrapper}>
        <div className={classes.left}>
            <div className={classes.imgContainer}>
            <img src={img1} alt="" />
            </div>
        </div>
        <div className={classes.right}>
            
                <Slider {...settings}>

                    {dataProduk.map((produk, index) => (

                    <div className={classes.card_wrapper} key={produk.id}>
                        <div className={classes.card}>
                            <div className={classes.card_image}>
                            <img src={process.env.PUBLIC_URL + `/produk/gambar${index + 1}.jpg`} alt={produk.name} />
                            </div>
                            <ul className={classes.social_icon}>
                                <li><FaShoppingCart/></li>
                                <li><FaSearch/></li>
                                <li><FaHeart /></li>
                            </ul>
                            <div className={classes.details}>
                                <h3>{produk.name}<span className='title_details'>Juice</span></h3>
                                <h1>Rp. {produk.price}</h1>
                            </div>
                        </div>
                    </div>
                    ))}
                                       
                </Slider>

        </div>
        </div>
    </div>
  )
}

export default Sale