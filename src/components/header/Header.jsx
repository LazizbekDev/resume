import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from "react-bootstrap";
import { EmailSharp, HomeRounded} from "@material-ui/icons";
import MyInfo from '../../datas/resumeDate'
import Button from "../button/Button";
import React from "react";
import './Header.scss'

const Header = ({GoHome, GoResume, GoPortfolio, GoContact, bgColor='main'}) => {
    return (
        <Navbar bg="light" expand="lg" className={'header'}>
            <Navbar.Brand className={`home ${bgColor}`} onClick={GoHome}>
                <HomeRounded/>
            </Navbar.Brand>

            <Navbar.Toggle/>

            <Navbar.Collapse>
                <Nav className={'LeftSide'}>
                    <span
                        onClick={GoResume}
                        className={`nav-link pointer`}
                    >
                        Resume
                    </span>
                    <span
                        onClick={GoPortfolio}
                        className={`nav-link pointer`}
                    >
                        Portfolio
                    </span>
                    <span
                        onClick={GoContact}
                        className={`nav-link pointer`}
                    >
                        Contact
                    </span>
                </Nav>

                <div className={'rightSide'}>
                    {Object.keys(MyInfo.socials).map((key, index) => (
                        <a href={MyInfo.socials[key].url} className={'nav-link nopadding'} key={index}>{MyInfo.socials[key].icon}</a>
                    ))}
                    <Button className={'center'} bgColor={bgColor} go={`mailto:${MyInfo.email}`}>Hire Me <EmailSharp className={'downloadIcon'}/> </Button>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
