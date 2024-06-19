import Div from '@/components/atoms/Div';
import Anchor from '@/components/atoms/Anchor';

const Sidebar = () => {
  return (
    <Div>
      로고와 메뉴|
      <Anchor to="/index">index</Anchor>|<Anchor to="/booking">booking</Anchor>|<Anchor to="/test">test</Anchor>|
    </Div>
  );
};

export default Sidebar;
