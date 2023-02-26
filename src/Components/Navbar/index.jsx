import React from "react";
import style from './style.module.css'
import Logo from '../../Images/Logo.png'

const Navbar = () => {

    return (
        <div>
             <div className={style.navbar}>
               <span data-aos="fade-up">
                <img src={Logo} alt="Logo" />
               </span>
               <span className={style.btnNav}>
                    <button data-aos="fade-up">
                        <a href="https://web.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=https%3A%2F%2Fc21fg.org%2F&display=popup&ref=plugin&src=share_button" target="_blank">Share</a>
                    </button>
                    <button data-aos="fade-up">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeEE9u_kxKWD0deGX4xfRBDIt1yvMvH7g8OE3i67RqUWCEZKQ/viewform" target="_blank">Become a connector</a>
                    </button>
               </span>
            </div>
        </div>
    )
}

export default Navbar;