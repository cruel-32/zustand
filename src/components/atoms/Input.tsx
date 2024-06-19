export interface IInputProps extends React.HTMLProps<HTMLInputElement> {
  type?: 'text' | 'password' | 'number' | 'email';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: IInputProps) => {
  return <input {...props} />;
};

export default Input;
