import React, { useEffect, useState } from 'react';
import {
    getConcerns
} from '../../services/getData'
import { concernsCopy } from '../../lib/copy'
import './BiggestConcerns.scss';
import BarChart from '../../components/BarChart/BarChart';

const BiggestConcerns = () => {
    const [concerns, setConcerns] = useState([])

    useEffect(() => {
        getConcerns().then(res => setConcerns(res))

    }, [setConcerns])

    return (
        <div className='BiggestConcerns'>
            <h1>{concernsCopy[0]}</h1>
            <div className='content'>
                <div className='column'>
                    <div className='title'>
                        <div className='bold'><span className='highlighted'>WHAT DO WE DO?</span></div>
                        <div className='body'>
                            {concernsCopy[1]}<br /><br />
                            {concernsCopy[2]}<br /><br />
                        </div>
                    </div>
                </div>
                <div className='column big'>
                    {concerns && concerns.length > 0 && <BarChart data={concerns} key={'what'} format={'%'} title={'% of responses'} marginBottom={130} marginRight={90}/>}
                </div>
            </div>
        </div>
    )
}

export default BiggestConcerns;
