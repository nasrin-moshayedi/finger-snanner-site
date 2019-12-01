import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ContentList from "../ShareComponent/ContentList";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import TwitterIcon from '@material-ui/icons/Twitter';
import ToysIcon from '@material-ui/icons/Toys';

class Footer extends React.Component{
    render() {
        return(
            <Grid container justify="space-between" className="footer">
                <Grid item lg={2} className="footer-logo"/>
                <Grid item lg={10}>
                    <Grid container justify="space-around" className="">

                        <Grid item lg={4}>
                            <Typography variant="h6" className="footer-title">
                                دستگاه های اداری تایگر
                            </Typography>
                            <Typography variant="overline" style={{fontSize: 14}}>
                                این دستگاه از جدیدیترین و پیشرفته ترین تکنولوژی ها برای شناسایی اثر انگشت برا خوردار است.
                                این دستگاه از جدیدیترین و پیشرفته ترین تکنولوژی ها برای شناسایی اثر انگشت برا خوردار است.
                                این دستگاه از جدیدیترین و پیشرفته ترین تکنولوژی ها برای شناسایی اثر انگشت برا خوردار است.
                            </Typography>

                        </Grid>
                        <Grid item lg={2}>
                            <Typography variant="h6" className="footer-title">
                                دستگاه های اداری تایگر
                            </Typography>
                            <Grid container justify="flex-start" className="">

                                {[0,1,2,3,4,5].flatMap((item, index) => {
                                    return(
                                        <Grid item lg={12} style={{padding: "10px 0"}} key={index}>
                                            <ContentList title="دریاره ما"/>
                                        </Grid>
                                    )
                                })
                                }
                            </Grid>
                        </Grid>
                        <Grid item lg={3}>
                            <Typography variant="h6" className="footer-title">
                                دستگاه های اداری تایگر
                            </Typography>

                            <Typography variant="overline" style={{display:"block"}}>
                                <LocationOnIcon style={{fontSize: 16, marginLeft: 5}}/>
                                آدرس دفتر مرکزی
                                <br/>
                                تهران-حیابان میرزای شیرازی-خیابان هفتم-پلاک 28
                            </Typography>
                            <Typography variant="overline">
                                <PhoneEnabledIcon style={{fontSize: 16, marginLeft: 5}}/>
                                شماره تماس با ما 41536000-021
                            </Typography>
                            <Typography variant="h6" className="footer-title">
                                ما را در شبکه های اجتماعی دنبال کنید
                            </Typography>
                            <div >
                                <TelegramIcon className="social-networks"/>
                                <InstagramIcon className="social-networks"/>
                                <TwitterIcon className="social-networks"/>
                                <ToysIcon className="social-networks"/>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default Footer;