import React, { useEffect, useState } from 'react';
import { ResponsiveBubble } from '@nivo/circle-packing'
import './BubbleChart.scss';

const BubbleChart = ({root}) => {
  return (
    <div className="BubbleChart">
      <ResponsiveBubble
        root={root}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        identity="name"
        value="loc"
        colors={{ scheme: 'nivo' }}
        padding={6}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
        borderWidth={2}
        borderColor={{ from: 'color' }}
        defs={[
            {
                id: 'lines',
                type: 'patternLines',
                background: 'none',
                color: 'inherit',
                rotation: -45,
                lineWidth: 5,
                spacing: 8
            }
        ]}
        fill={[ { match: { depth: 1 }, id: 'lines' } ]}
        animate={true}
        motionStiffness={90}
        motionDamping={12}
    />
    </div>
  );
}

export default BubbleChart;
