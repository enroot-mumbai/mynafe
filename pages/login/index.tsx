import Link from 'next/link'
import React from 'react'
import BasicTabs from '../../src/components/Tabs'
import TextField from '@mui/material/TextField';

type Props = {}

function Login({ }: Props) {

  const LoginWithMail = () => {
    return (
      <div className='d-flex column flex-gap20 mt-20'>
        <TextField
          className='specialInput'
          id="outlined-basic"
          label="Email address"
          variant="outlined"
          name="email"
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

  const LoginWithPhone = () => {
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

  const tabs = [
    {
      title: 'Phone Number',
      Component: <LoginWithPhone />
    },
    {
      title: 'Email',
      Component: <LoginWithMail />
    },
  ]

  return (
    <div className='pageContainerCenter'>
      <div className='pageContent'>
        <h2 className='pageTitle text-center'>Login</h2>

        <BasicTabs tabs={tabs} />

        <Link href={'/signup'}>
          New user? <span className='text-link'>Create account here</span>
        </Link>

      </div>

    </div>
  )
}

export default Login