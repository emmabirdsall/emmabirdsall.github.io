import React from 'react';
import Home from './components/Home.js';
import Header from './components/Header.js';
import UserForm from './components/UserForm.js';
import Footer from './components/Footer.js';
import Dogs from './components/Dogs.js';
import Cats from './components/Cats.js';
import Bunnies from './components/Bunnies.js';
import NotFound from './components/NotFound.js';
import SimpleStorage from 'react-simple-storage';
//import './App.css';
import './css/main.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Prompt,
  //Redirect,
} from 'react-router-dom';
import Banner from 'react-js-banner';

class App extends React.Component {
  //Set state
  state = {
    zipcode: "",
    radius: "",
    banner: false,
    bannerCss: { backgroundColor: "#B0EEAF", border: "5px solid #AAE089", borderRadius: "5px"}
  }

  //Function to get zipcode value from user and set state on change
  handleZipcode = (e) => {
    this.setState({zipcode: e.target.value});
  };

  //Function to get radius value from user and set state on change
  handleRadius = (e) => {
    this.setState({radius: e.target.value});
  }

  //Function to handle actions upon submit
  handleSubmit = (e) => {
    e.preventDefault();
    //Check to make sure 5 digit zipcode was entered
    if (this.state.zipcode.length > 5 || this.state.zipcode.length < 5) {
      alert("Please enter a valid 5 digit zipcode");
    } 
    //Check to make sure radius was entered
    else if (this.state.radius.length === 0) {
        alert("Please enter a valid 5 digit zipcode");
    }
    //Alert to display what was entered
    else {
      this.setState({banner: true});
    }
  }

  render() {
    //check values of state
    console.log(this.state);
  
    return (
      <Router>
        <Header banner={this.state.banner}/>
        <Switch>
          <Route 
            exact
            path="/"
            render={() => 
              <div className="background">
                <div className="home">
                  <SimpleStorage parent={this}/>
                  <Banner showBanner={this.state.banner} css={this.state.bannerCss} title={`Your search will occur within ${this.state.radius} miles of ${this.state.zipcode}. Please use the links above to view the adoptable animals in your area.`} />
                  <Home />
                  <UserForm onChange={this.handleZipcode} onInput={this.handleRadius} onSubmit={this.handleSubmit} />
                </div>
              </div>}
          />
          <Route 
            path="/dogs"
            render={() => 
            <div>
              <SimpleStorage parent={this} />
              <Dogs radius={this.state.radius} zipcode={this.state.zipcode}/>
            </div>}
          />
          <Route 
            path="/cats"
            render={() => 
            <div>
              <SimpleStorage parent={this} />
              <Cats radius={this.state.radius} zipcode={this.state.zipcode}/>
            </div>}
          />
          <Route 
            path="/bunnies"
            render={() => 
              <div>
                <SimpleStorage parent={this} />
                <Bunnies radius={this.state.radius} zipcode={this.state.zipcode}/>
              </div>}
          />
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </Router>
    );
  }
}



export default App;
