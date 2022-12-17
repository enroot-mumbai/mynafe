import Link from 'next/link'
import React from 'react'
import MaterialTextField from '../../src/components/inputs/MUITextField'

type Props = {}

function Reset({ }: Props) {
  return (
    <div className='pageContainerCenter'>
      <div className='pageContent'>
        <h2 className='pageTitle'>Reset Password</h2>
        <div className='d-flex column flex-gap20'>
          <MaterialTextField variant="outlined" name="password" placeholder='Enter your new password' />

          <MaterialTextField variant="outlined" name="confirm-password" placeholder='Enter your new password again' />

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