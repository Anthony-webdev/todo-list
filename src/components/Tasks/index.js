import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

import './style.scss';

function Tasks({ tasks, onClickTask }) {
  const tasksList = tasks.map((task) => (
    <Task
      key={task.id}
      {...task}
      onChangeTaskDone={onClickTask}
    />
  ));

  return (
    <ul className="tasks">
      {tasksList}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onClickTask: PropTypes.func.isRequired,
};

export default Tasks;
