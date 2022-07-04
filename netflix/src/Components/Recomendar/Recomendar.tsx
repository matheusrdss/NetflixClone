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
            <img src={Tadeo} alt="" className="tadeo" />
            <div className="info">
                <p className="info-filme">Um aspirante a explorador tenta resgatar o amor da sua vida e desvendar os segredos por trás do Pergaminho de Midas - tudo isso com a ajuda de uma múmia</p>
                <button className="assistir">▶ Assistir</button>
                <button className="mais-infos">❕ Mais informações</button>
            </div>
        </div>
    </>);
}