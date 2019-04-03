import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBJumbotron,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow
} from "mdbreact";
import React, { Component } from "react";
import API from "../utils/API";

class Search extends Component {
  state = {
    searchQuery: "",
    results: []
  };

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

  addBook = () => {
    API.saveBook({
      title: {}
    });
  };

  handleSearch = event => {
    event.preventDefault();
    if (this.state.searchQuery) {
      // alert(this.state.searchQuery)
      API.getGoogleBooks(this.state.searchQuery)
        .then(res => {
          this.setState({ results: res.data });
          // console.log(res);
        })
        .catch(err => console.log(err));
    }
  };

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
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle className="h1">Book Search</MDBCardTitle>
                <MDBCardText>
                  <strong>Book</strong>
                </MDBCardText>
                <MDBInput
                  name="searchQuery"
                  value={this.state.searchQuery}
                  onChange={this.handleInputChange}
                  hint="Ready Player One"
                  type="text"
                  containerClass="mt-0"
                />
                <MDBBtn onClick={this.handleSearch} color="danger">
                  Search
                </MDBBtn>
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
                        <MDBListGroupItem className="text-left">
                          <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">
                              <strong>{book.volumeInfo.title}</strong>
                            </h5>
                            <div className="btn-group" role="group">
                              <button
                                className="btn btn-primary"
                                onClick={this.addBook}
                              >
                                Save
                              </button>
                              <a
                                className="btn btn-light"
                                href={book.volumeInfo.infoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View
                              </a>
                            </div>
                          </div>
                          <div className="d-flex w-100 justify-content-between">
                            <h6 className="mb-1">
                              <strong>{book.volumeInfo.subtitle}</strong>
                            </h6>
                          </div>
                          <div className="d-flex w-100 justify-content-between">
                            <p>Writen by: {book.volumeInfo.authors[0]}</p>
                          </div>
                          <div className="container">
                            <div className="row">
                              <div className="col-md-2">
                                <img
                                  src={
                                    book.volumeInfo.imageLinks.smallThumbnail
                                  }
                                  className="img-thumbnail"
                                  height="50px"
                                  alt="Book Thumbnail"
                                />
                              </div>
                              <div className="col-md-10">
                                <p className="mx-2 text-left">
                                  {book.volumeInfo.description}
                                </p>
                              </div>
                            </div>
                          </div>
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
