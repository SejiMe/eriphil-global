import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const AppLayout = ({children}) => {
    return (
        <div className=''>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default AppLayout