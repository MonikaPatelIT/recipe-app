import React from 'react';

const Form = props =>(
    <form onSubmit={props.getRecipe} style={{marginBottom:"2em"}}>
        <input className='form__input' type="text" name="recipeName" autoFocus={true} />
        <button type="submit" className='form__button'>Search</button>
    </form>
);

export default Form;