import Heade from "next/head";
import Layout from "../components/layout";
import PostItem from "../components/postItem";

export default function Index(props) {
  const { posts } = props;
  return (
    <Layout>
      <Heade>
        <title>singz72's blog</title>
      </Heade>
      <div>
        {posts.map((cur) => (
          <PostItem key={cur} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: { posts: [1, 2] },
  };
}
