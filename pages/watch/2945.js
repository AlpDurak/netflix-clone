import React from 'react';
import styles from '/styles/Player.module.css';

export default function VideoPlayer() {
    return (
        <iframe className={styles.videoPlayerCoverScr} title="Güzel ve Çirkin"
                src="https://videoseyred.in/embed/d6b2181aabh4Tx145822UcQq85d7442f20?hideTitle=1" frameBorder={0}
                allowFullScreen></iframe>
    );
}