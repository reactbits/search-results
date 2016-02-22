import React from 'react';

function Fragment({ html }) {
	// TODO support markdown fragments
	return <li dangerouslySetInnerHTML={{ __html: html }} />;
}

export default function Fragments({ fragments, fieldName }) {
	const items = fragments.map((f, i) => <Fragment key={i} html={f} />);
	return (
		<div>
				{fragments.length ? <div>{fieldName}</div> : null}
				<ul>{items}</ul>
		</div>
	);
}
