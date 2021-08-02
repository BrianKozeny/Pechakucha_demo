import React, { Component, useState, useEffect} from "react";
import '../css/categories.css';
import Axios from 'axios'; 
import app from '../App.js';

const Categories = (props) => {

    const container = React.createRef();
    const [state, setState] = useState({ open: false, categoryOptions: []});

    const getJokeCategories = () => {
        Axios.get('https://v2.jokeapi.dev/categories').then(
            (response) => {
                setState((prevState) => {
                    const newState = {
                        ...prevState,
                        categoryOptions: response.data.categories.filter(category => category.toUpperCase() != 'DARK')
                    }
                    return newState;
                });
            }
        );
    };
    useEffect(() => {
        getJokeCategories();
    }, [])

    useEffect(function setupListener() {
        const handleClickOutside = (event) => {
            if (
                container.current &&
                !container.current.contains(event.target)
            ) {
                setState((prevState) => {
                    const newState = {
                        ...prevState,
                        open: false, 
                    }
                    return newState;
                });
            }
        };

        window.addEventListener('mousedown', handleClickOutside)

        return function cleanupListener() {
            window.removeEventListener('mousedown', handleClickOutside)
        }
    });


    const handleClick = () => {
        setState((prevState) => {
            const newState = {
                ...prevState,
                open: !state.open, 
            }
            return newState;
        });
    };

    const categoryLabel = props.category ? props.category : "Categories";

    const handleCategoryButtonClick = (event) => {
        setState((prevState) => {
            const newState = {
                ...prevState,
                open: false, 
            }
            return newState;
        });
        props.handleCategorySelect(event);
    }

    return (
        <div className="container" ref={container}>
          <div className="dropdown"> 
            <button onClick={handleClick} className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                {categoryLabel}
            </button>
            {state.open && (
                <div className="dropdown">
                  <ul>
                      <div>
                          { state.categoryOptions.map(data => 
                              <li key={data}>
                                  <button value={data} onClick={handleCategoryButtonClick} key={data}>{ data }</button>
                              </li>
                            ) 
                          }
                      </div>
                  </ul>
                </div>
              )}
          </div>
        </div>
    );
}

export default Categories;
