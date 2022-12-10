const BankSwitch = (props) => {
  return (
    <>
      <input
        type="checkbox"
        id="bank-switch"
        className="toggle sound-toggle"
        onChange={props.handleBankSwitch}
      checked={props.isBankOne}
      />
      <label htmlFor="bank-switch" hidden="hidden">Sound bank toggle</label>
    </>
  );
};

export default BankSwitch;
