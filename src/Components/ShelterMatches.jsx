// import React, { Component, useEffect } from "react";
// import axios from "axios";
// import {
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   CardSubtitle,
//   Button,
// } from "reactstrap";
// import "../Css/Status.scss";
// import jwtDecode from "jwt-decode";
// // import { DataContext } from "./CartActions";
// class ShelterMatches extends Component {
//   //   static contextType = DataContext;
//   constructor(props) {
//     super(props);
//     this.state = {
//       matches: [],
//     };
//   }

//   componentDidMount() {
//     var token = localStorage.getItem("token");
//     var decoded = jwtDecode(token);
//     axios
//       .post(`http://134.209.136.146:8000/getsheltermatches`, {
//         shelter_id: decoded.id,
//       })
//       .then((response) => {
//         this.setState({
//           matches: response.data.matches,
//         });
//         console.log(response);
//       });
//   }

//   approve = (dmatchid) => {
//     axios
//       .put("http://134.209.136.146:8000/updatematch", {
//         id: dmatchid,
//         status: "APPROVED",
//       })
//       .then(
//         (response) => {
//           console.log(response);
//           window.location.reload();
//         },
//         (error) => {
//           console.log(error);
//           this.setState({ errorMessage: error.message });
//         }
//       );
//   };

//   deny = (dmatchid) => {
//     console.log(dmatchid)
//     axios
//       .put("http://134.209.136.146:8000/updatematch", {
//         id: dmatchid,
//         status: "DENIED",
//       })
//       .then(
//         (response) => {
//           console.log(response);
//           window.location.reload();
//         },
//         (error) => {
//           console.log(error);
//           this.setState({ errorMessage: error.message });
//         }
//       );
//   };

//   render() {
//     //fix this aswell   const{like} = this.context;

//     return (
//       <div className="catName">
//         <div className="gridContainer">
//           {this.state.matches.map((match) => (
//             <div className="wrap">
//               <Card>
//                 <CardImg
//                   className="anImg"
//                   src={match.picture}
//                   alt="Card image cap"
//                 />
//                 <CardBody>
//                   <CardTitle>
//                     {match.first_name} {match.last_name}
//                   </CardTitle>
//                   <CardSubtitle>Adopter Email: {match.adopter_email}</CardSubtitle>
//                   <CardSubtitle
//                     style={{
//                       fontWeight: "bolder",
//                       fontSize: "20px",
//                       color: "green",
//                     }}
//                   >
//                     {match.status}
//                   </CardSubtitle>
//                   <Button
//                     style={{ marginRight: "10px" }}
//                     onClick={() => this.approve(match.id)}
//                   >
//                     Approve
//                   </Button>
//                   <Button
//                     style={{ marginRight: "10px" }}
//                     onClick={() => this.deny(match.id)}
//                   >
//                     Deny
//                   </Button>
//                 </CardBody>
//               </Card>
//               <br></br>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
// export default ShelterMatches;

import React, { useState, useEffect } from "react";
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
import "../Css/Status.scss";
import jwtDecode from "jwt-decode";
// import { DataContext } from "./CartActions";

export default function ShelterMatches() {
  const [matches, setMatches] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    async function postShelter() {
      var token = localStorage.getItem("token");
      var decoded = jwtDecode(token);
      axios
        .post(`http://134.209.136.146:8000/getsheltermatches`, {
          shelter_id: decoded.id,
        })
        .then((response) => {
          setMatches(response.data.matches);
          console.log(response);
        });
    }

    postShelter();
  });

  function approve(dmatchid) {
    axios
      .put("http://134.209.136.146:8000/updatematch", {
        id: dmatchid,
        status: "APPROVED",
      })
      .then(
        (response) => {
          console.log(response);
          window.location.reload();
        },
        (error) => {
          console.log(error);
          setError({ errorMessage: error.message });
        }
      );
  }

  function deny(dmatchid) {
    console.log(dmatchid);
    axios
      .put("http://134.209.136.146:8000/updatematch", {
        id: dmatchid,
        status: "DENIED",
      })
      .then(
        (response) => {
          console.log(response);
          window.location.reload();
        },
        (error) => {
          console.log(error);
          setError({ errorMessage: error.message });
        }
      );
  }

  if (!matches) return <div>Loading...</div>;

  return (
    <>
      <div className="catName">
        <div className="gridContainer">
          {matches.map((match) => (
            <div className="wrap">
              <Card>
                <CardImg
                  className="anImg"
                  src={match.picture}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>
                    {match.first_name} {match.last_name}
                  </CardTitle>
                  <CardSubtitle>
                    Adopter Email: {match.adopter_email}
                  </CardSubtitle>
                  <CardSubtitle
                    style={{
                      fontWeight: "bolder",
                      fontSize: "20px",
                      color: "green",
                    }}
                  >
                    {match.status}
                  </CardSubtitle>
                  <Button
                    style={{ marginRight: "10px" }}
                    onClick={() => approve(match.id)}
                  >
                    Approve
                  </Button>
                  <Button
                    style={{ marginRight: "10px" }}
                    onClick={() => deny(match.id)}
                  >
                    Deny
                  </Button>
                </CardBody>
              </Card>
              <br></br>
            </div>
          ))}
          {error && <div>{error.errorMessage}</div>}
        </div>
      </div>
    </>
  );
}
