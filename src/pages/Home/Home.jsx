import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Main from '../../components/Main/Main';
import Swiper from '../../components/Swiper/Swiper';
import Card from '../../components/Card/Card';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Main/>
            <Swiper/>
            <Card/>
        </div>
    );
}

export default Home;
