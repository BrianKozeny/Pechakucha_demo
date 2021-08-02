import React from "react";
import Axios from 'axios'; 

const GenerateJokeButton = (props) => {
    const getJoke = () => {
        Axios.get('https://v2.jokeapi.dev/joke/'+props.category+'?blacklistFlags=nsfw,religious,political,racist,sexist,explicit').then(
            (response) => {
                props.handleGenerateJoke(response.data);
            }
        );
    };

    const isDisabled = props.category === null;

    return (
            <button disabled={isDisabled} onClick={getJoke} className="btn btn-primary btn-sm">Generate Joke</button>
    );
}

export default GenerateJokeButton;
