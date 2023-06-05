import "./globals.css";
import Head from "next/head";
import Header from "@components/Header";
import Cart from "@components/Cart";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
      <title>Troy Large</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="An ECommerce pastel artists platform for displaying, sharing & selling content"
      />
      <link rel="icon" type="image/jpg" href="/icon.ico" sizes="any" />
    </Head>
      <body>
        <Header />
        <main className="mt-20">{children}</main>
        <Cart />
      </body>
    </html>
  );
}
