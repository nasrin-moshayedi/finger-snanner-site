import React, {Component} from "react";
import Menu from "../Menu";
import MainContent from "../MainContent";

class Home extends Component{
    render() {
        return (
            <div>
                <Menu/>
                <MainContent/>
            </div>
        )
    }
}

export default Home;