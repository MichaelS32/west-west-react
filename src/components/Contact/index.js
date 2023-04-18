import React, { useState } from 'react';
import apiKey from '../../emailKey.js'
import { validateEmail } from '../../utils/helpers';
import { Box, Paper, Grid } from'@mui/material';
import emailjs from '@emailjs/browser'

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default refresh by the browser
        emailjs.sendForm(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, e.target, apiKey.USER_ID)
        .then((result) => {
            alert("Message Sent, We will get back to you shortly", result.text);
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
                setErrorMessage(`${e.target.name} is required.`);
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

                <Box className='contact-container'> 
                    <Paper elevation={3} className={'contact-card'}  >
                    <h1 className="">Contact Us</h1>
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className='contact-field'>Name: </label>
                                <input id='name' type="text" name="name" className='form-input contact-field' defaultValue={name} onBlur={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="email" className='contact-field'>Email: </label>
                                <input id='email' type="email" name="email" className='form-input contact-field' defaultValue={email} onBlur={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="message" className='contact-field'>Message: </label>
                                <textarea id='message' name="message" rows="5" className='form-input contact-field' defaultValue={message} onBlur={handleChange} />
                            </div>
                            {errorMessage && (
                                <div>
                                    <p className="error-text">{errorMessage}</p>
                                </div>
                            )}
                            <button data-testid="button" type="submit">Submit</button>
                        </form>
                    </Paper>
                </Box>
            
        </section>
    );
}

export default Contact;