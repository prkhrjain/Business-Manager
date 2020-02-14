import React, { Component} from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
}
 from "react-router-dom";
import Route from "react-router-dom/Route";
import Page from "./page.jsx";
import GoogleLogin from "react-google-login";
import Header from "./Header";


function responseGoogle(response) {
console.log(response.targer.profileObj);
  
};



class App extends Component {
  state = {
    loggedIn: false,
    email: "",
    name: ""
  };

  
  render() {
    return (
      <Router>
        <div className="App">
        <Header/>
              <NavLink to="/">
               <button className="btn">Home </button>   
              </NavLink>
              <Link to="/page" exact activeStyle={{ color: "green" }}>
              <button className="btn"> Click here to go to Application</button>
              </Link>
            
          <Route
            path="/"
            exact
            strict
            render={() => {
              return ( <div className="container">
              <h1>Hello, Welcome to Utilize </h1>
              
              <GoogleLogin
                clientId="515153744500-n5h1e2uketfalt7jcesb96a1dtpb042q.apps.googleusercontent.com"
                buttonText="Login sdsd Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>);
            }}
          />
          <Route
            path="/page"
            exact
            strict
            render={() => {
              return <h1><Page/></h1>;
            }}
          />

        </div>
      </Router>
    );
  }
}

export default App;
