import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class NeedHelp extends React.Component{
    render() {
        return(
            <Grid container justify="center">
                <Grid item lg={11} className="white-box">
                    <Typography variant="h4" align="center" className="blue-text">
                        نیاز به راهنمایی دارید؟
                    </Typography>
                    <Typography variant="body1" align="center" className="margi">
                        گروه تایگر همواره آماده کمک کردن و افزودن دانش افراد از طریق دادن اطلاعات دقیق و درست به آن ها است
                        <br/>
                        همچنین می توانید با زدن دکمه پایین از طریق نرم افزار مشاوره بگیرید
                    </Typography>
                    <div className="center-text">
                        <Button className="more-info-btn">
                            نرم افزار مشاوره رایگان
                        </Button>
                    </div>
                    <Typography variant="h5" align="center" className="green-text margi">
                        با شماره 02141526000 تماس بگیرید
                    </Typography>
                    <Typography variant="body1" align="center" className="margi">
                       در ساعات اداری پاسخگوی شما هستیم
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default NeedHelp;