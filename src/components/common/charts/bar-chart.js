import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer
} from 'recharts';
import propTypes from 'prop-types';

const CustomizedAxisTick = ({x, y, payload}) => (
  <g transform={`translate(${x},${y})`}>
    <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-60)">{payload.value}</text>
  </g>
);

const Component = ({data}) => (
  <ResponsiveContainer width="90%" height={300}>
    <BarChart
      height={300}
      data={data}
    >
      <XAxis dataKey="name" interval={0} height={100} tick={<CustomizedAxisTick />} />
      <YAxis />
      <Bar dataKey="value" fill="#12A7E2" />
    </BarChart>
  </ResponsiveContainer>
);

Component.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired
    })
  ).isRequired
};

export default Component;
