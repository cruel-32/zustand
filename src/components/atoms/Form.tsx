export interface FormProps extends React.HTMLProps<HTMLFormElement> {
  type?: 'button' | 'submit' | 'reset';
}

const Form = (props: FormProps) => {
  const { children, ...rest } = props;
  return <form {...rest}>{children}</form>;
};

export default Form;
