import "../styles/globals.css";
import NavBar from "../components/NavBar";
import { AppProps } from "../node_modules/next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
