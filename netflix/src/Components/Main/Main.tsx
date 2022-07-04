import React from 'react'
import Navbar from '..//Navbar/Navbar';
import Recomendar from '../Recomendar/Recomendar';
import './Main.css'

export default function Main() {
    return (<>
        <div className="Main">
            {/* <Navbar /> */}
            <Recomendar />
            <h1 className='a'>Feito por Matheus 2022</h1>
        </div>
    </>);
}