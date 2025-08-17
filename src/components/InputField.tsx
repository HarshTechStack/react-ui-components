import React, { useState } from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  type?: "text" | "password" | "email";
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  clearable?: boolean;
}

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-3 text-lg",
};

// Updated variant classes with dark mode support
const variantClasses = {
  filled:
    "bg-gray-100 dark:bg-gray-700 border-transparent text-gray-900 dark:text-white",
  outlined:
    "border border-gray-400 dark:border-gray-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white",
  ghost:
    "bg-transparent border-b border-gray-400 dark:border-gray-500 rounded-none text-gray-900 dark:text-white",
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  loading = false,
  type = "text",
  variant = "outlined",
  size = "md",
  clearable = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="mb-1 font-medium text-gray-800 dark:text-gray-200">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          type={inputType}
          className={`w-full rounded-md focus:outline-none focus:ring-2 pr-10 transition placeholder-gray-500 dark:placeholder-gray-400 ${
            invalid
              ? "border-red-500 focus:ring-red-400"
              : "focus:border-blue-500 focus:ring-blue-400 dark:focus:border-blue-400"
          } ${sizeClasses[size]} ${variantClasses[variant]} ${
            disabled || loading
              ? "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
              : ""
          }`}
        />

        {/* Loading Spinner */}
        {loading && (
          <div className="absolute right-2 text-gray-500 dark:text-gray-400">
            {/* SVG Spinner Code... */}
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        )}

        {/* Icons with dark mode support */}
        <div className="absolute right-2 text-gray-500 dark:text-gray-400">
          {clearable && value && !disabled && !loading && (
            <button
              type="button"
              onClick={() =>
                onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)
              }
              className="hover:text-gray-700 dark:hover:text-gray-200"
            >
              ✖
            </button>
          )}
          {type === "password" && !disabled && !loading && (
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="hover:text-gray-700 dark:hover:text-gray-200"
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          )}
        </div>
      </div>

      {invalid && errorMessage ? (
        <span className="text-sm text-red-600 dark:text-red-400 mt-1">{errorMessage}</span>
      ) : helperText ? (
        <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">{helperText}</span>
      ) : null}
    </div>
  );
};

export default InputField;
