import React from 'react';
import Axios from 'axios';

function App() {
    const getJoke = () => {
        Axios.get('https://v2.jokeapi.dev/categories').then(
            (response) => {
                console.log(response);
            }
        );
    };
    return (
        <div>
            <button onClick={getJoke}>Get Joke</button>
        </div>
    );
}

export default App;


