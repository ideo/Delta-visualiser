import React, { useEffect, useState } from 'react';
import {
    getWorkingWell
} from '../../services/getData'
import { workingWellCopy } from '../../lib/copy'
import './WorkingWell.scss';
import BarChart from '../../components/BarChart/BarChart';

const WorkingWell = () => {
    const [workingWell, setWorkingWell] = useState([])

    useEffect(() => {
        getWorkingWell().then(res => setWorkingWell(res))

    }, [setWorkingWell])

    const renderQuote = (quote, name) => {
        return (
            <div className='item'>
                <div className='quote'>
                    {quote}
                </div>
                <div className='name'>
                    {name}
                </div>
            </div>
        )
    }

    const renderQuotes = () => {
        return (
            <div className='quotes'>
                {workingWellCopy[3].map(item => {
                    return renderQuote(item.quote, item.name)
                })}
            </div>
        )
    }
    return (
        <div className='WorkingWell'>
            <h1>{workingWellCopy[0]}</h1>
            <div className='content'>
                <div className='column'>
                    <div className='title'>
                        <div className='bold'><span className='highlighted'>WHAT DO WE DO?</span></div>
                        <div className='body'>
                            {workingWellCopy[1]}<br /><br />
                            {workingWellCopy[2]}<br /><br />
                        </div>
                    </div>
                </div>
                <div className='column big'>
                    {workingWell && workingWell.length > 0 && <BarChart data={workingWell} format={'%'} title={'% of responses'} marginBottom={130} marginRight={120} />}
                </div>
            </div>
            {renderQuotes()}
            {/* <TwoColumnBlock column1={accessTools[0]} column2={accessTools[1]} img1={internet} img2={chairs}/> */}
        </div>
    )
}

export default WorkingWell;
