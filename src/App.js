import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import MainFooter from "./components/MainFooter";
import Main from "./components/Main";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Main/>
                <MainFooter/>
            </div>
        );
    }
}

export default App;
