import React from 'react'
import '../styles/css/sidePanel.min.css'

const SidePanelLayOut = ({ children }) => {
    return (
        <div className='sidepanel'>
            <div className='container-sidepanel'>
                {children}
            </div>

        </div>
    )
}

export default SidePanelLayOut