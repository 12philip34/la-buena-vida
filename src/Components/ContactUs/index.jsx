import React from "react";
import  style from './style.module.css'

const ContactUs = () => {

    return (
        <div>
            <div className={style.contactGrid}>
                <div className={style.leftContact}>
                    <h1 data-aos="fade-up">Let's Connect</h1>
                </div>
                <div className={style.rightContact}>
                    <h2 data-aos="fade-up">let's know better.</h2>
                    <form>
                        <span>
                            <label htmlFor="name" data-aos="fade-up">Name</label>
                            <input type="text" id="name" data-aos="fade-up" required/>
                        </span>
                        <span>
                            <label htmlFor="email" data-aos="fade-up">Email</label>
                            <input type="email" id="email" data-aos="fade-up" required/>
                        </span>
                        <span>
                            <label htmlFor="phoneNumber" data-aos="fade-up">PhoneNumber</label>
                            <input type="tell" id="phoneNumber" data-aos="fade-up" required/>
                        </span>
                        <button><a href="" data-aos="fade-up">let's Connect</a></button>
                        <small data-aos="fade-up">We respect your privacy. Unsubscribe at anytime.</small>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs;