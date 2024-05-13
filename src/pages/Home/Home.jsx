import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Main from '../../components/Main/Main';
import Swiper from '../../components/Swiper/Swiper';
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Main/>
            <Swiper/>
            <Card/>
            <Footer/>
        </div>
    );
}

export default Home;
