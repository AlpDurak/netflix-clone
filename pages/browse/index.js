import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";

// glamour girls
import GlamourLogo from "/assets/glamour-logo.webp";
import GlamourDisplayImage from "/assets/glamour-displayImage.webp";

// beauty and the beast
import BATBLogo from "/assets/beauty-and-the-beast-logo.webp";
import BATBDisplayImage from "/assets/batb-displayImage.jpeg"

import {Icon} from "@iconify/react";
import {ViewCard} from "/components/viewCard";

import {useEffect, useState} from "react";
import Slider from "/components/slider";
import RankCard from "/components/rankCard";

import Show1 from "/assets/stranger-things.jpg";
import Show2 from "/assets/the-office.webp";
import Show3 from "/assets/ersan-kuneri.jpg";
import Show4 from "/assets/komi-cant-communicate.jpg";
import Show5 from "/assets/bee-movie.webp";
import Show6 from "/assets/the-umbrella-academy.jpg";
import Show7 from "/assets/rick-and-morty.webp";
import Show8 from "/assets/better-call-saul.webp";
import Show9 from "/assets/as-the-crow-flies.jpg";
import Show10 from "/assets/graveyard.webp";
import Show11 from "/assets/brookyln-nine-nine.webp";
import Show12 from "/assets/vinland-saga.webp";
import Show13 from "/assets/kung-fu-panda.webp";
import Show14 from "/assets/how-to-train-your-dragon.webp";
import Show15 from "/assets/scoob.webp";
import Show16 from "/assets/charlie-and-the-choclate-factory.webp";
import Show17 from "/assets/howls-moving-castle.webp";
import Top1 from "/assets/1.jpg";
import Top2 from "/assets/2.webp";
import Top3 from "/assets/3.jpg";
import Top4 from "/assets/4.jpg";
import Top5 from "/assets/5.jpg";
import Top6 from "/assets/6.jpg";
import Top7 from "/assets/7.jpg";
import Top8 from "/assets/8.webp";
import Top9 from "/assets/9.jpg";
import Top10 from "/assets/10.jpg";
import {useRouter} from "next/router";

