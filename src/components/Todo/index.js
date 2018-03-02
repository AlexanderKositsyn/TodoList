import classNames from './index.css';

import React from 'react';

import List from '../List';
import TodoHeader from '../TodoHeader';
import TodoFilter from '../TodoFilter';

export default function Todo(props) {
  return (
    <div className={classNames.todo}>
      <TodoHeader
        resolverPriority={props.resolverPriority}
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
        isDislpay={props.isDislpay}
      />
      <TodoFilter
        isFilterOpen={props.isFilterOpen}
        handlerOpenFilter={props.handlerOpenFilter}
        handlerInputValueFilter={props.handlerInputValueFilter}
        handlerRadioPriotityFilter={props.handlerRadioPriotityFilter}
      />
    </div>
  );
}
