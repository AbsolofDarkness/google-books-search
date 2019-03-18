import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBCard, MDBCardBody, MDBCardText, MDBCardTitle, MDBInput, MDBBtn, MDBListGroup, MDBListGroupItem } from "mdbreact";
import API from "../utils/API";

class Search extends Component {
    state = {
        searchQuery: "",
        results: []
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    loadBooks = () => {
        API.getBooks()
          .then(res =>
            this.setState({ books: res.data, title: "", author: "", synopsis: "" })
          )
          .catch(err => console.log(err));
    };

    handleSearch = event => {
        event.preventDefault();
    if (this.state.searchQuery) {
        alert(this.state.searchQuery)
      API.getGoogleBooks({
        title: this.state.searchQuery
      })
      .then(res => this.setState({ results: res.data }))
        .catch(err => console.log(err));
    }
    }

    render() {
        return(
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
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle className="h1">Book Search</MDBCardTitle>
                                <MDBCardText><strong>Book</strong></MDBCardText>
                                <MDBInput name="searchQuery" value={this.state.searchQuery} onChange={this.handleInputChange} hint="Ready Player One" type="text" containerClass="mt-0" />
                                <MDBBtn onClick={this.handleSearch} color="danger">Search</MDBBtn>
                            </MDBCardBody> 
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <MDBCard className="mt-5">
                            <MDBCardBody>
                                <MDBCardTitle>Results</MDBCardTitle>
                                <MDBCardText className="text-center">
                                    <MDBListGroup>
                                        {this.state.results.map(book => {
                                            return (
                                                <MDBListGroupItem>
                                                    <p>{book.title}</p>
                                                </MDBListGroupItem>
                                            );
                                        })}
                                    </MDBListGroup>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Search;