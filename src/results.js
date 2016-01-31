import React from 'react';
import _ from 'lodash';

function Fragment({ html }) {
	return <li dangerouslySetInnerHTML={{ __html: html }}/>;
}

function Fragments({ fragments, fieldName }) {
	const items = fragments.map((f, i) => <Fragment key={i} html={f}/>);
	return (
		<div>
				{fragments.length ? <div>{fieldName}</div> : null}
				<ul>{items}</ul>
		</div>
	);
}

function Hit(props) {
	const fragments = _.map(props.fragments, (val, key) =>
		<Fragments key={key} fieldName={key} fragments={val}/>
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

export default function SearchResults(props) {
	const { results } = props;
	const hits = results.hits || [];
	const meta = `(1 - ${hits.length} of ${results.total_hits}) took ${results.roundTook}`;
	const items = hits.map(hit => <Hit key={hit.id} {...hit}/>);
	return (
		<div>
			<h3>Results</h3>
			<h5>{meta}</h5>
			<ul>
				{items}
			</ul>
		</div>
	);
}
