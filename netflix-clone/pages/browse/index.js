import Head from "next/head";
import Image from "next/image";
import styles from "/styles/Home.module.css";

import GlamourLogo from "/assets/glamour-logo.webp";
import GlamourDisplayImage from "/assets/glamour-displayImage.webp";

import { Icon } from "@iconify/react";
import { ViewCard } from "/components/viewCard";

import { useEffect, useState } from "react";
import Slider from "/components/slider";
import RankCard from "/components/rankCard";

import Show1 from "/assets/AAAABaaxsMPI-X7MBnzt4osCZzm7RDOb0xDzNvPPX2OcgShPtpLOAmXR10J7cD5mE1-4OhIRl_ICj0_uWKSf8LE5hv-LBYWoZG0PFTaVFU9KOhEubF8uzM2vwRtiDHjdx916mwQSsRl0tIWpFM7U9jkFRU8QNfFT-K1X20oU08HD8XrVyuH16YWi2t7i5tWb9UbjVk49C9.jpg";
import Show2 from "/assets/AAAABS9gsnI3z3-sLc_pMwiG67_o9CKVqThfp1k51BbP_wBp1Fe6-LJedC_0VA17h-4CjIvI9OcPXI3oe9V_0638CoN0l3OEPHHv6xg.webp";
import Show3 from "/assets/AAAABZXpd2qlcXitEzdjfO8yTZeh9m-JNQI31BhR_-3ojQ7cPuN5UpTzRmSoAOXG9XqqzLfXCGmK7x2PCRtDXQRzA7Dqlcv44irsWdlQx4VlyGYUVY2Odm-RwyKjaKHDriZLpRFetLd29HhVuuV7D4kkHjpaKXGAlzojSdna2MS2mfHj276LMzkPyV5o9CwnPio.jpg";
import Show4 from "/assets/AAAABeyuQGLQyNWj-Je7OlZxKeM8aV_-QXe558_AAx2POqZogXNbyBEJO24Dt66No3dc1pOR8OVbzyIoB58y1SUZh_l80mudVhIdhWvMvHmG3Ym6F1ZyF_P_crTuopqbxHIBS6w0LiRpgA5styotBFe1_BVrU0FwV-PTxCwK0Q.jpg";
import Show5 from "/assets/AAAABccHgXO0vm_2geRfS-2k_uCq_3mVBaGARaH4faxQ59jxH-5TvBEZl3e2yNu9OFnFDG4Gmph5FPXIAqGc1keUQrhPYaohmqnLgKw.webp";
import Show6 from "/assets/AAAABTnEDsuODnF6_fgy5LdIbqbtaDcRIcvf6FUr2FPb1ngJqT6ewJ1sQQ1uIEAQfO9XFznJ10pGA2gwAu2yloZa1bHI_HBjBeY64MWeJxXRRalUcXsXyvHOFt5CsM_fls60gQYBhdx8Dytsv9tNTX5XVvyG6HU0YLuuVCG3pLbkace0Frx32-x88R6c0t9b-lIlZdNlrE.jpg";
import Show7 from "/assets/AAAABQhdhnn9i_g1zhGTlJkjaGOYyhM6J5_yQ6dwe7Ox05jlZh8pu-t9c9pEE8aguaidN2VppE-M205GaSgMGHlZTx8cx2nXpEmxT7s.webp";
import Show8 from "/assets/AAAABTgFAbUwvrz4asHCYoCfaCI70FAOGc8IYMjLISaZsOlAtJEfiPyre3TaHB2ccrDjB2w-yLuRfSqazKqesiWg0CuTw_diqDDgxUs.webp";
import Show9 from "/assets/AAAABa27le2q2wo5asJ2dkwtLRBmKeCfouy7eDb4q_fnaXgMCxgPCuDbbMO0Vkn2I_WX_FSsm9aD3IQTEOHCNdr4W8lbgXdIcNm_KD6aaNqFEI1XQMrdyop_GfnzMgI4RO11skf2oUdVeGEIvveQpBvr2DhOYGt7CTaDIWj0qjxyaDhmD1LNNAMGF0uXudtesoo.jpg";
import Show10 from "/assets/AAAABYDf1Oo80QcDk2c86YKyoJLzEr_yt1dfkU5ha8QyWi6uNfP5CiOg0KJ3WwOS2bu-lGghwfNotIhy0SN0MEdxh1E-56R18OaS5PtJ_vOC46RYbqOCTnOMCcxmlsYpp9IiUY5D8WKe8CbWqtOJsyFPTcn6D-tMOVwwCcY.webp";
import Show11 from "/assets/AAAABQJJ_XaiUSAtfrHBOlX0NslLC94-f0i-KXLPGlx-_HHpV5TaKb2Me7fWV3GeZvTrg0cYdxmL9xFM73-cEvB5FsLCF1m3UTr5NRM.webp";
import Show12 from "/assets/AAAABf7K6sNdboZ_8qWzfmJy5-PrhvwUfG_2xf4Pvfb8cPf0hu6mx9AWewED_Ky7-bMLpGWyRud_4BZ3Sp8SkpkeXhQ0MNsSU9mS93A.webp";
import Show13 from "/assets/AAAABT1vPfMsuq5DQ5WmnGdFjjazcfqzudtPFLan2J8y8wVh63s98EfM2Mup__uEMqSemB4ic0ANN7hy4Kgb2ikMtfsWHD-vqCYoxNc.webp";
import Show14 from "/assets/AAAABeERKG3n5dgQEJQN7gPCB-imKZivKGb9mW8LT3yCTfXMEEd8k3pgkERw_hHMeAzBkOrA7qqCL86OY1Gl1mf-y-_So7YWfn2G-mo.webp";
import Show15 from "/assets/AAAABePPa9_fZhqnmwjZsbSYHVZhXU-0Qd2FxsMO_ax0Xpj1dfZTeXjabOoYXfwEpsn-Y2fmFJUjTJCN8ERWEbFssLCEccmUVU8CcZc.webp";
import Show16 from "/assets/AAAABaZvXyGbRMqrF-Mffw6FqNJiiD2JyHg4PzKdRiuPH1CdXpthO8rXOuq8Heb73YwwDpQqAJ7C7xjaN7f42fZ6W0QtVL21jxvcNv0.webp";
import Show17 from "/assets/AAAABfXF2ufn90AqNuMmB05PXVM-x6EQph-Ja2W-zLsAKwDhpUYwVM9a0729C8UYntZssZTiIy7iAus_Y8WAlRSxsbqYGHGHugBFHBo.webp";
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

