import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../screens/dashboard/Dashboard'
import Header from '../screens/header/Header'
import SignIn from '../screens/Authentication/signIn/SignIn'
import SignUp from '../screens/Authentication/signUp/SignUp'
import Booking from '../screens/booking/Booking'

const Navigation = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/sign-up' element={<SignUp />} />
                <Route path='/booking' element={<Booking />} />
            </Routes>
        </div>

    )
}

export default Navigation