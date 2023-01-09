import Link from 'next/link'
import React from 'react'
import TextField from '@mui/material/TextField';

type Props = {}

function Reset({ }: Props) {
  return (
    <div className='pageContainerCenter'>
      <div className='pageContent'>
        <h2 className='pageTitle'>Reset Password</h2>
        <div className='d-flex column flex-gap20'>
          <TextField
            className='specialInput'
            id="outlined-basic"
            label="Aapka naya password"
            variant="outlined"
            name="password"
          />
          <TextField
            className='specialInput'
            id="outlined-basic"
            label="Naya password confirm kare"
            variant="outlined"
            name="confirm-password"
          />

          <button className='primaryButton w-100'>
            Reset password
          </button>

          <span className='divider'></span>

          <Link className='text-link' href={'/login'}>
            Yaha Login kare
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Reset