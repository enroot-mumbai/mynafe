import React from "react";
import { findDOMNode } from "react-dom";
import ReactPlayer from "react-player";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import classes from "./index.module.scss";
import { BaseReactPlayerProps } from "react-player/base";
import { useRouter } from "next/router";

interface VideoPlayerProps extends callBackProps {
  videoURL?: string;
  videoThumbnail?: string;
}

interface callBackProps extends BaseReactPlayerProps {
  onPlay?: () => void;
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
  const router = useRouter();
  const onStart = (player) => {
    if (findDOMNode(player)?.requestFullscreen) {
      findDOMNode(player)
        .requestFullscreen()
        .then(() => {
          screen?.orientation
            ?.lock("landscape")
            .catch((err) =>
              console.log("landscape mode is not available on this device")
            );
        })
        .catch((err) => {
          screen?.orientation?.lock("natural");
          console.log("Could not activate full-screen mode :(");
        });
    } else if (findDOMNode(player)?.mozRequestFullScreen) {
      findDOMNode(player)
        .mozRequestFullScreen()
        .then(() => {
          screen?.orientation
            ?.lock("landscape")
            .catch((err) =>
              console.log("landscape mode is not available on this device")
            );
        })
        .catch((err) => {
          screen?.orientation?.lock("natural");
          console.log("Could not activate full-screen mode :(");
        });
    } else if (findDOMNode(player)?.webkitRequestFullscreen) {
      findDOMNode(player)
        .webkitRequestFullscreen()
        .then(() => {
          screen?.orientation
            ?.lock("landscape")
            .catch((err) =>
              console.log("landscape mode is not available on this device")
            );
        })
        .catch((err) => {
          screen?.orientation?.lock("natural");
          console.log("Could not activate full-screen mode :(");
        });
    }
  };
  React.useEffect(() => {
    if (router?.query?.overview === "false" && ReactPlayer.canPlay(videoURL)) {
      onPlay();
      onStart();
    }
  }, []);

  const onEnded = () => {
    if (document.exitFullscreen) {
      document
        .exitFullscreen()
        .then(() => screen?.orientation?.lock("natural"));
    } else if (document?.mozCancelFullScreen) {
      document
        ?.mozCancelFullScreen()
        .then(() => screen?.orientation?.lock("natural"));
    } else if (document?.webkitExitFullscreen) {
      document
        ?.webkitExitFullscreen()
        .then(() => screen?.orientation?.lock("natural"));
    }
  };
  const Video = React.useCallback(
    ({
      onPlay,
      playing,
      volume = 0.4,
      mute = false,
      ...videoProps
    }: callBackProps) => {
      let player = null;
      const ref = (p) => {
        player = p?.player;
      };

      return (
        <ReactPlayer
          url={videoURL}
          playing={playing}
          controls={true}
          width="100%"
          height="inherit"
          light={playing ? "" : videoThumbnail}
          volume={volume}
          muted={mute}
          ref={ref}
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
