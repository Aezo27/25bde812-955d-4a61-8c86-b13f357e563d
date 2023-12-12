interface TextAreaProps {
  name: string,
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

const TextArea: React.FC<TextAreaProps> = ({ name, placeholder, required, readonly, disable, autofocus, onChange, setValue, label, error, register }) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={name} className="">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        aria-invalid={error ? "true" : "false"}
        onChange={onChange}
        aria-readonly={readonly}
        readOnly={readonly}
        disabled={disable}
        aria-disabled={disable}
        placeholder={placeholder}
        // required={required}
        autoFocus={autofocus}
        {...register}
        id={name}
        className={`block w-full p-2 mt-2 h-28 text-gray-700 bg-white dark:bg-gray-800 border  ${
          error
            ? "border-red-500 dark:border-red-400 focus:ring-red-400 dark:focus:ring-red-300 focus:border-red-400 dark:focus:border-red-300"
            : "border-gray-400 dark:border-gray-600 focus:ring-blue-300 dark:focus:ring-gray-500 focus:border-blue-400 dark:focus:border-gray-700"
        } rounded-lg placeholder-gray-400/70 dark:text-gray-300  focus:outline-none focus:ring focus:ring-opacity-40`}
      >
        {setValue}
      </textarea>
      {error && (
        <div className="mt-1 text-sm text-red-500 dark:text-red-400">
          {error}
        </div>
      )}
    </div>
  );
}

export default TextArea;