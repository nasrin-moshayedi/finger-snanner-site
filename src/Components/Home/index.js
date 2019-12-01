import React, {Component} from "react";
import Menu from "../Menu";
import MainContent from "../MainContent";
import Features from "../Features";
import WhyThisDevice from "../WhyThisDevice";

class Home extends Component{
    render() {
        return (
            <div>
                <Menu/>
                <MainContent/>
                <Features/>
                <WhyThisDevice/>
            </div>
        )
    }
}

export default Home;