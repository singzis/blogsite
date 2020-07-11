import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import shell from "highlight.js/lib/languages/shell";
import nginx from "highlight.js/lib/languages/nginx";
import json from "highlight.js/lib/languages/json";
import http from "highlight.js/lib/languages/http";
import Layout from "../../components/layout";
import Date from "../../components/date";
import Tag from "../../components/tag";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({
  postData: {
    title,
    date,
    contentHtml,
    category,
    nearPosts: { prevPost, nextPost },
  },
}) {
  useEffect(() => {
    hljs.registerLanguage("javascript", javascript);
    hljs.registerLanguage("shell", shell);
    hljs.registerLanguage("css", css);
    hljs.registerLanguage("nginx", nginx);
    hljs.registerLanguage("json", json);
    hljs.registerLanguage("http", http);
    let blocks = document.querySelectorAll("pre code");
    blocks.forEach((node) => {
      hljs.highlightBlock(node);
    });
  }, [contentHtml]);
  return (
    <Layout full>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className="title">{title}</h1>
        <div className="date">
          发布于
          <Date dateString={date} />
        </div>
        <div className="category">
          {category.split(",").map((tag) => (
            <Tag text={tag} key={tag} />
          ))}
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        ></div>
        <div className="near-posts">
          {prevPost ? (
            <Link
              href="/posts/[...slug]"
              as={`/posts/${prevPost.slug.join("/")}`}
            >
              <a>上一篇：{prevPost.title}</a>
            </Link>
          ) : null}
          {nextPost ? (
            <Link
              href="/posts/[...slug]"
              as={`/posts/${nextPost.slug.join("/")}`}
            >
              <a>下一篇：{nextPost.title}</a>
            </Link>
          ) : null}
        </div>
      </article>
      <style jsx>{`
        .title {
          font-size: 42px;
          font-weight: 500;
          line-height: 1.2;
          padding: 10px 0 10px;
        }
        .date {
          color: #666;
          margin-bottom: 10px;
        }
        .content {
          margin-top: 40px;
        }
        .near-posts {
          margin-top: 80px;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </Layout>
  );
}

export function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}
