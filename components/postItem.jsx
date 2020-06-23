import { ReadOutlined } from "@ant-design/icons";
import Link from "next/link";
import Tag from "./tag";
import Date from "../components/date";

export default function PostItem({ slug, date, title, text, category }) {
  const cates = category.split(",");
  return (
    <div className="item">
      <div className="title">
        <Link href="/posts/[...slug]" as={`/posts/${slug.join('/')}`}>
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
        <Link href="/posts/[...slug]" as={`/posts/${slug.join('/')}`}>
          <a className="read">
            Read <ReadOutlined />
          </a>
        </Link>
      </div>
      <style jsx>{`
        .item {
          margin-bottom: 40px;
          padding-left: 20px;
        }
        .title {
          display: flex;
          margin-bottom: 5px;
          font-size: 28px;
        }
        .title::after {
          flex-grow: 1;
          border-top: 2px solid #ffcc00;
          transform: translateY(50%);
          content: "";
        }
        .title a {
          display: inline-block;
          padding-right: 10px;
        }
        .title a:hover {
          color: #ffcc00;
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
          color: #ffcc00;
        }
      `}</style>
    </div>
  );
}
