import React from 'react';
import _ from 'lodash';

function Fragment({ html }) {
	return <li dangerouslySetInnerHTML={{ __html: html }}/>;
}

function Fragments(fragments, fieldName) {
	const items = fragments.map(Fragment);
	return (
		<div>
				{fragments.length ? <div>{fieldName}</div> : null}
				<ul>
						{items}
				</ul>
		</div>
	);
}

function Hit(hit) {
	const fragments = _.map(hit.fragments, Fragments);
	return (
		<li>
			<b>{hit.id}</b>
			<span className="badge">{hit.roundedScore}</span>
			<div className="well">
				{fragments}
			</div>
		</li>
	);
}

export default function SearchResults(props) {
	const { results } = props;
	const meta = `(1 - ${results.hits.length} of ${results.total_hits}) took ${results.roundTook}`;
	const hits = results.hits.map(hit =>
		<Hit key={hit.id} {...hit}/>
	);
	return (
		<div>
			<h3>Results</h3>
			<h5>{meta}</h5>
			<ul>
				{hits}
			</ul>
		</div>
	);
}
