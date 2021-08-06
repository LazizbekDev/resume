import React from 'react';
import {Grid, Icon, Paper, Typography} from "@material-ui/core";
import Data from '../../datas/resumeDate'
import './Home.scss'
import resumeDate from "../../datas/resumeDate";
import {TimelineDot} from "@material-ui/lab";

const Home = ({bgColor}) => {
    return (
        <>
            <Grid container className={'section'}>
                <Grid item className={'sectionTitle'}>
                    <span className={bgColor}/>
                    <Typography variant={'h6'} className={'typography'}>About me</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Typography variant={'body2'} className={'aboutMe'}>{Data.about}</Typography>
                </Grid>
            </Grid>
            <Grid container className={'section pb-4 pt-5'}>
                <Grid item className={'sectionTitle'}>
                    <span className={bgColor}/>
                    <Typography variant={'h6'} className={'typography'}>Services</Typography>
                </Grid>

                <Grid item xs={12} >
                    <Grid container spacing={3} justifyContent={'space-around'} className={'pb-45 pt-45'}>
                        {resumeDate.services.map((keys, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index} className={'block mb-2 mt-2'}>
                                <div className={'services'}>
                                    <Icon className={'services_icon'}>{keys.icon}</Icon>
                                    <Typography variant={'h6'}>{keys.title}</Typography>
                                    <Typography variant={'body2'} className={'aboutMe'}>{keys.description}</Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

            </Grid>
            <Grid container className={'section pb-2 mt-5'}>
                <Grid item className={'sectionTitle'}>
                    <span className={bgColor}/>
                    <Typography variant={'h6'} className={'typography'}>Skills</Typography>
                </Grid>

                <Grid
                    container
                    spacing={3}
                    justifyContent={'space-between'}
                    className={'mt-2'}>
                    {resumeDate.skills.map((keys, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Paper elevation={0}>
                                <Typography variant={'h6'} className={'skills_title'}>
                                    {keys.title}
                                </Typography>

                                {keys.description.map((item, index) => (
                                    <Typography variant={"body2"} key={index} className={'flex desc'}>
                                        <TimelineDot variant={'outlined'} className={`line ${bgColor}`}/>
                                        {item}
                                    </Typography>
                                ))}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    );
};

export default Home;
