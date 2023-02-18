import { type AppType } from "next/dist/shared/lib/utils";
import Footer from "../components/footer";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
};

export default MyApp;
