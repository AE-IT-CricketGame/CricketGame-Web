import { Button, Container, InputAdornment, TextField } from '@mui/material'
import Ball from '../assets/images/ball.png'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import { Player } from '@lottiefiles/react-lottie-player';
import * as animationData from '../assets/lottie/104144-cricket-ball.json'
import { CModal } from '@coreui/react';
import Countdown from 'react-countdown';
const AnswerButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 20,
  fontWeight: 'bolder',
  padding: 5,
  width: 300,
  textAlign: 'center',
  justifyContent: 'start',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: 'aliceblue',
  borderColor: '#BD1307',
  borderWidth: 3,
  borderRadius: 50,
  boxShadow: '10px 10px 20px rgb(56, 41, 41)',
  color: '#BD1307',
  '&:hover': {
    backgroundColor: '#b5bcc2',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#b5bcc2',
    borderColor: '#b5bcc2',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem b5bcc2',
  },
});

const runs = [
  {
    run: 1,
    label: "1 Run"
  },
  {
    run: 2,
    label: "2 Runs"
  },
  {
    run: 4,
    label: "4 Runs"
  },
  {
    run: 6,
    label: "6 Runs"
  }
]


function RunSelection({ changeStatus }) {

  const [animation, setAnimation] = useState(false)
  const [selectedRun, setSelectedRun] = useState(1)

  const selectRun = (run) => {
    setSelectedRun(run)
    setAnimation(true)
  }

  const handleEventPlayer = (e) => {
    if (e == 'complete')
      changeStatus(selectedRun)
  }


  return (
    <>
      <div className='top-heading'>
        <h2 style={{ color: '#cf4036', fontWeight: 'bold', fontSize: '2em', WebkitTextStroke: "0.5px #BD1307" }} className="animate__animated animate__bounceInDown">Select Your Run</h2>

      </div>
      <CModal size="lg" style={{ marginTop: "20%", backgroundColor: "rgba(0, 0, 0, 0.5)", background: 'none', border: 0 }} backdrop={"static"} visible={animation} onClose={() => setAnimation(false)}>
        <Player
          src={animationData}
          className="ball-player"
          autoplay
          onEvent={handleEventPlayer}
        />
      </CModal>

      <div className='input-container-number mt-5 '>
        {runs.map((item, key) => (
          <div key={key} className='input-with-number mt-3 animate__animated animate__lightSpeedInLeft'>
            <div>
              <AnswerButton
                className='aBtn'
                color='primary'
                variant="contained"
                onClick={() => selectRun(item.run)}
                startIcon={<img src={Ball} width={300} className="answer-ball" />}>
                {item.label}
              </AnswerButton>
            </div>
          </div>
        ))}

      </div>
    </>
  )
}

export default RunSelection