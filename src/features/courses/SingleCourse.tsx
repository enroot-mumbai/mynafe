import Link from "next/link";
import React from "react";
import { CourseProps } from "../../utils/types/Courses";
import styles from "./Courses.module.scss";

function SingleCourse({ course }: CourseProps) {
  return (
    <Link href={`/learn/${course.slug}`} className={styles.singleCourse}>
      <div className={styles.courseCard}>
        <img
          src={course.coverImage.url}
          alt={course.title}
          width={"100%"}
          height={"300px"}
        />
        <div className={styles.courseContent}>
          <h2>{course.title}</h2>
          <p>{course.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default SingleCourse;
