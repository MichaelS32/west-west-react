import React, { useState } from 'react';
import apiKey from '../../emailKey.js'
import { validateEmail } from '../../utils/helpers';
import { Box, Paper, Grid } from'@mui/material';
import emailjs from '@emailjs/browser'

function Contact() {
    const [formState, setFormState] = useState({ first_name: '', last_name: '', phone: '', fax: '', email: '', address: '', city_state: '', zip_code: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { first_name, last_name, phone, fax, email, address, city_state, zip_code, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        emailjs.sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
        .then((result) => {
            alert("Message Sent, we will get back to you shortly", result.text);
        },
        (error) => {
            alert("An error occurred, Please try again", error.text);
        });
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.id} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <section>

                <Box id='contact' className='contact-container contact-card'> 
                    {/* <Paper elevation={3} className={'contact-card'}  > */}
                    <h1 className="">Contact Us</h1>
                    <div className='contact-field-width'>
                        <form id="contact-form" onSubmit={handleSubmit}>
                        <Grid container>
                        <Grid item className='' md={5} xs={10}>
                            <div>
                                <label htmlFor="first_name" className='contact-field'>First Name: </label>
                                <input id='First Name' type="text" name="first_name" className='form-input contact-field' defaultValue={first_name} onBlur={handleChange} />
                            </div>
                        </ Grid>
                        <Grid item className='' md={5} xs={10}>
                            <div>
                                <label htmlFor="last_name" className='contact-field'>Last Name: </label>
                                <input id='Last Name' type="text" name="last_name" className='form-input contact-field' defaultValue={last_name} onBlur={handleChange} />
                            </div>
                        </ Grid>
                        <Grid item className='' md={4} xs={10}>
                            <div>
                                <label htmlFor="phone" className='contact-field'>Phone: </label>
                                <input id='Phone' type="text" name="phone" className='form-input contact-field' defaultValue={phone} onBlur={handleChange} />
                            </div>
                        </Grid>
                        <Grid item className='' md={4} xs={10}>
                            <div>
                                <label htmlFor="fax" className='contact-field'>Fax: </label>
                                <input id='Fax' type="text" name="fax" className='form-input contact-field' defaultValue={fax} onBlur={handleChange} />
                            </div>
                        </Grid>
                        <Grid item className='' md={4} xs={10}>
                            <div>
                                <label htmlFor="email" className='contact-field'>Email: </label>
                                <input id='Email' type="email" name="email" className='form-input contact-field' defaultValue={email} onBlur={handleChange} />
                            </div>
                        </ Grid>
                            <div>
                                <label htmlFor="address" className='contact-field'>Address: </label>
                                <input id='Address' type="text" name="address" className='form-input contact-field' defaultValue={address} onBlur={handleChange} />
                            </div>
                        <Grid item className='' md={4} xs={10}>
                            <div>
                                <label htmlFor="city_state" className='contact-field'>City & State: </label>
                                <input id='City & State' type="text" name="city_state" className='form-input contact-field' defaultValue={city_state} onBlur={handleChange} />
                            </div>
                        </Grid>
                        <Grid item className='' md={4} xs={10}>
                            <div>
                                <label htmlFor="zip_code" className='contact-field'>Zip Code: </label>
                                <input id='Zip Code' type="text" name="zip_code" className='form-input contact-field' defaultValue={zip_code} onBlur={handleChange} />
                            </div>
                        </Grid>
                        <Grid item className='' md={10}  xs={10}>
                            <div>
                                <label htmlFor="message" className='contact-field '>Message: </label>
                                <textarea id='Message' name="message" rows="5" className='form-input contact-field contact-field-msg' defaultValue={message} onBlur={handleChange} />
                            </div>
                        </Grid>
                            
                        </Grid>
                        {errorMessage && (
                                <div>
                                    <p className="error-text">{errorMessage}</p>
                                </div>
                            )}
                        
                            <button data-testid="button" type="submit" value=''>Submit</button>
                        </form>
                    </div>
                    
        
                    {/* </Paper> */}
                </Box>
            
        </section>
    );
}

export default Contact;