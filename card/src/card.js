import React from 'react';
import logo from './puce.jpg';
import logo2 from './master.png';
import logo3 from './baground.jpg';
import './card.css';



function Card() {

    return (
      <div className="Container">
      
        
        <h1 className="titre">Credit Card</h1>
        <img className="image1" src={logo}  alt="puce" />
        <h2 className="code">0000 0000 0000 0000</h2>
        <h1 className="id">5422</h1> 
        <h2 className="valid">valid thru 12/12</h2>
        <h2 className="holder">CARD HOLDER</h2>
        <img className="image2" src={logo2}  alt="master" />
    
    </div>

    );
}
export default Card;