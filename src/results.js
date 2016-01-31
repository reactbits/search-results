import React from 'react';
import Hit from './hit';

function roundTook(took) {
	if (took < 1000 * 1000) {
		return 'less than 1ms';
	} else if (took < 1000 * 1000 * 1000) {
		const ms = Math.round(took / (1000 * 1000));
		return `${ms}ms`;
	}
	const roundMs = Math.round(took / (1000 * 1000));
	return `${roundMs / 1000}s`;
}

export default function SearchResults(props) {
	const { results } = props;
	const hits = results.hits || [];
	const items = hits.map(hit => <Hit key={hit.id} {...hit}/>);
	if (items.length === 0) {
		return <div>No match</div>;
	}
	const took = results.took || 0;
	const meta = `(1 - ${hits.length} of ${results.total_hits}) took ${roundTook(took)}`;
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
