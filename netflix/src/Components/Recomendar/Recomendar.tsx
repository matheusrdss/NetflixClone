import React from 'react';
import './Recomendar.css';
import Fundo from '../../imgs/fundo.webp';
import Navbar from '../Navbar/Navbar';
import Tadeo from '../../imgs/tadeoo.png';

export default function Recomendar() {
    return (<>
        <div className="Recomendar">
            <Navbar />
            <img src={Fundo} alt="" className='fundo'/>
            {/* <div className="tadeo-div">
            </div> */}
            <img src={Tadeo} alt="" className="tadeo-div" />
        </div>
    </>);
}