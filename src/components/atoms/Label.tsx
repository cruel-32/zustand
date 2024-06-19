export interface ILabelProps extends React.HTMLProps<HTMLLabelElement> {
  type?: 'checkbox';
}

const Label = (props: ILabelProps) => {
  const { children, ...rest } = props;
  return <label {...rest}>{children}</label>;
};

export default Label;
