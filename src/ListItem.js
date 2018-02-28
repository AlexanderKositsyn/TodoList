import classNames from './ListItem.css';

import React from 'react';

export default function ListItem(props) {
  return (
    <li data-id={props.id} className={classNames.item}>
      {props.edit ? (
        <textarea defaultValue={props.text} />
      ) : (
        <span className={classNames.text}>{props.text}</span>
      )}
      <button className={classNames.button}>Delete</button>
    </li>
  );
}
