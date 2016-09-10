'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Fragments;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Fragment(_ref) {
  var html = _ref.html;

  // TODO support markdown fragments
  return _react2.default.createElement('li', { dangerouslySetInnerHTML: { __html: html } });
}

function Fragments(_ref2) {
  var fragments = _ref2.fragments;
  var fieldName = _ref2.fieldName;

  var items = fragments.map(function (f, i) {
    return _react2.default.createElement(Fragment, { key: i, html: f });
  });
  return _react2.default.createElement(
    'div',
    null,
    fragments.length ? _react2.default.createElement(
      'div',
      null,
      fieldName
    ) : null,
    _react2.default.createElement(
      'ul',
      null,
      items
    )
  );
}