import Link from 'next/link'
import React from 'react'
import MaterialTextField from '../../src/components/inputs/MUITextField'
import BasicTabs from '../../src/components/Tabs'

type Props = {}

function Login({ }: Props) {

  const LoginWithMail = () => {
    return (
      <div className='d-flex column flex-gap20 mt-20'>
        <MaterialTextField variant="outlined" name="email" placeholder='Email address' />
        <MaterialTextField variant="outlined" name="password" placeholder='Your password' />
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
        <MaterialTextField variant="outlined" name="phone" placeholder='Phone Number' />
        <button className='primaryButton w-100'>
          Login
        </button>
      </div>
    )
  }

  const tabs = [
    {
      title: 'Email',
      Component: <LoginWithMail />
    },
    {
      title: 'Phone Number',
      Component: <LoginWithPhone />
    }
  ]

  return (
    <div className='pageContainerCenter'>
      <div className='pageContent'>
        <h2 className='pageTitle'>Login</h2>

        <BasicTabs tabs={tabs} />

        <Link href={'/signup'}>
          New user? <span className='text-link'>Create account here</span>
        </Link>

      </div>

    </div>
  )
}

export default Login