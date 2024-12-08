'use client'
import { InriaSans } from "@/app/_fonts/fonts";
import { metadata } from "./metadata";

import { QueryClient, QueryClientProvider } from "react-query";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient()
  return (
    <html lang="pt-br">
      <QueryClientProvider client={queryClient}>
        <head>
          <meta name="description" content={metadata.description} />
          <title>{metadata.title}</title>
        </head>
        <body className={`${InriaSans.className} font-sans flex`}>
          {children}
        </body>
      </QueryClientProvider>
    </html>
  );
}
