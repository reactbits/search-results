'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Hit;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fragments = require('./fragments');

var _fragments2 = _interopRequireDefault(_fragments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Hit(props) {
	var fragments = _lodash2.default.map(props.fragments, function (val, key) {
		return _react2.default.createElement(_fragments2.default, { key: key, fieldName: key, fragments: val });
	});
	return _react2.default.createElement(
		'li',
		null,
		_react2.default.createElement(
			'b',
			null,
			props.id
		),
		_react2.default.createElement(
			'span',
			{ className: 'badge' },
			props.roundedScore
		),
		_react2.default.createElement(
			'div',
			{ className: 'well' },
			fragments
		)
	);
}