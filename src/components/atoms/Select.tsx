export interface IInputProps extends React.HTMLProps<HTMLSelectElement> {
  children?: React.ReactNode | React.ReactNode[];
  options?: Option[];
}

export type Option = {
  value: string;
  label: string;
};

const Input = (props: IInputProps) => {
  const { children, options, ...rest } = props;
  return (
    <select {...rest}>
      {children
        ? children
        : options?.map((option, index) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
    </select>
  );
};

export default Input;
