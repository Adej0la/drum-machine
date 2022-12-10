const PowerSwitch = (props) => {
return(
    <>
      <input
        type="checkbox"
        id="power-switch"
        className="toggle power-toggle"
        onChange={props.handlePowerSwitch}
      />
      <label htmlFor="power-switch" hidden="hidden">Power toggle</label>
    </>
)
}

export default PowerSwitch
