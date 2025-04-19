'use client'
import { useState } from 'react';
import Head from 'next/head';
import CipherForm from '../components/CipherForm';
import ResultDisplay from '../components/ResultDisplay';
import { encryptCaesar, decryptCaesar } from '../utils/cipherUtils';

export default function Home() {
  const [result, setResult] = useState('');
  const [isEncrypted, setIsEncrypted] = useState(false);

  const handleEncrypt = (message, shift) => {
    const encrypted = encryptCaesar(message, shift);
    setResult(encrypted);
    setIsEncrypted(true);
  };

  const handleDecrypt = (message, shift) => {
    const decrypted = decryptCaesar(message, shift);
    setResult(decrypted);
    setIsEncrypted(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <Head>
        <title>Cifra de César</title>
        <meta name="description" content="Aplicativo de criptografia usando Cifra de César" />
      </Head>

      <main className="max-w-md mx-auto bg-black p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">Cifra de César</h1>
        
        <CipherForm 
          onEncrypt={handleEncrypt} 
          onDecrypt={handleDecrypt} 
        />
        
        <ResultDisplay 
          result={result} 
          isEncrypted={isEncrypted} 
        />
      </main>
    </div>
  );
}