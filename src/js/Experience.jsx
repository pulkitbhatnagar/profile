import React from 'react';

import TabSection from './TabSection';

import './Experience.css';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { WorkIcon, Instructor, Start } from './WorkIcon';

function CustomizedTimeline() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff',
                }}
                contentArrowStyle={{
                    borderRight: '7px solid  rgb(33, 150, 243)',
                }}
                date="2021 - present"
                iconStyle={{ background: 'rgba(82,184,72,255)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    Software Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Bangalore,Karnataka
                </h4>
                <p>
                    Currently working as a react developer in NCR Corporations
                    where I do intractive web designing for the business banking
                    customers which include unit testing.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2018"
                contentStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff',
                }}
                iconStyle={{ background: 'white', color: '#fff' }}
                icon={<Instructor />}
            >
                <h3 className="vertical-timeline-element-title">Instructor</h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Bangalore,Karnataka
                </h4>
                <p>
                    Instructing people regarding the iot technolgy and making
                    them build a solar smart table lamp under Tour de force and
                    distributing them in rural areas for the help.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2017"
                iconStyle={{ background: 'white', color: '#fff' }}
                contentStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff',
                }}
                icon={<Instructor />}
            >
                <h3 className="vertical-timeline-element-title">Instructor</h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Bangalore,Karnataka
                </h4>
                <p>
                    Instructing people regarding the iot technolgy and making
                    them build a domino and connecting them using sensor under
                    Tour de force for Team bonding in the Multinational
                    organization.
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(30, 245, 30)', color: '#fff' }}
                icon={<Start />}
            />
        </VerticalTimeline>
    );
}

function Experience() {
    return (
        <div className="experience">
            <div>
                <TabSection />
            </div>
            <div>
                <CustomizedTimeline />
            </div>
        </div>
    );
}

export default Experience;
