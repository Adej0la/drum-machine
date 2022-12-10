const VolumeControl = (props) => {
  return (
    <>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={props.volume}
        onChange={props.handleVolume}
      />
    </>
  );
};

export default VolumeControl;
