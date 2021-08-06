import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";
import Notificate from '../../datas/notification.wav'

const MyComponent = ({children ,to, go, type='button', bgColor}) => {
    const audio = new Audio(Notificate)
    const ContactHandler = () => {
        audio.currentTime = 0
        audio.play()
    }

    return (
        <div>
            {to ? (
                <Link to={to}>
                    <Button
                        onClick={ContactHandler}
                        className={`localBtn ${bgColor}`}>
                        {children}
                    </Button>
                </Link>
                ) : go ? (
                <a href={go} target={'_blank'} rel={'noreferrer'}>
                    <Button
                        onClick={ContactHandler}
                        className={`localBtn ${bgColor}`}>
                        {children}
                    </Button>
                </a>
                ) : (
                <Button
                    className={`localBtn ${bgColor}`}
                    onClick={ContactHandler}
                    type={type}>
                    {children}
                </Button>
            )}
        </div>
    );
};

export default MyComponent;
