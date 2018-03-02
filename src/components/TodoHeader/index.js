import React from 'react';

import classNames from './index.css';

export default function TodoHeader(props) {
  return (
    <div className={classNames.todoHeader}>
      <input
        className={classNames.input}
        onChange={props.handlerInputTextTodoItem}
        value={props.inputValue}
        type="text"
      />
      <button className={classNames.button} onClick={props.handlerAddTodoItem}>
        Добавить
      </button>
      {props.isPriporityOpen ? (
        <div
          className={classNames.popup}
          onClick={e => {
            props.resolverPriority(e.target.value);
          }}
        >
          <div>Выберите приоритет задания</div>
          <label>
            1 <input type="checkbox" value={1} />
          </label>
          <label>
            2 <input type="checkbox" value={2} />
          </label>
          <label>
            3 <input type="checkbox" value={3} />
          </label>
        </div>
      ) : null}
    </div>
  );
}
