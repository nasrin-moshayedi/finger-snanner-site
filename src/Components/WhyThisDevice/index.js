import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ContentHeader from "../ShareComponent/ContentHeader";

class WhyThisDevice extends React.Component{
    render() {
        return(
            <Grid container justify="center">
                <ContentHeader title="چرا باید از این دستگاه استفاده کنیم؟"/>
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
            </Grid>
        )
    }
}

export default WhyThisDevice;