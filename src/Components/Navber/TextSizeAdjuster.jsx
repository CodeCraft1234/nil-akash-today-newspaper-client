import React from 'react';

const TextSizeAdjuster = ({ fontSize, setFontSize }) => {
  const handleChange = (e) => {
    setFontSize(e.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="fontSize" className="block text-lg font-medium text-gray-700">
        Adjust Text Size
      </label>
      <input
        type="range"
        id="fontSize"
        name="fontSize"
        min="10"
        max="40"
        value={fontSize}
        onChange={handleChange}
        className="mt-1 block w-full"
      />
      <span>{fontSize}px</span>
    </div>
  );
};

export default TextSizeAdjuster;
