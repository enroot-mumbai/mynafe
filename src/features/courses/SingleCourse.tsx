import Link from 'next/link'
import React from 'react'
import { CourseProps } from '../../utils/types/Courses'
import styles from './Courses.module.scss'


function SingleCourse({course}: CourseProps) {
    return (
        <Link href={`/learn/${course.slug}`} className={styles.singleCourse}>
            <p>{course.title}</p>
            <p>{course.description}</p>
            <img src={course.coverImage.url} alt={course.title} width={'100%'} height={'300px'} />
        </Link>
    )
}

export default SingleCourse