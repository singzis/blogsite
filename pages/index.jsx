import Heade from "next/head";
import Link from "next/link";
import { Button } from "antd";
import Layout from "../components/layout";
import PostItem from "../components/postItem";
import { getSortedPostsData } from "../lib/posts";

export default function Index({ allPostsData }) {
  return (
    <Layout>
      <Heade>
        <title>singz72's blog</title>
      </Heade>
      <section>
        {allPostsData.map((cur) => (
          <PostItem key={cur.id} {...cur} />
        ))}
        <Link href="/search">
          <a className="more">
            <Button type="primary">更多</Button>
          </a>
        </Link>
        <style jsx>{`
          .more {
            width: 100%;
            margin-top: 20px;
            display: flex;
            justify-content: center;
          }
        `}</style>
        <style global jsx>{`
          .more .ant-btn-primary {
            background-color: #ffcc00;
            border-color: #ffcc00;
          }
          .more .ant-btn-primary:hover,
          .more .ant-btn-primary:focus {
            background: #ffd64b;
            border-color: #ffd64b;
          }
        `}</style>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}
