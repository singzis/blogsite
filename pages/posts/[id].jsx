import { useEffect } from "react";
import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

export default function Post({ postData: { title, date, contentHtml } }) {
  useEffect(() => {
    //   hljs.registerLanguage("javascript", javascript);
    hljs.initHighlightingOnLoad();
  }, [contentHtml]);
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <div className="title">{title}</div>
        <Date dateString={date} />
        <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
      </article>
      <style jsx>{`
        .title {
          text-align: center;
          font-size: 42px;
          font-weight: 500;
          line-height: 1.5;
          padding: 10px 0;
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
