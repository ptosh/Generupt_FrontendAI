import "../styles/globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Generupt Genomics Platform",
  description: "Diagnostics portal for genetic testing",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen">
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
