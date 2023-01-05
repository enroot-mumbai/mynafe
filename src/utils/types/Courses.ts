export interface CourseProps {
    course: Course
}
export interface Course {
    title: string;
    slug: string;
    description: string;
    coverImage: CoverImage;
    videosCollection: VideosCollection;
}
export interface CoverImage {
    url: string;
}
export interface VideosCollection {
    items: (VideoProps)[];
}
export interface VideoProps {
    id: number;
    slug: string;
    title: string;
    videoLink: string;
}

export interface VideoPropsParent {
    video: VideoProps;
}