import React,{useState} from 'react';
import './Shnk.css'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { VscChevronUp } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";
const Shnk = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    return (
        <div>
            <Navbar/>
            <div className="about-top">
              <div className="about_top_link container ">
              <div className="about_link_top">
                    <Link to={'/'}>Bosh sahifa /</Link>
                </div>
                <div className="about_link_top">
                    <Link to={'/'}>Shaharsozlik normalari va qoidalari/</Link>
                </div>
              </div>
            </div>

            <div className="shnk container">
     <h1>Shaharsozlik normalari va qoidalari</h1>
     <p>Подсистема 1. Организационно методические нормы.</p>

     <div className={`shnk_all ${show ? "show" : ""}`}>
        <div className="shnk_row">
            <div className="shnk_alt">
                <span  onClick={() =>setShow( p => !p)}>
                    {
                        show ? 
            <VscChevronUp  />
            :<VscChevronDown />
            }
                </span>
            </div>
            <div className="shnk_alt">
           <p>Группа 01. Система нормативных документов в строительстве</p>
            </div>
        </div>
            <div className="all"></div>

<div className={`shnk_clumn ${show ? "show" : ""}`}>
    <div className="alt_link">
    <div className="shnk_hammsi">
                <div className="shnk_hammasi_link">
                    <p>ShNK 1.01.01-09</p>
                </div>
                <div className="shnk_hammasi_link">
                    <p>Qurilish sohasidagi normativ hujjatlar tizimi</p>
                </div>
            </div>
                <span>UZB/RUS</span>
                </div>
   <div className="alt_link">
   <div className="shnk_hammsi">
                <div className="shnk_hammasi_link">
                    <p>ShNK 1.01.01-09</p>
                </div>
                <div className="shnk_hammasi_link">
                    <p>Qurilish sohasidagi normativ hujjatlar tizimi</p>
                </div>
            </div>
                <span>UZB/RUS</span>
   </div>
    </div>


        
     </div>
     <div className={`shnk_all ${show ? "show" : ""}`}>
        <div className="shnk_row">
            <div className="shnk_alt">
                <span  onClick={() =>setShow1( p => !p)}>
                    {
                        show1 ? 
            <VscChevronUp  />
            :<VscChevronDown />
            }
                </span>
            </div>
            <div className="shnk_alt">
           <p>Группа 01. Система нормативных документов в строительстве</p>
            </div>
        </div>
            <div className="all"></div>

<div className={`shnk_clumn ${show1 ? "show" : ""}`}>
    <div className="alt_link">
    <div className="shnk_hammsi">
                <div className="shnk_hammasi_link">
                    <p>ShNK 1.01.01-09</p>
                </div>
                <div className="shnk_hammasi_link">
                    <p>Qurilish sohasidagi normativ hujjatlar tizimi</p>
                </div>
            </div>
                <span>UZB/RUS</span>
                </div>
   <div className="alt_link">
   <div className="shnk_hammsi">
                <div className="shnk_hammasi_link">
                    <p>ShNK 1.01.01-09</p>
                </div>
                <div className="shnk_hammasi_link">
                    <p>Qurilish sohasidagi normativ hujjatlar tizimi</p>
                </div>
            </div>
                <span>UZB/RUS</span>
   </div>
    </div>


        
     </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Shnk;
