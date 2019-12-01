import React, {Component} from "react";
import Menu from "../Menu";
import MainContent from "../MainContent";
import Features from "../Features";
import WhyThisDevice from "../WhyThisDevice";
import SomeFeatureList from "../SomeFeatureList";
import Tiger from "../Tiger";
import ThisDeviceFor from "../ThisDeviceFor";
import NeedHelp from "../NeedHelp";

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
                <ThisDeviceFor/>
                <NeedHelp/>
            </div>
        )
    }
}

export default Home;