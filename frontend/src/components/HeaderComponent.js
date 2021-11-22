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
                        <a href="/" className="navbar-brand">
                        <img src={Logo} alt="Logo" />
                        </a>

                        <Link to="/students" className="btn btn-danger">Students</Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent