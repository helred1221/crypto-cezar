import { useRef } from 'react';

interface ResultDisplayProps {
  result: string;
  isEncrypted: boolean;
}

export default function ResultDisplay({ result, isEncrypted }: ResultDisplayProps) {
  const resultRef = useRef<HTMLDivElement>(null);

  const handleCopy = (): void => {
    if (resultRef.current) {
      navigator.clipboard.writeText(result)
        .then(() => {
          alert('Texto copiado para a área de transferência!');
        })
        .catch((err: Error) => {
          console.error('Erro ao copiar texto: ', err);
        });
    }
  };

  if (!result) return null;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">
        {isEncrypted ? 'Mensagem Criptografada:' : 'Mensagem Descriptografada:'}
      </h2>
      <div 
        ref={resultRef}
        className="p-4 bg-gray-100 rounded-md break-words text-black"
      >
        {result}
      </div>
      <button
        onClick={handleCopy}
        className="mt-3 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition-colors w-full"
      >
        Copiar Resultado
      </button>
    </div>
  );
}