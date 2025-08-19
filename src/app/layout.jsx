import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "@/components/Footer";
config.autoAddCss = false;

const IBM = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"], // مهم عشان العربي
  weight: ["400", "500", "700"], // الأوزان اللي محتاجها
});

console.log(IBM);

export const metadata = {
  title: "Gulf Touch - Digital Marketing Solutions",
  description:
    "A Saudi company specializing in digital marketing, founded with a clear vision to enable brands to achieve tangible growth through creative solutions and effective strategies.We offer a combination of creative expertise and technical knowledge to be the ideal partner for your success journey in the market.",
  icons: {
    icon: "/logo Gulf Touch.svg", // هنا حط الـ svg
  },
  keywords:
    "Gulf Touch, digital marketing, Saudi Arabia, creative solutions, effective strategies, brand growth",
  // authors: [{ name: "Gulf Touch", url: "https://gulftouch.sa" }],
  openGraph: {
    title: "Gulf Touch",
    description:
      "A Saudi company specializing in digital marketing, founded with a clear vision to enable brands to achieve tangible growth through creative solutions and effective strategies.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={IBM.className}>
        <div className="min-h-screen ">
          <div className="">
            <div className="mx-auto">
              <LanguageProvider>
                <Navbar />
                <main className="pt-20">{children}</main>
                <Footer />
              </LanguageProvider>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
