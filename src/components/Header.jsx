import React, { useEffect, useState } from 'react'
import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import '../styles/css/Header.min.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {

    const [y, setY] = useState(document.scrollingElement.scrollY)
    const [visible, setVisibility] = useState(true);
    const [hideMenu, setHideMenu] = useState(false)

    //Memoized function of React it will return memoized if dependency has change
    const handleNavigation = useCallback(() => {
        if (window.scrollY == 0) {
            console.log("Background not visible!")
            setVisibility((prev) => false)
        } else if (window.scrollY > 0) {
            setVisibility((prev) => true)
            console.log("background be visible");
        }
        //Set y to change the variable y-Axis
        setY(window.scrollY)

    }, [y]);

    useEffect(() => {
        window.addEventListener("scroll", handleNavigation);
        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
        // if handleNavigation produce results it will listen to scroll and will run handle navigation again
    }, [handleNavigation]);

    const handleMenu = () => {
        setHideMenu((prev) => !prev)
    }

    useEffect(() => {
        console.log(hideMenu)
    }, [hideMenu])

    return (
        <header className={`Header ${visible ? 'visible-header' : ''}`}>
            <section className="upperH">
                <span>Logo</span>
                <div className="mobile-btn-container">
                    <button onClick={handleMenu}><MenuRoundedIcon
                        sx={{
                            color: "white",
                            fontSize: 40
                        }}
                    /></button>
                </div>
                <div className={`mobile-menu ${hideMenu ? 'hide' : ''}`} onClick={handleMenu}>
                    <span>Logo</span>
                    <div className="mobile-menu-btn">
                        <Link to='/login'>Sign In</Link>
                        <Link to='/login'>Register</Link>
                    </div>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/applicants'>Applicants</Link></li>
                        <li><Link to='/clients'>Clients</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                        <li><Link to='/rewards'>Rewards and Recognitions</Link></li>
                    </ul>
                </div>
                <div className="btn-container">
                    <button className="sign-in">Sign In</button>
                    <button className="register">Register</button>
                </div>
            </section>
            <section className="bottomH">
                <div className="btn-container">
                    <button className="sign-in">Sign In</button>
                    <button className="register">Register</button>
                </div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/applicants'>Applicants</Link></li>
                        <li><Link to='/clients'>Clients</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                        <li><Link to='/rewards'>Rewards and Recognitions</Link></li>
                    </ul>
                </nav>
            </section>
        </header>





    )
}

export default Header