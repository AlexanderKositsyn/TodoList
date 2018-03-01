import React from 'react';

import classNames from './index.css';

export default function TodoFilter(props) {
  return (
    <div className={classNames.filter} onClick={props.handlerOpenFilter}>
      {props.isFilterOpen ? (
        <div>
          <div>Фильтр по тексту</div>
          <input
            type="text"
            value={props.inputValueFilter}
            onChange={props.handlerInputValueFilter}
          />
          <div onClick={props.handlerRadioPriotityFilter}>
            <div>Выберите приоритет задания</div>
            <label>
              1 <input type="radio" name="priority" value={1} />
            </label>
            <label>
              2 <input type="radio" name="priority" value={2} />
            </label>
            <label>
              3 <input type="radio" name="priority" value={3} />
            </label>
          </div>
        </div>
      ) : (
        <button>Открыть фильтер</button>
      )}
    </div>
  );
}
