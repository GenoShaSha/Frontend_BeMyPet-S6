import React, { Component,useEffect} from "react";
import axios from "axios";
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import "../Css/Status.scss"
import jwtDecode from "jwt-decode";
// import { DataContext } from "./CartActions";
class AdopterMatches extends Component {
  
//   static contextType = DataContext;
  constructor(props) {
    super(props);
    this.state = {
      matches: [],
    };
  }


  componentDidMount() {
    var token = localStorage.getItem("token")
    var decoded = jwtDecode(token)
    console.log(decoded.id)
    axios
      .post(
        `http://134.209.136.146:8000/getadoptermatches`,{
            adopter_id: decoded.id
        })
      .then((response) => {
        this.setState({
          matches: response.data.matches,
        });
        console.log(response)
      });
  }

  render() {
 //fix this aswell   const{like} = this.context;
    
    return (
      <div className="catName">
      <div className="gridContainer">
        {this.state.matches.map(match => (   

          <div className="wrap">
            <Card>
            <CardImg className="anImg" src={match.picture} alt="Card image cap" />
            <CardBody>
              <CardTitle>{match.firstName} {match.lastName}</CardTitle>
              <CardSubtitle>Shelter Name: {match.shelter}</CardSubtitle>
              <CardSubtitle>Shelter Address : {match.address},{match.postalCode}</CardSubtitle>
              <CardSubtitle style={{ fontWeight:"bolder", fontSize:"20px", color:"green" }}>{match.status}</CardSubtitle>
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
export default AdopterMatches;
