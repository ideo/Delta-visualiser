import React from 'react';
import './TwoColumnBlock.scss';

const TwoColumnBlock = ({ column1, column2, img1, img2 }) => {

    return (
        <div className='TwoColumnBlock'>
            <div className='column'>
                {/* <img src={img1} alt='img' /> */}
                <div className='header'>
                    {column1.title}
                </div>
                <div className='fact'>
                    {column1.body}
                </div>
               

            </div>

            <div className='column'>
                {/* <img src={img2} alt='img' /> */}
                <div className='header'>
                    {column2.title}
                </div>
                <div className='fact'>
                    {column2.body}
                </div>
                

            </div>
        </div>
    )
}

export default TwoColumnBlock;
