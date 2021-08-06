import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import './TimeLine.scss'
import {Typography} from "@material-ui/core";

const TimeLine = ({ title, icon, children, bgColor }) => {
    return (
            <Timeline className={'timeline'}>
                <TimelineItem className={'timelineFirstItem'}>
                    <TimelineSeparator>
                        <TimelineDot className={`timelineHeaderDot ${bgColor}`}>
                            {icon}
                        </TimelineDot>
                        <TimelineConnector className={'connecter'} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant={'h6'} className={'timelineHeader'}>
                            {title}
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                {children}

            </Timeline>
    );
};

export const CustomLine = ({bgColor}) => (
    <TimelineSeparator className={'separatorPadding'}>
        <TimelineDot variant={'outlined'} className={`timelineDot ${bgColor}`}/>
        <TimelineConnector />
    </TimelineSeparator>
)

export default TimeLine;
