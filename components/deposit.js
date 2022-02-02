function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Error: Please enter an " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }
  const lastUserIndex = ctx.users.length - 1;
  const currentUser = ctx.users[lastUserIndex];

  function handleDeposit() {
    console.log("current user balance");
    if (!validate(amount, "Amount")) return;
    currentUser.balance += amount;
    console.log("current user is ", currentUser);
    setShow(false);
  }

  function clearForm() {
    setAmount("");
    setShow(true);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        bgcolor="success"
        header="Deposit"
        status={status}
        body={
          show ? (
            <>
              Enter Amount
              <br />
              <input
                type="input"
                className="form-control"
                id="deposit"
                placeholder="0"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.currentTarget.value))}
              />
              <br />
              <label>Current Balance: {currentUser.balance}</label>
              <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleDeposit}
              >
                Add Funds
              </button>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <div>You deposited {amount}</div>
              <button
                type="submit"
                disabled={!amount}
                className="btn btn-light"
                onClick={clearForm}
              >
                Make another deposit
              </button>
            </>
          )
        }
      />
    </div>
  );
}
