import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import favicon from "@/assets/img/abc-logo-icon.svg";
import '@/assets/css/style.css'

export const metadata = {
  title: "Home | ABC Computers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      <body>{children}</body>
    </html>
  );
}
