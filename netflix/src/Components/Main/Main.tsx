import React from 'react'
import Navbar from '..//Navbar/Navbar';
import Recomendar from '../Recomendar/Recomendar';
import './Main.css'

export default function Main() {
    return (<>
        <div className="Main">
            {/* <Navbar /> */}
            <Recomendar />
        </div>
    </>);
}