import React from 'react';
import "./Bog'lanish.css"
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar/Navbar';
import NavbarBootom from '../../../components/NavbarBootom/NavbarBootom';
import rasm1 from '../../../assets/img/img.png'
import { SlLocationPin } from "react-icons/sl";
import Footer from '../../../components/Footer/Footer';
import rasm2 from '../../../assets/img/kon.svg'
import { LuPhone } from "react-icons/lu";
const BogLanish = () => {
    return (
        <div>
            <Navbar/>
           <NavbarBootom/>

           <div className="boglanish container">
            <h1>Bog'lanish</h1>
           <div className="boglanish_hammasi">
           <div className="boglansih_row">
                <div className="boglanish_link">
                <iframe
            className='w-[600px] maps_logo ml-3'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.817362823962!2d69.22519327636788!3d41.20395520735261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae61002c970f39%3A0x9b6f92597f056858!2sSog&#39;lom%20Hayot!5e0!3m2!1suz!2s!4v1714398990201!5m2!1suz!2s"
           
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
                    <div className="location">
                    <div className="location_all">
                           <Link>< SlLocationPin/></Link>
                        </div>
                        <div className="location_all">
                        <p>Toshkent shahar, Abay ko‘chasi, 6-uy</p>
                        </div>
                    </div>

                    <div className="location">
                    <div className="location_all">
                           <Link><img src={rasm2} alt="" /></Link>
                        </div>
                        <div className="location_all">
                        <p>info@tmsiti.uz</p>
                        </div>
                    </div>

                    <div className="location">
                    <div className="location_all">
                           <Link><img src={rasm2} alt="" /></Link>
                        </div>
                        <div className="location_all">
                        <p>TMSITI@exat.uz</p>
                        </div>
                    </div>

                    <div className="location">
                    <div className="location_all">
                           <Link><LuPhone /></Link>
                        </div>
                        <div className="location_all">
                        <p>+998 71 244-51-84</p>
                        </div>
                    </div>
                </div>
                <div className="boglanish_link">
                    <div className="input_boglanish">
                    <div className="boglainish_input-alt">
                      <div className="input_boglansih_row">
                            <input type="text" placeholder="FIO" />
                        </div>
                      </div>

                      <div className="boglainish_input-alt">
                      <div className="input_boglansih_row">
                            <input type="text" placeholder="E-mail" />
                        </div>
                      </div>

                         <div className="boglainish_input-alt">
                      <div className="input_boglansih_row">
                            <input type="text" placeholder="E-mail" />
                        </div>
                      </div>

                      <div className="boglainish_input-alt">
                      <div className="input_boglansih_row">
                      <select name="" id="">
                      <option value="">Toshkent</option>
                      <option value="">Toshkent</option>
                      <option value="">Toshkent</option>
                      <option value="">Toshkent</option>
                            </select>
                        </div>
                        
                      </div>
                    </div>
                    <textarea className='textarea' name="" id="" cols="30" rows="10" defaultValue={'Murojaat matni'} ></textarea> <br />
                 <div className="file">
                 <input type="file"  />

          <div className="murojat_all">
          <div className="murojat">
            <button>Murojaatni yuborish</button>
           </div>
          </div>
                 </div>
                </div>
            </div>
           </div>

           </div>

           <Footer/>
        </div>
    );
}

export default BogLanish;
