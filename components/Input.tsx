interface InputProps {
  name: string,
  elType?: string,
  placeholder?: string,
  required?: boolean,
  readonly?: boolean,
  disable?: boolean,
  autofocus?: boolean,
  onChange?: () => void,
  setValue?: string | number,
  label?: string,
  error?: any,
  register?: any,
}

const Input: React.FC<InputProps> = ({ name, elType, placeholder, required, readonly, disable, autofocus, onChange, setValue, label, error, register }) => {
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
        aria-invalid={error ? "true" : "false"}
        onChange={onChange}
        aria-readonly={readonly}
        readOnly={readonly}
        disabled={disable}
        aria-disabled={disable}
        type={elType}
        placeholder={placeholder}
        required={required}
        autoFocus={autofocus}
        {...register}
        id={name}
        value={setValue}
        className={`block w-full p-2 mt-2 text-gray-700 bg-white border  ${error ? "border-red-500" : "border-gray-400 dark:bg-gray-800"
          } rounded-lg placeholder-gray-400/70 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-gray-700 focus:ring-blue-300 dark:focus:ring-gray-500 focus:outline-none focus:ring focus:ring-opacity-40`}
      />
      {error && (
        <div className="mt-1 text-sm text-red-500 ">
          {error}
        </div>
      )}
    </>
  );
}

export default Input;