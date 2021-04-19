import React, { Component } from 'react';
import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import { Switch, Route, Redirect } from 'react-router-dom';

import { DISHES } from '../shared/dishes';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={() => <Home />} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
