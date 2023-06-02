import React from 'react';
import { Box, Paper, Grid } from '@mui/material';
import { FadeIn } from 'react-slide-fade-in'
import exPic from '../../assets/lawyer-placeholder.jpg';

const Attorney = () => {
    return (
        <section>
            <Box sx={{
                width: '100vw',
                marginTop: '4vh',
                // height: '11vh',
                // backgroundColor: '#6F1D1B'
            }}
            >
                <FadeIn
                    from="left"
                    positionOffset={800}
                    triggerOffset={600}
                    delayInMilliseconds={600}
                >
                    <Grid container className='attorney-container' id='attorney'>
                        <Grid item className='' xs={5} md={5}>
                            <Box className=''>
                                <Paper elevation={3} className={'info-card spacing'}  >
                                    <h1 className='title'>
                                        Attorney
                                    </h1>
                                    <div className='text'>
                                        attorney has been practicing Title law for the past XX years. After graduating from ________ law school, _____ decided to take their talents to west and west to continue it's history of excellence.
                                    </div>
                                    <img  className='attorney-pic' src={exPic} alt='attorney' />
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                </FadeIn>
            </Box>
        </section>
    )
}

export default Attorney;