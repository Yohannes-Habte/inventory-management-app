import React, { useState, useEffect } from "react";
import click1 from "../../assets/sweet.mp3";

const audioClick2 = new Audio(click1);

const Metronome = () => {
  const [speed, setSpeed] = useState(100);
  const [playing, setPlaying] = useState(false);
  const [beatCount, setBeactCount] = useState(0);
  const [measureBeats, setMeasureBeats] = useState(4);

  const handleChangeInput = (e) => {
    setSpeed(e.target.value);
  };

  const handleStartStop = () => {
    audioClick2.play();
  };

  //   useEffect(() => {
  //     let timer;
  //     if (playing) {
  //       const myInterval = () => {
  //         timer = setInterval(() => audioClick2.play(), 60000 / speed);
  //       };
  //     }

  //     return () => clearInterval(timer);
  //   }, [playing, speed]);

  useEffect(() => {
    let timer;
    if (playing) {
      timer = setInterval(() => audioClick2.play(), 60000 / speed);
    }

    return () => clearInterval(timer);
  }, [playing, speed]);

  return (
    <section className="metronome">
      <h2>Metronome</h2>
      <p>
        Metronomes are used to help musicians practice by periodically emitting
        a ticking noise at a selected speed.
      </p>

      <div className="bpm-slider">
        <div>BPM: {speed} </div>
        <input
          type="range"
          min="60"
          max="240"
          step="1"
          value={speed}
          onChange={handleChangeInput}
        />
      </div>

      <button onClick={handleStartStop}> {playing ? "Stop" : "Start"} </button>
    </section>
  );
};

export default Metronome;
