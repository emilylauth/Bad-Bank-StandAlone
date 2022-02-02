function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e3f2fd",
      }}
    >
      <nav className="navbar navbar-expand lg navbar-light">
        <div>
          <a className="navbar-brand " href="#">
            BadBank
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#/CreateAccount/">
                  Create Account
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/deposit/">
                  Deposit
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/withdraw/">
                  Withdraw
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/alldata/">
                  AllData
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
