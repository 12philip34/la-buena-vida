import React from 'react';
import style from './style.module.css'

const Testimonies = () => {

    return (
        <div>
            <h1 className={style.testimonyHead} data-aos="fade-up">What our connector has to say.</h1>
            <div className={style.testimonies}>
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className={style.card}>
                                <span>
                                    <label>
                                        <h4>
                                            VINCENT, NWOSU
                                        </h4>
                                    </label>
                                    <h3 data-aos="fade-up">
                                        Wow yesterday
                                        I just got funded again
                                    </h3>
                                    <p data-aos="fade-up">
                                        I am an engineer by profession, and I am also a creative writer,
                                        editor, and a blogger by practice. Five months ago,
                                        I joined C21FG and during these five months
                                        I have been able to achieve tremendous success
                                        and I also have been able to setup my personal business.
                                        The good part is that they keep on giving me more money.
                                    </p>
                                    <p data-aos="fade-up" >
                                        I  would recommend this company to both the young and old people even
                                        if you are a corps member because I joined when I was a corps member.
                                    </p>
                                    <p data-aos="fade-up" >
                                        The best part of it is that you are not working for anybody.
                                        It is a company that helps you to be your own boss and travel
                                        whenever and wherever you want because you have the means to do so.
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className={style.card}>
                                <span>
                                    <label>
                                        <h4>
                                            VINCENT, NWOSU
                                        </h4>
                                    </label>
                                    <h3 data-aos="fade-up" >
                                        Unbelievable but real
                                    </h3>
                                    <p data-aos="fade-up" >
                                        I have different backgrounds with computer science, and I have been
                                        a banker for years in about a decade now. With all the experiences
                                        I have had, I never understood what it meant to be financially free
                                        till I learnt about C21FG. This company have not only given me a way
                                        to survive but a way to live out my full potentials.

                                    </p>
                                    <p data-aos="fade-up" >
                                        Within seven months of joining this opportunity I was funded with over
                                        1.4 million naira to start my personal business without relying on anybody.
                                        This also has enabled to resign from my 9am – 7pm job where I worked all
                                        round the clock, not having much to show for it.
                                    </p>
                                    <p data-aos="fade-up" >
                                        To the glory of God today, I work when I want because
                                        I accepted this opportunity which was presented by this company.
                                        This opportunity has enabled me to be where I am today,
                                        and I urge everyone who really want something great out of
                                        life to take advantage of this opportunity and build
                                        something big for themselves.Thank you C21FG!!!”
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className={style.card}>
                                <span>
                                    <label>
                                        <h4>
                                            VINCENT, NWOSU
                                        </h4>
                                    </label>
                                    <h3 data-aos="fade-up">
                                        The sky is my limit
                                    </h3>
                                    <p>
                                        I am a connector with C21FG. I just joined the campaign,
                                        and within three months I had received over six hundred thousand naira.
                                        It was a good thing for me because at the beginning of this year
                                        I was owing over five hundred thousand naira.
                                    </p>
                                    <p data-aos="fade-up">
                                        I did not know where to get that amount of money because I had
                                        lost my job and there was no other source of income.
                                        I decided to take this company serious and in about three months,
                                        I was funded with about six hundred thousand naira.
                                    </p>
                                    <p data-aos="fade-up">
                                        Now that I am in my eight to nine months with this company,
                                        I was given even more than two million naira.
                                        At this point in my life I know that
                                        I can achieve anything I set my mind to do.
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
};
export default Testimonies;