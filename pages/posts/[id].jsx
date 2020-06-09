import { useEffect } from "react";
import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import shell from "highlight.js/lib/languages/shell";

export default function Post({ postData: { title, date, contentHtml } }) {
  useEffect(() => {
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("shell", shell);
    hljs.registerLanguage("css", css);
    let blocks = document.querySelectorAll("pre code");
    blocks.forEach((node) => {
      hljs.highlightBlock(node);
    });
  }, [contentHtml]);
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <div className="title">{title}</div>
        <div className="date">
          <Date dateString={date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
      </article>
      <style jsx>{`
        .title {
          font-size: 42px;
          font-weight: 500;
          line-height: 1;
          padding: 10px 0 5px;
        }
        .date {
          margin-bottom: 20px;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
