import React from 'react';
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import { Box, Paper, Grid } from '@mui/material';
import logo from '../../assets/west-west-logo.png';


function NavBar(props) {
    const location = useLocation();

    const { pathname } = location;

    const splitLocation = pathname.split("/");

    return (
        <Box sx={{
            width: '100vw',
            // height: '11vh',
            // backgroundColor: '#6F1D1B'
        }}
        >
            <Grid container className='nav-container'>
                <Grid item xs={12} md={2}>
                    <Link to='/' className='text-decoration-none spacing'>
                        <div sx={{
                            width: '8vw',
                            height: '10vh',

                        }}>
                            <img style={{ minWidth: '200px', width: '15vw', height: 'auto', padding: 6, float: 'left' }} src={logo} alt='West and West Attorney at law logo' />
                        </div>
                    </Link>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Link activeClass='active' smooth spy to='about'>
                        <h2 className='nav hovering nav-text'>

                            About Us

                        </h2>
                    </Link>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Link activeClass='active' smooth spy to='attorney'>
                        <h2 className='nav hovering nav-text'>

                            Attorneys

                        </h2>
                    </Link>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Link activeClass='active' smooth spy to='contact'>
                        <h2 className='nav hovering nav-text'>

                            Contact

                        </h2>
                    </Link>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Link activeClass='active' smooth spy to='practice'>
                        <h2 className='nav hovering nav-text'>

                            Practice

                        </h2>
                    </Link>
                </Grid>
                <Grid item xs={2} md={2}>
                    <Link activeClass='active' smooth spy to='reviews'>
                        {/* className={splitLocation[1] === "reviews" ? "active" : "nav"}  */}
                        <h2 className='nav hovering nav-text'>

                            Reviews

                        </h2>
                    </Link>
                </Grid>
            </Grid>

        </Box>
    );
}

export default NavBar;