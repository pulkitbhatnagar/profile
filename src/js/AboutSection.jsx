import React from 'react';

import TabSection from './TabSection';
import Badge from 'react-bootstrap/Badge';
//importing css
import './AboutSection.css';
export default function AboutSection() {
    return (
        <div className="abt">
            <div>
                <TabSection />
            </div>
            <div className="about-section">
                <div className="content-section">
                    <p className="about-me">
                        Hey there, <br></br>I am software developer ,wanted to
                        create magic with my hardware and software skill. I am
                        also a product guy who is looking to work on new ideas
                        and wanted to improve my skills set. <br></br>I have
                        done my schooling from Lucknow. For my graduation, I
                        choose Dayananda Sagar College Of Engineering for CSE.
                        It was a very enriching experience at the University as
                        not only we were actively involved in practical
                        projects, but also got opportunities to organize
                        inaugration activity using my hardware skill set and
                        love playing cricket and football. <br></br> I can say
                        i’m quite good at:-<br></br>
                        <Badge pill variant="primary">
                            HTML
                        </Badge>{' '}
                        <Badge pill variant="secondary">
                            CSS
                        </Badge>{' '}
                        <Badge pill variant="success">
                            JaveScript
                        </Badge>{' '}
                        <Badge pill variant="danger">
                            React js
                        </Badge>{' '}
                        <Badge pill variant="warning">
                            Python
                        </Badge>{' '}
                        <Badge pill variant="info">
                            MicroController
                        </Badge>{' '}
                        <Badge pill variant="light">
                            Java
                        </Badge>{' '}
                        <Badge pill variant="dark">
                            IOT
                        </Badge>
                        <Badge pill variant="primary">
                            Redux
                        </Badge>{' '}
                        <Badge pill variant="secondary">
                            Development
                        </Badge>{' '}
                        <Badge pill variant="success">
                            Content Creation
                        </Badge>{' '}
                    </p>
                </div>

                <div className="myimage">
                    <img
                        src="/Images/myImage2.jpg"
                        alt="Logo"
                        className="my-image"
                    />
                </div>
            </div>
        </div>
    );
}
