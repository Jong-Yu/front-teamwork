import { Route, Routes } from 'react-router-dom';
import { Calendar } from './Calendar/Calendar';
import { useState } from 'react';
import dayjs from 'dayjs';

export const UIRoutes = () => {
  // state
  const [date, setDate] = useState(dayjs());

  return (
    <Routes>
      <Route
        path="calendar"
        element={<Calendar value={date} onChange={setDate} />}
      />
    </Routes>
  );
};
