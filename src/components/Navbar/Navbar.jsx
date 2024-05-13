import React,{useState} from 'react';
import './Navbar.css'
import { FaPhone } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import rasm1 from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { VscMenu } from "react-icons/vsc";



const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
      <> 
         <div className="header-all">
         <div className="icon-all">
            <div className='container'>
             <div className="icon_item">
             <Link to={'/'}>
                <img src={rasm1} alt="" />
                </Link> 
             <div className="icon_link">
            <div className="icon">
                    <FaPhone />
                </div>
                <div className="icon">
                   <p>+998 71 244-51-84</p>
                </div>
                <div className="icon">
                <CgMail />
                </div>
                <div className="icon">
                   <p>info@tmsiti.uz</p>
                </div>
            </div>
             </div>

            
            </div>

        </div>
        <header className='header container'>
                <nav>  
                <div className="nav-item">
                <div className="nav_link">
                        <Link to={'/'}>
                            <img src={rasm1} alt="" />
                        </Link>
                    </div>
                    <div className="nav_link">
                        <p>Qurilishda texnik me’yorlash va standartlashtirish ilmiy-tadqiqot instituti</p>
                    </div>
                </div>
              
                    <ul className={`link ${show ? "show" : ""}`} >
                      <li className='li_ul'> <Link to={'/'}>Institut</Link>
                    <div className="link_alll">
                     <div className="link-row">
                        <Link to={'/about'}>INSTITUT HAQIDA</Link>
                        </div>
                        <div className="link-row">
                           <Link to={'/management'}>RAHBARIYAT</Link>
                        </div>
                        <div className="link-row">
                        <a href="" className="">TASHKILIY TUZULMA</a>
                        </div>
                        <div className="link-row">
                        <a href="" className="">TARKIBIY BO'LINMALAR</a>
                        </div>
                        <div className="link-row">
                        <a href="" className="">VAKANSIYALAR</a>
                        </div>
                     </div>
                    </li>
                     <li className='ul_Link'>   <Link to={'/shnq'}>SHNQ</Link>
                     <div className="link_alll">
                     <div className="link-row">
                        <a href="" className="">QONUN,QAROR VA 
                        FARMONLAR</a>
                        </div>
                        <div className="link-row">
                        <a href="" style={{maxWidth:'50px',width:'100%'}} className="">SHAHARSOZLIK NORMALARI VA QOIDALARI</a>
                        </div>
                        <div className="link-row">
                        <a href="" className="">TASHKILIY TUZULMA</a>
                        </div>
                        <div className="link-row">
                        <a href="" className="">TARKIBIY BO'LINMALAR</a>
                        </div>
                        <div className="link-row">
                        <a href="" className="">VAKANSIYALAR</a>
                        </div>
                     </div>
                     </li>
                 
                       <li className='nav_link'><Link to={'/standartlar'}>Standartlar</Link>
                       <div className="link_alll">
                     <div className="link-row">
                        <a href="" className="">KLASSIFIKATOR</a>
                        </div>
                        <div className="link-row">
                        <a href="" style={{maxWidth:'50px',width:'100%'}} className="">ELEKTRON FOND</a>
                        </div>
                        <div className="link-row">
                        <a href="" className="">LABARATORIYA</a>
                        </div>
                     </div>
                       </li>
                       <li className='link_ul'> <Link to={'/tizimlar'}>Tizimlar</Link>
                       <div className="link_alll">
                     <div className="link-row">
                        <a href="" className="">E'LONLAR</a>
                        </div>
                        <div className="link-row">
                        <a href="" style={{maxWidth:'50px',width:'100%'}} className="">ELEKTRON FOND</a>
                        </div>
                        <div className="link-row">
                        <a href="" className="">UCHRASHUVLAR</a>
                        </div>
                        <div className="link-row">
                        <a href="" className="">OMAVIY TADBIRLAR</a>
                        </div>
                        <div className="link-row">
                        <a href="" className="">XALQARO HAMKORLIK</a>
                        </div>
                        <div className="link-row">
                        <a href="" className="">SEVIMLAR KO'RGAZMALAR</a>
                        </div>
                     </div>
                       </li>
                       <li > <Link to={'/tizimlar'}>Xabarlar</Link></li>
                       <li> <Link to={'/contact'}>Bog‘lanish</Link></li>
                    </ul>
                    <VscMenu  className='menu'  onClick={() => setShow(!show)}/>

                    
                   
                </nav>
             </header>
         </div>

        </>
    );
}

export default Navbar;
