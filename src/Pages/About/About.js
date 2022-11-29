import React from 'react';
import ScreenHeader from '../../Shared/ScreenHeader';
import NavBar from '../../Shared/NavBar';
import Footer from '../../Shared/Footer';
import { Link } from 'react-router-dom';
import Guarantee from './components/Guarantee';
const About = () => {
    return (
        <>
        <NavBar />
            <ScreenHeader>
                <div>
                    <h1 className="font-JosefinSans font-bold text-5xl text-center">About</h1>
                    <Link to="/" className="text-gray-400 hover:text-primary">
                        Home
                    </Link>
                    <span className="text-gray-400 space-x-3"> {">"} </span>
                    <span>About</span>
                    <p>
                        Frontend Technologies:
React,
React Router Dom,
tailwind css,
Redux toolkit,
Redux toolkit Query,
Swiper,
Stripe payment service,
Some other packages
                    </p>
                    <p>
                        Backend Technologies:
Node JS,
Express JS,
Jsonwebtoken,
Mongodb,
Mongoose,
Express-validator
                    </p>
                </div>
            </ScreenHeader>
            <Guarantee />
            <Footer />
        </>
    )
}

export default About