export interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
  type?: 'checkbox';
  isChecked?: boolean;
}

const Checkbox = (props: CheckboxProps) => {
  const { children, ...rest } = props;
  return <input {...rest}>{children}</input>;
};

export default Checkbox;
