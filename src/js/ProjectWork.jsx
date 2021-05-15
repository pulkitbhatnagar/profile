import React, { useState } from 'react';

import './ProjectWork.css';

import { useHistory } from 'react-router-dom';

import TabSection from './TabSection';

import { Carousel, Button } from 'react-bootstrap';

function ProjectWork() {
    const history = useHistory();
    const [index, setIndex] = useState(0);
    const details = [
        {
            heading: 'Smart Life For Blind',
            value:
                'In order to prevent the accidents and make the life of blind people easy I have designed the gadgets which can make the life of blind people easy. This device will help them to do day to day work very easily and will be like alexa for blind people with inbuild voice assistant',
        },
        {
            heading: 'Smart Dustbin',
            value:
                'The smart dustbin will work on the voice command of the customer so when he says on his google assistant “dustbin come” following the particular path the dustbin will come and when say “dustbin go” it will go to its original position. Now instead of customer going to dustbin, dustbin will come to him/her',
        },
        {
            heading:
                'Face Recognition system for Alzheimer Sufferer and home security',
            value:
                'Using cv2 I have created an application in which when the recognized face is captured it will give necessary details about that person on the screen. If an unauthorized person enter the house it will automatically take 20 pictures of the person and sent the pictures to the owner and owner from sitting anywhere can control the gadgets in house.',
        },
        {
            heading: 'Drowsyness detection in driving',
            value:
                'Due to increase in accidents I have design the drowsyness detection system in which we have use python program to detect the drowsyness  in a person while driving the car and once detected sound will be produced wich will trigger the relay which in return slow down the speed of the car.',
        },
        {
            heading: 'Mobile control car with single click nerf shooter',
            value:
                'An iot project which consist of car that can be controlled through phone and shoots nerf darts on button click',
        },

        {
            heading: 'Marvel Studio Projects',
            value:
                'A project which is purely for the entertainment purpose.In this I bring fictious idea into reality.',
        },
        {
            heading: 'Medicine Expiry Tracker',
            value:
                'This application was developed to track the expiray date of medicine. It also provide online booking of medicine by comparing it with available app like pharmeasy,medbudyy etc with deep analysis.(In progress)',
        },
    ];
    const address = [
        'https://www.youtube.com/watch?v=odN-bRReRIA',
        'https://www.youtube.com/watch?v=CpbITber31M',
        ' ',
        'https://www.youtube.com/watch?v=yUvXHrUpOuw',
        'https://www.youtube.com/watch?v=Od5DuY0feCI',
        'https://www.youtube.com/channel/UCH_dTTzggJogIpiqzOQNwhg/videos',
        'https://www.youtube.com/watch?v=UQJXOZNsSO0&t=76s',
    ];

    const linkVideo = () => {
        window.location = address[index];
    };

    function ControlledCarousel() {
        const handleSelect = (selectedIndex, e) => {
            setIndex(selectedIndex);
        };

        return (
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        src="/Images/BlindStick.jpg"
                        className="video-section"
                        alt="project1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="/Images/dustbin.jpg"
                        className="video-section"
                        alt="project1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="/Images/Alzimer.png"
                        className="video-section"
                        alt="project1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="/Images/Dart.png"
                        className="video-section"
                        alt="project1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="/Images/Dart.png"
                        className="video-section"
                        alt="project1"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        src="/Images/marvel.png"
                        className="video-section"
                        alt="project1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src="/Images/Met.png"
                        className="video-section"
                        alt="project1"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }

    return (
        <div className="project-section">
            <div>
                <TabSection />
            </div>
            <div className="project-video">
                <ControlledCarousel />
            </div>
            <div className="description-project">
                <h1>{details[index].heading}</h1>
                <p className="synopsis">{details[index].value}</p>
                <Button variant="link" onClick={linkVideo}>
                    Click To Know More
                </Button>
            </div>
        </div>
    );
}

export default ProjectWork;
