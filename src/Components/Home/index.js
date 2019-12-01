import React, {Component} from "react";
import Menu from "../Menu";
import MainContent from "../MainContent";
import Features from "../Features";
import WhyThisDevice from "../WhyThisDevice";
import SomeFeatureList from "../SomeFeatureList";
import Tiger from "../Tiger";

class Home extends Component{
    render() {
        return (
            <div>
                <Menu/>
                <MainContent/>
                <Features/>
                <WhyThisDevice/>
                <SomeFeatureList/>
                <Tiger/>
            </div>
        )
    }
}

export default Home;