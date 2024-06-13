import React from 'react';
import './TarkibiyBulinmalar.css'
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const TarkibiyBulinmalar = () => {
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
                    <Link to={'/'}>Tarkiribiy bo’linmalar</Link>
                </div>
              </div>
            </div>
            <div className="rahbariyat container">
                <h1>Tarkiribiy bo’linmalar</h1>
              <div className="rahbariyat_row ">
                <div className="rahbariyat_all">
                        <h1>Foto</h1>
                    </div>
                    <div className="rahbariyat_all1">
                       <p>Ilmiy ishlar bo’yicha direktor o’rinbosari</p>
                       <h1>Familiya Ism Sharif</h1>
                       <h6>Telefon: +998 71 244 96 21</h6>
                       <h4>Elektron pochta: info@tmsiti.uz</h4>
                    </div>
                    <div className="rahbariyat_all">
                        <h1>Foto</h1>
                    </div>
                    <div className="rahbariyat_all1">
                       <p>Ilmiy ishlar bo’yicha direktor o’rinbosari</p>
                       <h1>Familiya Ism Sharif</h1>
                       <h6>Telefon: +998 71 244 96 21</h6>
                       <h4>Elektron pochta: info@tmsiti.uz</h4>
                    </div>
                    <div className="rahbariyat_all">
                        <h1>Foto</h1>
                    </div>
                    <div className="rahbariyat_all1">
                    <p>Ilmiy ishlar bo’yicha direktor o’rinbosari</p>
                       <h1>Familiya Ism Sharif</h1>
                       <h6>Telefon: +998 71 244 96 21</h6>
                       <h4>Elektron pochta: info@tmsiti.uz</h4>
                    </div>
                    <div className="rahbariyat_all">
                        <h1>Foto</h1>
                    </div>
                    <div className="rahbariyat_all1">
                       <p>Ilmiy ishlar bo’yicha direktor o’rinbosari</p>
                       <h1>Familiya Ism Sharif</h1>
                       <h6>Telefon: +998 71 244 96 21</h6>
                       <h4>Elektron pochta: info@tmsiti.uz</h4>
                    </div>
                    <div className="rahbariyat_all">
                        <h1>Foto</h1>
                    </div>
                    <div className="rahbariyat_all1">
                       <p>Ilmiy ishlar bo’yicha direktor o’rinbosari</p>
                       <h1>Familiya Ism Sharif</h1>
                       <h6>Telefon: +998 71 244 96 21</h6>
                       <h4>Elektron pochta: info@tmsiti.uz</h4>
                    </div>
                    <div className="rahbariyat_all">
                        <h1>Foto</h1>
                    </div>
                    <div className="rahbariyat_all1">
                       <p>Ilmiy ishlar bo’yicha direktor o’rinbosari</p>
                       <h1>Familiya Ism Sharif</h1>
                       <h6>Telefon: +998 71 244 96 21</h6>
                       <h4>Elektron pochta: info@tmsiti.uz</h4>
                    </div>
                </div>
                </div>
                <Footer/>
        
        </div>
    );
}

export default TarkibiyBulinmalar;
