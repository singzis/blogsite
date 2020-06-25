import Router from "next/router";
import Layout from "../components/layout";
import Button from "../components/Button/button";

export default function Custom404() {
  const goBack = () => {
    Router.back();
  };
  return (
    <Layout>
      <div className="custom404">
        <div>
          <div className="title404">Uh ohhh!</div>
          <div className="tips">你访问的页面不见了！</div>
          <Button type="primary" onClick={goBack}>
            回到过去
          </Button>
        </div>
        <style jsx>{`
          .custom404 {
            height: 100%;
            display: flex;
            justify-content: center;
            padding-top: 80px;
          }
          .title404 {
            font-size: 94px;
            font-weight: bolder;
            line-height: 1em;
          }
          .tips {
            font-size: 48px;
            margin-bottom: 20px;
          }
        `}</style>
      </div>
    </Layout>
  );
}
