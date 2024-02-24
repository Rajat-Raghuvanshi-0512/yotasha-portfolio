import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Yotasha | UI/UX Designer",
  description:
    "Hi there, I'm Yotasha! I’m a UI UX Designer, and a Digital Illustration Artist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
