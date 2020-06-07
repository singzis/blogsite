import Heade from "next/head";
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
