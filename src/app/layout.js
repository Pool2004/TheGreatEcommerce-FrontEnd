import "./globals.css";
import Provider from "../redux/Provider";

export const metadata = {
  title: "The Great Ecommerce",
  description: "The Great Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
