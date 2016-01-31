'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = SearchResults;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Fragment(_ref) {
	var html = _ref.html;

	return _react2.default.createElement('li', { dangerouslySetInnerHTML: { __html: html } });
}

function Fragments(fragments, fieldName) {
	var items = fragments.map(Fragment);
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

function Hit(hit) {
	var fragments = _lodash2.default.map(hit.fragments, Fragments);
	return _react2.default.createElement(
		'li',
		null,
		_react2.default.createElement(
			'b',
			null,
			hit.id
		),
		_react2.default.createElement(
			'span',
			{ className: 'badge' },
			hit.roundedScore
		),
		_react2.default.createElement(
			'div',
			{ className: 'well' },
			fragments
		)
	);
}

function SearchResults(props) {
	var results = props.results;

	var meta = '(1 - ' + results.hits.length + ' of ' + results.total_hits + ') took ' + results.roundTook;
	var hits = results.hits.map(function (hit) {
		return _react2.default.createElement(Hit, _extends({ key: hit.id }, hit));
	});
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
			hits
		)
	);
}