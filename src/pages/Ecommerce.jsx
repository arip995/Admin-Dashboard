import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { earningData, medicalproBranding, recentTransactions, weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import product9 from '../data/product9.jpg';

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-100 first-letter:h-44 rounded-xl w-full lg:w-80 p-6  bg-no-repeat bg-cover bg-center m-3">
          <div className="flex justify-between items center">
            <div className="">
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$125443.79</p>
            </div>
          </div>
          <div className=" mt-6">
            <Button className="mt-6"
              color="white"
              bgColor="blue"
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 items-center">
          {earningData.map((item) => (
            <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56
            p-4 pt-9 rounded-2xl" key={item.title}>
              <button type='button' style={{color:item.iconColor, backgroundColor: item.iconBg}}
              className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>{item.icon}
              </button>
              <p className='mt-4'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
              </p>
              <div className="text-sm text-gray-400 mt-1">{item.title}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Ecommerce