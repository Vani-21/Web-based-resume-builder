import React from "react";
import { Link } from "react-router-dom";
import {GiGraduateCap} from 'react-icons/gi';
import { Heading } from "@chakra-ui/react";


const Navbar = () => {
    return (
        <nav className="navbar navbar-light navbar-expand-md py-3" style={{"backgroundColor": "lightgrey"}}>
            <div className='container'>
                <Heading><GiGraduateCap  /></Heading>
                <b><span style={{"fontSize":"20px"}}> ResPro</span></b>
                <div className="collapse navbar-collapse" id="navcol-2" style={{"marginLeft": "86px"}}>
                <div className="navbar-nav ms-auto">
                <Link to='/' className='nav-item nav-link'>HOME</Link>
                <Link to='/templatepage' className='nav-item nav-link'>RESUME</Link>
                <Link to='/about' className='nav-item nav-link'>ABOUT US</Link>
                <Link to='/contact' className='nav-item nav-link'>CONTACT</Link>
                {/*<Link className="btn btn-primary ms-md-2"  role="button" target="_blank" rel="noopener noreferrer"  style={{"backgroundColor":" black"}}>LOG IN</Link>*/}
                </div>
            </div>
            </div>
        </nav>
    )};

    export default Navbar;