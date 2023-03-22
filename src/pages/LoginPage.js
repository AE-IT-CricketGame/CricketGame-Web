import Snackbar from '@mui/material/Snackbar';
import { Container } from '@mui/system'
import React, { useState } from 'react'
import Logo from '../assets/images/Logo-01.png'
import Login from '../components/Login';
import OTP from '../components/OTP';
import { sendOTP } from '../services/otp.service';
import { generateMessage, generateOTP, mobileGenerator } from '../util/otpGenerator';

const LoginPage = () => {
    const [state, setState] = useState("LOGIN")
    const [generatedOTP, setGeneratedOTP] = useState(null)
    const [name, setName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")

    const [snackBarState, setSnackBarState] = useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'center',
        message: ''
    });
    const { vertical, horizontal, open, message } = snackBarState;

    const handleClose = () => {
        setSnackBarState({ ...snackBarState, open: false });
    };


    const sendOTPmessage = async (name, mobileNumber) => {
        const otp = generateOTP(6)
        setGeneratedOTP(otp)
        setName(name)
        setMobileNumber(mobileNumber)
        await sendOTP(generateMessage(name, otp), mobileGenerator(mobileNumber)).then(() => {
            setSnackBarState({ open: true, vertical: 'bottom', horizontal: 'center', message: 'OTP has sent to your mobile number !!' })
        }).catch((e) => {
            setSnackBarState({ open: true, vertical: 'bottom', horizontal: 'center', message: e.message })
        })

    }



    return (
        <Container style={{ textAlign: 'center', marginTop: '5%' }} fixed>
            <div className='top-heading mb-3'>
                <h2 style={{ color: '#cf4036', fontWeight: 'bold', fontSize: '2em', WebkitTextStroke: "0.5px #BD1307" }} className="animate__animated animate__bounceInDown">Login</h2>

            </div>

            {state == "LOGIN" ?
                <Login
                    changeStatus={async (name, mobileNumber) => {
                        await sendOTPmessage(name, mobileNumber)
                        setState("OTP")
                    }
                    }
                /> :
                <OTP generatedOTP={generatedOTP} username={name} mobile={mobileNumber} />
            }

            <div className='animate__animated animate__backInUp'>
                <img src={Logo} className="logo-img animate__slow" />
            </div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message={message}
                key={vertical + horizontal}
            />
        </Container>
    )
}

export default LoginPage