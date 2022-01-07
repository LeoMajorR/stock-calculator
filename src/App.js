import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import React, { useState } from "react";
import logo from "./logo.jpg";
// import footerLogo from "./logo2.png";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBInputGroup,
  MDBInputGroupText,
  MDBInputGroupElement,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBFooter,
} from "mdb-react-ui-kit";

function App() {
  const [capital, setcap] = useState();
  const [noOfTrade, setNoOfTrade] = useState();
  const [riskPerDay, setrpd] = useState();
  const [riskPerTrade, setrpt] = useState();
  const [entry, setentry] = useState();
  const [stopLoss, setstoploss] = useState();
  const [qty, setqty] = useState();
  function riskptrade() {
    setrpt((capital * riskPerDay) / (noOfTrade * 100));
  }

  function quantity() {
    setqty(riskPerTrade / Math.abs(entry - stopLoss));
  }
  return (
    <div className="App">
      <header>
        <MDBNavbar expand="lg" light bgColor="white" scrolling fixed="top">
          <MDBContainer fluid>
            {/* <MDBNavbarToggler
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <MDBIcon fas icon="bars" />
            </MDBNavbarToggler> */}
            <div className="navbar-expand" id="navbarExample01">
              <MDBNavbarNav right className="mb-2 mb-lg-0 ">
                <MDBNavbarItem active>
                  <MDBNavbarLink
                    aria-current="page"
                    className="display-6 text-dark"
                    href="http://alpha-club.tech"
                  >
                    <img src={logo} alt="logo" style={{ maxWidth: "4rem" }} />
                    Alpha Club
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </div>
          </MDBContainer>
        </MDBNavbar>

        <div className="p-5 text-center bg-light mt-5">
          <h1 className="mb-3">Risk And Quantity Calculator</h1>
          {/* <MDBContainer className="w-25"></MDBContainer> */}
          <MDBContainer className="w-50 p-3 center">
            <label htmlFor="basic-url" className="form-label">
              Enter your Values
            </label>
            <MDBInputGroup className="mb-3">
              <MDBInputGroupText>Capital</MDBInputGroupText>
              <MDBInputGroupText>Rs.</MDBInputGroupText>
              <MDBInputGroupElement
                id="basic-url"
                value={capital}
                type="number"
                onChange={(e) => setcap(+e.target.value)}
              />
            </MDBInputGroup>

            <MDBInputGroup className="mb-3">
              <MDBInputGroupText>Number of Trades</MDBInputGroupText>
              <MDBInputGroupElement
                type="number"
                value={noOfTrade}
                onChange={(e) => setNoOfTrade(+e.target.value)}
              />
            </MDBInputGroup>

            <MDBInputGroup className="mb-3">
              <MDBInputGroupText>Risk Per Day</MDBInputGroupText>
              <MDBInputGroupElement
                type="number"
                value={riskPerDay}
                onChange={(e) => setrpd(+e.target.value)}
              />
              <MDBInputGroupText>%</MDBInputGroupText>
            </MDBInputGroup>
            <MDBInputGroup className="mb-3">
              <MDBInputGroupText>Entry</MDBInputGroupText>
              <MDBInputGroupElement
                id="basic-url"
                type="number"
                value={entry}
                onChange={(e) => setentry(+e.target.value)}
              />
            </MDBInputGroup>
            <MDBInputGroup className="mb-3">
              <MDBInputGroupText>Stop Loss</MDBInputGroupText>
              <MDBInputGroupElement
                id="basic-url"
                type="number"
                value={stopLoss}
                onChange={(e) => setstoploss(+e.target.value)}
              />
            </MDBInputGroup>
            <MDBBtn className="mx-2 mb-3" color="danger" onClick={riskptrade}>
              Risk Per Trade
            </MDBBtn>
            <label htmlFor="basic-url" className="mx-2 form-label display-6">
              {riskPerTrade}
            </label>
            <br></br>
            <MDBBtn className="mx-2" color="primary" onClick={quantity}>
              Quantity
            </MDBBtn>
            <label htmlFor="basic-url" className="mx-2 form-label display-6">
              {qty}
            </label>
          </MDBContainer>
        </div>
      </header>
      <MDBFooter
        color="secondary-color"
        className="font-small pt-4 mt-1 footer text-light"
      >
        <MDBContainer fluid className="text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <div className="w-75">
                <h4 className="title">About Us</h4>
                <p>
                  Alpha Club is community of finance fanatics consisting of
                  highly dedicated indidviduals to help everyone from those with
                  no background in finance to those coming from finance looking
                  to switch focus within the industry.
                </p>
              </div>
            </MDBCol>
            {/* <MDBCol md="0"></MDBCol> */}
            <MDBCol md="6">
              {/* <img src={footerLogo} alt="" style={{ maxWidth: "20rem" }} /> */}
              <h5 className="title">Follow Us</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="https://in.linkedin.com/company/alpha-iitgoa">
                    <MDBIcon fab icon="linkedin" className="me-1" />
                    LinkedIn
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="https://www.instagram.com/alpha_iitgoa/">
                    <MDBIcon fab icon="instagram" className="me-1" />
                    Instagram
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="https://alpha-club.tech/#">
                    <MDBIcon fab icon="twitter" className="me-1" />
                    Twitter
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.instagram.com/leomajor.ravi/">
              {" "}
              Ravi Prakash Singh{" "}
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
}

export default App;
