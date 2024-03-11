import { LayoutComponent } from "@/@components/Layout/LayoutComponent";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.scss";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

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
      <body className={roboto.className}>
        <AntdRegistry>
          <LayoutComponent>{children}</LayoutComponent>
        </AntdRegistry>
      </body>
    </html>
  );
}
