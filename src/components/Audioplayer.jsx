import React from "react";

const Audioplayer = () => {
  return (
    <>
      <audio controls autoplay autoPlay>
        <source src="src/assets/audio.mp3" type="audio/mp3" />
      </audio>
    </>
  );
};

export default Audioplayer;
