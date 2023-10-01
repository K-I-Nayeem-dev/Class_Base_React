import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const [dark, setDark] = useState('Dark');
    const [color, setColor] = useState('light');

    const darkMode = ()=> {
        if(color === 'light'){
            setDark('Light');
            setColor('dark')
            document.body.style.backgroundColor = 'black'
        }
        else{
            setDark('Dark');
            setColor('light')
            document.body.style.backgroundColor = 'white'
        }
    }

        return (
            <>
            <nav className = {`navbar navbar-expand-lg navbar-${color} bg-${color} sticky-lg-top sticky-md-top sticky-xl-top sticky-xxl-top sticky-sm-top`}>
                <div className="container-fluid">
                <Link className="navbar-brand" to="/" >lastest News</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                    </ul>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={darkMode} type="checkbox" id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color : color === 'light' ? 'black' : 'white' }}>{dark}</label>
                </div>
                </div>
            </nav>
            </>
        )
}

export default Navbar