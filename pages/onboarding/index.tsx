import React from 'react'
import TextField from '@mui/material/TextField';
import { useRouter } from 'next/router';

type Props = {}

function Onboarding({ }: Props) {
  const router = useRouter();
  return (
    <div className='pageContainerCenter'>
      <div className='pageContent'>
        <h2 className='pageTitle'>Onboarding</h2>
        <div className='d-flex column flex-gap20'>
          <TextField
            className='specialInput'
            id="outlined-basic"
            label="Aapka Naam"
            variant="outlined"
          />
          <TextField
            className='specialInput'
            id="outlined-basic"
            label="Aapka Janam din"
            variant="outlined"
          />

          <TextField
            className='specialInput'
            id="outlined-basic"
            label="Aapka Address"
            variant="outlined"
          />

          <TextField
            className='specialInput'
            id="outlined-basic"
            label="Aapki City"
            variant="outlined"
          />

          <TextField
            className='specialInput'
            id="outlined-basic"
            label="Aapka State"
            variant="outlined"
          />

          <button onClick={() => {
            router.push('/onboarding/steps')
          }} className='primaryButton w-100'>
            Submit Details
          </button>
        </div>

      </div>

    </div>
  )
}

export default Onboarding