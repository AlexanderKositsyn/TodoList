import React from 'react';

export default function ListItem(props) {
  return (
    <li data-id={props.id}>
      {props.edit ? (
        <textarea defaultValue={props.text} />
      ) : (
        <span>{props.text}</span>
      )}
      <button>Delete</button>
    </li>
  );
}
