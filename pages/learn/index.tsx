import React from 'react'
import SimpleBottomNavigation from '../../src/components/layout/BottomNavigation'
import Navigation from '../../src/components/layout/Navigation'

type Props = {}

function Learn({}: Props) {
  return (
    <>
    <Navigation />
    <div className='pageContainerTop'>
      <div className='pageContent p-20'>
        <h2 className='pageTitle'>Lessons</h2>
        

      </div>
    </div>

    <SimpleBottomNavigation defaultValue={0} />
  </>
  )
}

export default Learn