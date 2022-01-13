import React from 'react'
import Header from './../Components/Layout/Header';
import Services from './../Components/Layout/Services';
import Accordion from './../Components/Layout/Accordion';
import Contact from './../Components/Layout/Contact';
import Footer from './../Components/Layout/Footer';

const Container = () => {
    return (
        <>
            <Header />
            <Services />
            <Accordion />
            <Contact />
            <Footer />
        </>
    )
}

export default Container
