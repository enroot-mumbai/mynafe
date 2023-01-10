import { useRouter } from 'next/router';
import React from 'react'
import styles from './Chats.module.scss'
type Props = {
    chat: any;
}

function ChatGroupCard({ chat }: Props) {
    const router = useRouter();
    return (
        <div onClick={() => {
            router.push(`/chats/${chat.id}`)
        }} className={styles.singleGroupChatCard}>
            <img src={chat.image} height="50" />
            {chat.title}
        </div>
    )
}

export default ChatGroupCard