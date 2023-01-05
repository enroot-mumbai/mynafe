import React from 'react'
import SimpleBottomNavigation from '../../src/components/layout/BottomNavigation'
import Navigation from '../../src/components/layout/Navigation'
import SingleCourse from '../../src/features/courses/SingleCourse'
import { getAllCourses } from '../../src/utils/contentful/courses'
import { Course } from '../../src/utils/types/Courses'

type Props = {
  allCourses: Array<Course>;
}

function Learn({ allCourses}: Props) {

  return (
    <>
      <Navigation />
      <div className='pageContainerTop'>
        <div className='pageContent p-20'>
          <h2 className='pageTitle'>Lessons</h2>

          {allCourses?.length > 0 && allCourses.map((course,index)=>{
            return(
              <SingleCourse key={index} course={course} />
            )
          })}
        </div>
      </div>

      <SimpleBottomNavigation defaultValue={0} />
    </>
  )
}

export default Learn

export async function getStaticProps({ preview = false }) {
  const allCourses = (await getAllCourses()) ?? [];
  return {
    props: { preview, allCourses },
    revalidate: 3600,
  };
}