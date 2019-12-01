import React, {Component} from "react";
import Menu from "../Menu";
import MainContent from "../MainContent";
import Features from "../Features";
import WhyThisDevice from "../WhyThisDevice";
import SomeFeatureList from "../SomeFeatureList";

class Home extends Component{
    render() {
        return (
            <div>
                <Menu/>
                <MainContent/>
                <Features/>
                <WhyThisDevice/>
                <SomeFeatureList/>
            </div>
        )
    }
}

export default Home;