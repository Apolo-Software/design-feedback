import React from 'react';
import AvailableHours from './available-hours/AvailableHours';
import OpenStoreDays from './open-store-days/OpenStoreDays';

const Calendar = () => {
  return (
    <div>
      <OpenStoreDays />
      <AvailableHours />
    </div>
  );
};

export default Calendar;