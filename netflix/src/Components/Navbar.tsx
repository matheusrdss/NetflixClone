import React from 'react';
import './Navbar.css';
import logoNetflix from '../imgs/netflixx.png';
import buscar from '../imgs/search.png';
import userFoto from '../imgs/user.png';

export default function Navbar() {
    return (
        <>
            <div className="main">
                <div className="main-info">
                    <img src={logoNetflix} alt="" className="logo" />
                    <div className="links">
                        <a href="#" className="inicio td">Inicio</a>
                        <a href="#" className="personagens td">Personangens</a>
                        <a href="#" className="series td">Séries</a>
                        <a href="#" className="filmes td">Filmes</a>
                        <a href="#" className="bombando td">Bombando</a>
                        <a href="#" className="minha-lista td">Minha lista</a>
                        <a href="#" className="idiomas-e-legendas td">Idiomas e legendas</a>
                    </div>
                </div>

                <div className="main-secundaria">
                    <img src={buscar} alt="" className="buscar" />
                    <img src={userFoto} alt="" className="perfil" />
                    <button className="sair">Sair</button>
                </div>
            </div>
        </>
    );
}