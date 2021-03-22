import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Counter({ count }) {
  // texte par défaut
  let text = 'Aucune tâche en cours';

  if (count === 1) {
    text = 'Une tâche en cours';
  }
  else if (count > 1) {
    text = `${count} tâches en cours`;
  }

  return (
    <p className="counter">{text}</p>
  );
}

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;
