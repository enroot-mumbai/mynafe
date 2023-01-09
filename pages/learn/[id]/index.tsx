import { GetStaticPaths } from "next";
import React from "react";
import Playlist from "../../../src/features/courses/Playlist";
import {
  getAllCourses,
  getCourseBySlug,
} from "../../../src/utils/contentful/courses";
import { Course } from "../../../src/utils/types/Courses";

type Props = {
  selectedCourse: Course;
};

function SingleLearn({ selectedCourse }: Props) {
  // Show the course title
  // Load the first video or the active video on the top
  // Show a progress bar below the first video
  // Show a button to take the quiz
  // Show the list of videos below the quiz
  return (
    <div className="pageContainerTop">
      <Playlist playlist={selectedCourse} />
    </div>
  );
}

export default SingleLearn;

export const getStaticPaths: GetStaticPaths = async () => {
  const allCourses = await getAllCourses();
  return {
    paths: allCourses?.map(({ slug }: any) => `/learn/${slug}`) ?? [],
    fallback: true,
  };
};

export async function getStaticProps({ params, preview = false }: any) {
  const selectedCourse = (await getCourseBySlug(params.id)) ?? [];
  return {
    props: { preview, selectedCourse },
    revalidate: 3600,
  };
}
