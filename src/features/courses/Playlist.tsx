import Link from "next/link";
import React, { useEffect } from "react";
import { Course } from "../../utils/types/Courses";
import classes from "./Playlist.module.scss";
import VideoCard from "./VideoCard";

type Props = {
  playlist?: Course;
};

const Playlist = ({ playlist }: Props) => {
  // add a preloader image of myna logo
  const [videoHistory, setVideoHistory] = React.useState({
    slug: "",
    coverImage: "",
  });

  async function lastPlayedVideo() {
    // todo
    // fetch function to get last played video
    const videoData = {
      slug: "",
      coverImage: "",
    };
    if (videoData?.coverImage !== "") {
      setVideoHistory(videoData);
    } else {
      setVideoHistory({
        slug: playlist?.slug,
        coverImage: playlist?.coverImage?.url,
      });
    }
  }
  useEffect(() => {
    lastPlayedVideo();
    return () => {
      setVideoHistory({
        slug: "",
        coverImage: "",
      });
    };
  }, []);

  return (
    <section className="pageContent p-20 auto-container-md">
      <Link
        href={`/learn/${playlist?.slug}/${
          videoHistory?.slug !== ""
            ? playlist?.videosCollection?.items[0]?.slug
            : videoHistory?.slug
        }?overview=false`}
        className={classes.lastPlayedContainer}
      >
        {videoHistory?.slug && (
          <img src={videoHistory?.coverImage} alt={playlist?.title} />
        )}
        <button className={`primaryButton ${classes.floatingButton}`}>
          {videoHistory?.slug !== "" ? "Get Started" : "Continue"}
        </button>
      </Link>
      <div className={classes.listContainer}>
        {playlist?.videosCollection?.items?.map((video, index) => {
          return <VideoCard key={index} video={video} />;
        })}
      </div>
    </section>
  );
};

export default Playlist;
