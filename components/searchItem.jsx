import Link from "next/link";
import Date from "./date";

export default function SearchItem({ id, date, title }) {
  return (
    <div className="item">
      <div className="post">
        <Link href="/posts/[id]" as={`/posts/${id}`}>
          <a className="post-text">{title}</a>
        </Link>
      </div>
      <div className="date">
        <Date dateString={date} />
      </div>
      <style jsx>{`
        .item {
          width: 100%;
          display: flex;
          margin: 10px 0;
        }
        .post {
          flex: 1;
          display: flex;
          padding-right: 10px;
        }
        .post::after {
          flex-grow: 1;
          border-top: 1px dashed #ccc;
          transform: translateY(50%);
          content: "";
        }
        .post-text {
          margin-right: 10px;
        }
        .date {
          color: rgba(0, 0, 0, 0.45);
        }
      `}</style>
    </div>
  );
}
