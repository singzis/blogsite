import Head from "next/head";
import Header from "./header";
// import Footer from "./Footer";
import Personal from "./personal";
import BackTop from "./backTop";

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
          {props.full ? (
            <div className="main-full">{props.children}</div>
          ) : (
            <>
              <aside className="main-personal">
                <Personal />
              </aside>
              <div className="main-content">{props.children}</div>
            </>
          )}
        </div>
      </div>
      <Footer />
      <BackTop />
      <style jsx>{`
        .layout {
          min-height: 100vh;
          position: relative;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
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
          flex: 1;
          display: flex;
        }
        .main-box {
          width: 75%;
          max-width: 1000px;
          min-height: 100%;
          margin: 20px auto;
          display: flex;
          position: relative;
        }
        .main-personal {
          flex: 0 0 300px;
          height: calc(100vh - 230px);
          position: -webkit-sticky;
          position: sticky;
          top: 20px;
          overflow: scroll;
        }
        .main-content {
          width: calc(100% - 300px);
          padding: 0 0 20px 40px;
        }
        .main-full {
          width: calc(100% - 200px);
          padding-bottom: 20px;
        }
      `}</style>
    </div>
  );
}
