import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer/Footer';
import './Vakansiya.css'

const Vakansiya = () => {
    return (
        <div>
            <Navbar/>
            <div className="about-top">
              <div className="about_top_link container ">
              <div className="about_link_top">
                    <Link to={'/'}>Bosh sahifa /</Link>
                </div>
                <div className="about_link_top">
                    <Link to={'/'}>Institut/</Link>
                </div>
                <div className="about_link_top">
                    <Link to={'/'}>Vakansiyalar</Link>
                </div>
              </div>
            </div>
            <div className="vakansiya container ">
                <h1>Vakansiyalar</h1>

            </div>
            <Footer/>
        </div>
    );
}

export default Vakansiya;
