import { Nav, NavLink } from './index.js';
import './Navbar.css';


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-mainbg bg-dark" style={{ backgroundColor: 'teal' }}>

                <NavLink className="navbar-brand navbar-logo" style={{
                    fontFamily: 'Pacifico',
                    fontSize: '30px'
                }} to="/">
                    My Resume
                </NavLink>


                <button
                    className="navbar-toggler"
                    //   onClick={ function(){
                    //     setTimeout(function(){ animation(); });
                    //   }}
                    type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars text-white"></i>
                </button>

                <div
                    className="collapse navbar-collapse" id="navbarSupportedContent" style={{ background: 'teal', zIndex: '2' }}>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to='about' smooth={true} >ABOUT</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to='skill' smooth={true} >SKILL</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to='education' smooth={true} >EDUCATION</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='experience' smooth={true} >EXPERIENCE</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='portfolio' smooth={true} >PORTFOLIO</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar


