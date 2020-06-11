import { Row, Col } from "antd";
import BlogName from "./blogname";
import Nav from "./nav";

export default function Header(props) {
  return (
    <div className="header">
      <div className="header-box">
        <div className="left">
          <div className="blog-name">
            <BlogName />
          </div>
        </div>
        <div className="right">
          <Nav />
        </div>
      </div>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #1c1e26;
          z-index: 1;
        }
        .header-box {
          width: 75%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 25px 0;
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
