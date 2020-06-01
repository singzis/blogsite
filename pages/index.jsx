import Heade from "next/head";
import Layout from "../components/layout";
import PostItem from "../components/postItem";

export default function Index() {
  return (
    <Layout>
      <Heade>
        <title>singz72's blog</title>
      </Heade>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((cur) => (
          <PostItem key={cur} />
        ))}
      </div>
    </Layout>
  );
}
