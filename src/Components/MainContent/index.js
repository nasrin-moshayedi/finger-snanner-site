import React from "react";
import Grid from "@material-ui/core/Grid";
import scannerIcon from "./../../Images/scanner.png";
import Typography from "@material-ui/core/Typography";

class MainContent extends React.Component{
    render() {
        return(
            <Grid container justify="center" alignItems="center" style={{margin: "50px auto"}}>
                <Grid item lg={4} style={{textAlign: "center"}}>
                    <img src={scannerIcon} width={300} />
                </Grid>
                <Grid item lg={7} style={{padding: 32}}>
                    <Typography variant="h5" style={{paddingBottom: 32}}>
                        دستگاه اثر انگشت آرین (T-338321)
                    </Typography>
                    <Typography variant="subtitle1">
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

export default MainContent;