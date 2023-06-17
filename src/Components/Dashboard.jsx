import React, { Component, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "../Css/Card.scss";
import jwt_decode from "jwt-decode";

// import { DataContext } from "./CartActions";
class Dashboard extends Component {
  //   static contextType = DataContext;
  constructor(props) {
    super(props);
    this.state = {
      animals: [],
      shelterID: "",
      adopterID: "",
      picture: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      type: "",
      breed: "",
      shelter: "",
      address: "",
      postalCode: "",
      bio: "",
      status: "PENDING",
      errorMessage: "",
    };
  }

  componentDidMount() {
    const timestamp = new Date().getTime();
    axios
      .get(`http://134.209.136.146:8000/animals?timestamp=${timestamp}`)
      .then((response) => {
        this.setState({
          animals: response.data.animals,
        });
        console.log(response);
      });
  }

  saveMatch = (
    shelterid,
    pic,
    fName,
    lName,
    dob,
    gen,
    type,
    breed,
    shelter,
    adrs,
    pcode,
    bio) => {
    var token = localStorage.getItem("token");
    var decoded = jwt_decode(token);
    var tok = localStorage.getItem("token");

    axios.post("http://134.209.136.146:8000/makematch", {
        shelterID: shelterid,
        adopterID: decoded.id,
        picture: pic,
        firstName: fName,
        lastName: lName,
        dateOfBirth: dob,
        gender: gen,
        type: type,
        breed: breed,
        shelter: shelter,
        address: adrs,
        postalCode: pcode,
        bio: bio,
        status: this.state.status,
        adopter_email: decoded.email,
      })
      .then(
        (response) => {
          console.log(response);
          alert("You have liked that animal!")
        },
        (error) => {
          console.log(error);
          this.setState({ errorMessage: error.message });
        }
      );
  };

  render() {
    return (
      <div className="categoryName">
        <div className="grid-container">
          {this.state.animals.map((animal) => (
            <div className="wrapper">
              <Card>
                <CardImg src={animal.picture} alt="Card image cap" />
                <CardBody>
                  <CardTitle>
                    {animal.first_name} {animal.last_name}
                  </CardTitle>
                  <CardSubtitle>Bio : {animal.bio}</CardSubtitle>
                  <CardSubtitle>
                    Date of Birth : {animal.date_of_birth}
                  </CardSubtitle>
                  <CardSubtitle>Gender : {animal.gender}</CardSubtitle>
                  <CardSubtitle>Type : {animal.type}</CardSubtitle>
                  <CardSubtitle>Breed : {animal.breed}</CardSubtitle>
                  <CardSubtitle>Shelter : {animal.shelter}</CardSubtitle>
                  <CardSubtitle>
                    Address : {animal.address},{animal.postal_code}
                  </CardSubtitle>
                  <br />
                  <Button
                    style={{ marginRight: "10px" }}
                    onClick={() =>
                      this.saveMatch(
                        animal.user_id,
                        animal.picture,
                        animal.first_name,
                        animal.last_name,
                        animal.date_of_birth,
                        animal.gender,
                        animal.type,
                        animal.breed,
                        animal.shelter,
                        animal.address,
                        animal.postal_code,
                        animal.bio,
                      )
                    }
                  >
                    Like
                  </Button>
                </CardBody>
              </Card>
              <br></br>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Dashboard;
