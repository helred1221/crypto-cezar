'use client'
import { useState } from 'react';
import Head from 'next/head';
import CipherForm from '../components/CipherForm';
import ResultDisplay from '../components/ResultDisplay';
import { encryptCaesar, decryptCaesar } from '../utils/cipherUtils';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [result, setResult] = useState<string>('');
  const [isEncrypted, setIsEncrypted] = useState<boolean>(false);

  const handleEncrypt = (message: string, shift: number): void => {
    const encrypted = encryptCaesar(message, shift);
    setResult(encrypted);
    setIsEncrypted(true);
  };

  const handleDecrypt = (message: string, shift: number): void => {
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
};

export default Home;