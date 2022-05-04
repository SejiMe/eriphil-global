import React from 'react'
import '../styles/css/sidePanel.min.css'

const SidePanelLayOut = ({ children }) => {
    return (
        <div className='sidepanel'>
            {children}
        </div>
    )
}

export default SidePanelLayOut