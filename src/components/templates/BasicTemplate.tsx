import { Outlet } from 'react-router-dom';
import Div from '@/components/atoms/Div';
import Sidebar from '@/components/organism/Sidebar';
import Header from '@/components/molecules/Header';

const AppLayout = () => {
  return (
    <Div>
      <Header />
      <Sidebar />
      <Div>
        <Div>
          <Outlet />
        </Div>
      </Div>
    </Div>
  );
};

export default AppLayout;
