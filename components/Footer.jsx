import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      <div className="text">
        Designed & Powerd by{" "}
        <Link href="/">
          <a className="blog-name">Singz72</a>
        </Link>
      </div>
      <div className="text">Copyright © 2020</div>
      <a href="http://www.beian.miit.gov.cn/" className="beian">
        蜀ICP备17020743号
      </a>
      <style jsx>{`
        .footer {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 20px 0;
          background-color: #0a0a0a;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #f7f7f7;
          font-size: 14px;
        }
        .text {
           {
            /* margin-bottom: 10px; */
          }
        }
        .blog-name {
          text-decoration: underline;
        }
        .blog-name:hover {
          color: #ee1a1a;
        }
        .beian:hover {
          color: #ee1a1a;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
