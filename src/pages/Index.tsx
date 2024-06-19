import { useState } from 'react';

const Index = () => {
  const [count] = useState(0);

  return <div>index : {count}</div>;
};
export default Index;
