import { MehOutlined } from "@ant-design/icons";

export default function NoData() {
  return (
    <div className="no-data">
      <MehOutlined style={{ fontSize: 30 }} />
      <span>抱歉！未能找到相关数据。</span>
      <style jsx>{`
        .no-data {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
        }
        .no-data span {
          margin-left: 10px;
        }
      `}</style>
    </div>
  );
}
