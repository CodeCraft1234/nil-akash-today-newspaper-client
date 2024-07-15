// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit, categoryName, setCategoryName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add a New Category</h2>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter category name"
        />
        <div className="mt-4 flex justify-end">
          <button onClick={onClose} className="mr-2 px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={onSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
