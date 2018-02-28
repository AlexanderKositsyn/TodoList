import classNames from './List.css';

import React from 'react';
import ListItem from './ListItem';

export default class List extends React.PureComponent {
  render() {
    return (
      <ul
        onClick={this.props.handlerDeleteAndEdit}
        onBlur={this.props.handlerOnBlur}
        className={classNames.list}
      >
        {this.props.items.map(item => (
          <ListItem
            text={item.text}
            key={item.id}
            id={item.id}
            edit={item.edit}
          />
        ))}
      </ul>
    );
  }
}
