import React, { Component } from 'react'
import axios from 'axios';


  function SignOut (){
    localStorage.clear();
    window.location.href = '/SignIn';
}


  export default SignOut