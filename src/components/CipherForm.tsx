import { useState, ChangeEvent } from 'react';

interface CipherFormProps {
  onEncrypt: (message: string, shift: number) => void;
  onDecrypt: (message: string, shift: number) => void;
}

export default function CipherForm({ onEncrypt, onDecrypt }: CipherFormProps) {
  const [message, setMessage] = useState<string>('');
  const [shift, setShift] = useState<number>(3);

  const handleEncrypt = (): void => {
    onEncrypt(message, shift);
  };

  const handleDecrypt = (): void => {
    onDecrypt(message, shift);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(e.target.value);
  };

  const handleShiftChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setShift(parseInt(e.target.value));
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
          rows={4}
          value={message}
          onChange={handleMessageChange}
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
          onChange={handleShiftChange}
          min={1}
          max={25}
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