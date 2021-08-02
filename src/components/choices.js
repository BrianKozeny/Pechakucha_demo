import React, { useState } from 'react';
import Axios from 'axios';

function App() {

    const [joke, setJoke] = useState("");

    const getJoke = () => {
        Axios.get('https://v2.jokeapi.dev/categories').then(
            (response) => {
                console.log(response);
                setJoke(response.data.categories)
            }
        );
    };
    return (
        <div>
            {joke}
        </div>
    );
}

export default App;
