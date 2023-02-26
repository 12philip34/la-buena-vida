import React from "react"
import style from './style.module.css'
import About from '../../Images/about.png'
import Fund from '../../Images/fund.png'
import Error from '../../Images/error.png'
import Venue from '../../Images/venue.png'
import Time from '../../Images/time.png'
import Payment from '../../Images/payment.png'
import Start from '../../Images/start.png'

const FAQ = () => {

    return (
        <div>
            <h1 className={style.faqHead} data-aos="fade-up">Questions Asked!</h1>
            <div className={style.grid}>
                <span className={style.textBox}>
                    <h2 data-aos="fade-up">What is C21FG all About?</h2>
                    <p data-aos="fade-up">
                        At Century 21 Freedom Group, we fully understand the obstacles that
                        inhibit people from realizing their business goals and we provide
                        practical approaches to help them attain time, health and financial freedom.
                        We train selected and open minded Nigerians on alternative
                        ways to generate cash flow for their personal project/business
                        without borrowing from the bank
                    </p>
                </span>
                <span className={style.imgBox} data-aos="fade-up">
                    <img src={About} alt="" />
                    <span className={style.span}></span>
                </span>
            </div>
            <div className={style.grid}>
                <span className={style.imgBox} data-aos="fade-up">
                    <img src={Fund} alt="" />
                </span>
                <span className={style.textBox}>
                    <h2 data-aos="fade-up">Why are we funding your projects and business ideas?</h2>
                    <p data-aos="fade-up">
                        This is because the old and traditional ways of funding private
                        business ideas have become difiicult if not impossible due the
                        requirements of banks and other financial institutions for
                        adequate collacteral from the applicants. So, C21FG is here to simply mitigate this crisis.
                    </p>
                </span>
            </div>
            <div className={style.grid}>
                <span className={style.textBox}>
                    <h2 data-aos="fade-up">Is this a scam or a ponzi scheme?</h2>
                    <p data-aos="fade-up">
                        The answer is No. We do not believe in get rich quick programs.
                        We believe in hard work, adding value and dedication to reach your goals.
                        We believe also in helping you through our time tested
                        and well proven system to build your wealth in a systematic and steady manner.
                        Our training programs are intended to help you expand, fund your
                        project or business ideas whilst growing your current business.
                        We are here to help and guide you to move forward faster by giving
                        you awesome trainings, direction and strategies to reach your goal.
                    </p>
                    <span className={style.span}></span>
                </span>
                <span className={style.imgBox} data-aos="fade-up">
                    <img src={Error} alt="" />
                </span>
            </div>
            <div className={style.grid}>
                <span className={style.imgBox} data-aos="fade-up">
                    <img src={Venue} alt="" />
                </span>
                <span className={style.textBox}>
                    <h2 data-aos="fade-up">Where is the Venue?</h2>
                    <p data-aos="fade-up">
                        For those that have been selected, Please check the booking
                        details that was either emailed to you or the sms sent to your mobile phone number
                    </p>
                </span>
            </div>
            <div className={style.grid}>
                <span className={style.textBox}>
                    <h2 data-aos="fade-up">How long is this opportunity going to last?</h2>
                    <p data-aos="fade-up">
                        We don't know how long this program is going to last as the
                        number of people coming to us is growing daily. Opportunities like this are very rare to comeby.
                    </p>
                </span>
                <span className={style.imgBox} data-aos="fade-up">
                    <img src={Time} alt="" />
                    <span className={style.span}></span>
                </span>
            </div>
            <div className={style.grid}>
                <span className={style.imgBox} data-aos="fade-up">
                    <img src={Payment} alt="" />
                </span>
                <span className={style.textBox}>
                    <h2 data-aos="fade-up">Am I Paying for this Meeting?</h2>
                    <p data-aos="fade-up">
                        The answer is No. We just need to have a meeting with you offer more clearifications and answer your questions.
                    </p>
                </span>
            </div>
            <div className={style.grid}>
                <span className={style.textBox} data-aos="fade-up">
                    <h2 data-aos="fade-up">How do i get started?</h2>
                    <p data-aos="fade-up">
                        Click on the button below or above and book a Meeting with us
                        These are so many things we would love to tell you. All you need to do is to just take a step with us.
                    </p>
                    <span className={style.span}></span>
                </span>
                <span className={style.imgBox}>
                    <img src={Start} alt="" />
                </span>
            </div>
        </div>
    )
}

export default FAQ;