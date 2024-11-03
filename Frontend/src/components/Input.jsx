/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useId, forwardRef } from 'react';

const Input = forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();

    return (
        <div className='w-full'>
            {label && (
                <label 
                    className='inline-block mb-1 pl-1 text-black'
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-gray-700 text-gray-50 outline-none border border-gray-200 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 ${className}`}
                ref={ref}
                id={id}
                {...props}
            />
        </div>
    );
});

export default Input;
