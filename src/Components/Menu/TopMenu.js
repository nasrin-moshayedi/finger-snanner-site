import React from "react";
import Grid from "@material-ui/core/Grid";
import Logo from "./../../Images/logo.png";
import LanguageIcon from '@material-ui/icons/Language';

const MenuList = [
    {
        title: "محصولات"
    },
    {
        title: "مشاوره خرید"
    },
    {
        title: "دانلودها"
    },
    {
        title: "بلاگ"
    },
];

class TopMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Grid container justify="space-around" alignItems="center" className="top-menu">
                <Grid item xs={6}>
                    <Grid container justify="space-between" alignItems="center">
                        <img src={Logo}/>
                        {MenuList.map((item, index) => {
                            return (
                                <Grid item lg={2} xs={2} key={index}>
                                    {item.title}
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container justify="flex-end" alignItems="center">
                        <Grid item lg={3} className="login-btn">
                            ورودی نمایندگان
                        </Grid>
                        <Grid item lg={2} style={{display: "flex", alignItems: "center"}} >
                            فارسی
                            <LanguageIcon style={{marginRight: 10}}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default TopMenu;