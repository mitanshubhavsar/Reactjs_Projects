const express = require('express');
const mongoose = require('mongoose');
var authenticate = require('../authenticate');

const cors = require('./cors');
const { verify } = require('jsonwebtoken');
const Favorites = require('../models/favorite');

const favoriteRouter = express.Router();

favoriteRouter.use(express.json());

favoriteRouter
  .route('/')
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(cors.cors, authenticate.verifyUser, (req, res, next) => {
    Favorites.findOne({ user: req.user._id })
      .populate('user')
      .populate('dishes')
      .then(
        (favorite) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(favorite);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Favorites.findOne({ user: req.user._id })
      .then(
        (favorite) => {
          if (
            favorite != null &&
            favorite.length != 0 &&
            favorite.dishes.indexOf(req.body[0]._id) === -1
          ) {
            favorite.dishes.push(req.body[0]);
            favorite.save().then((favorite) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(favorite);
            });
          } else if (favorite === null || favorite.length === 0) {
            const favorite = new Favorites();
            favorite.user = req.user._id;
            for (i = 0; i < req.body.length; i++) {
              favorite.dishes.push(req.body[i]);
            }
            favorite.save().then((favorite) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(favorite);
            });
          } else if (favorite.dishes.indexOf(req.body[0]._id) !== -1) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end('dishes already exits');
          } else {
            err = new Error('Dish ' + req.params.dishId + ' not found.');
            err.status = 404;
            return next(err);
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /favorites');
  })
  .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Favorites.findOne({ user: req.user._id });
    Favorites.remove({})
      .then(
        (resp) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(resp);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });
favoriteRouter
  .route('/:dishId')
  .options(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
    res.sendStatus(200);
  })
  .get(cors.cors, authenticate.verifyUser, (req, res, next) => {
    Favorites.findOne({ user: req.user._id })
      .populate('user')
      .populate('dishes')
      .then(
        (favorite) => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(favorite);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Favorites.findOne({ user: req.user._id })
      .then(
        (favorite) => {
          if (
            favorite != null &&
            favorite.length != 0 &&
            favorite.dishes.indexOf(req.params.dishId) === -1
          ) {
            favorite.dishes.push(req.params.dishId);
            favorite.save().then((favorite) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(favorite);
            });
          } else if (favorite === null || favorite.length === 0) {
            const favorite = new Favorites();
            favorite.user = req.user._id;
            favorite.dishes.push(req.params.dishId);
            favorite.save().then((favorite) => {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.json(favorite);
            });
          } else if (favorite.dishes.indexOf(req.params.dishId) !== -1) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(req.params.dishId + ' dish already exits.');
          } else {
            err = new Error('Dish ' + req.params.dishId + ' not found.');
            err.status = 404;
            return next(err);
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /favorites/' + req.params.dishId);
  })
  .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    Favorites.findOne({ user: req.user._id })
      .then(
        (favorite) => {
          if (
            favorite != null &&
            favorite.dishes.indexOf(req.params.dishId) !== -1
          ) {
            favorite.dishes.remove(req.params.dishId);
            favorite.save().then(
              (favorite) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(favorite);
              },
              (err) => next(err)
            );
          } else {
            err = new Error('Dish ' + req.params.dishId + ' not found');
            err.status = 404;
            return next(err);
          }
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

module.exports = favoriteRouter;
