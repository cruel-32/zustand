import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import '@/App.scss';

import SpinnerFullPage from '@/pages/SpinnerFullPage.tsx';
import ProtectedRoute from '@/pages/ProtectedRoute.tsx';

const BasicTemplate = lazy(() => import('@/components/templates/BasicTemplate'));
const PageNotFound = lazy(() => import('@/pages/PageNotFound'));
const Index = lazy(() => import('@/pages/Index.tsx'));
const Login = lazy(() => import('@/pages/Login'));

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/react-boilerplate/'}>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            {/* ProtectedRoute: 로그인이 필요한 페이지 */}
            <Route
              element={
                <ProtectedRoute>
                  <BasicTemplate />
                </ProtectedRoute>
              }
            >
            </Route>

            {/* 로그인이 필요없는 페이지 */}
            <Route element={<BasicTemplate />}>
              <Route index element={<Navigate replace to="index" />} />
              <Route path="index" element={<Index />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
