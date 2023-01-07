import Link from "next/link";
import React from "react";
import { VideoPropsParent } from "../../utils/types/Courses";
import classes from "./VideoCard.module.scss";

function VideoCard({ video }: VideoPropsParent) {
  return (
    <Link
      href={`/learn/${video?.courseSlug}/${video.slug}?overview=false`}
      className={classes.card}
    >
      <div className={classes.container}>
        {/* todo image source can be replaced with myna preloader */}
        {video?.coverImage ? (
          <img src={video?.coverImage?.url} alt={video?.title} />
        ) : (
          <div className={classes.fallbackImage}></div>
        )}
        <div className={classes.content}>
          <h2>{video.title}</h2>
          {video?.description && <p>{video?.description}</p>}
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
