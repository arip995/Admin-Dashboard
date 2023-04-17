import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';

import { Stacked, Button, SparkLine } from '../components';
import { earningData,SparklineAreaData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className='mt-12'>
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:bg-secondary-dark-bg dark:text-gray-100 first-letter:h-44 rounded-xl w-full lg:w-80 p-6  bg-no-repeat bg-cover bg-center m-3">
          <div className="flex justify-between items center">
            <div className="">
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$12,544,3.79</p>
            </div>
          </div>
          <div className=" mt-6">
            <Button className="mt-6"
              color="white"
              bgColor={currentColor}
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
              <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg }}
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
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white m-3 dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span><GoPrimitiveDot /></span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
                <span><GoPrimitiveDot /></span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div className="">
                <p>
                  <span className='text-3xl font-semibold'>$93,438</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full 
                  text-white bg-green-400 ml-3'>23%</span>
                </p>
                <p className='text-gray-500 mt-1'>Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className='text-3xl font-semibold'>$43,438</span>
                </p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkline"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <Stacked width="320px" height="360px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce