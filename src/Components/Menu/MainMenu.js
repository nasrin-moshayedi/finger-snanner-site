import React from "react";
import Grid from "@material-ui/core/Grid";
import Logo from "./../../Images/logo.png";
import LanguageIcon from '@material-ui/icons/Language';

const MenuList = [
    {
        title: "دستگاه اثر انگشت آرین(آ-33333)"
    },
    {
        title: "چرا این محصول؟"
    },
    {
        title: "نرم افزار تایگر"
    },
    {
        title: "این محصول برای کیست؟"
    },
];

class MainMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Grid container justify="space-around" alignItems="center" className="main-menu">
                <Grid item xs={6}>
                    <Grid container justify="space-around" alignItems="center">
                        {MenuList.map((item, index) => {
                            return (
                                <Grid item lg={3} xs={2} key={index}>
                                    {item.title}
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container justify="flex-end" alignItems="center">
                        <Grid item lg={2} style={{display: "flex", alignItems: "center"}} >
                            دریافت کاتالوگ
                        </Grid>
                        <Grid item lg={3} className="request-btn">
                            درخواست خرید
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default MainMenu;