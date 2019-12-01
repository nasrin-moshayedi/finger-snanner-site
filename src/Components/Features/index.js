import React from "react";
import IconList from "../ShareComponent/IconList";
import Grid from "@material-ui/core/Grid";
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import FaceIcon from '@material-ui/icons/Face';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';

const Data = [
    {
        icon: <FingerprintIcon fontSize="large"/>,
        title: "اثر انگشت"
    },
    {
        icon: <FaceIcon fontSize="large"/>,
        title: "اسکن چهره"
    },
    {
        icon: <BatteryFullIcon fontSize="large"/>,
        title: "باطری داخلی"
    },
]

class Features extends React.Component {
    render() {
        return(
            <Grid container justify="center" alignItems="center">
                {Data.map((item, index) => {
                    return (
                        <Grid item lg={2} key={index}>
                            <IconList icon={item.icon} title={item.title}/>
                        </Grid>
                    )
                    })
                }
            </Grid>
        )
    }
}
export default Features