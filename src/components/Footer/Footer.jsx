import React from 'react';
import rasm1 from '../../assets/img/logo1.png'
import './Footer.css'
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                     <div className="footer_all">
                        <div className="footer_row">
                            <ul>
                                <li>
                                    <div className="footer_img">
                                    <div className="footer_alt">
                                            <img src={rasm1} alt="" />
                                        </div>
                                        <div className="footer_alt">
                                            <p>Qurilishda texnik me’yorlash va standartlashtirish ilmiy-tadqiqot instituti</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="p1">
                                        <p>Qurilish sohasida texnik me’yorlar, shaharzoslik normalari va standartlar reglamentlar</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="link">
                                    <div className="link_all">
                                            <p>Ijtimoiy tarmoqlar:</p>
                                        </div>
                                        <div className="link_all">
                                           <Link to="">
                                            <PiPaperPlaneTiltFill/>
                                           </Link>
                                           <Link to="/">
                                            <FaSquareInstagram/>
                                           </Link>
                                           <Link to="/">
                                           <FaFacebookSquare />
                                           </Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="footer_row">
                            <ul>
                                <h1>Institut</h1>
                                <li>
                                 <Link to="">
                                 Rahbariyat
                                 </Link>
                                </li>
                                <li>
                                 <Link to="">
                                 Tuzilma
                                 </Link>
                                </li>
                                <li>
                                <Link to="">
                                 Me'yoriy hujjatlar
                                 </Link>
                                 </li>
                                 <li>
                                 <Link to="">
                                 Biz haqimizda
                                 </Link>
                                 </li>
                                 <li>
                                 <Link to="">
                                 Laboratoriya
                                 </Link>
                                </li>
                                <li>
                                 <Link to="">
                                 O‘quv markazi
                                 </Link>
                                </li>
                            </ul>
                        </div>


                        <div className="footer_row">
                            <ul>
                                <h1>Normalar</h1>
                                <li>
                                 <Link to="">
                                 SHNK
                                 </Link>
                                </li>
                                <li>
                                 <Link to="">
                                 Standartlar
                                 </Link>
                                </li>
                                <li>
                                <Link to="">
                                Reestr
                                 </Link>
                                 </li>
                                
                            </ul>
                        </div>



                        <div className="footer_row">
                            <ul>
                                <h1>Tizimlar</h1>
                                <li>
                                 <Link to="">
                                 Klassifikator
                                 </Link>
                                </li>
                                <li>
                                 <Link to="">
                                 Kalkulyator
                                 </Link>
                                </li>
                                <li>
                                <Link to="">
                                Lug‘at
                                 </Link>
                                 </li>
                                
                            </ul>
                        </div>



                        <div className="footer_row">
                            <ul>
                                <h1>Xabarlar</h1>
                                <li>
                                 <Link to="">
                                 E’lonlar
                                 </Link>
                                </li>
                                <li>
                                 <Link to="">
                                 Muhokamalar
                                 </Link>
                                </li>
                                <li>
                                <Link to="">
                                Yangiliklar
                                 </Link>
                                 </li>

                                 <li>
                                <Link to="">
                                Xalqaro munosobat
                                 </Link>
                                 </li>
                                
                            </ul>
                        </div>

                        <div className="footer_row">
                            <ul>
                                <h1>Biz haqimizda</h1>
                                <li>
                                 <p>Toshkent shahar, Shayxontohur tumani, Abay ko’chasi 6A-Bino</p>
                                </li>
                                <li>
                                 <Link to="">
                                <p>Phone: + 998 71 244 51 84</p>
                                <p>Email : standart@gmail.com</p>
                                 </Link>
                                </li>
                            </ul>
                        </div>
                     </div>
                </div>
            </footer>
            <div className="footer_bottom ">
                   <div className="container  footer_bottom_link">
                    <p> Qurilishda texnik me’yorlash va standartlashtirish ilmiy-tadqiqot instituti| All rights reserved © 2021</p>
                   </div>
            </div>
        </div>
    );
}

export default Footer;
