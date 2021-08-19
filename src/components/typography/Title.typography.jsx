import React from 'react';

export const Title = (props) => (
    <h3 className={`text-gray font-bold text-2xl ${props.className} `}>{props.title}</h3>
)