export default function Home() {
    const router = useRouter();

    const [trailerStatus, setTrailerStatus] = useState("loading");
    const [video, setVideo] = useState(null);
    const [videoClass, setVideoClass] = useState("");
    const [muted, setMuted] = useState(false);

    // start video function so we don't have repeat code
    function startVideo(errorMessage, interval) {
        video
            .play()
            .then(() => {
                // marks the video as playing
                setTrailerStatus("playing");
                // loads the needed styles to make the video be on top of the shows display image
                setVideoClass(styles.videoLoaded);
                // clear the interval
                if (interval) {
                    clearInterval(interval);
                }
            })
            .catch((error) => {
                console.info(errorMessage);
            });
    }

    // automatic video player
    useEffect(() => {
        // refreshes the video element
        if (trailerStatus === "refreshed") {
            startVideo("Video could not be refreshed");
        }
        // checks if the video is ready to be played
        if (trailerStatus === "loaded") {
            // waits for 2 seconds so the video doesnt play instantly when the page loads
            setTimeout(() => {
                // tries to play the video because if the user has not interracted with the page you cant auto play a video
                const tryToPlay = setInterval(() => {
                    startVideo("User has not interacted with document yet.", tryToPlay);
                }, 2000);
            }, 2000);
        } else if (trailerStatus === "ended" && videoClass === styles.videoLoaded) {
            // if the video is ended this makes it go under the display image so it doesn't show a stopped video that you cant restart
            setVideoClass("");
        }

        //eslint-disable-next-line
    }, [trailerStatus, video, videoClass]);

    // adds event listeners to the video document, we do this because react events didnt seem to work for some reason
    useEffect(() => {
        const videoElement = document.getElementById("displayVideo");

        //we save the video for other uses
        setVideo(videoElement);

        if (videoElement.readyState >= videoElement.HAVE_ENOUGH_DATA) {
            // if the video loaded before the event listener was created this will mark the video as loaded
            setTrailerStatus("loaded");
        } else {
            videoElement.addEventListener("canplay", () => {
                // adds the event listener for if the video is loaded enough to make it play without it stopping. (we dont want it to stop and try to load the video because the video elements controls are disabled)
                setTrailerStatus("loaded");
            });
        }

        videoElement.addEventListener("ended", () => {
            // adds the event listener for when the video is ended
            setTrailerStatus("ended");
        });
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Home - Netflix</title>
            </Head>
            <header className={styles.showDisplay_container}>
                <div className={styles.floatBottomRight}>
                    {/* Mute Video Button */}
                    {(trailerStatus === "playing" || trailerStatus === "ended") && (
                        <button
                            onClick={() => {
                                if (trailerStatus === "ended") {
                                    setTrailerStatus("refreshed");
                                } else {
                                    setMuted((oldState) => !oldState);
                                }
                            }}
                            className={styles.muteButton}
                        >
                            {muted && trailerStatus !== "ended" ? (
                                <Icon
                                    icon="heroicons-outline:volume-off"
                                    color="white"
                                    fontSize="1.35vw"
                                />
                            ) : (
                                trailerStatus !== "ended" && (
                                    <Icon
                                        icon="heroicons-outline:volume-up"
                                        color="white"
                                        fontSize="1.35vw"
                                    />
                                )
                            )}
                            {trailerStatus === "ended" && (
                                <Icon icon="ic:round-refresh" color="white" fontSize="1.5vw"/>
                            )}
                        </button>
                    )}
                    {/* Age Range Badge */}
                    <div className={styles.showDisplay_ageRatingBadge}>18+</div>
                </div>
                <div className={styles.showDisplay_details}>
                    {/* Displayed Shows Logo */}
                    <Image
                        alt="Display Image Logo"
                        priority={true}
                        layout="responsive"
                        src={BATBLogo}
                    />
                    <p>
                        {/* Its Description */}
                        A prince cursed to spend his days as a hideous monster sets out to regain his humanity by
                        earning a young woman&apos;s love.
                    </p>

                    {/* Play and More Info Buttons */}
                    <div className={styles.showDisplay_buttonWrap}>
                        <button onClick={() => {
                            router.push("/watch/2945")
                        }} className="button medium sharp white">
                            <Icon icon="carbon:play-filled-alt" fontSize={26}/> Play
                        </button>
                        <button className="button medium sharp transparentGray">
                            <Icon icon="ant-design:info-circle-outlined" fontSize={26}/> More
                            Info
                        </button>
                    </div>
                </div>
                <div className={styles.displayImageOuter}>
                    {/* Display Image */}
                    <Image
                        alt="Dislay Image"
                        className={styles.displayImage}
                        src={BATBDisplayImage}
                        layout="responsive"
                        priority={true}
                    />
                    {/* Displayed Shows trailer */}
                    <video
                        muted={muted}
                        id="displayVideo"
                        className={`${styles.trailerVideo} ${videoClass}`}
                    >
                        {/* WEBM SOURCE for the trailer */}
                        <source src="/batb-trailer_compressed.webm" type="video/webm"/>
                    </video>
                </div>
            </header>
            <div className={styles.showWrapsContainer}>
                {/* CLASSIC SHOWS ROW */}
                <div className={styles.showWrap}>
                    <h1>Continue Watching for Alp</h1>
                    <div className={styles.showList}>
                        <ViewCard src={Show1} watched={47}/>
                        <ViewCard src={Show2} watched={22}/>
                        <ViewCard src={Show3} watched={5}/>
                        <ViewCard src={Show4} watched={88}/>
                        <ViewCard src={Show5} watched={57}/>
                    </div>
                </div>
                <div className={styles.showWrap}>
                    <h1>Popular on Netflix</h1>
                    <div className={styles.showList}>
                        <ViewCard src={Show6}/>
                        <ViewCard src={Show7}/>
                        <ViewCard src={Show8}/>
                        <ViewCard src={Show9}/>
                        <ViewCard src={Show10}/>
                    </div>
                </div>
                {/* SHOWS ROW WITH SLIDER */}
                <div className={styles.showWrap}>
                    <h1 style={{marginLeft: "4.5vw"}}>Trending Now</h1>
                    <Slider id="1" className={styles.showList}>
                        <ViewCard src={Show6}/>
                        <ViewCard src={Show11}/>
                        <ViewCard src={Show3} watched={5}/>
                        <ViewCard src={Show12}/>
                        <ViewCard src={Show7}/>
                        <ViewCard src={Show8}/>
                        <ViewCard src={Show10}/>
                        <ViewCard src={Show9} watched={5}/>
                        <ViewCard src={Show16}/>
                        <ViewCard src={Show2}/>
                    </Slider>
                </div>
                <div className={styles.showWrap}>
                    <h1>Family Movie Night</h1>
                    <div className={styles.showList}>
                        <ViewCard src={Show13}/>
                        <ViewCard src={Show14}/>
                        <ViewCard src={Show15} watched={67}/>
                        <ViewCard src={Show16}/>
                        <ViewCard src={Show17} watched={92}/>
                    </div>
                </div>
                {/* TOP10 RATINGS WITH SLIDER */}
                <div className={styles.showWrap}>
                    <h1 style={{marginLeft: "4.5vw"}}>
                        Top 10 TV Shows in Turkey Today
                    </h1>
                    <Slider id="2" className={styles.showList}>
                        <RankCard rating={1} src={Top1}/>
                        <RankCard rating={2} src={Top2}/>
                        <RankCard rating={3} src={Top3}/>
                        <RankCard rating={4} src={Top4}/>
                        <RankCard rating={5} src={Top5}/>
                        <RankCard rating={6} src={Top6}/>
                        <RankCard rating={7} src={Top7}/>
                        <RankCard rating={8} src={Top8}/>
                        <RankCard rating={9} src={Top9}/>
                        <RankCard rating={10} src={Top10}/>
                    </Slider>
                </div>
                <div className={styles.showWrap}>
                    <h1 style={{marginLeft: "4.5vw"}}>Top Picks for Alp</h1>
                    <Slider id="3" className={styles.showList}>
                        <ViewCard src={Show6}/>
                        <ViewCard src={Show11}/>
                        <ViewCard src={Show3} watched={5}/>
                        <ViewCard src={Show12}/>
                        <ViewCard src={Show7}/>
                        <ViewCard src={Show8}/>
                        <ViewCard src={Show10}/>
                        <ViewCard src={Show9} watched={5}/>
                        <ViewCard src={Show16}/>
                        <ViewCard src={Show2}/>
                        <ViewCard src={Show1}/>
                        <ViewCard src={Show4}/>
                        <ViewCard src={Show5} watched={5}/>
                        <ViewCard src={Show10}/>
                        <ViewCard src={Show15}/>
                    </Slider>
                </div>
                <div className={styles.showWrap}>
                    <h1 style={{marginLeft: "4.5vw"}}>Watch It Again</h1>
                    <Slider id="4" className={styles.showList}>
                        <ViewCard src={Show2}/>
                        <ViewCard src={Show5} watched={5}/>
                        <ViewCard src={Show10}/>
                        <ViewCard src={Show6}/>
                        <ViewCard src={Show8}/>
                        <ViewCard src={Show10}/>
                        <ViewCard src={Show11}/>
                        <ViewCard src={Show9} watched={5}/>
                        <ViewCard src={Show16}/>
                        <ViewCard src={Show15}/>
                        <ViewCard src={Show7}/>
                        <ViewCard src={Show1}/>
                        <ViewCard src={Show4}/>
                        <ViewCard src={Show3} watched={5}/>
                        <ViewCard src={Show12}/>
                    </Slider>
                </div>
            </div>
        </div>
    );
}
