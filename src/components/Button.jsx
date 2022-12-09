import { useEffect } from "react";

const Button = (props) => {
  useEffect(() => {
    const handlekeyDown = (e) => {
      if (e.key.toUpperCase() == props.pad.key) {
        playClip();
      }
    };

    document.addEventListener("keydown", handlekeyDown);

    return () => {
      document.removeEventListener("keydown", handlekeyDown);
    };
  });

  const playClip = () => {
    const audioClip = document.getElementById(props.pad.key);
    audioClip.currentTime = 0;
    audioClip.play();
  };
  return (
    <button className="drum-pad" onClick={playClip}>
      <audio src={props.pad.clip} className="clip" id={props.pad.key}></audio>
      {props.pad.key}
    </button>
  );
};

export default Button;
