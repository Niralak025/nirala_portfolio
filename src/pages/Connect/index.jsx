import React, { useState } from 'react';
import './index.css';
import { Button, Stack, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import { connectContent } from '../../utils/globalConstant';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Connect = ({ connectRef }) => {
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
                subject: `Portfolio Contact - ${formData.userName}`,
            });
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    const { contactInfo } = connectContent;

    return (
        <div className="connect-card" ref={connectRef}>
            <div className="connect-info-pane">
                <h2 className="connect-info-title">Contact Info</h2>
                <p className="connect-info-desc">
                    Reach out for collaborations, job opportunities, or just a quick chat!
                </p>
                <div className="connect-info-list">
                    <a href={`mailto:${contactInfo.email}`} className="connect-info-item">
                        <div className="connect-info-icon-wrapper email-icon">
                            <FaEnvelope />
                        </div>
                        <div className="connect-info-text">
                            <span className="connect-info-label">Email</span>
                            <span className="connect-info-value">{contactInfo.email}</span>
                        </div>
                    </a>

                    <div className="connect-info-item-group">
                        <a href={contactInfo.phoneUrl} className="connect-info-item half-width">
                            <div className="connect-info-icon-wrapper phone-icon">
                                <FaPhoneAlt />
                            </div>
                            <div className="connect-info-text">
                                <span className="connect-info-label">Call</span>
                                <span className="connect-info-value">{contactInfo.phone}</span>
                            </div>
                        </a>
                        <a href={contactInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="connect-info-item half-width">
                            <div className="connect-info-icon-wrapper whatsapp-icon">
                                <FaWhatsapp />
                            </div>
                            <div className="connect-info-text">
                                <span className="connect-info-label">WhatsApp</span>
                                <span className="connect-info-value">Chat Now</span>
                            </div>
                        </a>
                    </div>

                    <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="connect-info-item">
                        <div className="connect-info-icon-wrapper linkedin-icon">
                            <FaLinkedin />
                        </div>
                        <div className="connect-info-text">
                            <span className="connect-info-label">LinkedIn</span>
                            <span className="connect-info-value">Connect on LinkedIn</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="connect-content">
                <h2 className="connect-title">{connectContent.title}</h2>
                <Stack
                    component="form"
                    className="connect-form"
                    spacing={3.5}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        name="userName"
                        label={connectContent.nameLabel}
                        variant="outlined"
                        required
                        fullWidth
                        onChange={handleChange}
                    />
                    <TextField
                        name="userEmail"
                        label={connectContent.emailLabel}
                        variant="outlined"
                        type="email"
                        required
                        fullWidth
                        onChange={handleChange}
                    />
                    <TextField
                        name="userMessage"
                        label={connectContent.messageLabel}
                        placeholder={connectContent.messagePlaceholder}
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
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