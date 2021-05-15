import React from 'react';
import Typical from 'react-typical';
//adding file
import TabSection from '../js/TabSection';
import './Homesection.css';
function HomeSection() {
    return (
        <div className="root">
            <div>
                <TabSection />
            </div>
            <div className="body-section">
                <video
                    src="/Images/Night2.mp4"
                    autoPlay
                    loop
                    muted
                    className="into-section"
                />
                <div className="heading-section">
                    <h3 className="heading1 font-design">Hello, my name is</h3>
                    <h1 className="heading2 font-design">Pulkit Bhatnagar</h1>
                    <h2 className="heading3 font-design">
                        I'm a{' '}
                        <span className="software font-design">
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                className={'sect1'}
                                steps={[
                                    'software developer 💻',
                                    1000,
                                    'Youtuber ❤️',
                                    1000,
                                    'Hardware project maker 💡',
                                    1000,
                                    'Photographer 📷',
                                    1000,
                                    'Anime sketcher ✏️',
                                    1000,
                                ]}
                            />
                        </span>{' '}
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default HomeSection;
