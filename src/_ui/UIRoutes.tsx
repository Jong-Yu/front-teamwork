import { Route, Routes } from 'react-router-dom';
import { Calendar } from './Calendar/Calendar';

export const UIRoutes = () => {
  return (
    <Routes>
      <Route path="selectDate" element={<Calendar />} />
    </Routes>
  );
};
