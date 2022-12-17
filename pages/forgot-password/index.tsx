import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import MaterialTextField from '../../src/components/inputs/MUITextField';

type Props = {}

function EnterEmail({ }: Props) {

  const router = useRouter()

  const [showOTP, setShowOTP] = React.useState(false);

  const submitOTP =()=>{
    router.push('/forgot-password/reset')
  }


  return !showOTP ? (
    <div className='pageContainerCenter'>
      <div className='pageContent'>
        <h2 className='pageTitle'>Reset Password</h2>
        <div className='d-flex column flex-gap20'>
          <MaterialTextField variant="outlined" name="email" placeholder='Enter your email address' />

          <button onClick={()=>setShowOTP(true)} className='primaryButton w-100'>
            Request for OTP
          </button>

          <span className='divider'></span>

          <Link className='text-link' href={'/login'}>
            Yaha Login kare
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className='pageContainerCenter'>
      <div className='pageContent'>
        <h2 className='pageTitle'>Enter OTP</h2>
        <div className='d-flex column flex-gap20'>
          <MaterialTextField variant="outlined" name="otp" placeholder='Enter OTP' />

          <button onClick={submitOTP} className='primaryButton w-100'>
            Submit OTP
          </button>

          <button>
            Didn’t receive OTP? Resend OTP in 29 seconds
          </button>

          <span className='divider'></span>

          <button onClick={()=>setShowOTP(false)} className='text-link' >
            Change email address
          </button>
        </div>
      </div>
    </div>
  )
}

export default EnterEmail