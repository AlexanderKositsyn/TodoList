import classNames from './index.css';

import React from 'react';

import List from '../List';

export default function Todo(props) {
  return (
    <div className={classNames.todo}>
      <input
        className={classNames.input}
        onChange={props.handlerInputTextTodoItem}
        value={props.inputValue}
        type="text"
      />
      <button className={classNames.button} onClick={props.handlerAddTodoItem}>
        Добавить
      </button>
      <List
        items={props.todos}
        handlerDeleteAndEdit={props.handlerDeleteAndEdit}
        handlerOnBlur={props.handlerOnBlur}
      />
    </div>
  );
}
