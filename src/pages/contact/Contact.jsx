import React from 'react';
import {Grid, TextField, Typography} from "@material-ui/core";
import resumeDate from "../../datas/resumeDate";
import Button from "../../components/button/Button";

const Contact = ({bgColor}) => {
    return (
        <>
            <Grid container className={'ContactSection'} spacing={5}>
                <Grid item md={12}>
                    <Grid container>
                        <Grid item className={'sectionTitle'}>
                            <span className={bgColor}/>
                            <Typography variant={'h6'} className={'typography'}>Contact Form</Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} className={'mb-3'}>
                                    <TextField fullWidth={true} name={'name'} label={'name'}/>
                                </Grid>
                                <Grid item xs={12} sm={6} className={'mb-3'}>
                                    <TextField fullWidth={true} name={'email'} label={'email'}/>
                                </Grid>
                                <Grid item xs={12} className={'mb-3'}>
                                    <TextField fullWidth={true} name={'message'} label={'message'} multiline rows={4}/>
                                </Grid>
                                <Grid item xs={12} className={'mb-3'}>
                                    <Button type={'submit'}>
                                        <Typography variant={'button'}>Submit</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid >

                <Grid item md={12}>
                    <Grid container>
                        <Grid item className={'sectionTitle'}>
                            <span className={bgColor}/>
                            <Typography variant={'h6'} className={'typography'}>Contact Information</Typography>
                        </Grid>

                        <Grid item xs={12} >
                            <Grid container spacing={2}>
                                <Grid item xs={12} className={'mt-5'}>
                                    <Typography variant={'button'}><b>Address: </b>{resumeDate.address}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant={'button'}><b>phone number: </b>
                                        <a href={`tel:${resumeDate.number}`}>{resumeDate.number}</a>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant={'button'}><b>phone number: </b>
                                        <a href={`mailto:${resumeDate.email}`}>{resumeDate.email}</a>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant={'button'}><b>Job: </b>{resumeDate.title}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Contact;
