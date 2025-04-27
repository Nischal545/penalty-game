// src/landing/components/landing.jsx 

import '../styles/landing.css'
// import { useHistory} from "react-router-dom"
import React from 'react'
import { Link }  from 'react-router-dom'

function Landing() {
    
    return (
        <>
        <div className = 'container'>
            <div className = 'box'>
                <p className = 'text'>Welcome to the Penalty Game!!!</p>

                <Link to = '/play' className = 'linkButton'>Next</Link>
            </div>
        </div>
        </>
    )
}

export default Landing;