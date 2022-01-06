import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import React, { useState } from "react";
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
        <MDBNavbar expand="lg" light bgColor="white">
          <MDBContainer fluid>
            <MDBNavbarToggler
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <MDBIcon fas icon="bars" />
            </MDBNavbarToggler>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <MDBNavbarNav right className="mb-2 mb-lg-0">
                <MDBNavbarItem active>
                  <MDBNavbarLink aria-current="page" class="display-6" href="#">
                    Alpha Club IIT Goa
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </div>
          </MDBContainer>
        </MDBNavbar>

        <div className="p-5 text-center bg-light">
          <h1 className="mb-3">Risk And Quantity Calculator</h1>
          <MDBContainer className="w-25"></MDBContainer>
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
            <MDBBtn className="mx-2 mb-3" color="primary" onClick={quantity}>
              Quantity
            </MDBBtn>
            <label htmlFor="basic-url" className="mx-2 form-label display-6">
              {qty}
            </label>
          </MDBContainer>
        </div>
      </header>
      <MDBFooter color="black" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Stock Risk and Quantity Calculator</h5>
              <p>Alpha Club Initiative</p>
            </MDBCol>
            <MDBCol md="6">
              {/* <h5 className="title">Links</h5> */}
              {/* <ul>
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
              </ul> */}
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
