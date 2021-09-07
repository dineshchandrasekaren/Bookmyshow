import React from 'react';

const Button = (props) => (
    <>
        <button className="text-md text-gray-200 whitespace-nowrap font-medium w-full cursor-pointer bg-navbtn-400 py-2 px-10 rounded-md" onClick={props.onCLick}>{props.price}</button>
    </>
)

export default Button;