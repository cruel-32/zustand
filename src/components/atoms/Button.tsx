export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
}

const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
};

export default Button;
