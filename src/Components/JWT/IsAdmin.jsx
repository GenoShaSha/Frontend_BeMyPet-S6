import Home from '../Home';
import jwtDecode from 'jwt-decode';

function IsAdmin(page) {
    var token = localStorage.getItem("token");
    if(token!=null){
        var decode = jwtDecode(token)
        if (decode.role == "shelter") {
          return page;
        }
        return Home;
    }
   
  }
  export default IsAdmin