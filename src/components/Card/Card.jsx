import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom';
import rasm1 from '../../assets/img/card.png'
const Card = () => {
    return (
        <div className='container'>
            <section  className="Cart_all" >
            <div className="Cart">
                <div className="Cart-all">
                     <h1>So‘nggi yangiliklar</h1>
                </div>
                
             </div>
             <li>
                    <Link to={'/new'}>Barcha yangiliklar</Link>
                </li>
            </section>

            <div className="column">
          <div className="column-all">
        <img className='image' src={rasm1} alt="" />
        <h3>Yangilik 07.19.2023</h3>
        <h1>Lorem ipsum dolor sit amet consectetur. Nec nibh pellentesque odio ornare quis quam rutrum eros id. </h1>
        <p>Lorem ipsum dolor sit amet consectetur. Consequat sagittis amet vitae porta urna. Pretium lobortis scelerisque congue sit sodales a vitae ultricies.</p>
        <div className="column_link">
        <div className="column-row">
        <div className="column-alt">
                <img src={rasm1} alt="" />
            </div>
            <div className="column-alt">
               <span>Yangilik 07.19.2023</span>
               <h1>Lorem ipsum dolor sit amet consectetur. Quis at velit malesuada in.</h1>
            </div>

        </div>
        </div>
           </div>
           <div className="hammasi">
           <div className="column-all">
           <div className="column-row">
        <div className="column-alt">
                <img src={rasm1} alt="" />
            </div>
            <div className="column-alt">
               <span>Yangilik 07.19.2023</span>
               <h1>Lorem ipsum dolor sit amet consectetur. Quis at velit malesuada in.</h1>
            </div>

        </div>
        <div className="column-row">
        <div className="column-alt">
                <img src={rasm1} alt="" />
            </div>
            <div className="column-alt">
               <span>Yangilik 07.19.2023</span>
               <h1>Lorem ipsum dolor sit amet consectetur. Quis at velit malesuada in.</h1>
            </div>

        </div>
        <div className="column-row">
        <div className="column-alt">
                <img src={rasm1} alt="" />
            </div>
            <div className="column-alt">
               <span>Yangilik 07.19.2023</span>
               <h1>Lorem ipsum dolor sit amet consectetur. Quis at velit malesuada in.</h1>
            </div>

        </div>
        <div className="column-row">
        <div className="column-alt">
                <img src={rasm1} alt="" />
            </div>
            <div className="column-alt">
               <span>Yangilik 07.19.2023</span>
               <h1>Lorem ipsum dolor sit amet consectetur. Quis at velit malesuada in.</h1>
            </div>

        </div>
           </div>
           </div>
            </div>
            
        </div>
    );
}

export default Card;
