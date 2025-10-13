import React from 'react'
import "./qualification.css"

export const Qualification = () => {
    return (

        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>{" "}Education
                    </div>

                    <div className="qualification__button button--flex">
                        <i className="uil uil-briefcase-alt qualification__icon"  > </i> {" "}Training<br />/Internship
                    </div>

                </div>


                <div className="qualification__sections">
                    <div className="qualification__content">
                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Full Stack Development</h3>
                                <span className="qualification__subtitle">Online Resources  </span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> May-2023-Persent
                                </div>
                            </div>

                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title"> Bachelore Of Technology-CSE</h3>
                                <span className="qualification__subtitle">IK Gujaral Punjab Technical university </span>

                                <span>Prasent
                                    <a href="apna certificate ka link dalo" className="home__social-icon" target="blank">

                                        <i class='bx bx-download'></i>

                                    </a>
                                </span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> (2022-2026)
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Web Development Internship</h3>
                                <span className="qualification__subtitle">Octanet Services Pvt Ltd.  </span>
                                <a href="https://postimg.cc/ft589v85" className="home__social-icon" target="blank">

                                    <i class='bx bx-download'></i>

                                </a>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> June 2024 - July 2024
                                </div>
                            </div>

                        </div>




                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Intermediate Qualification </h3>
                                <span className="qualification__subtitle">Doon Heritage School (West )  </span>
                                <span>Percentage: 87.6
                                    <a href="apna certificate ka link dalo" className="home__social-icon" target="blank">

                                        <i class='bx bx-download'></i>

                                    </a>

                                </span>
                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2019-2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>

                        <div className="qualification__data">

                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">FullStack Development Internship </h3>
                                <span className="qualification__subtitle">Sailket System <br /> Innovate.Elevate.Excel  </span>
                                <a href="apna certificate ka link dalo" className="home__social-icon" target="blank">

                                    <i class='bx bx-download'></i>

                                </a>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> Sept 2025 - Oct 2025
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">

                            <div>
                                <h3 className="qualification__title">Matriculation </h3>
                                <span className="qualification__subtitle">Little Angels' School </span>
                                <span>Percentage: 90.6
                                    <a href="apna certificate ka link dalo" className="home__social-icon" target="blank">

                                        <i class='bx bx-download'></i>

                                    </a>

                                </span>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                        </div>


                        <div className="qualification__data">

                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title"> Web Development Internship</h3>
                                <span className="qualification__subtitle"> Hex Softwares </span>

                                <a href="apna certificate ka link dalo" className="home__social-icon" target="blank">

                                    <i class='bx bx-download'></i>

                                </a>

                                <div className="qualification__calender">
                                    <i className="uil uil-calendar-alt"></i> 15 Sept 2025- 15 Oct 2025
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
