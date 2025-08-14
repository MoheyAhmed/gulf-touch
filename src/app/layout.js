import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Multi-language App",
  description: "Next.js multilingual support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main className="p-6">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
