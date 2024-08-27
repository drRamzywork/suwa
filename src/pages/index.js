import React, { useRef } from "react";
import YouTube from "react-youtube";
import styles from "./data2.module.scss";
import Navbar from "@/components/Navbar";

const VideoWithTags = () => {
  const videoRef = useRef(null);

  // List of topics with timestamps (in seconds)
  const topics = [
    { title: "متحف العلوم المدقمة", time: 10 },
    { title: "مفهوم النماذج العلمية", time: 40 },
    { title: "أنواع النماذج العلمية", time: 114 },
    { title: "استخدام النماذج العلمية", time: 217 },
    { title: "الخلاصة", time: 310 },
  ];

  const handleTagClick = (time) => {
    if (videoRef.current) {
      videoRef.current.internalPlayer.seekTo(time);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container" dir="rtl">
        <section className={styles.sec_container}>
          <div className={styles.topics} style={{ marginBottom: "10px" }}>
            {topics.map((topic, index) => (
              <button
                key={index}
                onClick={() => handleTagClick(topic.time)}
                style={{ marginRight: "10px", cursor: "pointer" }}
              >
                {topic.title}
              </button>
            ))}
          </div>

          <YouTube
            videoId="SXIHRLQ2cpk"
            ref={videoRef}
            className={styles.video}
            opts={{
              width: "100%",
              height: "500px",
              playerVars: {
                autoplay: 0,
              },
            }}
          />
        </section>
      </div>
    </>
  );
};

export default VideoWithTags;
