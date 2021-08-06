import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import TimeLine, {CustomLine} from "../../components/timeLine/TimeLine";
import {School, Work} from "@material-ui/icons";
import {TimelineContent, TimelineItem} from "@material-ui/lab";
import resumeDate from "../../datas/resumeDate";

const Resume = ({bgColor}) => {
    return (
        <>
            <Grid container>
                <Grid item className={'sectionTitle'}>
                    <span className={bgColor}/>
                    <Typography variant={'h6'} className={'typography'}>Resume</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Grid container>
                        <Grid item sm={12} md={6}>
                            <TimeLine bgColor={bgColor} icon={<Work/>} title={'Work experience'}>
                                {resumeDate.experience.map((keys, index) => (
                                    <TimelineItem key={index}>
                                        <CustomLine bgColor={bgColor}/>

                                        <TimelineContent>
                                            <Typography
                                                variant={'button'}
                                                paragraph={true}
                                                className={'work-space'}>
                                                <b>{keys.title}</b>
                                            </Typography>

                                            <Typography variant={'overline'}>{keys.date}</Typography>
                                            <Typography variant={'body2'} className={'desc'}>{keys.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </TimeLine>
                        </Grid>

                        <Grid item sm={12} md={6}>
                            <TimeLine bgColor={bgColor} icon={<School/>} title={'Education history'}>
                                {resumeDate.educate.map((keys, index) => (
                                    <TimelineItem key={index}>
                                        <CustomLine bgColor={bgColor}/>

                                        <TimelineContent>
                                            <Typography
                                                variant={'button'}
                                                paragraph={true}
                                                className={'work-space'}>
                                                <b>{keys.title}</b>
                                            </Typography>

                                            <Typography variant={'overline'}>{keys.date}</Typography>
                                            <Typography variant={'body2'} className={'desc'}>{keys.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </TimeLine>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    );
};

export default Resume;
