import React, {useState} from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Grow,
    Tab,
    Tabs,
    Typography
} from "@material-ui/core";
import resumeDate from "../../datas/resumeDate";
import {ImEnter} from "react-icons/all";

const Portfolio = ({colors, bgColor}) => {
    const [tabValue, setTabValue] = useState('all');
    const [projectsDialog, setProjectsDialog] = useState(false);


    return (
        <>
            <Grid container className={'section'}>
                <Grid item className={'sectionTitle'}>
                    <span className={bgColor}/>
                    <Typography variant={'h6'} className={'typography'}>Portfolio</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Tabs
                        value={tabValue}
                        indicatorColor={'secondary'}
                        className={'custom_tabs'}
                        onChange={(e, newValue)=>setTabValue(newValue)}>
                        <Tab
                            label={'all'}
                            value={'all'}
                            className={tabValue === 'all' ? `customTabItem ${colors}` : 'customTabItem'}
                        />

                        {[...new Set(resumeDate.portfolio.map(item => item.tag))].map((tag, index) => (
                            <Tab
                                key={index}
                                label={tag}
                                value={tag}
                                className={
                                    tabValue === tag ?
                                        `customTabItem ${colors}` :
                                        'customTabItem'
                                }
                            />
                        ))}
                    </Tabs>
                </Grid>

                <Grid item xs={12} className={'pt-3'}>
                    <Grid container spacing={2}>
                        {resumeDate.portfolio.map((projects, index) => (
                            <>
                                {tabValue === projects.tag || tabValue === 'all' ? (
                                    <Grid item xs={12} sm={6} md={4} key={index}>
                                        <Grow in={true} timeout={1000}>
                                            <Card className={'customCard'} onClick={() => setProjectsDialog(projects)}>
                                                <CardMedia image={projects.screenImg} title={projects.title} className={'cardMedia-img'}/>
                                                <CardContent>
                                                    <Typography className={'customCardTitle'}>{projects.title}</Typography>
                                                    <Typography variant={'body2'} className={'customCardDescription'}>{projects.description}</Typography>
                                                </CardContent>
                                            </Card>
                                        </Grow>

                                    </Grid>
                                ) : null}
                            </>
                        ))}
                    </Grid>
                </Grid>
                <Dialog open={projectsDialog} onClose={() => setProjectsDialog(false)}>
                    <DialogTitle onClose={() => setProjectsDialog(false)}>{projectsDialog.title}</DialogTitle>
                    <img src={projectsDialog.screenImg} alt={''} />
                    <DialogContent>{projectsDialog.description}</DialogContent>
                    <DialogActions>
                        {projectsDialog.url !== '' ? (
                            <a href={projectsDialog.url} target={'_blank'} rel="noreferrer" >Visit the site <ImEnter/></a>
                        ) : 'Coming soon...'}
                    </DialogActions>
                </Dialog>
            </Grid>
        </>
    );
};

export default Portfolio;
