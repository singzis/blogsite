import Head from "next/head";
import { Input } from "antd";
import Layout from "../components/layout";
import Tag from "../components/tag";
import NoData from "../components/noData";
import SearchItem from "../components/searchItem";
import Pagination from "../components/pagination";
import { INIT_LANGUAGE } from "../lib/init";
import { getSortedPostsData } from "../lib/posts";

const { Search } = Input;

export default function SearchComp({ allPostsData }) {
  const search = (val) => {
    console.log(val);
  };
  return (
    <Layout>
      <Head>
        <title>文章搜索</title>
      </Head>
      <div className="search">
        <div className="search-box">
          <Search
            placeholder="输入关键词进行搜索..."
            enterButton
            size="large"
            onSearch={search}
            allowClear
            className="search-input"
          />
          <div className="search-tags">
            {INIT_LANGUAGE.map((lang) => (
              <Tag text={lang} key={lang} />
            ))}
          </div>
        </div>
        <div className="search-list">
          {true ? (
            <div className="list">
              {allPostsData.map((cur) => (
                <SearchItem key={cur.id} {...cur} />
              ))}
              <div className="pagination">
                <Pagination
                  size="small"
                  total={500}
                  hideOnSinglePage
                  defaultPageSize={6}
                  showSizeChanger={false}
                />
              </div>
            </div>
          ) : (
            <div className="no-data">
              <NoData />
            </div>
          )}
        </div>
        <style jsx>{`
          .search {
            min-height: 100%;
            padding: 0 100px;
            display: flex;
            flex-direction: column;
          }
          .search-box {
            padding: 40px 0 30px;
          }
          .search-tags {
            margin-top: 10px;
          }
          .search-list {
            flex-grow: 1;
          }
          .list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          .pagination {
            margin-top: 20px;
          }
          .no-data {
            padding-top: 60px;
          }
        `}</style>
        <style global jsx>{`
          .search-input .ant-btn-primary {
            background: #ffcc00;
            border-color: #ffcc00;
          }
          .search-input .ant-input-affix-wrapper:hover,
          .search-input .ant-input-affix-wrapper:focus {
            border-color: #ffcc00;
          }
          .search-input .ant-input-affix-wrapper-focused {
            border-color: #ffcc00;
            box-shadow: 0 0 0 2px rgba(255, 180, 0, 0.2);
          }
        `}</style>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}
