import { ChangeEvent, useState } from 'react';
import { useLoginStore } from '@/stores/useLoginStore';

import Input from '@/components/atoms/Input';
import Button from '@/components/atoms/Button';
import Form from '@/components/atoms/Form';
import Div from '@/components/atoms/Div';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginStore = useLoginStore((state) => state);
  console.log('LoginForm loginStore ::::: ', loginStore);
  const { login, isLoading } = loginStore;

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail('');
          setPassword('');
        },
      },
    );
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          id="email"
          autoComplete="username"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />

        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading}>
          {!isLoading ? 'Log in' : <span>spinner</span>}
        </Button>
      </Form>
    </Div>
  );
};

export default LoginForm;
