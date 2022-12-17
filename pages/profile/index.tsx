import React from 'react'
import SimpleBottomNavigation from '../../src/components/layout/BottomNavigation'
import Navigation from '../../src/components/layout/Navigation'

type Props = {}

function UserProfile({ }: Props) {
  return (
    <>
      <Navigation />
      <div className='pageContainerTop'>
        <div className='pageContent p-20'>
          <h2 className='pageTitle '>Hi User</h2>
          <p>How are you feeling today?</p>

          <p>
            Your Myna ID - DZIFDS2324
          </p>
          <p>Email Address - abc@gmail.com</p>
          <p>Phone Number - 9594702015</p>
          <p>Thane, Maharashtra, India</p>
          <p>Date of birth - 24th May 1996</p>

          <button className='secondaryButton'>Edit Profile</button>

          <span className='divider'/>
          <div>
            <h3>Health Tip #2</h3>
            <div className='mt-10'>
              <p>Paryapt aaram lene swasthya ke liye achha hota hai. Hame kam se kam 7-9 ghante sona chahiye.</p>
            </div>
            <div>

            </div>
          </div>

          <div className='mt-20'>
            <button className='primaryButton'>Join Myna Champions</button>
          </div>

        </div>
      </div>

      <SimpleBottomNavigation defaultValue={4} />
    </>

  )
}

export default UserProfile