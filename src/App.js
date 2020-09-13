import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

//Config import
import apiKey from './config';

//App component
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mountains: [],
      headphones: [],
      robots: [],
      userSearch: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.imageSearch('mountains');
    this.imageSearch('headphones');
    this.imageSearch('robots');
  }

  // 2nd param optional. Used to store searches in same state "userSearch"
  imageSearch = (query, userSearch) => {
    this.setState({ loading: true });
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then(response => response.json())
      .then(responseData => {
        userSearch
          ? this.setState({ userSearch: responseData.photos.photo })
          : this.setState({ [query]: responseData.photos.photo });
        this.setState({ loading: false });
      })
      .catch(err => console.log('Error fetching data', err));
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <SearchForm onSearch={this.imageSearch} />
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/mountains" />} />
            <Route path="/mountains" render={() => <PhotoContainer data={this.state.mountains} />} />
            <Route path="/headphones" render={() => <PhotoContainer data={this.state.headphones} />} />
            <Route path="/robots" render={() => <PhotoContainer data={this.state.robots} />} />
            <Route
              exact
              path="/search/:query"
              render={() => <PhotoContainer data={this.state.userSearch} loading={this.state.loading} />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
