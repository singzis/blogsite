import Link from "next/link";
import Avatar from "./avatar";
import BlogName from "./blogname";
import Nav from "./nav";

export default function Header(props) {
  return (
    <div className="header">
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
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          border-bottom: 1px solid #d6d6d6;
          background-color: #f7f7f7;
        }
        .header-box {
          width: 1000px;
          padding: 17px 0 18px;
          margin: 0 auto;
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
