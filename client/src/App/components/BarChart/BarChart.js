import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar'
import './BarChart.scss';

const BarChart = ({data, title, marginBottom, marginRight, key}) => {
  return (
    <div className="BarChart">
      <ResponsiveBar
        data={data}
        keys={[ 'value', 'Concern', 'Working well' ]}
        indexBy="label"
        margin={{ top: 50, right: 20, bottom: marginBottom, left: marginRight }}
        padding={0.3}
        // colors={{ scheme: 'pastel2' }}
        colors={"#FFF9C3"}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#3CDE9C',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#F8DD23',
                rotation: -45,
                lineWidth: 5,
                spacing: 10
            },
            {
                id: 'dots2',
                type: 'patternDots',
                background: 'inherit',
                color: '#F8DD23',
                size: 4,
                padding: 1,
                stagger: true
            }
        ]}
        fill={[
            {
                match: {
                    id: 'Concern'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'value'
                },
                id: 'lines'
            }
            ,
            {
                match: {
                    id: 'Working well'
                },
                id: 'dots2'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -30,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: title,
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
    </div>
  );
}

export default BarChart;
