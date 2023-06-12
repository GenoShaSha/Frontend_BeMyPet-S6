import jwtDecode from 'jwt-decode';
import React from 'react';
function Home() {
  var token = localStorage.getItem("token")
  var decoded = jwtDecode(token)
  console.log(decoded.id)
  return (
    <div className='home'>
        asdasdasd
    </div>
  );
}

export default Home;