import React from 'react'
import SimpleBottomNavigation from '../src/components/layout/BottomNavigation'
import Navigation from '../src/components/layout/Navigation'

type Props = {}

function PeriodTracking({}: Props) {
  return (
    <>
    <Navigation />
    <div className='pageContainerTop'>
      <div className='pageContent p-20'>
        <h2 className='pageTitle'>Sehat</h2>


      </div>
    </div>

    <SimpleBottomNavigation defaultValue={3} />
  </>
  )
}

export default PeriodTracking