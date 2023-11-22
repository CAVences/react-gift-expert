import { useState } from "react"
import PropTypes from "prop-types";

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <div>
        <form onSubmit={onSubmit} aria-label="form">
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={onInputChange}
            />
        </form>
    </div>
  )
}


AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
