import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Box, Paper, Grid } from'@mui/material';
import logo from '../../assets/west-west-logo.png';
import scales from '../../assets/scales.png';
import icon from '../../assets/small-logo.png';

function Footer() {
    return (
        <section>
            <Box sx={{
            width: '100vw',
            // height: '11vh',
            backgroundColor: 'var(--primary)'
            }}>
                <Grid container className={'footer-text'}>
                    <Grid item className='footer txt-left' xs={4}>
                        <p>West & West Attorney at Law</p>
                        <a href='tel:2103402200' className='footer-text foot-hov'>(210) 340-2200</a> <br />
                        <a target="_blank" href='https://goo.gl/maps/b3Tmhkgno2U4hnTx8' className='footer-text foot-hov'>2929 Mossrock,<br/> San Antonio, TX 78230</a>

                    </Grid>
                    <Grid item className='footer center-footer' xs={4}>
                        <img className='scales' src={scales} alt='weighing scales' />
                    </Grid>
                    <Grid item className='footer txt-right center-footer' xs={4}>
                        <img className='icon-w' src={icon} alt='west and west icon logo' />
                    </Grid>
                </Grid>
            </Box>
        </section>
    )
}

export default Footer;