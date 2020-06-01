import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <div className="layout">
      <Head>
        <link
          rel="shortcut icon"
          type="image/png"
          size="32x32"
          href="/images/favicon.ico"
        />
      </Head>
      <Header />
      <div className="layout-content">{props.children}</div>
      <Footer />
      <style jsx>{`
        .layout {
          padding-top: 100px;
          padding-bottom: 108px;
        }
        .layout-content {
          width: 1000px;
          margin: 0 auto;
          padding: 20px;
        }
      `}</style>
    </div>
  );
}
