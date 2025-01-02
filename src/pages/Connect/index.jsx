import React, { useState } from 'react';
import Connect_Image from '../../assets/images/nirala_1.jpg';
import './index.css';
import { Button, Stack, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

const Connect = () => {
    const [formData, setFormData] = useState({ userName: '', userEmail: '', userMessage: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const sendEmail = async () => {
        const serviceId = 'service_n56zm91';
        const templateId = 'template_j7qu8nq';
        try {
            await emailjs.send(serviceId, templateId, {
                name: formData.userName,
                message: formData.userMessage,
                email: formData.userEmail,
                recipient: 'nirala1rampura@gmail.com',
            });
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <div className="connect-card">
            <div className="connect-content">
                <h5 className="connect-title">Let's Talk!</h5>
                <Stack
                    component="form"
                    className="connect-form"
                    spacing={3}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        InputLabelProps={{ style: { color: '#124893' } }}
                        name="userName"
                        label="Name"
                        variant="standard"
                        required
                        onChange={handleChange}
                    />
                    <TextField
                        InputLabelProps={{ style: { color: '#124893' } }}
                        name="userEmail"
                        label="Email"
                        variant="standard"
                        required
                        onChange={handleChange}
                    />
                    <TextField
                        InputLabelProps={{ style: { color: '#124893' } }}
                        name="userMessage"
                        label="Message"
                        placeholder="Message..."
                        multiline
                        maxRows={4}
                        variant="standard"
                        onChange={handleChange}
                    />
                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        className="connect-button"
                        onClick={sendEmail}
                    >
                        Send
                    </Button>
                </Stack>
            </div>
        </div>
    );
};

export default Connect;