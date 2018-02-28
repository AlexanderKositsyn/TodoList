import React from 'react';

export default function ListItem(props) {
  return (
    <li data-id={props.id}>
      <span>{props.text}</span>
      <button>Delete</button>
    </li>
  );
}
