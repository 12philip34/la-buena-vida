import React from "react"
import style from './style.module.css'
import PeopleIcon from '@mui/icons-material/People';
import LockOpenIcon from '@mui/icons-material/LockOpen';


const JoinUs = () => {

    return (
        <div className={style.join}>
            <h1 data-aos="fade-up">Become a figure connector</h1>
            <div className={style.joinBox}>
                <span className={style.leftJoin}>
                    <p data-aos="fade-up">
                        I am interested and I want to meet one-on-one with any of your
                        experts who will answer all my questions and explain this
                        opportunity further to me!
                    </p>

                </span>
                <span className={style.rightJoin}>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeEE9u_kxKWD0deGX4xfRBDIt1yvMvH7g8OE3i67RqUWCEZKQ/viewform?usp=pp_url" data-aos="fade-up"> Meet Expert.</a>
                    <label>
                        <span data-aos="fade-up">
                            <PeopleIcon />
                            Get Access to Our Exclusive Community
                        </span>
                        <span data-aos="fade-up">
                            <LockOpenIcon />
                            Instant Access To World-Class Mentors
                        </span>
                    </label>
                </span>
            </div>
        </div>
    )
}

export default JoinUs;