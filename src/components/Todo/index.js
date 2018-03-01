import classNames from './index.css';

import React from 'react';

import List from '../List';
import TodoHeader from '../TodoHeader';

export default function Todo(props) {
  return (
    <div className={classNames.todo}>
      <TodoHeader
        inputValue={props.inputValue}
        isPriporityOpen={props.isPriporityOpen}
        handlerInputTextTodoItem={props.handlerInputTextTodoItem}
        handlerAddTodoItem={props.handlerAddTodoItem}
        handlerPriorityValue={props.handlerPriorityValue}
      />
      <List
        items={props.todos}
        handlerDeleteAndEdit={props.handlerDeleteAndEdit}
        handlerOnBlur={props.handlerOnBlur}
      />
    </div>
  );
}
