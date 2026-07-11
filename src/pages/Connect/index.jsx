import React, { useState } from 'react';
import Connect_Image from '../../assets/images/nirala_1.jpg';
import './index.css';
import { Button, Stack, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import { connectContent } from '../../utils/globalConstant';

const Connect = () => {
    const [formData, setFormData] = useState({ userName: '', userEmail: '', userMessage: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const sendEmail = async () => {
        const { serviceId, templateId, recipientEmail } = connectContent.emailjsConfig;
        try {
            await emailjs.send(serviceId, templateId, {
                name: formData.userName,
                message: formData.userMessage,
                email: formData.userEmail,
                recipient: recipientEmail,
            });
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <div className="connect-card">
            <div className="connect-content">
                <h5 className="connect-title">{connectContent.title}</h5>
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
                        label={connectContent.nameLabel}
                        variant="standard"
                        required
                        onChange={handleChange}
                    />
                    <TextField
                        InputLabelProps={{ style: { color: '#124893' } }}
                        name="userEmail"
                        label={connectContent.emailLabel}
                        variant="standard"
                        required
                        onChange={handleChange}
                    />
                    <TextField
                        InputLabelProps={{ style: { color: '#124893' } }}
                        name="userMessage"
                        label={connectContent.messageLabel}
                        placeholder={connectContent.messagePlaceholder}
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
                        {connectContent.sendButtonText}
                    </Button>
                </Stack>
            </div>
        </div>
    );
};

export default Connect;