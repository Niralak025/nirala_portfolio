import React, { useState } from 'react'
import Connect_Image from '../../assets/images/nirala_1.jpg'
import './index.css'
import { Button, Stack, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

const Connect = () => {

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userMessage, setUserMessage] = useState('')


    const sendEmail = async (e) => {
        const serviceId = "service_n56zm91";
        const templateId = "template_j7qu8nq";
        try {
            await emailjs.send(serviceId, templateId, {
                name: userName,
                message: userMessage,
                email: userEmail,
                recipient: 'nirala1rampura@gmail.com'
            });
        } catch (error) {
             console.log("error----", error);
        }
    };

    return (
        <div className="card text-bg-light">
            <img src={Connect_Image} className="connectImageStyle" alt="..." width="350" height="500" />
            <div className="card-img-overlay innerCintainer">
                <div className='contentContainer'>
                    <h5 className="card-title titleStyle">Let's Talk!</h5>
                    <Stack
                        component="form"
                        sx={
                            {
                                marginTop: '35px',
                                backgroundColor: 'white',
                                padding: '35px',
                                borderRadius: '10px',
                            }}
                        spacing={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            InputLabelProps={{ style: { color: '#124893' } }}
                            id="standard-basic"
                            label="Name"
                            variant="standard"
                            required
                            onChange={(text) => {
                                setUserName(text?.target?.value)
                            }}
                        />

                        <TextField
                            InputLabelProps={{ style: { color: '#124893' } }}
                            id="standard-basic"
                            label="Email"
                            variant="standard"
                            required
                            onChange={(text) => {
                                setUserEmail(text?.target?.value)
                            }}
                            style={{}}
                        />

                        <TextField
                            InputLabelProps={{ style: { color: '#124893' } }}
                            id="standard-multiline-flexible"
                            label="Message"
                            placeholder='Message...'
                            multiline
                            maxRows={4}
                            variant="standard"
                            onChange={(text) => {
                                setUserMessage(text?.target?.value)
                            }}
                        />
                        <Button
                            variant="contained"
                            endIcon={<SendIcon />}
                            style={{
                                alignSelf: 'center',
                                width: '50%',
                                backgroundColor: '#124893',
                                overflow: 'hidden'
                            }}
                            onClick={() => {
                                sendEmail()
                            }}
                        >
                            Send
                        </Button>
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default Connect