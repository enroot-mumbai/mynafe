import React from 'react'
import TextField from '@mui/material/TextField';

type Props = {}

function EditProfile({ }: Props) {
  return (
    <div className='pageContainerTop'>
      <div className='pageContent'>
        <h2 className='pageTitle'>Profile change kare</h2>
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
            label="Email Address"
            variant="outlined"
          />
          <TextField
            className='specialInput'
            id="outlined-basic"
            label="Phone Number"
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

          <button className='primaryButton w-100'>
            Submit Details
          </button>
        </div>

      </div>

    </div>
  )
}

export default EditProfile