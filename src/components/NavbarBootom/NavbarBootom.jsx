import React from 'react';
import './NavbarBootom.css'
import { Link } from 'react-router-dom';

const NavbarBootom = () => {
    return (
        <div>
              <div className="about-top">
              <div className="about_top_link container ">
              <div className="about_link_top">
                    <Link to={'/'}>Bosh sahifa /</Link>
                </div>
                <div className="about_link_top">
                    <Link to={'/'}>Institut/</Link>
                </div>
                <div className="about_link_top">
                    <Link to={'/'}>Biz haqimizda</Link>
                </div>
              </div>
            </div>
        </div>
    );
}

export default NavbarBootom;
