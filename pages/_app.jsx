import "antd/dist/antd.css";
import "highlight.js/styles/atom-one-dark.css";
import "../assets/reset.css";
import "../assets/styles.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} style={{ height: "100%" }} />;
}
