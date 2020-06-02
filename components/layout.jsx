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
      <Row justify="center">
        <Col span={18}>
          <div className="layout-content">{props.children}</div>
        </Col>
      </Row>
      <Footer />
      <style jsx>{`
        .layout {
          padding-top: 100px;
          padding-bottom: 108px;
          position: relative;
        }
        .layout-content {
          padding: 20px 10px;
        }
      `}</style>
    </div>
  );
}
