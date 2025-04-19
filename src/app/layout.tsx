import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cifra de Cézar",
  description: "Site para criptografar e descriptografar mensagens usando a cifra de cézar como encriptador.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
