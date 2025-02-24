'use client';

const Button = () => {
  const handleClick = () => {
    alert('Você é legal!');
  };

  return (
    <button
      className="bg-gray-900 hover:bg-black-900 text-white font-arial px-20 py-8 rounded-lg shadow-md transition-all duration-300"
      onClick={handleClick}
    >
      Clique
    </button>
  );
};

export default Button;
