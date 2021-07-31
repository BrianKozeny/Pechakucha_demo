import React, { Component } from "react";

class Navbar extends Component {
    state = {

    };

    render() {
        return (
         <React.Fragment>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid justify-content-center">
                    <a className="navbar-brand" href="#">Fact Generator</a>
                </div>
            </nav>
         </React.Fragment>
        );
    }
}

export default Navbar;
