import { Button, Container } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { animateCSS } from '../animation/triggerAnimation'
import HomeImage from '../assets/images/Logo-01.png'

const HomePage = () => {

    const navigate = useHistory()

    const handleStartBtn = async () => {
        animateCSS(".start-btn", 'bounceOutDown', true, 1000)
        animateCSS(".start-content", 'bounceOutUp', true, 1000)
    
        setTimeout(
            () => {
                navigate.push('/login')
            },
            1000
        );
    }

    return (
        <Container style={{ textAlign: 'center'}} fixed>
            <div className='start-content animate__slow'>
                <div className='animate__animated animate__backInDown'>
                    <img src={HomeImage} className="home-img animate__animated animate__bounce  animate__1 animate__delay-5s" />
                </div>
                {/* <h2 style={{ color: '#BD1307', fontWeight: 'bold', fontSize: '2em' }} className="app-name animate__animated animate__lightSpeedInLeft animate__delay-1s">Cricket Game Application</h2> */}
            </div>
            <div className='animate__animated animate__backInUp animate__delay-1s'>
                <Button
                    variant="contained"
                    color="error"
                    className="start-btn animate__slow"
                    onClick={() => handleStartBtn()}>
                    PLAY NOW
                </Button>
            </div>
        </Container>

    )
}

export default HomePage