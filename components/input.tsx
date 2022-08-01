import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  kind?: "text" | "phone" | "price";
  type: string;
  register: UseFormRegisterReturn;
  required: boolean;
}

export default function Input({
  label,
  name,
  kind = "text",
  register,
  required,
  type,
}: InputProps) {
  return (
    <div>
      <label
        className="mb-1 block text-sm font-medium text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>
      <div className="mt-1">
        {kind === "text" ? (
          <input
            id={name}
            {...register}
            required={required}
            className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          />
        ) : null}
        {kind === "phone" ? (
          <div className="flex rounded-md">
            <span className="border-right-0 flex select-none items-center justify-items-center rounded-l-md border border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
              +82
            </span>
            <input
              id={name}
              {...register}
              required={required}
              type={type}
              className="w-full appearance-none rounded-md rounded-l-none border border-l-0 border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            />
          </div>
        ) : null}
        {kind === "price" ? (
          <div className="relative flex items-center rounded-md shadow-sm">
            <div className="pointer-events-none absolute left-0 flex items-center justify-center pl-3">
              <span className="text-sm text-gray-500">₩</span>
            </div>
            <input
              id={name}
              {...register}
              required={required}
              className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 pl-7 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
              type={type}
            />
            <div className="pointer-events-none absolute right-0 flex items-center pr-7">
              <span className="text-gray-500">KRW</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
