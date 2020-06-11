import Head from "next/head";
import { Input } from "antd";
import Layout from "../components/layout";
import Tag from "../components/tag";
import NoData from "../components/noData";
import { INIT_LANGUAGE } from "../lib/init";

const { Search } = Input;

export default function SearchComp() {
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
            enterButton="搜索"
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
          {false ? (
            <></>
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
            padding: 40px 0;
          }
          .search-tags {
            margin-top: 10px;
          }
          .search-list {
            flex-grow: 1;
          }
          .no-data {
            padding-top: 60px;
          }
        `}</style>
        <style global jsx>{`
          .search-input .ant-btn-primary {
            background: #ffb400;
            border-color: #ffb400;
          }
          .search-input .ant-input-affix-wrapper:hover,
          .search-input .ant-input-affix-wrapper:focus {
            border-color: #ffb400;
          }
          .search-input .ant-input-affix-wrapper-focused {
            border-color: #ffb400;
            box-shadow: 0 0 0 2px rgba(255, 180, 0, 0.2);
          }
        `}</style>
      </div>
    </Layout>
  );
}