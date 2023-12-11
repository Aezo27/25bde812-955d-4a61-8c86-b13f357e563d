interface InputProps {
  name: string,
  elType?: string,
  placeholder?: string,
  required?: boolean,
  readonly?: boolean,
  onChange?: () => void,
  setValue?: string | number,
  label?: string,
}

const Input: React.FC<InputProps> = ({ name, elType, placeholder, required, readonly, onChange, setValue, label }) => {
  return ( 
    <>
      {label && 
        <label htmlFor={name} className="">{label}
          {required && (
          <span className="text-red-500">*</span>
          )}
        </label>
      }
      <input
        onChange={onChange}
        type={elType}
        placeholder={placeholder}
        required={required}
        name={name}
        id={name}
        value={setValue}
        className="block w-full p-2 mt-2 text-gray-700 bg-white border border-gray-400 rounded-lg placeholder-gray-400/70 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-gray-700 focus:ring-blue-300 dark:focus:ring-gray-500 focus:outline-none focus:ring focus:ring-opacity-40"
      />
    </>
   );
}
 
export default Input;