'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = SearchResults;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hit = require('./hit');

var _hit2 = _interopRequireDefault(_hit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function roundTook(took) {
  if (took < 1000 * 1000) {
    return 'less than 1ms';
  } else if (took < 1000 * 1000 * 1000) {
    var ms = Math.round(took / (1000 * 1000));
    return ms + 'ms';
  }
  var roundMs = Math.round(took / (1000 * 1000));
  return roundMs / 1000 + 's';
}

function SearchResults(props) {
  var results = props.results;

  var hits = results.hits || [];
  var items = hits.map(function (hit) {
    return _react2.default.createElement(_hit2.default, _extends({ key: hit.id }, hit));
  });
  if (items.length === 0) {
    return _react2.default.createElement(
      'div',
      null,
      'No match'
    );
  }
  var took = results.took || 0;
  var meta = '(1 - ' + hits.length + ' of ' + results.total_hits + ') took ' + roundTook(took);
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'Results'
    ),
    _react2.default.createElement(
      'h5',
      null,
      meta
    ),
    _react2.default.createElement(
      'ul',
      null,
      items
    )
  );
}