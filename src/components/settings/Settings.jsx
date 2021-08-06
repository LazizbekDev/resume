import React, {useState} from 'react';
import {Paper, Typography} from "@material-ui/core";
import {AiFillSetting} from "react-icons/all";

const Settings = ({main, primary, red, pink, cyan, teal, green, crimson, gray}) => {
    const [toLeft, setToLeft] = useState('noWhere');

    const handler = () => {setToLeft(toLeft === 'toLeft'?'noWhere':'toLeft')}

    return (
        <div className={'d-flex settings'}>
            <div className={'position-relative'}>
                <Paper elevation={3} spacing={3} className={`${toLeft} shouldName`}>
                    <Typography variant={'button'}>Colors</Typography>
                    <hr/>
                    <div className={'color-block'}>
                        <input type={'submit'} onClick={main} value={''} className={'temp temp1'}/>
                        <input type={'submit'} onClick={primary} value={''} className={'temp temp2'}/>
                        <input type={'submit'} onClick={red} value={''} className={'temp temp3'}/>
                        <input type={'submit'} onClick={pink} value={''} className={'temp temp4'}/>
                        <input type={'submit'} onClick={cyan} value={''} className={'temp temp5'}/>
                        <input type={'submit'} onClick={teal} value={''} className={'temp temp6'}/>
                        <input type={'submit'} onClick={green} value={''} className={'temp temp7'}/>
                        <input type={'submit'} onClick={crimson} value={''} className={'temp temp8'}/>
                        <input type={'submit'} onClick={gray} value={''} className={'temp temp9'}/>
                    </div>
                </Paper>
                <Paper
                    elevation={3}
                    className={`settingHandle ${toLeft}`}
                    onClick={handler}
                >
                    <AiFillSetting className={'spinner'}/>
                </Paper>
            </div>
        </div>
    );
};

export default Settings;
