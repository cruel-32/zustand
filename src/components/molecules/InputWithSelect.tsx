import Select, { Option } from '@/components/atoms/Select.tsx';
import Input from '@/components/atoms/Input.tsx';
import Label from '@/components/atoms/Label.tsx';

export interface IInputWithSelectProps extends React.HTMLProps<HTMLInputElement> {
  type?: 'text' | 'password' | 'number' | 'email';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options?: Option[];
  header?: string;
}

const InputWithSelect = (props: IInputWithSelectProps) => {
  return (
    <div>
      <Label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
        Price
      </Label>
      <div className="relative mt-2 rounded-md shadow-sm">
        {props.header && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-sm text-gray-500">{props.header}</div>
        )}
        <Input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0.00"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <Label htmlFor="currency" className="sr-only">
            Currency
          </Label>
          <Select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            options={props.options}
          />
        </div>
      </div>
    </div>
  );
};

export default InputWithSelect;
