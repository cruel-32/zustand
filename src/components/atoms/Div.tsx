export interface DivProps extends React.HTMLProps<HTMLDivElement> {}

const Div = (props: DivProps) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};

export default Div;
