import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"Omega",description:"Plataforma de presença digital para profissionais."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}