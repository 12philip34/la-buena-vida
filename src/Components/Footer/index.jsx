import React from 'react'
import style from './style.module.css'
import footerImg from '../../Images/logo-footer.png'

const Footer = () => {

    return (
        <div>
            <div className={style.footerBox}>
                <img src={footerImg} alt="footerImg" />
                <div className={style.paragraph}>
                    <p>
                        This site is not a part of the Facebook website or Facebook INC.
                        Additionally, this site is NOT endorsed by Facebook in ANY WAY.
                        Facebook is a trademark of Facebook INC. You understand this to be
                        an expression of opinions and not professional advice.
                        You are solely responsible for the use of any content and hold C21FG
                        and all members harmless in any event or claim. You can also safely
                        assume that I get funded anytime you click on a link on this site.
                    </p>
                    <p>
                        Disclaimer: We do NOT believe in get rich quick programs. We believe in hard work,
                        adding value and dedication to reach your goals. It's a fact that one that does
                        not take action will see no results whatsoever. The testimonials featured on
                        this page are not the norm and are extraordinary results from hard work,
                        commitment and dedication by following through and taking action.
                        You will get no results whatsoever if you assume by soaking up information products,
                        joining program after program your life will change with riches. This is not for you.
                        Your results are based upon your actions.
                    </p>
                    <p>
                        If you want a magic button that will fulfil your life with riches
                        then please leave this page and do NOT sign up, purchase or book a Meeting with us.
                        Our training programs are intended to help you expand, fund your project
                        or business ideas whilst growing your current business. We don't
                        make any guarantees about your own results because we don't know you.
                        Results in life are solely based on decisions made. We are here to help
                        and guide you to move forward faster by giving you awesome trainings,
                        direction and strategies to reach your end goal.
                    </p>
                </div>
                <span>Copyright © 2020 C21FG All rights reserved.</span>
                <label><a>Privacy Policy</a></label>
            </div>
        </div>
    )
}

export default Footer;