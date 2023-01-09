import { GetStaticPaths } from "next";
import React from "react";
import PlayVideoLibrary from "../../../src/features/courses/PlayVideoLibrary";
import {
  getAllCourses,
  getCourseBySlug,
} from "../../../src/utils/contentful/courses";
import { Course, VideoProps } from "../../../src/utils/types/Courses";

type Props = {
  course?: Course;
  video?: VideoProps;
};

const Index = ({ course, video }: Props) => {
  return (
    <div className="pageContainerTop">
      <PlayVideoLibrary video={video} course={course} />
    </div>
  );
};

export default Index;

interface paramsType {
  params: {
    id: string;
    slug: string;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allCourses: Course[] = await getAllCourses();

  const paths = allCourses?.map(({ videosCollection }) => {
    return videosCollection?.items?.map(({ slug, courseSlug }) => {
      return {
        params: {
          id: courseSlug,
          slug: slug,
        },
      };
    });
  });

  return {
    paths: paths?.[0] as paramsType[],
    fallback: true,
  };
};

export async function getStaticProps({ params, preview = false }: any) {
  const course: Course = (await getCourseBySlug(params.id)) ?? [];
  const video = course?.videosCollection?.items?.filter(
    ({ slug }) => slug === params?.slug
  );

  return {
    props: { preview, course, video: video?.[0] },
    revalidate: 3600,
  };
}
