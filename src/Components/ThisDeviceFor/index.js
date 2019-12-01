import React from "react";
import ContentHeader from "../ShareComponent/ContentHeader";
import LocationCityIcon from '@material-ui/icons/LocationCity';
import BusinessIcon from '@material-ui/icons/Business';
import IconList from "../ShareComponent/IconList";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Data = [
    {
        icon: <LocationCityIcon fontSize="large"/>,
        title:"کارخانه های بزرگ"
    },
    {
        icon: <BusinessIcon fontSize="large"/>,
        title: "شرکت هایی با بیش از 500 کارمند"
    },

];

class ThisDeviceFor extends React.Component{
    render() {
        return(
            <Grid container justify="center">
                <ContentHeader title="چه کسانی باید از این استفاده کنند"/>
                <Grid item lg={8} style={{marginBottom: 32}}>
                    <Typography variant="h6">
                        این دستگاه از جدیدیترین و پیشرفته ترین تکنولوژی ها برای شناسایی اثر انگشت برا خوردار است.
                        این دستگاه از جدیدیترین و پیشرفته ترین تکنولوژی ها برای شناسایی اثر انگشت برا خوردار است.
                        این دستگاه از جدیدیترین و پیشرفته ترین تکنولوژی ها برای شناسایی اثر انگشت برا خوردار است.
                        این دستگاه از جدیدیترین و پیشرفته ترین تکنولوژی ها برای شناسایی اثر انگشت برا خوردار است.
                        این دستگاه از جدیدیترین و پیشرفته ترین تکنولوژی ها برای شناسایی اثر انگشت برا خوردار است.
                        این دستگاه از جدیدیترین و پیشرفته ترین تکنولوژی ها برای شناسایی اثر انگشت برا خوردار است.
                    </Typography>
                </Grid>
                <Grid item lg={8} style={{marginBottom: 32}}>
                    <Grid container justify="center">

                        {Data.map((item, index) => {
                            return (
                                <Grid item lg={3} key={index}>
                                    <IconList icon={item.icon} title={item.title}/>
                                </Grid>
                            )
                        })
                    }
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default ThisDeviceFor;