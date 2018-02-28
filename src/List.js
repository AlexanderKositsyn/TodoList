import React from 'react';
import ListItem from './ListItem';

export default class List extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <ul onClick={this.props.onClick}>
        {this.props.items.map(item => (
          <ListItem text={item.text} key={item.id} id={item.id} />
        ))}
      </ul>
    );
  }
}
