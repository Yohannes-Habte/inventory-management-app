import React, { useState, useEffect } from "react";
import click1 from "../../assets/sweet.mp3";
import click2 from "../../assets/sweet.mp3";

const audioClick1 = new Audio(click1);
const audioClick2 = new Audio(click2);

const Metronome = () => {
  const [speed, setSpeed] = useState(100);
  const [playing, setPlaying] = useState(false);
  const [beatCounter, setBeatCounter] = useState(1);
  const [measureBeats, setMeasureBeats] = useState(4);

  // useEffect(() => {
  //   let timer;
  //   if (playing) {
  //     timer = setInterval(() => {
  //       audioClick2.play();
  //     }, 60000 / speed);
  //   }

  //   return () => clearInterval(timer);
  // }, [playing, speed]);

  useEffect(() => {
    let timer;
    if (playing) {
      timer = setInterval(() => {
        setBeatCounter((currentBeat) => {
          if (currentBeat % measureBeats === 0) {
            audioClick2.play();
          } else {
            audioClick1.play();
          }

          return (currentBeat + 1) % measureBeats;
        });
      }, 60000 / speed);
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
          onChange={(e) => setSpeed(e.target.value)}
        />
      </div>

      <button onClick={() => setPlaying((pre) => !pre)}>
        {playing ? "Stop" : "Start"}{" "}
      </button>
    </section>
  );
};

export default Metronome;
