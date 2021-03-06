import React from 'react';

import Todo from 'components/Todo';

export default class TodoContainer extends React.Component {
  state = {
    todos: [],
    inputValue: '',
    inputValueFilter: '',
    radioPriorityFilter: undefined,
    isPriporityOpen: false,
    isFilterOpen: false,
    resolverPriority: null,
  };

  componentDidMount() {
    //счетчик для айдишников туду item
    this.counter = 0;
  }

  // обработчик при изменении инпута
  handlerInputTextTodoItem = e => {
    this.setState({ inputValue: e.target.value });
  };

  // обработчик при изменении инпута
  handlerInputValueFilter = e => {
    this.setState({ inputValueFilter: e.target.value });
  };

  // обработчик при изменении инпута
  handlerRadioPriotityFilter = e => {
    if (e.target.tagName === 'INPUT') {
      this.setState({ radioPriorityFilter: e.target.value });
    }
  };

  //обработчик добавления элемента
  handlerAddTodoItem = () => {
    // откроем сначала popup выбора приоритета
    this.promise = new Promise((res, rej) => {
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
    this.promise.then(this.handlerPriorityValue).then(this.setNewItem);
  };

  // сохраним промис в стейте, чтобы потом его клик разрешил
  handlerPriorityValue = () => {
    return new Promise((res, rej) => {
      this.setState({ resolverPriority: res });
    });
  };

  //обработчик на открытие фильтра
  handlerOpenFilter = () => {
    this.setState({
      isFilterOpen: true,
    });
  };

  setNewItem = priorityValue => {
    // добавим новую туду в массив с туду итемами
    // и отчищаем инпут
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text: this.state.inputValue,
          id: ++this.counter,
          edit: false,
          priority: priorityValue,
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
  //функция которая проверяет соответвует ли item фильтру
  isDislpay = (text, priority) => {
    // может тут case использовать?
    let isTextTrue = text => {
      return text.indexOf(this.state.inputValueFilter) >= 0;
    };
    let isPriorityTrue = priority => {
      return parseInt(priority) === parseInt(this.state.radioPriorityFilter);
    };

    if (this.state.radioPriorityFilter) {
      return isTextTrue(text) && isPriorityTrue(priority);
    } else {
      return isTextTrue(text);
    }
  };

  render() {
    return (
      <Todo
        resolverPriority={this.state.resolverPriority}
        todos={this.state.todos}
        inputValue={this.state.inputValue}
        isDislpay={this.isDislpay}
        isPriporityOpen={this.state.isPriporityOpen}
        isFilterOpen={this.state.isFilterOpen}
        handlerPriorityValue={this.handlerPriorityValue}
        handlerInputTextTodoItem={this.handlerInputTextTodoItem}
        handlerInputValueFilter={this.handlerInputValueFilter}
        handlerRadioPriotityFilter={this.handlerRadioPriotityFilter}
        handlerAddTodoItem={this.handlerAddTodoItem}
        handlerDeleteAndEdit={this.handlerDeleteAndEdit}
        handlerOnBlur={this.handlerOnBlur}
        handlerOpenFilter={this.handlerOpenFilter}
      />
    );
  }
}
