import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, Page, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { ordersData, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl z-0">
      <Header title="Orders" category="page" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        toolbar={['Search']}
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject 
        services={[Resize, Sort, Page, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Orders