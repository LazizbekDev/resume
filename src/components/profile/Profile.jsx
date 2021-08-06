import React from 'react';
import Button from "../button/Button";
import profilePic from '../../images/profile.jpg'
import MyInfo from "../../datas/resumeDate";
import {TimelineContent, TimelineItem} from "@material-ui/lab";
import {CloudDownloadRounded} from "@material-ui/icons";
import TimeLine, {CustomLine} from "../timeLine/TimeLine";
import {Typography} from "@material-ui/core";
import './Profile.scss'
import {ImInfo} from "react-icons/all";
import Resume from '../../datas/Resume.pdf'


const Profile = ({bgColor}) => {
    const CustomTimeLineItem = ({title, link, text}) => (
        <TimelineItem>
            <CustomLine bgColor={bgColor}/>

            <TimelineContent>
                {link ? (
                    <Typography variant={'button'} className={'local-space'}>
                        <b>{title} </b><a href={link} target={'_blank'} rel="noreferrer"> {text}</a>
                    </Typography>
                ) : (
                    <Typography variant={'button'} className={'local-space'}><b>{title}</b> {text}</Typography>
                )}
            </TimelineContent>
        </TimelineItem>
    )
    return (
        <div className={'profile container_shadow'}>
            <div className={'profile_name'}>
                <Typography className={'name'}>{MyInfo.name}</Typography>
                <Typography className={'job'}>{MyInfo.title}</Typography>
            </div>

            <div className={'profile_image'}>
                <img src={profilePic} alt={'alt'}/>
            </div>

            <div className={'profile_information'}>
                <TimeLine
                    bgColor={bgColor}
                    icon={<ImInfo/>}
                >
                    <CustomTimeLineItem title={'Name'} text={MyInfo.name}/>
                    <CustomTimeLineItem title={'Birthday'} text={MyInfo.birthday}/>
                    <CustomTimeLineItem title={MyInfo.socials.gitHub.icon} text={MyInfo.socials.gitHub.title} link={MyInfo.socials.gitHub.url}/>
                    <CustomTimeLineItem title={'Email'} text={MyInfo.email} link={`mailto:${MyInfo.email}`}/>
                </TimeLine>
                <br/>
                <div className={'width'}>
                    <a download href={Resume}>
                        <Button className={'center'}>Download Resume <CloudDownloadRounded className={'downloadIcon'}/></Button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile;