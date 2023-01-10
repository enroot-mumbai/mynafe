import Link from 'next/link'
import React from 'react'
import BasicTabs from '../src/components/Tabs'
import LoginWithEmail from '../src/features/auth/LoginWithEmail';
import LoginWithPhone from '../src/features/auth/LoginWithPhone';

type Props = {}

function Login({ }: Props) {

  const tabs = [
    {
      title: 'Phone Number',
      Component: <LoginWithPhone />
    },
    {
      title: 'Email',
      Component: <LoginWithEmail />
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