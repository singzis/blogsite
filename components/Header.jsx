import { Row, Col } from "antd";
import Avatar from "./avatar";
import BlogName from "./blogname";
import Nav from "./nav";

export default function Header(props) {
  return (
    <div className="header">
      <Row justify="center" align="middle">
        <Col span={18}>
          <div className="header-box">
            <div className="left">
              <Avatar />
              <div className="blog-name">
                <BlogName />
              </div>
            </div>
            <div className="right">
              <Nav />
            </div>
          </div>
        </Col>
      </Row>
      {/*  */}
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          border-bottom: 1px solid #d6d6d6;
          background-color: #fff;
          z-index: 1;
        }
        .header-box {
          padding: 17px 0 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .left {
          display: flex;
          align-items: center;
        }
        .blog-name {
          margin-left: 10px;
          width: 300px;
        }
      `}</style>
    </div>
  );
}
