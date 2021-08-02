import React from "react";
import Axios from 'axios'; 

const JokeDisplay = (props) => {
    
    const fetchedJoke = props.joke
    const single = fetchedJoke && props.joke.type == "single";

    if (!fetchedJoke) {
        return (
            <></>
        );
    } else if (single) {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-12">
                    <b>Joke:</b> { props.joke ? props.joke.joke : null }
                </div>
            </div>
        );
    } else {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-12">
                    <b>Setup:</b> { props.joke ? props.joke.setup : null }
                </div>
                <div className="col-md-12">
                    <b>Punchline:</b> { props.joke ? props.joke.delivery : null }
                </div>
            </div>
        );
    }
}

export default JokeDisplay;
