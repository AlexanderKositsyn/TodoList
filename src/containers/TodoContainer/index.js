import React from 'react';

import Todo from 'components/Todo';

export default class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: '',
      isPriporityOpen: false,
    };
  }

  componentDidMount() {
    //счетчик для айдишников туду item
    this.counter = 0;
  }

  // обработчик при изменении инпута
  handlerInputTextTodoItem = e => {
    this.setState({ inputValue: e.target.value });
  };

  //обработчик добавления элемента
  handlerAddTodoItem = () => {
    // откроем сначала popup выбора приоритета
    let promise = new Promise((res, rej) => {
      // проверим не пустой ли инпут
      if (this.state.inputValue === '') return;
      this.setState(
        {
          isPriporityOpen: true,
        },
        res,
      );
    });

    //потом ждем пока пользователь нажмет на одну из кнопок
    promise.then(this.handlerPriorityValue);
  };

  handlerPriorityValue = e => {
    return new Promise((res, rej) => {
      if (
        e !== undefined &&
        (e.target.tagName === 'INPUT' || e.target.tagName === 'LABEL')
      ) {
        res(e.target.value);
      }
    }).then(this.setNewItem);
  };

  setNewItem = checkboxValue => {
    // добавим новую туду в массив с туду итемами
    // и отчищаем инпут

    this.setState({
      todos: [
        ...this.state.todos,
        {
          text: this.state.inputValue,
          id: ++this.counter,
          edit: false,
          priority: checkboxValue,
        },
      ],
      inputValue: '',
      isPriporityOpen: false,
    });
  };

  //обработчик при редактировании айтема и удаление его
  handlerDeleteAndEdit = e => {
    if (e.target.tagName === 'SPAN') {
      //вернется ссылка на объект
      let editedItem = this.state.todos.find(
        item => item.id === parseInt(e.target.closest('li').dataset.id),
      );
      // формируем новый массив, в котором изменяем найденный элемент
      this.setState({
        todos: this.state.todos.map(item => {
          return item === editedItem
            ? Object.assign({}, item, (item.edit = true))
            : Object.assign({}, item);
        }),
      });
    }
    if (e.target.tagName === 'BUTTON') {
      // не понятно толи он вернет новые ссылки, то ли старые ссылки
      // зависит от внутренней реализации filter, он может копировать item уже как новый объект
      this.setState({
        todos: this.state.todos.filter(item => {
          return item.id !== parseInt(e.target.closest('li').dataset.id);
        }),
      });
    }
  };

  handlerOnBlur = e => {
    if (e.target.tagName === 'TEXTAREA') {
      //вернется ссылка на объект
      let editedItem = this.state.todos.find(item => item.edit);
      // формируем новый массив, в котором изменяем найденный элемент
      // у него меняет тест, и флаг то что он редактруется
      this.setState({
        todos: this.state.todos.map(item => {
          return item === editedItem
            ? Object.assign(
                {},
                item,
                (item.text = e.target.value),
                (item.edit = false),
              )
            : Object.assign({}, item);
        }),
      });
    }
  };

  render() {
    return (
      <Todo
        todos={this.state.todos}
        inputValue={this.state.inputValue}
        isPriporityOpen={this.state.isPriporityOpen}
        handlerPriorityValue={this.handlerPriorityValue}
        handlerInputTextTodoItem={this.handlerInputTextTodoItem}
        handlerAddTodoItem={this.handlerAddTodoItem}
        handlerDeleteAndEdit={this.handlerDeleteAndEdit}
        handlerOnBlur={this.handlerOnBlur}
      />
    );
  }
}
