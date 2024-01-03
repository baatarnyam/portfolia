import "@/styles/globals.css";
import { ThemeProvider as NextThemesProvider } from "next-themes";
export default function App({ Component, pageProps }) {
  return (
    <NextThemesProvider defaultTheme="system" enableSystem attribute="class">
      <Component {...pageProps} />
    </NextThemesProvider>
  );
}