export default function Home() {
  const [trailorStatus, setTrailorStatus] = useState("loading");
  const [video, setVideo] = useState(null);
  const [videoClass, setVideoClass] = useState("");
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (trailorStatus === "loaded") {
      setTimeout(() => {
        video.play();
        setVideoClass(styles.videoLoaded);
        setTrailorStatus("playing");
      }, 2000);
    } else if (trailorStatus === "ended" && videoClass === styles.videoLoaded) {
      setVideoClass("");
    }
  }, [trailorStatus]);

  useEffect(() => {
    const videoElement = document.getElementById("displayVideo");
    setVideo(videoElement);
    if (videoElement.readyState >= videoElement.HAVE_ENOUGH_DATA) {
      setTrailorStatus("loaded");
    } else {
      videoElement.addEventListener("canplay", () => {
        setTrailorStatus("loaded");
      });
    }

    videoElement.addEventListener("ended", () => {
      setTrailorStatus("ended");
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Netflix</title>
      </Head>
      <header className={styles.showDisplay_container}>
        <div className={styles.floatBottomRight}>
          {trailorStatus === "playing" && (
            <div
              onClick={() => setMuted((oldState) => !oldState)}
              className={styles.muteButton}
            >
              {muted ? (
                <Icon
                  icon="heroicons-outline:volume-off"
                  color="white"
                  fontSize={20}
                />
              ) : (
                <Icon
                  icon="heroicons-outline:volume-up"
                  color="white"
                  fontSize={20}
                />
              )}
            </div>
          )}
          <div className={styles.showDisplay_ageRatingBadge}>18+</div>
        </div>
        <div className={styles.showDisplay_details}>
          <Image priority={true} layout="responsive" src={GlamourLogo} />
          <p>
            The world of high-end escorts promises glamour, wealth and the
            chance of reinvention for a group of women — till a killing and
            theft threaten it all.
          </p>
          <div className={styles.showDisplay_buttonWrap}>
            <button className="button medium sharp white">
              <Icon icon="carbon:play-filled-alt" fontSize={26} /> Play
            </button>
            <button className="button medium sharp transparentGray">
              <Icon icon="ant-design:info-circle-outlined" fontSize={26} /> More
              Info
            </button>
          </div>
        </div>
        <div className={styles.displayImageOuter}>
          <Image
            className={styles.displayImage}
            src={GlamourDisplayImage}
            layout="responsive"
            priority={true}
          />
          <video
            muted={muted}
            id="displayVideo"
            className={`${styles.trailorVideo} ${videoClass}`}
          >
            <source src="/trailor.mp4" type="video/mp4" />
            <source src="/trailor_compressed.webm" type="video/webm" />
          </video>
        </div>
      </header>
      <div className={styles.showWrapsContainer}>
        <div className={styles.showWrap}>
          <h1>Continue Watching for Alp</h1>
          <div className={styles.showList}>
            <ViewCard src={Show1} watched={47} />
            <ViewCard src={Show2} watched={22} />
            <ViewCard src={Show3} watched={5} />
            <ViewCard src={Show4} watched={88} />
            <ViewCard src={Show5} watched={57} />
          </div>
        </div>
        <div className={styles.showWrap}>
          <h1>Popular on Netflix</h1>
          <div className={styles.showList}>
            <ViewCard src={Show6} />
            <ViewCard src={Show7} />
            <ViewCard src={Show8} />
            <ViewCard src={Show9} />
            <ViewCard src={Show10} />
          </div>
        </div>
        <div className={styles.showWrap}>
          <h1 style={{ marginLeft: "55px" }}>Trending Now</h1>
          <Slider id="1" className={styles.showList}>
            <ViewCard src={Show6} />
            <ViewCard src={Show11} />
            <ViewCard src={Show3} watched={5} />
            <ViewCard src={Show12} />
            <ViewCard src={Show7} />
            <ViewCard src={Show8} />
            <ViewCard src={Show10} />
            <ViewCard src={Show9} watched={5} />
            <ViewCard src={Show16} />
            <ViewCard src={Show2} />
          </Slider>
        </div>
        <div className={styles.showWrap}>
          <h1>Family Movie Night</h1>
          <div className={styles.showList}>
            <ViewCard src={Show13} />
            <ViewCard src={Show14} />
            <ViewCard src={Show15} watched={67} />
            <ViewCard src={Show16} />
            <ViewCard src={Show17} watched={92} />
          </div>
        </div>
        <div className={styles.showWrap}>
          <h1 style={{ marginLeft: "55px" }}>
            Top 10 TV Shows in Turkey Today
          </h1>
          <Slider id="2" className={styles.showList}>
            <RankCard rating={1} src={Top1} />
            <RankCard rating={2} src={Top2} />
            <RankCard rating={3} src={Top3} />
            <RankCard rating={4} src={Top4} />
            <RankCard rating={5} src={Top5} />
            <RankCard rating={6} src={Top6} />
            <RankCard rating={7} src={Top7} />
            <RankCard rating={8} src={Top8} />
            <RankCard rating={9} src={Top9} />
            <RankCard rating={10} src={Top10} />
          </Slider>
        </div>
        <div className={styles.showWrap}>
          <h1 style={{ marginLeft: "55px" }}>Top Picks for Alp</h1>
          <Slider id="3" className={styles.showList}>
            <ViewCard src={Show6} />
            <ViewCard src={Show11} />
            <ViewCard src={Show3} watched={5} />
            <ViewCard src={Show12} />
            <ViewCard src={Show7} />
            <ViewCard src={Show8} />
            <ViewCard src={Show10} />
            <ViewCard src={Show9} watched={5} />
            <ViewCard src={Show16} />
            <ViewCard src={Show2} />
            <ViewCard src={Show1} />
            <ViewCard src={Show4} />
            <ViewCard src={Show5} watched={5} />
            <ViewCard src={Show10} />
            <ViewCard src={Show15} />
          </Slider>
        </div>
        <div className={styles.showWrap}>
          <h1 style={{ marginLeft: "55px" }}>Watch It Again</h1>
          <Slider id="4" className={styles.showList}>
            <ViewCard src={Show2} />
            <ViewCard src={Show5} watched={5} />
            <ViewCard src={Show10} />
            <ViewCard src={Show6} />
            <ViewCard src={Show8} />
            <ViewCard src={Show10} />
            <ViewCard src={Show11} />
            <ViewCard src={Show9} watched={5} />
            <ViewCard src={Show16} />
            <ViewCard src={Show15} />
            <ViewCard src={Show7} />
            <ViewCard src={Show1} />
            <ViewCard src={Show4} />
            <ViewCard src={Show3} watched={5} />
            <ViewCard src={Show12} />
          </Slider>
        </div>
      </div>
    </div>
  );
}
