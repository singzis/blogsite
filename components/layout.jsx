import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import Personal from "./personal";

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
          <div className="main-personal">
            <Personal />
          </div>
          <div className="main-content">{props.children}</div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .layout {
          flex-grow: 1;
          padding-top: 100px;
          padding-bottom: 108px;
          position: relative;
          display: flex;
          justify-content: center;
        }
        .main {
          background: #fff;
        }
        .main-box {
          width: 75%;
          margin: 20px auto 0;
          display: flex;
          position: relative;
        }
        .main-personal {
          flex: 0 0 300px;
          height: calc(100vh - 226px);
          position: -webkit-sticky;
          position: sticky;
          top: 120px;
        }
        .main-content {
          width: calc(100% - 300px);
          padding: 0 20px 20px;
        }
      `}</style>
    </div>
  );
}
