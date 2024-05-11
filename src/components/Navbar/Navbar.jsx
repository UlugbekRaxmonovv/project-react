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
                      <li> <Link to={'/'}>Institut</Link></li>
                     <li>  <Link to={'/shnq'}>SHNQ</Link></li>
                       <li><Link to={'/standartlar'}>Standartlar</Link></li>
                       <li> <Link to={'/tizimlar'}>Tizimlar</Link></li>
                       <li> <Link to={'/tizimlar'}>Xabarlar</Link></li>
                       <li> <Link to={'/tizimlar'}>Bog‘lanish</Link></li>
                    </ul>
                    <VscMenu  className='menu'  onClick={() => setShow(!show)}/>

                    
                   
                </nav>
             </header>
         </div>

        </>
    );
}

export default Navbar;
