import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import rasm1 from '../../../assets/img/guvohnoma.png'
import Footer from '../.././../components/Footer/Footer'
import NavbarBootom from '../../../components/NavbarBootom/NavbarBootom';
import './About.css'

const About = () => {
    return (
        <div>
            <Navbar/>
           <NavbarBootom/>
            <div className="container">
                <div className="about">
                    <h1>Institut haqida</h1>
                 <div className="about_nav">
                    <div className="about_links">
                        <p>O’zbekiston Respublikasi Qurilish va uy-joy kommunal xo‘jaligi vazirligi huzuridagi <span> «Qurilishda texnik me'yorlash va standartlashtirish ilmiy-tadqiqot instituti»</span> Davlat muassasasi O‘zbekiston Respublikasi Prezidentining 2022-yil 22-sentabrdagi
                         <span>“Respublikada kapital Qurilish sohasida buyurtmachi xizmati faoliyatini takomillashtirish chora-tadbirlari to‘g‘risida”</span>
                         gi <span className='span'>PQ-378-son qarori</span>ga asosan O‘zbekiston Respublikasi Qurilish vazirligi huzurida tashkil etilgan.</p>
                        <h6>Qurilish vazirining 2022-yil 22-noyabrdagi 202-sonli buyrug‘iga ko‘ra Institut faoliyatining ustuvor yo‘nalishlari etib quyidagilar belgilangan:</h6>
                        <ul className='tablisa' >
                            <div className="tablisa_link">
                            <li>qurilish resurslarini guruhlarga va bo‘limlarga tasniflagan holda, har biri alohida identifikatsiya raqamlanishi va standartlarga muvofiq nomlanishini nazarda tutuvchi <span> “Qurilish resurslari milliy klassifikatori” </span> elektron platformasini (keyingi o‘rinlarda – Milliy klassifikator) joriy etish;</li>
                            <li>Milliy klassifikatorga kiritilgan qurilish materiallari va xizmatlari (ishlari) bo‘yicha ishlab chiqaruvchi tomonidan taklif etilayotgan narxlarning elektron katalogini (keyingi o‘rinlarda – Elektron katalog) <span>“Shaffof qurilish” </span>milliy axborot tizimi orqali joriy etish;</li>
                            <li><span>obyektlarni axborot modellashtirishs</span> (BIM / Building Information Modeling) texnologiyalari asosida loyihalashtirish, qurilish jarayonlarining barcha ishtirokchilarini ma’lumotlar bilan ta’minlash hamda umumiy ma’lumotlar muhiti (CDE / Common data environment)</li>
                            <li>dasturiy-texnik majmua vositalarida qurilish loyihalarining raqamli boshqaruv tizimini (keyingi o‘rinlarda – Loyiha boshqaruvi tizimi) joriy etish;</li>
                            <li>shaharsozlik hujjatlari, reglamentlar, shaharsozlik normalari va qoidalari va standartlarni ishlab chiqish, mavjudlarini takomillashtirish, amaliyotda qo‘llash bilan bog‘liq muammolarni </li>
                            <li>
                             sohaga oid texnik jihatidan tartibga solishga doir milliy normativ hujjatlar, shuningdek, qurilish sohasidagi xorijiy standartlar, normalar va qoidalarning yagona reestri, elektron bazasi va fondini shakllantirish</li>
                             <li> tahlil qilish hamda bugungi kunda amalga oshirilayotgan islohotlar hamda xalqaro norma va standartlar bilan uyg‘unlashtirish;</li>
                          <li>vazirliklar va idoralar tomonidan yangi ishlab chiqilgan yoki takomillashtirilgan shaharsozlik hujjatlari loyihalariga amaldagi texnik jihatdan tartibga solish sohasidagi me’yoriy hujjatlarga muvofiqligi yuzasidan xulosalar berish tizimini raqamlashtirish;</li>
                            </div>
                        </ul>
                    </div>
                    <div className="about_links">
                        <img src={rasm1} alt="" />
                    </div>
                 </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default About;
