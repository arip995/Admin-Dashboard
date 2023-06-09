import React from 'react';

import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../components';

const Pie = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <div className='mb-10'>
        <p className='text-3xl dark:text-gray-200 font-extrabold tracking-tight text-slate-900'>Pie Chart</p>
      </div>
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="600px" />
    </div>
  </div>
);

export default Pie;