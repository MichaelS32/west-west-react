import React from 'react';
import { Box, Paper, Grid } from'@mui/material';
import logo from '../../assets/west-west-logo.png';
import hero from '../../assets/blue-law.jpg';
import Contact from '../Contact';
import Reviews from '../Reviews';

const Home =() => {
    return (
        <section>
            <div className='article'>
                <div className='hero-border'>
                <img className='picture hero-img' style={{ width: '100%' }} src={hero} alt='San Antonio Skyline' />
                </div>
                <Box className='hover'> 
                    <Paper elevation={4} className={'header'}  >
                    <h1 className='title'> Short Attention Grabber </h1>
                    <div className='text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis volutpat est velit egestas dui. Id donec ultrices tincidunt arcu non sodales. Sit amet consectetur adipiscing elit ut aliquam purus sit amet.</div>
                    </Paper>
                </Box>
            </div>  
            <div className='separator'>
                <div className='separator-text'>
                    Serving the San Antonio Community for XX years!
                </div>
            </div>
            <Box sx={{
            width: '100vw',
            marginTop: '4vh',
            // height: '11vh',
            // backgroundColor: '#6F1D1B'
            }}
            >
                <Grid container className='home-container'>
                    <Grid item  className='spacing' xs={8} md={5}>
                        <Box className=''> 
                            <Paper elevation={3} className={'info-card spacing'}  >
                                <h1 className='title'>
                                    Info Slot
                                </h1>
                                <div className='text'>
                                Turpis egestas integer eget aliquet nibh. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Vitae suscipit tellus mauris a diam. Non pulvinar neque laoreet suspendisse interdum consectetur. Ipsum a arcu cursus vitae congue mauris rhoncus. Risus in hendrerit gravida rutrum quisque non tellus. Pharetra massa massa ultricies mi. Enim praesent elementum facilisis leo vel fringilla est. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Neque ornare aenean euismod elementum. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Donec ultrices tincidunt arcu non. Amet nisl purus in mollis nunc sed id. Varius duis at consectetur lorem donec massa sapien faucibus et. Molestie at elementum eu facilisis. Nisl rhoncus mattis rhoncus urna. Egestas sed tempus urna et. Scelerisque purus semper eget duis at tellus at urna condimentum.
                                </div>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item className='spacing' xs={8} md={5}>
                        <Contact  id="contact"/>
                    </Grid>
                </Grid>
                
            </Box>  
            <div className='fixed-bg' />

            <Grid container className='frame-container'>
                <Grid item className='hours-border' xs={7} md={5}>
                    <h3>Hours of Operation:</h3>
                    <p>Monday - 8:30am - 5:00pm</p>
                    <p>Tuesday - 8:30am - 5:00pm</p>
                    <p>Wednesday - 8:30am - 5:00pm</p>
                    <p>Thursday - 8:30am - 5:00pm</p>
                    <p>Friday - 8:30am - 3:00pm</p>
                    <p>Saturday-Sunday - Closed</p>

                </Grid>
                <Grid item xs={7} md={5}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55534.729136252194!2d-98.59849167165716!3d29.547807358700666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5e27d12aac55%3A0x52a8cc37abfce462!2sWest%20%26%20West%20Attorney%20at%20Law!5e0!3m2!1sen!2sus!4v1681222952416!5m2!1sen!2sus" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>     
                </Grid>
            </Grid>
            <Reviews  id="reviews"/>

        </section>
    );
}

export default Home;