import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const AuthRoutes = lazy(() => import('./auth/AuthRoutes'));
const TeamRoutes = lazy(() => import('./team/TeamRoutes'));

export const AppRoutes = () => {
  return (
    <BrowserRouter basename="">
      <Routes>
        <Route path="auth/*" element={<AuthRoutes />} />
        <Route path="team/*" element={<TeamRoutes />} />
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
