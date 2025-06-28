// frontend/pages/_app.jsx
import "@/styles/globals.css"; // om du har global CSS
import Navbar from "@/components/Navbar"; // valfritt, om du har Navbar

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar /> {/* Valfritt, visa på alla sidor */}
      <Component {...pageProps} />
    </>
  );
}
