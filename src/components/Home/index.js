import React from 'react';
import { Box, Paper, Grid } from '@mui/material';
import logo from '../../assets/west-west-logo.png';
import hero from '../../assets/west-west-west-hero.png';
import Contact from '../Contact';
import Reviews from '../Reviews';
import Attorney from '../Attorney';
import { FadeIn } from 'react-slide-fade-in';
import NavBar from '../NavBar';


const Home = () => {
    const yearsInBusiness = (new Date().getFullYear() - 1947)
    return (
        <section>
            <div className='article'>
                <div className='hero-border'>
                    <NavBar />

                    <img className='picture hero-img' style={{ width: '100%' }} src={hero} alt='San Antonio Skyline' />
                </div>
                
                    <Box className='hover'>
                    
                        {/* <Paper elevation={4} className={'header'}  > */}
                        <FadeIn 
                        from=""
                        positionOffset={800}
                        triggerOffset={0}
                        delayInMilliseconds={1000}
                        >
                            <h1 className='header header-title'> A Remarkable History and Tradition. </h1>
                            {/* <div className='text'> */}
                                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis volutpat est velit egestas dui. Id donec ultrices tincidunt arcu non sodales. Sit amet consectetur adipiscing elit ut aliquam purus sit amet.</div> */}
                        </FadeIn>
                        {/* </Paper> */}
                </Box>
                

            </div>
            
            <Box sx={{
                width: '100vw',
                marginTop: '4vh',
                // height: '11vh',
                // backgroundColor: '#6F1D1B'
            }}
            >
                <FadeIn
                    from="right"
                    positionOffset={800}
                    triggerOffset={600}
                    delayInMilliseconds={600}
                >
                            <Box id='about' className='about spacing'>
                                
                                    <h1 className='title'>
                                        Info Slot
                                    </h1>
                                    <div className='text'>
                                        Turpis egestas integer eget aliquet nibh. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Vitae suscipit tellus mauris a diam. Non pulvinar neque laoreet suspendisse interdum consectetur. Ipsum a arcu cursus vitae congue mauris rhoncus. Risus in hendrerit gravida rutrum quisque non tellus. Pharetra massa massa ultricies mi. Enim praesent elementum facilisis leo vel fringilla est. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Neque ornare aenean euismod elementum. Diam donec adipiscing tristique risus nec feugiat in fermentum posuere. Donec ultrices tincidunt arcu non. Amet nisl purus in mollis nunc sed id. Varius duis at consectetur lorem donec massa sapien faucibus et. Molestie at elementum eu facilisis. Nisl rhoncus mattis rhoncus urna. Egestas sed tempus urna et.
                                    </div>
                                
                            </Box>
                </FadeIn>
            </Box>
            <Box sx={{
                width: '100vw',
                marginTop: '4vh',
                // height: '11vh',
                // backgroundColor: '#6F1D1B'
            }}
            >
                <FadeIn
                        from="right"
                        positionOffset={0}
                        triggerOffset={600}
                        delayInMilliseconds={600}
                    >
                    {/* <Grid container className='home-container'>
                        <Grid item className='spacing' xs={8} md={5}> */}
                            <Attorney />
                        {/* </Grid> */}
                    {/* </Grid> */}
                </ FadeIn>
            </Box>
            <div className='fixed-bg' >
                    <div className='separate'>
                        Serving San Antonio for {yearsInBusiness} years
                    </div>
            </div>
            <FadeIn 
                        from="bottom"
                        positionOffset={400}
                        triggerOffset={200}
                        delayInMilliseconds={400}
                    >
            <Grid container className='frame-container'>
            
                <Grid item className='hours-border' xs={7} md={4}>
                    
                        <h3>Hours of Operation:</h3>
                        <p>Monday - 8:30am - 5:00pm</p>
                        <p>Tuesday - 8:30am - 5:00pm</p>
                        <p>Wednesday - 8:30am - 5:00pm</p>
                        <p>Thursday - 8:30am - 5:00pm</p>
                        <p>Friday - 8:30am - 3:00pm</p>
                        <p>Saturday-Sunday - Closed</p>
                  
                </Grid>
            
                
                    <Grid item xs={7} md={4}>
                        <iframe title='location of west and west' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55534.729136252194!2d-98.59849167165716!3d29.547807358700666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5e27d12aac55%3A0x52a8cc37abfce462!2sWest%20%26%20West%20Attorney%20at%20Law!5e0!3m2!1sen!2sus!4v1681222952416!5m2!1sen!2sus" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Grid>
                
            </Grid>
            </FadeIn>
            <Reviews />
            <Contact  />

        </section>
    );
}

export default Home;