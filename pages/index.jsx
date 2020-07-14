import Heade from "next/head";
import Link from "next/link";
import Button from "../components/button";
import Layout from "../components/layout";
import PostItem from "../components/postItem";
import { sortedPostsData } from "../lib/posts";

export default function Index({ allPostsData }) {
  return (
    <Layout>
      <Heade>
        <title>singz72's blog</title>
      </Heade>
      <section>
        {allPostsData.slice(0, 10).map((cur) => (
          <PostItem key={cur.id} {...cur} />
        ))}
        <div className="more">
          <Link href="/search">
            <a>
              <Button>更多</Button>
            </a>
          </Link>
        </div>
        <style jsx>{`
          .more {
            width: 100%;
            margin-top: 20px;
            display: flex;
            justify-content: center;
          }
        `}</style>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = sortedPostsData;
  return {
    props: { allPostsData },
  };
}
