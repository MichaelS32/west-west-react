import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Box, Paper, Grid } from'@mui/material';
import logo from '../../assets/west-west-logo.png';


function NavBar(props) {
    const location = useLocation();

    const { pathname } = location;

    const splitLocation = pathname.split("/");

    return (
        <Box sx={{
            width: '100vw',
            // height: '11vh',
            backgroundColor: '#6F1D1B'
        }}
        >
            <Grid container className='nav-container'>
                <Grid item xs={12} md={2}>
                    <Link to='/' className='text-decoration-none spacing'>
                        <div sx={{
                            width: '8vw',
                            height: '10vh',
                            
                        }}>
                            <img style={{ width: '15vw', height: '10vh', padding: 6, float: 'left' }} src={logo} alt='West and West Attorney at law logo' />
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={2} md={2}>
                    <NavLink exact='true' className={splitLocation[1] === "about" ? "active" : "nav"} to='/about'>
                        <h2 className={splitLocation[1] === 'about' ? "active" : 'nav hovering nav-text'} href="#about">

                            About Us

                        </h2>
                    </NavLink>
                </Grid>
                <Grid item xs={2} md={2}>
                    <NavLink exact='true' className={splitLocation[1] === "attorney" ? "active" : "nav"} to='/attorney'>
                        <h2 className={splitLocation[1] === 'attorney' ? "active" : 'nav hovering nav-text'} href="#attorney">

                            Attorneys

                        </h2>
                    </NavLink>
                </Grid>
                <Grid item xs={2} md={2}>
                    <NavLink exact='true' className={splitLocation[1] === "contact" ? "active" : "nav"} to='contact'>
                        <h2 className={splitLocation[1] === 'contact' ? "active" : 'nav hovering nav-text'} href="#contact">

                            Contact

                        </h2>
                    </NavLink>
                </Grid>
                <Grid item xs={2} md={2}>
                    <NavLink exact='true' className={splitLocation[1] === "practice" ? "active" : "nav"} to='/practice'>
                        <h2 className={splitLocation[1] === 'practice' ? "active" : 'nav hovering nav-text'} href="#practice">

                            Practice Areas

                        </h2>
                    </NavLink>
                </Grid>
                <Grid item xs={2} md={2}>
                    <NavLink exact='true' className={splitLocation[1] === "reviews" ? "active" : "nav"} to='/reviews'>
                        <h2 className={splitLocation[1] === 'reviews' ? "active" : 'nav hovering nav-text'} href="#reviews">

                            Reviews

                        </h2>
                    </NavLink>
                </Grid>
            </Grid>
            
        </Box>
    );
}

export default NavBar;