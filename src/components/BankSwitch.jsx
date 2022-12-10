const BankSwitch = (props) => {
  return (
    <>
      <input
        type="checkbox"
        id="bank-switch"
        className="toggle sound-toggle"
        onChange={props.handleBankSwitch}
      />
      <label htmlFor="bank-switch" hidden="hidden">Sound bank toggle</label>
    </>
  );
};

export default BankSwitch;
