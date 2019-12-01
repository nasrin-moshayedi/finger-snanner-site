import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class ContentHeader extends React.Component{
    render() {
        return(
            <Grid container justify="center" alignItems="center" className="content-header">
                <Grid item lg={3}>
                    <hr className=""/>
                </Grid>
                <Grid item lg={4}>
                    <Typography variant="h4">
                        {this.props.title}
                    </Typography>
                </Grid>
                <Grid item lg={3}>
                    <hr/>
                </Grid>
            </Grid>
        )
    }
}

export default ContentHeader;