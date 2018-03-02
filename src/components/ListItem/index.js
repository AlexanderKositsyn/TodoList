import React from 'react';

import classNames from './index.css';

export default function ListItem(props) {
  return props.isDislpay(props.text, props.priority) ? (
    <li
      data-id={props.id}
      className={classNames.item}
      data-priority={props.priority}
    >
      {props.edit ? (
        <textarea defaultValue={props.text} />
      ) : (
        <span className={classNames.text}>{props.text}</span>
      )}
      <button className={classNames.button}>Delete</button>
    </li>
  ) : null;
}
