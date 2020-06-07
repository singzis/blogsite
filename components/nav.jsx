import Link from "next/link";
import { useRouter } from "next/router";
export default function Nav() {
  const { pathname } = useRouter();
  return (
    <div className="nav">
      <span className="nav-note">// </span>
      <Link href="/">
        <a className={`nav-link ${pathname === "/" ? "selected" : ""}`}>主页</a>
      </Link>
      <Link href="/about">
        <a className={`nav-link ${pathname === "/about" ? "selected" : ""}`}>
          关于
        </a>
      </Link>
      <Link href="/about">
        <a className={`nav-link ${pathname === "/about" ? "selected" : ""}`}>
          分类
        </a>
      </Link>
      <Link href="/about">
        <a className={`nav-link ${pathname === "/about" ? "selected" : ""}`}>
          log
        </a>
      </Link>
      <style jsx>{`
        .nav {
          display: flex;
          font-size: 28px;
          font-style: italic;
          color: #5d5d5d;
        }
        .nav-note {
          margin-left: 10px;
          margin-right: 10px;
          font-size: 28px;
        }
        .nav-link:not(:last-child) {
          margin-right: 30px;
        }
        .nav-link:hover {
          color: #ee1a1a;
        }
        .selected {
          color: #ee1a1a;
        }
      `}</style>
    </div>
  );
}
