import React, { useState } from 'react';

import { ChevronsRight, ChevronsLeft } from 'react-feather';
import { Button } from 'react-bootstrap';
import './EducationSection.css';

import TabSection from './TabSection';

export default function EducationSection() {
    const [slide, setSlide] = useState(0);

    const schoolSlide = () => {
        console.log('hellow school');
        setSlide(1);
    };

    const collegeSlide = () => {
        setSlide(0);
        console.log('hellow college');
    };
    return (
        <div className="education">
            <div>
                <TabSection />
            </div>
            <div className="education-section">
                <div className="divi1">
                    <Button variant="light" onClick={collegeSlide}>
                        <ChevronsLeft size="40" />
                    </Button>
                </div>
                <div className="divi2">
                    {slide % 2 == 0 ? (
                        <video
                            controls
                            src="/Images/college.mp4"
                            loop
                            className="college-video"
                        />
                    ) : (
                        <img
                            src="/Images/school.jpg"
                            alt="school"
                            className="school-image"
                        />
                    )}
                </div>
                <div className="divi3">
                    <Button variant="light" onClick={schoolSlide}>
                        <ChevronsRight size="40" />
                    </Button>
                </div>
            </div>
            {slide % 2 === 0 ? (
                <div className="heading-content-section">
                    <div className="college-life-learning">
                        <div>
                            <h1 className="about-college">
                                About College Life
                            </h1>
                        </div>
                        <div className="college-content">
                            <p className="text-college">
                                I have completed my computer science Engineering
                                (2016-2020) from DSCE with 9.0 CGPA. In college
                                I not only learned about language and concepts
                                but also participated in many extra activity
                                such as participating in singing competition,
                                organizing inaugration activity which help me in
                                developing my communication,confidence and
                                managerial skills. I also leaned that "making
                                the world a better place" will not only come by
                                working on new ideas or bringing new technology
                                but by modifing the existing technology with the
                                existing knowlede that we have gain.
                            </p>
                        </div>
                    </div>
                    <div className="accomplishment-learning">
                        <div className="accomp-heading">
                            <h1 className="about-accomplishment">
                                Accomplishments in College
                            </h1>
                        </div>

                        <div className="">
                            <ul className="accomplishment-list">
                                <li>
                                    1st position in Computer science department
                                    hackathon in college(Abhayudh) (2017).
                                </li>
                                <li>
                                    1st position in Ideathon in college.(2018)
                                </li>
                                <li>
                                    1st position in ISE department hackathon in
                                    college(hackman) (2018).
                                </li>
                                <li>
                                    2nd position in web development club in
                                    college (2018).
                                </li>
                                <li>
                                    Competitive programming on HackerRank
                                    (Golden Badge,current rank-68653,python
                                    programming){' '}
                                </li>
                                <li>SIH 1ST round qualified (2018)</li>
                                <li>In Top 5 in JU HACKATHON (2019)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="heading-content-section">
                    <div className="college-life-learning">
                        <div>
                            <h1 className="about-college">About School Life</h1>
                        </div>
                        <div className="college-content">
                            <p className="text-college">
                                I have completed my higher secondary and senior
                                secondary (2012-2016) from Rani Laxmi Bai
                                Memorial School. As said the root of any student
                                comes from the school, same was the case for me
                                too. I have learned the fundamental of
                                programming and senior lavel mathematics which
                                taught me how to tackel the problem. My problem
                                solving skills was only the result of my school
                                who not only develop the fundamentals but helped
                                in overall development .
                            </p>
                        </div>
                    </div>
                    <div className="accomplishment-learning">
                        <div className="accomp-heading">
                            <h1 className="about-accomplishment">
                                Accomplishments in School
                            </h1>
                        </div>

                        <div className="school-achomplishment">
                            <ul>
                                <li>Participated in Singing Competition.</li>
                                <li>District Level Football RunnerUp</li>
                                <li>Participated in Science Exhibition</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
