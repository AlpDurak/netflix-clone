import { Icon } from "@iconify/react";
import React, { useEffect, useRef, useState } from "react";
import styles from "/styles/Player.module.css";

export default function VideoPlayer() {
  const videoElement = useRef();
  const [status, setStatus] = useState("loading");
  const [muted, setMuted] = useState(false);
  const [hideUI, setHideUI] = useState(false);
  const [mouseMove, setMouseMove] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(); // seconds
  const videoPlayer = useRef();
  const progressBar = useRef();

  let duration = videoElement.current?.duration;
  let watched = (currentTime / duration) * 100 || 0;
  let readyState = videoElement.current?.readyState;

  const exitHandler = () => {
    if (
      !document.fullscreenElement &&
      !document.webkitIsFullScreen &&
      !document.mozFullScreen &&
      !document.msFullscreenElement
    ) {
      setFullscreen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", exitHandler);
    document.addEventListener("webkitfullscreenchange", exitHandler);
    document.addEventListener("mozfullscreenchange", exitHandler);
    document.addEventListener("MSFullscreenChange", exitHandler);
    window.addEventListener("mousemove", () => setMouseMove(true));
  }, []);

  useEffect(() => {
    if (readyState !== 4) {
      setStatus("loading");
    }
  }, [readyState]);

  useEffect(() => {
    if (status === "playing") {
      if (!mouseMove) {
        setTimeout(() => {
            if(!mouseMove) {
              setHideUI(true);
            } else if (hideUI === true) {
              setHideUI(false);
            }
        }, 3000);
      } else if (hideUI === true) {
        setHideUI(false);
      }
    }

    if (status !== "playing" && hideUI === true) {
      setHideUI(false);
    }
  }, [status, mouseMove, hideUI]);

  useEffect(() => {
    if (mouseMove) {
      setTimeout(() => {
        setMouseMove(false);
      }, 3000);
    }
  }, [mouseMove]);

  if (videoElement.current?.ended && status !== "ended") {
    setStatus("ended");
  }

  useEffect(() => {
    let watched = parseInt(window.localStorage.getItem("watched")) || null;

    if (((watched || 0) + 10) < currentTime) {
      window.localStorage.setItem("watched", currentTime);
    }
  
    if(currentTime < 10 && watched) {
      videoElement.current.currentTime = watched;
      setCurrentTime(watched);
    }
  }, [currentTime])

  var actualMinutes =
    (duration - currentTime) / 60 ||
    parseInt(duration / 60 - currentTime / 60, 10);
  var hours = ~~(actualMinutes / 60);
  let minutes = ~~(((actualMinutes - hours * 60) * 60) / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let extraSeconds = ((actualMinutes - hours * 60) * 60) % 60;
  extraSeconds = extraSeconds < 10 ? "0" + ~~extraSeconds : ~~extraSeconds;

  const startVideo = () => {
    videoElement.current.play();
    setStatus("playing");
  };

  const stopVideo = () => {
    videoElement.current.pause();
    setStatus("paused");
  };

  const toggleVideo = () => {
    if (videoElement.current.paused) {
      startVideo();
    } else if (videoElement.current.ended) {
      videoElement.current.currentTime = 0;
      startVideo();
    } else {
      stopVideo();
    }
  };

  const toggleFullscreen = () => {
    if (!fullscreen) {
      setFullscreen(true);
      if (videoPlayer.current.requestFullscreen) {
        videoPlayer.current.requestFullscreen();
      } else if (videoPlayer.current.mozRequestFullScreen) {
        videoPlayer.current.mozRequestFullScreen();
      } else if (videoPlayer.current.webkitRequestFullScreen) {
        videoPlayer.current.webkitRequestFullScreen();
      } else if (videoPlayer.current.msRequestFullscreen) {
        videoPlayer.current.msRequestFullscreen();
      }
    } else {
      setFullscreen(false);
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  const handleTimeChange = (e) => {
    if (progressBar && videoElement.current) {
      const calc =
        ((e.clientX - 30) / progressBar.current.offsetWidth) * duration;

      videoElement.current.currentTime = calc;
      setCurrentTime(calc);
    }
  };

  const updateDuration = (seconds, action) => {
    let current = currentTime;
    if (action === "-") {
      if (current - seconds < 0) {
        const calc = Math.abs(current - seconds) - seconds;

        videoElement.current.currentTime = calc;
        setCurrentTime(calc);
      } else {
        const calc = current - seconds;

        videoElement.current.currentTime = calc;
        setCurrentTime(calc);
      }
    }

    if (action === "+") {
      if (current + seconds > duration) {
        const calc = seconds - (current + seconds - duration);

        videoElement.current.currentTime = calc;
        setCurrentTime(calc);
      } else {
        const calc = current + seconds;

        videoElement.current.currentTime = calc;
        setCurrentTime(calc);
      }
    }
  };

  useEffect(() => {
    if (
      !videoElement.current?.paused &&
      ["paused", "loading"].includes(status)
    ) {
      setStatus("playing");
    }
  }, [videoElement.current?.paused, status]);

  return (
    <section
      style={hideUI ? { cursor: "none" } : {}}
      className={styles.videoPlayerSection}
    >
      {status === "loading" && (
        <div className={styles.loading}>
          <div className={styles.loader}></div>
        </div>
      )}
      <div className={styles.container}>
        <div ref={videoPlayer} className={styles.videoPlayer}>
          <div
            className={`${styles.bottomUi} ${
              hideUI ? styles.hideBottom : styles.visibleBottom
            }`}
          >
            <div className={styles.videoProgressBar}>
              <div
                ref={progressBar}
                onClick={handleTimeChange}
                className={styles.progress}
              >
                <div
                  style={{ width: watched + "%" }}
                  className={styles.videoProgressDuration}
                ></div>
                <div
                  style={{ left: watched + "%" }}
                  className={styles.dot}
                ></div>
              </div>
              <span>{`${hours}:${minutes}:${extraSeconds}`}</span>
            </div>
            <div className={styles.controls}>
              <div className={styles.leftControls}>
                <button
                  onClick={() => toggleVideo()}
                  className="invisibleButton pop"
                >
                  {status !== "playing" ? (
                    <Icon
                      icon="clarity:play-solid"
                      className={styles.playBtn}
                      color="white"
                      fontSize={50}
                    />
                  ) : (
                    <Icon
                      icon="clarity:pause-solid"
                      className={styles.pauseBtn}
                      color="white"
                      fontSize={50}
                    />
                  )}
                </button>

                <button className="invisibleButton pop">
                  <Icon
                    icon="ic:round-replay-10"
                    onClick={() => updateDuration(10, "-")}
                    color="white"
                    fontSize={53}
                  />
                </button>
                <button className="invisibleButton pop">
                  <Icon
                    icon="ic:round-forward-10"
                    onClick={() => updateDuration(10, "+")}
                    color="white"
                    fontSize={53}
                  />
                </button>

                <button
                  onClick={() => setMuted((current) => !current)}
                  className={`${styles.volume} invisibleButton pop`}
                >
                  {!muted ? (
                    <Icon
                      icon="eva:volume-up-outline"
                      color="white"
                      fontSize={45}
                    />
                  ) : (
                    <Icon
                      icon="eva:volume-off-outline"
                      color="white"
                      fontSize={45}
                    />
                  )}
                  <input className={styles.hide} type="range" />
                </button>
              </div>
              <div className={styles.centerControls}>
                <h1>Beauty and The Beast</h1>
              </div>
              <div className={styles.rightControls}>
                <button
                  onClick={() => toggleFullscreen()}
                  className="invisibleButton pop"
                >
                  {!fullscreen ? (
                    <Icon
                      icon="mingcute:fullscreen-line"
                      color="white"
                      fontSize={50}
                    />
                  ) : (
                    <Icon
                      icon="mingcute:fullscreen-exit-line"
                      color="white"
                      fontSize={50}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <video
            ref={videoElement}
            onTimeUpdate={(e) => {
              setCurrentTime(e.currentTarget.currentTime);
            }}
            className={`${hideUI ? styles.idle : ""}`}
            onClick={() => toggleVideo()}
            onLoadStart={() => {
              setStatus("loading");
            }}
            onLoad={() => {
              setStatus("paused");
            }}
            onLoadedMetadata={() => {
              setStatus("paused");
            }}
            onLoadedData={() => {
              setStatus("paused");
            }}
            onPlaying={() => {
              if (status !== "playing") {
                setStatus("playing");
              }
            }}
            poster="/batb-displayImage.jpeg"
            preload="auto"
            autoPlay
            muted={muted}
            onPlay={() => {
              if (status !== "playing") {
                setStatus("playing");
              }
            }}
          >
            <source
              src="https://wowl.me/files/movies/beauty-and-the-beast.mp4"
              // src="/batb-trailer.mp4"
              type="video/mp4"
            />
            <track
              label="Turkce"
              kind="subtitles"
              srcLang="tr"
              src="/subtitles/beauty-and-the-beast.vtt"
              default
            />
          </video>
        </div>
      </div>
    </section>
  );
}
