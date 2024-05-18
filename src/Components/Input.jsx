import React, { useState } from 'react';

const Input = ({ onSubmit, setUsername }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Update the username state in the parent component
    setUsername(inputValue);
    // Invoke the onSubmit function passed from the parent component
    onSubmit();
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className='flex flex-col items-center' onSubmit={handleSubmit}>
      <div className='flex gap-2'>

        <input
            type="text"
            id="username"
            name="username"
            value={inputValue}
            placeholder='Enter leetcode username...'
            onChange={handleChange}
            className='w-60 border-black-200 border-2 border-solid border-black h-10 rounded-lg px-2'
            autoComplete="off" // Disable autocomplete to prevent browser suggestions
        />
        <button type="submit" className='border-2 rounded-xl p-1 bg-gray-300'>Submit</button>
      </div>

    </form>
  );
};

export default Input;