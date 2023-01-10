import { useRouter } from 'next/router'
import React from 'react'
import BackIcon from '../../assets/icons/BackIcon'
import styles from './Chats.module.scss'

type Props = {}

function SingleChatComponent({ }: Props) {
    const chat = {
        title: "Chat with Expert",
        id: "mynaExpert",
        image: '/images/doctor.png'
    }

    const router = useRouter();
    return (
        <div>
            <div className={styles.singleChatHeader}>
                <div onClick={() => {
                    router.push('/chats')
                }}>
                    <BackIcon />
                </div>
                <img src={chat.image} height="40" />
                {chat.title}
            </div>
        </div>
    )
}

export default SingleChatComponent