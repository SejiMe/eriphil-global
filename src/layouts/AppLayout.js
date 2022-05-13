import React, { useState, useEffect, useCallback } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const AppLayout = ({ children }) => {

    const [scrollY, setScrollY] = useState(document.scrollingElement.scrollY)
    /* A memoized function of React it will return memoized if dependency has change */
    const trackScreenY = useCallback(() => {
        setScrollY(window.scrollY)
    }, [scrollY]);


    useEffect(() => {
        window.addEventListener("scroll", trackScreenY);
        console.log(scrollY)
        return () => {
            window.removeEventListener("scroll", trackScreenY);
        };
        // if trackScreenY produce results it will listen to scroll and will run handle navigation again
    }, [trackScreenY]);

    return (
        <>

            <Header />
            {children}
            <Footer />

        </>
    )
}

export default AppLayout