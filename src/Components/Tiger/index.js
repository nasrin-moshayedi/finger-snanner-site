import React from "react";
import ContentHeader from "../ShareComponent/ContentHeader";
import ContentList from "../ShareComponent/ContentList";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class Tiger extends React.Component{
    render() {
        return(
            <Grid container justify="center">
                <ContentHeader title="نرم افزار حضور و غیاب تایگر"/>
                <Grid item lg={7} style={{marginBottom: 32}}>
                    <Typography variant="h6">
                        این دستگاه از جدیدیترین و پیشرفته ترین تکنولوژی ها برای شناسایی اثر انگشت برا خوردار است.
                        این دستگاه از جدیدیترین و پیشرفته ترین تکنولوژی ها برای شناسایی اثر انگشت برا خوردار است.
                        این دستگاه از جدیدیترین و پیشرفته ترین تکنولوژی ها برای شناسایی اثر انگشت برا خوردار است.
                        این دستگاه از جدیدیترین و پیشرفته ترین تکنولوژی ها برای شناسایی اثر انگشت برا خوردار است.
                        این دستگاه از جدیدیترین و پیشرفته ترین تکنولوژی ها برای شناسایی اثر انگشت برا خوردار است.
                        این دستگاه از جدیدیترین و پیشرفته ترین تکنولوژی ها برای شناسایی اثر انگشت برا خوردار است.
                    </Typography>
                </Grid>
                {/*<Grid container justify="center" alignItems="center" style={{}}>*/}
                    <Grid item lg={9}>
                <Grid container justify="flex-start" alignItems="center" >
                    {[0,1,2,3,4,9,10].flatMap((item, index) => {
                        return(
                            <Grid item lg={6} style={{padding: "10px 15px"}} key={index}>
                                <ContentList title="این دستگاه از جدیدیترین و پیشرفته ترین تکنولوژی ها برای شناسایی اثر انگشت برا خوردار است."/>
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

export default Tiger;