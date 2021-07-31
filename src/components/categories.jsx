import React, { Component } from "react";

class Categories extends Component {
    constructor(){
        super();
        this.state={
            show: true,
        }
    }

    render() {
        return (
         <React.Fragment>
            <div class="dropdown">
              <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><button class="dropdown-item" type="button">Action</button></li>
                <li><button class="dropdown-item" type="button">Another action</button></li>
                <li><button class="dropdown-item" type="button">Something else here</button></li>
              </ul>
            </div>
         </React.Fragment>
        );
    }
}

export default Categories;
