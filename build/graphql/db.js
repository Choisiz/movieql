"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSuggestions = exports.getMovie = exports.getMovies = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var BASE_URL = "https://yts.mx/api/v2/";
var LIST_MOVIES_URL = "".concat(BASE_URL, "list_movies.json");
var MOVIE_DETAILS_URL = "".concat(BASE_URL, "movie_details.json");
var MOVIE_SUGGESTIONS_URL = "".concat(BASE_URL, "movie_suggestions.json");

var getMovies = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(limit, rating) {
    var _yield$axios, movies;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _axios["default"])(LIST_MOVIES_URL, {
              params: {
                limit: limit,
                minimum_rating: rating
              }
            });

          case 2:
            _yield$axios = _context.sent;
            movies = _yield$axios.data.data.movies;
            return _context.abrupt("return", movies);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getMovies(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getMovies = getMovies;

var getMovie = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    var _yield$axios2, movie;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _axios["default"])(MOVIE_DETAILS_URL, {
              params: {
                movie_id: id
              }
            });

          case 2:
            _yield$axios2 = _context2.sent;
            movie = _yield$axios2.data.data.movie;
            return _context2.abrupt("return", movie);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getMovie(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMovie = getMovie;

var getSuggestions = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
    var _yield$axios3, movies;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _axios["default"])(MOVIE_SUGGESTIONS_URL, {
              params: {
                movie_id: id
              }
            });

          case 2:
            _yield$axios3 = _context3.sent;
            movies = _yield$axios3.data.data.movies;
            return _context3.abrupt("return", movies);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getSuggestions(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getSuggestions = getSuggestions;