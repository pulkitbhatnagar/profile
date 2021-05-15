import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './Email.css';

import twilio from 'twilio';

export default function Email() {
    const [data, setData] = useState([]);

    var client = new twilio(
        'AC2eecc7b02f4b4756274b660c7c657b61',
        'fb04f783c854982ab62d62ff3e895449'
    );

    // client.messages.create({
    //     to: '9980729778',
    //     from: '+12533588318',
    //     body: 'slot available',
    // });
    var templateParams = {
        name: 'James',
        notes: 'Check this out!',
    };
    const email = () => {
        window.emailjs
            .send('service_u7libx8', 'template_o4n84t5', templateParams)
            .then((res) => {
                console.log('Email successfully sent!');
            })
            // Handle errors here however you like, or use a React error boundary
            .catch((err) =>
                console.error(
                    'Oh well, you failed. Here some thoughts on the error that occured:',
                    err
                )
            );
    };
    useEffect(() => {
        setTimeout(() => {
            axios
                .get(
                    'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=650&date=12-05-2021'
                )
                .then((res) => {
                    setData(
                        res.data.centers.filter(
                            (value) => value.name === 'APOLLO HOSPITALS PVT'
                        )
                    );
                });
        }, 2000);
    });

    return (
        <div>
            {data.map((value) => {
                return (
                    <>
                        <div className="cardOf">
                            <h2>{value.name}</h2>
                            <h3>{value.fee_type}</h3>
                            <h3>{value.sessions[0].available_capacity}</h3>

                            <h3>
                                {value.sessions[0].available_capacity > 0 &&
                                    email()}
                            </h3>
                        </div>
                        <ul></ul>
                    </>
                );
            })}
        </div>
    );
}
