import React, {Component} from "react";
import TopMenu from "../Menu/TopMenu";
import MainMenu from "./MainMenu";

class Menu extends Component{
    render() {
        return (
            <div>
                <TopMenu/>
                <MainMenu/>
            </div>
        )
    }
}

export default Menu;