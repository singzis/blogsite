import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import "./index.css";

const { Footer, Sider, Content } = Layout;

const Home = () => {
  const [data, setDate] = useState("home");

  return (
    <Layout>
      <Sider style={{ background: '#fff' }}>Sider</Sider>
      <Layout  style={{ background: '#fff' }}>
        <Content>Content</Content>
        <Footer  style={{ background: '#fff' }}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
