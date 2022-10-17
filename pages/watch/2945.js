import React from "react";
import styles from "/styles/Player.module.css";

export default function VideoPlayer() {
  return (
    <iframe
      className={styles.videoPlayerCoverScr}
      title="Güzel ve Çirkin"
      src="https://videoseyred.in/embed/d6b2181aabh4Tx145822UcQq85d7442f20?hideTitle=1"
      frameBorder={0}
      allowFullScreen
    ></iframe>
  );
}

/* import { Icon } from "@iconify/react";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import styles from "/styles/Player.module.css";

export default function VideoPlayer() {
  const videoElement = useRef();
  const [status, setStatus] = useState("loading");
  const [currentProgress, setCurrentProgress] = useState(20);

  useEffect(() => {
    console.log(videoElement.current?.currentTime)
  }, [videoElement.current?.currentTime])

  var actualMinutes = parseInt((videoElement.current?.duration / 60) - (videoElement.current?.currentTime / 60), 10);
  var hours = ~~(actualMinutes / 60);
  let minutes = ~~(((actualMinutes - hours * 60) * 60) / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let extraSeconds = ((actualMinutes - hours * 60) * 60) % 60;
  extraSeconds = extraSeconds < 10 ? "0" + extraSeconds : extraSeconds;

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
    } else {
      stopVideo();
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.videoPlayer}>
          <div className={styles.bottomUi}>
            <div className={styles.videoProgressBar}>
              <div className={styles.progress}>
                <div className={styles.videoProgressDuration}></div>
                <div
                  style={{ left: currentProgress + "%" }}
                  className={styles.dot}
                ></div>
              </div>
              <span>{`${hours}:${minutes}:${extraSeconds}`}</span>
            </div>
            <div className={styles.controls}>
              <div className={styles.leftControls}>
                <button
                  onClick={() => toggleVideo()}
                  className={styles.playPauseBtn}
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

                <Icon icon="ic:round-replay-10" fontSize={53} color="white" />
                <Icon icon="ic:round-forward-10" color="white" fontSize={53} />

                <div className={styles.volume}>
                  <Icon
                    icon="eva:volume-up-outline"
                    color="white"
                    fontSize={50}
                  />
                  <input
                    className={styles.hide}
                    type="range"
                    min={0}
                    max={100}
                    value={`${currentProgress}`}
                  />
                </div>
              </div>
              <div className={styles.centerControls}>
                <h1>Beauty and The Beast</h1>
              </div>
              <div className={styles.rightControls}>
                <div className={styles.fullScreen}>
                  <Icon
                    icon="mingcute:fullscreen-line"
                    color="white"
                    fontSize={50}
                  />
                </div>
              </div>
            </div>
          </div>
          <video
            ref={videoElement}
            onClick={() => toggleVideo()}
            poster="/batb-displayImage.jpeg"
            preload="auto"
            autoPlay
          >
            <source
              src="/movies/beauty-and-the-beast-deneme.mp4"
              type="video/mp4"
            />
            {/* <track
              label="Turkce"
              kind="subtitles"
              srcLang="tr"
              src="/movies/beauty-and-the-beast.vtt"
              default
            /> */
//}
//          </video>
//        </div>
//      </div>
//    </section>
//  );
//}
