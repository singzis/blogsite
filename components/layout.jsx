import Head from "next/head";
import { Row, Col } from "antd";
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
      <div className="content">
        <Row justify="center">
          <Col span={18}>
            <div className="content-col">{props.children}</div>
          </Col>
        </Row>
      </div>
      <Footer />
      <style jsx>{`
        .layout {
          flex-grow: 1;
          padding-top: 100px;
          padding-bottom: 108px;
          position: relative;
          display: flex;
        }
        .content {
          background: #fff;
          flex-basis: 100%;
        }
        .content-col {
          padding: 20px 10px;
        }
      `}</style>
    </div>
  );
}
