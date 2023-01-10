import React from "react";
import { findDOMNode } from "react-dom";
import ReactPlayer from "react-player";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import classes from "./index.module.scss";
import { BaseReactPlayerProps } from "react-player/base";
import { useRouter } from "next/router";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

interface VideoPlayerProps extends callBackProps {
  videoURL?: string;
  videoThumbnail?: string;
}

interface callBackProps extends BaseReactPlayerProps {
  onPlay: () => void;
  playing?: boolean;
  volume?: number;
  mute?: boolean;
}

export const VideoPlayer = ({
  videoURL,
  videoThumbnail,
  onPlay,
  playing,
  volume = 0.4,
  mute = false,
  ...props
}: VideoPlayerProps) => {
  const player = useFullScreenHandle();

  const router = useRouter();

  const onStart = () => {
    //todo : need to handle fullscreen error
    player.enter().catch((error) => console.log(error));
    screen.orientation.lock("landscape").catch((err) => console.log(err));
  };

  const onEnded = () => {
    player.exit().catch((error) => console.log(error));
    screen.orientation.lock("portrait").catch((err) => console.log(err));
  };
  const Video = React.useCallback(
    ({
      onPlay,
      playing,
      volume = 0.4,
      mute = false,
      ...videoProps
    }: callBackProps) => {
      React.useEffect(() => {
        if (
          router?.query?.overview === "false" &&
          ReactPlayer.canPlay(videoURL)
        ) {
          onPlay();
          onStart();
        }
      }, []);

      // fix ui of fullscreen component of react fullscreen
      return (
        <FullScreen handle={player}>
          <ReactPlayer
            url={videoURL}
            playing={playing}
            controls={true}
            width="100%"
            height="inherit"
            light={playing ? "" : videoThumbnail}
            volume={volume}
            muted={mute}
            onStart={onStart}
            onPlay={onPlay}
            onEnded={onEnded}
            playIcon={
              <div className={classes.play}>
                <PlayArrowRoundedIcon style={{ fill: "white" }} />
              </div>
            }
            config={{
              file: { attributes: { controlsList: "nodownload" } },
            }}
            {...videoProps}
          />
        </FullScreen>
      );
    },
    [videoURL, videoThumbnail]
  );
  return (
    <Video
      volume={volume}
      onPlay={onPlay}
      playing={playing}
      mute={mute}
      {...props}
    />
  );
};
