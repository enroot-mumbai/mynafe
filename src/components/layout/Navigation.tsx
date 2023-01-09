import React from 'react'
import ChatIcon from '../../assets/icons/ChatIcon'
import { useRouter } from 'next/router';

type Props = {}

function Navigation({ }: Props) {
  const router = useRouter()

  return (
    <div className='navigationBar'>
      <img src='/logoWhite.png' style={{ height: '36px' }} />
      <div onClick={() => router.push('/chats')} className='navigationChat'>
        <ChatIcon color={'#fff'} />
      </div>
    </div>
  )
}

export default Navigation