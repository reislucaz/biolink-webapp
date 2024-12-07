import { metadata } from "./metadata";
import { InriaSans } from "@/app/_fonts/fonts";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>
      <body className={`${InriaSans.className} font-sans flex`}>
        {children}
      </body>
    </html>
  );
}
