import "@/assets/css/bootstrap.min.css";
import "./globals.css";
import favicon from "@/assets/img/abc-logo-icon.svg";
import '@/assets/css/style.css'
import JavascriptClient from "@/Components/JavascriptClient/JavascriptClient";

export const metadata = {
  title: "Home | ABC Computers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </head>
      <body>{children}
        <JavascriptClient />
      </body>
    </html>
  );
}
