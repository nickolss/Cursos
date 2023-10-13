import './IngredientList.css';
import React from 'react';

function IngredientList(props) {
	const ingredientsListItems = props.ingredients.map((ingredient, index) => {
		return (
			<li key={index} className={ingredient.prepared ? 'prepared' : ''}>
				{ingredient.name}
			</li>
		);
	});

	return(
        <ul>
            {ingredientsListItems}
        </ul>
    )
}

export default IngredientList;
