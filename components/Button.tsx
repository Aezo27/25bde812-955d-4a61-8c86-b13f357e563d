interface ButtonProps {
  variant: "primary" | "secondary" | "danger",
  children: React.ReactNode,
  elType?: "submit" | "button",
  onClick?: () => void,
}

const Button: React.FC<ButtonProps> = ({ variant, children, onClick, elType }) => {
  return (
    <>
      {variant === "primary" && (
        <button onClick={onClick} type={elType} className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600 sm:ml-3 sm:w-auto">
          {children}
        </button>)}

      {variant === "secondary" && (
        <button onClick={onClick} type={elType} className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:hover:bg-gray-200 sm:mt-0 sm:w-auto">
          {children}
        </button>)}

      {variant === "danger" && (
        <button onClick={onClick} type={elType} className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 dark:hover:bg-red-700 sm:ml-3 sm:w-auto">
          {children}
        </button>)}
    </>
  );
}

export default Button;