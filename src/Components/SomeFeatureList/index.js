import React from "react";
import Grid from "@material-ui/core/Grid";
import ContentHeader from "../ShareComponent/ContentHeader";
import ContentList from "../ShareComponent/ContentList";

// const Data = [
//     {
//         title: "این دستگاه از جدیدیترین و پیشرفته ترین تکنولوژی ها برای شناسایی اثر انگشت برا خوردار است."
//     },
// ]
class SomeFeatureList extends React.Component{
    render() {
        return(
            <div>
                <ContentHeader title="برخی از ویژگی های این دستگاه"/>
                <Grid container justify="center" alignItems="center" style={{}}>
                    <Grid item lg={9}>
                        <Grid container justify="flex-start" alignItems="center" >
                            {[0,1,2,3,4,5,6,7,8,9,10].flatMap((item, index) => {
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
            </div>
        )
    }
}
export default SomeFeatureList;