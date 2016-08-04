import _ from 'lodash';
import React from 'react';
import Fragments from './fragments';

export default function Hit(props) {
	const fragments = _.map(props.fragments, (val, key) =>
		<Fragments key={key} fieldName={key} fragments={val} />
	);
	return (
		<li>
			<b>{props.id}</b>
			<span className="badge">{props.roundedScore}</span>
			<div className="well">
				{fragments}
			</div>
		</li>
	);
}
