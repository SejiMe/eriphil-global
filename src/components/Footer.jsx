import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/css/Footer.min.css'

const Footer = () => {
    return (
        <footer className='Footer'>
            <section className="upperF">
                <p>Culpa cillum nisi magna do cupidatat nisi. Qui aute deserunt culpa aliquip consectetur excepteur veniam proident qui voluptate. Esse aute magna excepteur veniam occaecat cupidatat Lorem et ad excepteur.</p>
                <Link to='/about'>Learn More</Link>
            </section>
            <section className="bottomF">
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/jobs'>Jobs</Link></li>
                        <li><Link to='/applicants'>Applicants</Link></li>
                        <li><Link to='/clients'>Clients</Link></li>
                    </ul>
                </nav>
            </section>
            <section className='credits-tag'>
                2022, All rigts reserved for Company name - built by developer
            </section>
        </footer>
    )
}

export default Footer