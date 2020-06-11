import Link from "next/link";
import { useRouter } from "next/router";
export default function Nav() {
  const { pathname } = useRouter();
  return (
    <div className="nav">
      <Link href="/">
        <a className={`nav-link ${pathname === "/" ? "selected" : ""}`}>主页</a>
      </Link>
      <Link href="/search">
        <a className={`nav-link ${pathname === "/search" ? "selected" : ""}`}>
          搜索
        </a>
      </Link>
      <style jsx>{`
        .nav {
          display: flex;
          font-size: 20px;
          line-height: 30px;
          color: #f6f6f6;
        }
        .nav-link:not(:last-child) {
          margin-right: 30px;
        }
        .nav-link:hover {
          color: #ffb400;
        }
        .selected {
          color: #ffb400;
        }
      `}</style>
    </div>
  );
}
