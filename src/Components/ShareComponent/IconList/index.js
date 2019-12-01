import React from "react";
import Typography from "@material-ui/core/Typography";

class IconList extends React.Component{
    render() {
        return(
            <div style={{textAlign:"center"}}>
                <div style={{marginBottom: 10}}>
                    {this.props.icon}
                </div>
                <Typography variant="h6">
                    {this.props.title}
                </Typography>
            </div>
        )
    }
}

export default IconList;