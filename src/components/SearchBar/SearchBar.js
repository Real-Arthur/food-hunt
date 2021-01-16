import React, { useState } from 'react';

function SearchBar(props) {
  const [ingredients, setIngredients] = useState([]);
  const [query, setQuery] = useState('');
  console.log('query', query);
  console.log('ingredients', ingredients);
  const handleIngredients = () => {
    setIngredients([...ingredients, query]);
    setQuery('')
  }

  return (
    <div>
        <input 
            type='text' 
            value={query}
            onChange={event => setQuery(event.target.value)}
        />
        <button onClick={()=> handleIngredients()}>Add Ingredient</button>
        <button>Search</button>
        <ul>
        {ingredients.map((item, i) => {
            return (<li key={i}>{item}</li>)
        })}
        </ul>
    </div>
  );
}

export default SearchBar;
