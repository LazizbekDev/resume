import React from 'react';
import {Typography} from "@material-ui/core";
import './Footer.scss'

const MyComponent = ({colors}) => {
    return (
        <footer className={'footer'}>
            <div className={'footer_left'}>
                <Typography className={'footer_name'} variant={'button'}> &copy; {new Date().getFullYear()} Developed By <a
                    href={'mailto:dev.iproger@gmail.com'}
                    target={'_blank'} rel={'noreferrer'}
                    className={colors}
                >Lazizbek</a></Typography>
            </div>

            <div className={'footer_right'}>
                <Typography
                    variant={'button'}
                    className={'footerCopyRight'}
                >
                    &copy; 2017 Designed By <a
                        href={'https://dribbble.com/tavonline'}
                        target={'_blank'}
                        className={colors}
                        rel={'noreferrer'}>Tavonline</a>
                </Typography>
            </div>
        </footer>
    );
};

export default MyComponent;
