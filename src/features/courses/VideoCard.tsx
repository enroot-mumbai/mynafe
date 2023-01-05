import React from 'react'
import { VideoPropsParent } from '../../utils/types/Courses'
import styles from './Courses.module.scss'


function VideoCard({video}: VideoPropsParent) {
    return (
        <div onClick={()=>{
            console.log('Set the video to active and play')
        }} className={styles.singlevideo}>
            <p>{video.title}</p>
        </div>
    )
}

export default VideoCard