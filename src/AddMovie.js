import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext';


const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const handelNameChange = (e) => {
        setName(e.target.value);
        
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }
    const addMovie = (e) => {
        e.preventDefault();
        setMovies(() => [...movies, {name, price}]);
        setName('');
        setPrice('');
    }
    return (
        <form onSubmit={addMovie}>
            <input 
                type="text" 
                name="name" 
                value={name} 
                onChange={handelNameChange}></input>
            <input 
                type ="text" 
                name="price" 
                value={price} 
                onChange={handlePriceChange}></input>
            <button>Submit</button>
        </form>
    )
}

export default AddMovie;