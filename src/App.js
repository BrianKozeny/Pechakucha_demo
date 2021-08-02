import React, { useState } from 'react';
import GenerateJokeButton from './components/generateJokeButton';
import Navbar from './components/navbar';
import Categories from './components/categories';
import JokeDisplay from './components/jokeDisplay';

const App = () => {

    const [state, setState] = useState({ category: null, joke: null });

    const handleCategorySelect = (event) => {
        setState((prevState) => {
            const newState = {
                ...prevState,
                category: event.target.value
            }
            return newState;
        });
    };

    const handleGenerateJoke = (joke) => {
        setState((prevState) => {
            const newState = {
                ...prevState,
                joke: joke
            }
            return newState;
        });
    };

    return (
        <div>
            <Navbar />
            <div className="container p-0 mt-5">
                <div className="row justify-content-center">
                    <div className="col col-3 d-flex align-items-center justify-content-center">
                        <Categories category={state.category} handleCategorySelect={handleCategorySelect} />
                    </div>
                    <div className="col col-3 d-flex align-items-center">
                        <GenerateJokeButton handleGenerateJoke={handleGenerateJoke} category={state.category}/>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <JokeDisplay joke={state.joke} />
            </div>
        </div>
    );
}

export default App;
