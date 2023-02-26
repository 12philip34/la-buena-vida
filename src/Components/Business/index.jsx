import React from "react";
import style from './style.module.css'
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';
import FundedImg from '../../Images/funded.png'
import BusinessImg from '../../Images/business.png'

const Business = () => {
    return (
        <div>
            <div className={style.businessBox}>
                <h1 data-aos="fade-up">Business Idea</h1>
                <div className={style.businessGrid}>
                    <div className={style.leftBusiness} data-aos="fade-up">
                        <img src={BusinessImg} alt="business.png" />
                    </div>
                    <div className={style.rightBusiness}>
                        <h2 data-aos="fade-up">
                            We can help that Business Idea that will enable us make you a Connector,
                            through our time tested program that includes:
                        </h2>
                        <ul data-aos="fade-up">
                            <li>
                                <CheckCircleTwoToneIcon /> A 4 - week training programme for those selected, delivered by our experts
                            </li>
                            <li>
                                <CheckCircleTwoToneIcon /> Weekly Professional Mentoring Meetings
                            </li>
                            <li><CheckCircleTwoToneIcon />Specially Curated Add-on Trainings</li>
                            <li><CheckCircleTwoToneIcon />Free Training on our Favorite Tools</li>
                            <li><CheckCircleTwoToneIcon />Free Live Events</li>
                            <li><CheckCircleTwoToneIcon />Fully Sponsored Local and Foreign trips</li>
                            <li><CheckCircleTwoToneIcon />And Surprise bonuses</li>
                        </ul>
                        <span></span>
                    </div>
                </div>
            </div>
            <div className={style.businessFund}>
                <div className={style.leftFunded}>
                    <h2 data-aos="fade-up">
                        The most exciting day in a person's life is when they see their business idea get funded
                    </h2>
                    <p data-aos="fade-up">
                        In order to get there, you need to be a connector and allow us show you how to fund your business ideas

                        Because when you get funded through us, we become winners with you. Do you want to know how? Book an appointment with one of our experts by clicking on the <a href="#link">link</a>.
                    </p>
                </div>
                <div className={style.rightFunded} data-aos="fade-up">
                    <img src={FundedImg} alt="FundedImg.png" />
                </div>
            </div>
        </div>
    )
}

export default Business;