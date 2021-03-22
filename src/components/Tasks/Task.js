import React from 'react';
import PropTypes from 'prop-types';

function Task({
  done,
  label,
  id,
  onChangeTaskDone,
}) {
  const classnames = done ? 'task task--done' : 'task';

  const handleOnChange = () => {
    onChangeTaskDone(id);
  };

  return (
    <li className={classnames}>
      <input
        checked={done}
        type="checkbox"
        className="task__checkbox"
        id={id}
        onChange={handleOnChange}
      />
      <label
        className="task__label"
        htmlFor={id}
      >
        {label}
      </label>
      {/* <button>supprimer</button> */}
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onChangeTaskDone: PropTypes.func.isRequired,
};

export default Task;
