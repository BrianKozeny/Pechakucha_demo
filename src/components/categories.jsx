import React, { Component } from "react";
import '../css/categories.css';

class Categories extends Component {
    
    container = React.createRef();
    state = {
        open: false,
    };

    myCategories={
       catArray:["Animals", "Space", "Food"]
   }
    
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClick = () => {
        this.setState((state) => {
            return {
                open: !state.open,
            };
        });
    };

    handleClickOutside = (event) => {
        if (
            this.container.current &&
            !this.container.current.contains(event.target)
        ) {
            this.setState({
                open: false,
            });
        }
    };

    
    render() {
        return (
         <React.Fragment>
            <div className="container" ref={this.container}>
                <div className="dropdown"> 
                  <button onClick={this.handleClick} className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                  </button>
                  {this.state.open && (
                      <div className="dropdown">
                        <ul>

                            <div>
                                    {this.myCategories.catArray.map(data => <li key={data}><button key={data}>{ data }</button></li>)}
                            </div>
                        </ul>
                      </div>
                    )}
                </div>
            </div>
         </React.Fragment>
        );
    }
}

export default Categories;
