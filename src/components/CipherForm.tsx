import { useState } from 'react';

export default function CipherForm({ onEncrypt, onDecrypt }) {
  const [message, setMessage] = useState('');
  const [shift, setShift] = useState(3);

  const handleEncrypt = () => {
    onEncrypt(message, shift);
  };

  const handleDecrypt = () => {
    onDecrypt(message, shift);
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-gray-300 mb-2" htmlFor="message">
          Mensagem:
        </label>
        <textarea
          id="message"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Digite sua mensagem aqui..."
        />
      </div>
      
      <div className="mb-6">
        <label className="block text-gray-300 mb-2" htmlFor="shift">
          Deslocamento:
        </label>
        <input
          id="shift"
          type="number"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={shift}
          onChange={(e) => setShift(e.target.value)}
          min="1"
          max="25"
        />
      </div>
      
      <div className="flex space-x-4 mb-6">
        <button
          onClick={handleEncrypt}
          className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
        >
          Criptografar
        </button>
        <button
          onClick={handleDecrypt}
          className="w-1/2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors"
        >
          Descriptografar
        </button>
      </div>
    </div>
  );
}