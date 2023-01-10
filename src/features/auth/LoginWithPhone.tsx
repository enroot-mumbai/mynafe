import Link from 'next/link'
import React from 'react'
import TextField from '@mui/material/TextField';

type Props = {}

function LoginWithPhone({ }: Props) {
    return (
        <div className='d-flex column flex-gap20 mt-20'>
            <TextField
                className='specialInput'
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                name="phone"
            />
            <TextField
                className='specialInput'
                id="outlined-basic"
                label="Aapka password"
                variant="outlined"
                name="password"
            />
            <Link className='text-link' href={'/forgot-password'}>
                Forgot Password?
            </Link>
            <button className='primaryButton w-100'>
                Login
            </button>
        </div>
    )
}

export default LoginWithPhone