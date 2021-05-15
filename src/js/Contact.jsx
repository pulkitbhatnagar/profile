import React, { useState } from 'react';

import './Contact.css';

import TabSection from './TabSection';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Contact() {
    const [card, setCard] = useState(0);

    const cardChange = () => {
        setCard(card + 1);
    };
    const cardBack = () => {
        setCard(card - 1);
    };
    return (
        <div className="contact">
            <div>
                <TabSection />
            </div>
            <div className="contact-card">
                {card % 2 === 0 ? (
                    <Card className="front-card">
                        <Card.Header>Pulkit Bhatnagar</Card.Header>
                        <Card.Body>
                            <Card.Title> Software Developer </Card.Title>
                            <Card.Text>
                                Working on ideas to make world a better place
                                <Button
                                    variant="warning"
                                    onClick={cardChange}
                                    className="contact-button"
                                >
                                    Contact Details
                                </Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ) : (
                    <Card className="contact-card-2">
                        <Card.Header>
                            <Button variant="warning" onClick={cardBack}>
                                Back
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <img
                                    src="/Images/map.png"
                                    alt="map"
                                    className="map-png"
                                ></img>
                                &nbsp;&nbsp; L-705,prateek
                                wisteria,sector-77,Noida
                            </Card.Text>
                            <Card.Text>
                                <img
                                    src="/Images/phone.png"
                                    alt="map"
                                    className="map-png"
                                ></img>
                                &nbsp;&nbsp; 91-9980729778
                            </Card.Text>
                            <Card.Text>
                                <img
                                    src="/Images/email.png"
                                    alt="map"
                                    className="map-png"
                                ></img>
                                &nbsp;&nbsp; pulkitbhatnagar19999@gmail.com
                            </Card.Text>
                            <Card.Text>
                                <a href="https://www.youtube.com/channel/UCH_dTTzggJogIpiqzOQNwhg">
                                    <p class="fa fa-youtube"></p>
                                </a>
                                <a href="https://www.linkedin.com/in/pulkit-bhatnagar-ba8aa0160">
                                    <p class=" fa fa-linkedin"></p>
                                </a>
                                <a href="https://www.instagram.com/bhatnagar.pulkit.99/">
                                    <p class="fa fa-instagram"></p>
                                </a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    );
}

export default Contact;
