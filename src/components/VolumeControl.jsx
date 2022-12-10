const VolumeControl = (props) => {
  return (
    <>
      <input
        type="range"
        min="0"
        max="100"
        value={props.volume}
        onChange={props.handleVolume}
      />
    </>
  );
};

export default VolumeControl;
