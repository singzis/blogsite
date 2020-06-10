import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import Personal from "./personal";
import BackToTop from "./backToTop";

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
      <div className="main">
        <div className="main-box">
          <aside className="main-personal">
            <Personal />
          </aside>
          <div className="main-content">{props.children}</div>
        </div>
      </div>
      <Footer />
      <BackToTop />
      <style jsx>{`
        .layout {
          flex-grow: 1;
          padding-top: 80px;
          padding-bottom: 108px;
          position: relative;
          display: flex;
          justify-content: center;
        }
        .main {
          background: #f6f6f6;
        }
        .main-box {
          width: 75%;
          margin: 20px auto;
          display: flex;
          position: relative;
        }
        .main-personal {
          flex: 0 0 300px;
          height: calc(100vh - 230px);
          position: -webkit-sticky;
          position: sticky;
          top: 100px;
          overflow: scroll;
        }
        .main-content {
          width: calc(100% - 300px);
          padding: 0 20px 20px 40px;
        }
      `}</style>
    </div>
  );
}
