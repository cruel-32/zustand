import { useNavigate } from 'react-router-dom';
import React, { useEffect, ReactNode } from 'react';

export type PropsWithChildren<P> = P & { children?: ReactNode };

const ProtectedRoute = ({ children }: { children: PropsWithChildren<React.JSX.Element> }) => {
  const navigate = useNavigate();

  const isLoading = true;
  const isAuthenticated = true;

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate('/login');
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <div>Spinner 로그인이 필요한 페이지입니다.</div>;

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
