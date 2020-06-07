import { SendOutlined } from "@ant-design/icons";
import Link from "next/link";
import Tag from "./tag";
import Date from "../components/date";

export default function PostItem({ id, date, title, text, category }) {
  const cates = category.split(",");
  return (
    <div className="item">
      <div className="title">
        <Link href="/posts/[id]" as={`/posts/${id}`}>
          <a>{title}</a>
        </Link>
      </div>
      <div className="text">{text}</div>
      <div className="tags">
        {cates.map((cur) => (
          <Tag text={cur} key={cur} />
        ))}
      </div>
      <div className="info">
        <span className="date">
          <Date dateString={date} />
        </span>
        <Link href="/posts/[id]" as={`/posts/${id}`}>
          <a className="read">
            Read <SendOutlined />
          </a>
        </Link>
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
          flex-grow: 1;
          border-top: 1px solid #f0f0f0;
          transform: translateY(50%);
          content: "";
        }
        .title a {
          display: inline-block;
          white-space: nowrap;
          padding-right: 10px;
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
