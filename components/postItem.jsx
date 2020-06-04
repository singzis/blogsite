import { SendOutlined } from "@ant-design/icons";
import Tag from "./tag";

export default function PostItem() {
  return (
    <div className="item">
      <div className="title">
        <a>这是文章标题</a>
      </div>
      <div className="text">
        这是文章大概，这是文章大概，这是文章大概，这是文章大概，这是文章大概，
        这是文章大概，这是文章大概，这是文章大概，这是文章大概，这是文章大概，这是文章大概，这是文章大概，这是文章大概，这是文章大概，这是文章大概，
      </div>
      <div className="tags">
        <Tag text="javascript" />
        <Tag text="css" />
        <Tag text="react" />
        <Tag text="webpack" />
      </div>
      <div className="info">
        <span className="date">2020-06-01</span>
        <a className="read">
          Read <SendOutlined />
        </a>
      </div>
      <style jsx>{`
        .item {
          margin-bottom: 40px;
          padding: 0 20px;
        }
        .title {
          display: flex;
          margin-bottom: 5px;
          font-size: 28px;
        }
        .title::after {
          width: 100%;
          border-top: 1px solid #f0f0f0;
          transform: translateY(50%);
          content: "";
        }
        a {
          display: inline-block;
          white-space: nowrap;
          padding-right: 1em;
        }
        .title a:hover {
          color: #ee1a1a;
        }
        .text {
          margin-bottom: 10px;
          color: rgba(0, 0, 0, 0.65);
        }
        .tags {
          margin-bottom: 10px;
        }
        .info {
          display: flex;
          justify-content: space-between;
        }
        .date {
          margin-right: 5px;
          color: rgba(0, 0, 0, 0.45);
        }
        .read:hover {
          color: #ee1a1a;
        }
      `}</style>
    </div>
  );
}
