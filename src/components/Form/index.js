import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function Form({ onSubmitForm, inputValue, onChangeInputValue }) {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmitForm();
  };

  const handleOnChange = (event) => {
    // on récupère la valeur de l'input via event.target.value
    onChangeInputValue(event.target.value);
  };

  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        className="form__input"
        value={inputValue}
        onChange={handleOnChange}
      />
    </form>
  );
}

Form.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default Form;
