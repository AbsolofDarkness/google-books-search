import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBJumbotron,
  MDBListGroup,
  MDBRow
} from "mdbreact";
import React, { Component } from "react";

class Saved extends Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron className="text-center">
              <h2 className="h1 display-3">(React) Google Books Search</h2>
              <p className="lead">Search for and Save Books of Interest.</p>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBCard className="mt-5">
              <MDBCardBody>
                <MDBCardTitle>Saved Books</MDBCardTitle>
                <MDBCardText className="text-center">
                  <MDBListGroup />
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Saved;
