import "./globals.css";
import Header from "@components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main className="mt-20">{children}</main>
      </body>
    </html>
  );
}
