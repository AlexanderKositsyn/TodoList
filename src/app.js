import React from 'react';
import List from './List';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: '',
    };
  }

  componentDidMount() {
    //счетчик для айдишников туду айтемов
    this.counter = 0;
  }

  // обработчик при изменении инпута
  handlerInputTextTodoItem = e => {
    this.setState({ inputValue: e.target.value });
  };

  //обработчик добавления элемента
  handlerAddTodoItem = () => {
    // проверим не пустой ли инпут
    if (this.state.inputValue === '') return;
    ++this.counter;
    // добавим новую туду в массив с туду итемами
    // и отчищаем инпут
    this.setState({
      todos: [
        ...this.state.todos,
        { text: this.state.inputValue, id: this.counter },
      ],
      inputValue: '',
    });
  };

  // обработчки при удалении итема
  handlerDeleteTodoItem = e => {
    if (e.target.tagName === 'BUTTON') {
      this.setState({
        todos: this.state.todos.filter(item => {
          return item.id === e.target.closest('li').dataset['data-id'];
        }),
      });
    }
  };

  render() {
    console.log(this);
    return (
      <div className="todo">
        <input
          onChange={this.handlerInputTextTodoItem}
          value={this.state.inputValue}
          type="text"
        />
        <button onClick={this.handlerAddTodoItem}>Добавить</button>
        <List items={this.state.todos} onClick={this.handlerDeleteTodoItem} />
      </div>
    );
  }
}
