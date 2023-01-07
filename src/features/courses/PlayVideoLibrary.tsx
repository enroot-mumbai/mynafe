import React from "react";
import { VideoPlayer } from "../../components/VideoPlayer";
import { Course, VideoProps } from "../../utils/types/Courses";
import classes from "./Playlist.module.scss";
import VideoCard from "./VideoCard";

type Props = {
  video?: VideoProps;
  course?: Course;
};

const PlayVideoLibrary = ({ video, course }: Props) => {
  const [playing, setPlaying] = React.useState(false);
  function onPlay() {
    setPlaying(true);
  }

  return (
    <section className="pageContent p-20 auto-container-md">
      <div className={classes.videoContainer}>
        <VideoPlayer
          videoURL={video?.videoLink}
          videoThumbnail={video?.coverImage?.url ?? ""}
          onPlay={onPlay}
          playing={playing}
        />
      </div>
      <div className={classes.listContainer}>
        {course?.videosCollection?.items?.map((video, index) => {
          return <VideoCard key={index} video={video} />;
        })}
      </div>
    </section>
  );
};

export default PlayVideoLibrary;
