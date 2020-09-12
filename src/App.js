import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';


//App component
import SearchForm from './components/SearchForm'
import Nav from './components/Nav';

class App extends Component {

  constructor() {
    super();
    this.state = {

    }
  }
  
  componentDidMount() {

  }


  imageSearch = (query) => {
    //TODO FETCH
    console.log('Searched for ... ', query);
  }

  
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.imageSearch}/>
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/spaceship"/>}/>
            <Route path="/spaceship" render={() => null }/>
            <Route path="/" render={() => null }/>
            <Route path="/" render={() => null }/>
          </Switch>
        </div>
      </BrowserRouter>
    ); 
  }
} 

export default App;
