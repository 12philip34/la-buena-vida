import React from "react";
import style from './style.module.css'
import Slide1 from '../../Images/slide1.jpg'
import Slide2 from '../../Images/confren.jpg'
import Slide3 from '../../Images/twoladies.jpg'
import Slide4 from '../../Images/slide4.png'
import Slide5 from '../../Images/slide5.jpeg'

const Slider = () => {

    return (
        <div>
             <div className={style.SliderContainer}>
             <div className={style.sliderBox}>
                    <span data-aos="fade-up"><h1>Living the good life.</h1></span>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <img src={Slide1} className={style.slideImg} alt="whoweare/Images.png" />
                            </div>
                            <div className="carousel-item">
                                <img src={Slide2} className={style.slideImg} alt="whoweare/Images.png" />
                            </div>
                            <div className="carousel-item active">
                                <img src={Slide3} className={style.slideImg} alt="whoweare/Images.png" />
                            </div>
                            <div className="carousel-item">
                                <img src={Slide4} className={style.slideImg} alt="whoweare/Images.png" />
                            </div>
                            <div className="carousel-item">
                                <img src={Slide5} className={style.slideImg} alt="whoweare/Images.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;