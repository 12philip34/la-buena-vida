import React from "react";
import style from './style.module.css'
import Naira from '../../Images/cash.png'
import People from '../../Images/profile.png'
import Million from '../../Images/million.png'

const WhoElse = () => {
    return (
        <div>
            <div className={style.whoElseBox}>
                <h1 data-aos="fade-up">"BE PART OF SUCCCESS"</h1>
                <div className={style.whoElseGrid}>
                    <span>
                        <div className={style.bgEffect}></div>
                        <label data-aos="fade-up">
                            <img src={Naira} alt="Naira.png" />
                        </label>
                        <h3 data-aos="fade-up">Over NGN 145 billion</h3>
                        <p data-aos="fade-up">
                            Over NGN 145,000,000,000 has been paid out to our connectors here in Abuja. That’s a lot of zeros!
                        </p>
                    </span>
                    <span>
                    <div className={style.bgEffect}></div>
                        <label data-aos="fade-up">
                            <img src={People} alt="People.png" />
                        </label>
                        <h3 data-aos="fade-up">100,000+ Millionaires</h3>
                        <p data-aos="fade-up">
                            We’re excited to say that C21FG has created more than 100,000 millionaires. The unique system we employ has made this possible
                        </p>
                    </span>
                    <span>
                    <div className={style.bgEffect}></div>
                        <label data-aos="fade-up">
                            <img src={Million} alt="Million.png" />
                        </label>
                        <h3 data-aos="fade-up">500,000+ People</h3>
                        <p data-aos="fade-up">
                            More than 500,000 people have found success on our platform and we want you to be one of them!
                        </p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default WhoElse;