import "../styles/globals.css";
import { NavBar } from "../components/NavBar";
import { AppProps } from "../node_modules/next/app";
import { useSession } from "../lib/supabase/useSession";

function MyApp({ Component, pageProps }: AppProps) {
  const { loading: isLoading } = useSession();

  if (isLoading) {
    return (
      <div>
        <NavBar />
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <>
        <NavBar />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
