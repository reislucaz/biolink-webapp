/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { InriaSans } from "@/app/_fonts/fonts";
import { metadata } from "./metadata";

import { QueryClient, QueryClientProvider } from "react-query";
import "./globals.css";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {toast} = useToast()
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: async (error: any) => toast({
          variant: 'destructive',
          title: error.message
        })
      }
    }
  })
  return (
    <html lang="pt-br">
      <Toaster />
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
