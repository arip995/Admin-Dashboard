import React from 'react';

import { ChartsHeader, Stacked as StackedChart } from '../../components';

const Stacked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <div className='mb-10'>
        <p className='text-3xl dark:text-gray-200 font-extrabold tracking-tight text-slate-900'>Stacked Chart</p>
      </div>
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
);

export default Stacked;