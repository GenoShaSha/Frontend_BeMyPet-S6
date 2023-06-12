import Dashboard from '../Dashboard';
import ShowProduct from '../Dashboard';
import SignIn from '../SignIn';

function Authentication(page) {
    var token = localStorage.getItem("token");
    if (token != null) {
      return Dashboard;
    }
    return page;
  }
  export default Authentication