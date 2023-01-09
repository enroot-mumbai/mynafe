import React from "react";
import CoursesWrapper from "../../src/features/courses/CoursesWrapper";
import SingleCourse from "../../src/features/courses/SingleCourse";
import { getAllCourses } from "../../src/utils/contentful/courses";
import { Course } from "../../src/utils/types/Courses";

type Props = {
  allCourses: Array<Course>;
};

function Learn({ allCourses }: Props) {
  return (
    <>
      <div className="pageContainerTop">
        <div className="pageContent p-20 auto-container-lg">
          <h2 className="pageTitle">Lessons</h2>
          <CoursesWrapper>
            {allCourses?.length > 0 &&
              allCourses?.map((course, index) => {
                return <SingleCourse key={index} course={course} />;
              })}
          </CoursesWrapper>
        </div>
      </div>
    </>
  );
}

export default Learn;

export async function getStaticProps({ preview = false }) {
  const allCourses = (await getAllCourses()) ?? [];
  return {
    props: { preview, allCourses },
    revalidate: 3600,
  };
}
