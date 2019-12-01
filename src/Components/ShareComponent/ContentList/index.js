import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

class ContentList extends React.Component{
    render() {
        return(
            <Grid container alignItems="center">
                <FiberManualRecordIcon fontSize="inherit" style={{margin: "0 10px"}}/>
                {this.props.title}
            </Grid>
        )
    }
}

export default ContentList;