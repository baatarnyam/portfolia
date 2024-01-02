import "@/styles/globals.css";
import { ThemeProvider as NextThemes } from "next-themes";
export default function App({ Component, pageProps }) {
  return (
    <NextThemes attribute="class" defaulTheme="system" enableSystem>
      <Component {...pageProps} />
    </NextThemes>
  );
}
