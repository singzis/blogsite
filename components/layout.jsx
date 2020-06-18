import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
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
      <div className="wrap"></div>
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
          padding-bottom: 106px;
          position: relative;
          display: flex;
          justify-content: center;
        }
        .wrap {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: #fff;
          background-image: url("/images/texture.png");
          background-size: 100% 100%;
        }
        .main {
          width: 100%;
        }
        .main-box {
          width: 75%;
          max-width: 1000px;
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
          padding: 0 0 20px 40px;
        }
      `}</style>
    </div>
  );
}
