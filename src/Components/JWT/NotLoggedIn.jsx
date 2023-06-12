import Home from '../Home';

function NotLoggedIn(page) {
    var token = localStorage.getItem("token");
    if (token == null) {
      return Home;
    }
    return page;
  }
  export default NotLoggedIn