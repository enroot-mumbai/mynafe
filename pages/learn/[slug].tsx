import { GetStaticPaths } from 'next';
import React from 'react'
import SingleCourse from '../../src/features/courses/SingleCourse';
import VideoCard from '../../src/features/courses/VideoCard';
import { getAllCourses, getCourseBySlug } from '../../src/utils/contentful/courses';
import { Course } from '../../src/utils/types/Courses';

type Props = {
  selectedCourse: Course;
}

function SingleLearn({ selectedCourse }: Props) {
  console.log('selectedCourse', selectedCourse)

  // Show the course title
  // Load the first video or the active video on the top
  // Show a progress bar below the first video
  // Show a button to take the quiz
  // Show the list of videos below the quiz
  return (
    <div>
      <SingleCourse course={selectedCourse} />
      {selectedCourse.videosCollection?.items?.length > 0 && selectedCourse.videosCollection?.items?.map((video, index) => {
        return (
          <VideoCard key={index} video={video} />
        )
      })}
    </div>
  )
}

export default SingleLearn

export const getStaticPaths: GetStaticPaths = async () => {
  const allCourses = await getAllCourses();
  return {
    paths: allCourses?.map(({ slug }: any) => `/learn/${slug}`) ?? [],
    fallback: true,
  };
};


export async function getStaticProps({ params, preview = false }: any) {
  const selectedCourse = (await getCourseBySlug(params.slug)) ?? [];
  console.log('selectedCourse', selectedCourse)
  return {
    props: { preview, selectedCourse },
    revalidate: 3600,
  };
}