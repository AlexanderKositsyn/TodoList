import classNames from './index.css';

import React from 'react';
import ListItem from '../ListItem';

export default function List(props) {
  return (
    <ul
      onClick={props.handlerDeleteAndEdit}
      onBlur={props.handlerOnBlur}
      className={classNames.list}
    >
      {props.items.map(item => (
        <ListItem
          text={item.text}
          key={item.id}
          id={item.id}
          edit={item.edit}
          priority={item.priority}
          isDislpay={props.isDislpay}
        />
      ))}
    </ul>
  );
}
