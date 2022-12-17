import React from 'react'
import MaterialTextField from '../src/components/inputs/MUITextField'

type Props = {}

function Onboarding({ }: Props) {
  return (
    <div className='pageContainerCenter'>
      <div className='pageContent'>
        <h2 className='pageTitle'>Onboarding</h2>
        <div className='d-flex column flex-gap20'>
          <MaterialTextField variant="outlined" name="name" placeholder='Your Name' />

          <MaterialTextField variant="outlined" name="city" placeholder='Your City' />
          <MaterialTextField variant="outlined" name="state" placeholder='Your State' />
          <MaterialTextField variant="outlined" name="dob" placeholder='Date of Birth' />

          <button className='primaryButton w-100'>
            Submit Details
          </button>
        </div>

      </div>

    </div>
  )
}

export default Onboarding