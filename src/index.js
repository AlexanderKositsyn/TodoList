import React from 'react';
import ReactDOM from 'react-dom';
import TodoContainer from 'containers/TodoContainer';

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(<TodoContainer />, MOUNT_NODE);
