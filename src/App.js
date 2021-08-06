import React, {useState} from 'react';
import './app.scss';
import {Container, Grid} from "@material-ui/core";
import Profile from "./components/profile/Profile";
import Header from "./components/header/Header";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import clickedSound from './datas/click.wav'
import Settings from "./components/settings/Settings";

function App() {
    const [path, setPath] = useState('home');
    const [primary, setPrimary] = useState('main');
    const audio = new Audio(clickedSound)

    const changerMain = () => {setPrimary('main')}
    const changerPrimary = () => {setPrimary('primary')}
    const changerRed = () => {setPrimary('red')}
    const changerPink = () => {setPrimary('pink')}
    const changerCyan = () => {setPrimary('cyan')}
    const changerTeal = () => {setPrimary('teal')}
    const changerGreen = () => {setPrimary('green')}
    const changerCrimson = () => {setPrimary('crimson')}
    const changerGray = () => {setPrimary('gray')}

    const HomeHandler = () => {
        setPath('home')
        audio.currentTime = 0
        audio.play()
        navigator.vibrate(40)
    }
    const ResumeHandler = () => {
        setPath('Resume')
        audio.currentTime = 0
        audio.play()
        navigator.vibrate(40)
    }
    const PortfolioHandler = () => {
        setPath('Portfolio')
        navigator.vibrate(40)
        audio.currentTime = 0
        audio.play()
    }
    const ContactHandler = () => {
        setPath('Contact')
        navigator.vibrate(40)
        audio.currentTime = 0
        audio.play()
    }

    return (
    <Container>
        <Settings
            main={changerMain}
            primary={changerPrimary}
            red={changerRed}
            pink={changerPink}
            cyan={changerCyan}
            teal={changerTeal}
            green={changerGreen}
            crimson={changerCrimson}
            gray={changerGray}
        />

        <Grid container className={'pt'} spacing={2}>
            <Grid item xs={12} md={4} lg={3}>
                <Profile bgColor={primary}/>
            </Grid>
            <Grid item xs>
                <Header
                    GoHome={HomeHandler}
                    GoResume={ResumeHandler}
                    GoPortfolio={PortfolioHandler}
                    GoContact={ContactHandler}
                    bgColor={primary}
                />
                <div className={'main-content'}>
                    {
                        path === 'Resume' ? (<Resume bgColor={primary}/>) :
                        path === 'Portfolio' ? (<Portfolio colors={`${primary}th`} bgColor={primary}/>) :
                        path === 'Contact' ? (<Contact bgColor={primary}/>) :
                        path === 'home' ? <Home bgColor={primary}/> : '404'
                    }
                </div>
                <Footer colors={`${primary}th`}/>
            </Grid>
        </Grid>
    </Container>
  );
}

export default App;
