import React, { useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import DishDetail from './DishDetail';
import About from './About';

import { actions } from 'react-redux-form';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  postFeedback,
  postComment,
  fetchDishes,
  fetchComments,
  fetchPromos,
  fetchLeaders,
} from '../redux/ActionCreators';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset('feedback'));
  },
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
  postFeedback: (
    firstname,
    lastname,
    telnum,
    email,
    agree,
    contactType,
    message
  ) =>
    dispatch(
      postFeedback(
        firstname,
        lastname,
        telnum,
        email,
        agree,
        contactType,
        message
      )
    ),
});

const Main = (props) => {
  const { fetchDishes, fetchComments, fetchPromos, fetchLeaders } = props;
  useEffect(() => {
    fetchDishes();
    fetchComments();
    fetchPromos();
    fetchLeaders();
  }, [fetchDishes, fetchComments, fetchPromos, fetchLeaders]);

  const HomePage = () => {
    return (
      <Home
        dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={props.dishes.isLoading}
        dishErrMess={props.dishes.errMess}
        promotion={
          props.promotions.promotions.filter((promo) => promo.featured)[0]
        }
        promoLoading={props.promotions.isLoading}
        promoErrMess={props.promotions.errMess}
        leader={props.leaders.leaders.filter((leader) => leader.featured)[0]}
        leadersLoading={props.leaders.isLoading}
        leadersErrMess={props.leaders.errMess}
      />
    );
  };

  const DishWithId = ({ match }) => {
    return (
      <DishDetail
        dish={
          props.dishes.dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        isLoading={props.dishes.isLoading}
        errMess={props.dishes.errMess}
        comments={props.comments.comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
        commentsErrMess={props.comments.errMess}
        postComment={props.postComment}
      />
    );
  };

  return (
    <div>
      <Header />
      <TransitionGroup>
        <CSSTransition key={props.location.key} classNames="page" timeout={300}>
          <Switch location={props.location}>
            <Route path="/home" component={HomePage} />
            <Route
              exact
              path="/menu"
              component={() => (
                <Menu
                  dishes={props.dishes.dishes}
                  dishesLoading={props.dishes.isLoading}
                  dishErrMess={props.dishes.errMess}
                />
              )}
            />
            <Route
              exact
              path="/contactus"
              component={() => (
                <Contact
                  resetFeedbackForm={props.resetFeedbackForm}
                  postFeedback={props.postFeedback}
                />
              )}
            />
            <Route
              exact
              path="/aboutus"
              component={() => <About leaders={props.leaders.leaders} />}
            />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Redirect to="/home" />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
