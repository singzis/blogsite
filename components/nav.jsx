import Link from "next/link";
import { useRouter } from "next/router";
export default function Nav() {
  const { pathname } = useRouter();
  return (
    <div className="nav">
      <Link href="/">
        <a className={`nav-link ${pathname === "/" ? "selected" : ""}`}>主页</a>
      </Link>
      <Link href="/about">
        <a className={`nav-link ${pathname === "/about" ? "selected" : ""}`}>
          关于
        </a>
      </Link>
      <style jsx>{`
        .nav {
          display: flex;
        }
        .nav-link {
          color: #0a0a0a;
          font-size: 28px;
        }
        .nav-link:not(:last-child) {
          margin-right: 40px;
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
