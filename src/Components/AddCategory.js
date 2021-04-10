import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
       setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories( cats => [ inputValue, ...cats])
            setInputValue('');
        } else {
            console.log('no se agregará nada')
        }
    }

    return (

        <form onSubmit={ handleSubmit }>
            <input 
                placeholder=""
                type= "text"
                value = { inputValue }
                onChange = { handleInputChange }
            />
        </form>

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
