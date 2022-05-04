import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/css/Header.min.css'

const Header = () => {
    return (
        <header className='Header'>
            <section className="upperH">
                <span>Eiusmod cupidatat consequat id incididunt nulla.</span>
            </section>
            <section className="bottomH">
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/applicants'>Applicants</Link></li>
                    </ul>
                </nav>
            </section>
        </header>





    )
}

export default Header