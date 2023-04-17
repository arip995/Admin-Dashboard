import React from 'react'
import { Header, LineChart } from '../../components'

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-34 p-10 bg-white
    dark:bg-secondary-dark-bg rounded-3xl">
      <div className='mb-10'>
        <p className='text-3xl dark:text-gray-200 font-extrabold tracking-tight text-slate-900'>Line Chart</p>
      </div>
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  )
}

export default Line