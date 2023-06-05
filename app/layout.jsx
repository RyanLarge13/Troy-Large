import "./globals.css";
import Header from "@components/Header";
import Cart from "@components/Cart";

export const metadata = {
  title: "Troy Large",
  description: "Pastel Artist Troy Large, Ecommerce Website",
  charset: "utf-8",
  icons: {
    icon: "/favicon.ico",
  },
  viewport:
    "width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mt-20">{children}</main>
        <Cart />
      </body>
    </html>
  );
}
