import { LayoutComponent } from "@/@components/Layout/LayoutComponent";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerenciar: Agenda do Comércio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AntdRegistry>
          <LayoutComponent>{children}</LayoutComponent>
        </AntdRegistry>
      </body>
    </html>
  );
}
