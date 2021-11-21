import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../img/haulogo_2018.png'
import '../../src/App.css'


const HeaderComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md">
                    <div>
                        <a href="https://www.hau.edu.ph/" className="navbar-brand">
                        <img src={Logo} alt="Logo" />
                        </a>

                        <Link to="/students" className="btn btn-danger">Student</Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent