import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl z-0">
      <Header title="Employees" category="page" />
      <ScheduleComponent
        height="650px"
        eventSettings={{dataSource: scheduleData}}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
      </ScheduleComponent>
    </div>
  )
}

export default Calendar