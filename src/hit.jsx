import _ from 'lodash';
import React from 'react';
import Fragments from './fragments';

export default function Hit(props) {
  const frag = (val, key) => <Fragments key={key} fieldName={key} fragments={val} />;
  const fragments = _.map(props.fragments, frag);
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
