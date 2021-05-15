import React from 'react';

import './EducationSection.css';

export default function EducationSection() {
    return (
        <div className="container1">
            <div className="divg">
                <h1>Hello</h1>
            </div>
            <div className="divg">
                <h1>Hello2</h1>{' '}
            </div>
            <div className="divg">
                <h1>Hello3</h1>
            </div>
            <div className="divg">
                <h1>Hello</h1>
            </div>
            <div className="divg">
                <h1>Hello2</h1>{' '}
            </div>
            <div className="divg">
                <h1>Hello3</h1>
            </div>
            <div className="divg">
                <h1>Hello</h1>
            </div>
            <div className="divg">
                <h1>Hello2</h1>{' '}
            </div>
            <div className="divg">
                <h1>Hello3</h1>
            </div>
        </div>
    );
}



.container1 {
    display: flex;
    flex-direction: row;
    border: 4px solid black;
    justify-content: space-between;
    height: 500px;
}
.divg {
    background-color: blue;
    color: white;
}
