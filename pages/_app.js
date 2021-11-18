import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import Router from "next/router";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Navbar />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
