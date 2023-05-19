import React from 'react';

type CustomButtonProps = {
  name: string;
  onClick: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ name, onClick }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default CustomButton;
