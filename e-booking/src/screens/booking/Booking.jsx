import React from 'react'
import { useLocation } from 'react-router-dom';

const Booking = () => {
    const { state } = useLocation()
    console.log("state from booking ", state);
    return (
        <div>Booking</div>
    )
}

export default Booking