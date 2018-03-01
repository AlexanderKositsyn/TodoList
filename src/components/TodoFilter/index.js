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
        </div>
      ) : (
        <button>Открыть фильтер</button>
      )}
    </div>
  );
}
