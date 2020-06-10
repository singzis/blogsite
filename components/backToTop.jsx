import { BackTop } from "antd";
import { CaretUpFilled } from "@ant-design/icons";

export default function BackToTop() {
  return (
    <>
      <BackTop>
        <div className="back-top">
          <CaretUpFilled style={{ color: "#f6f6f6", fontSize: "28px" }} />
        </div>
      </BackTop>
      <style jsx>{`
        .back-top {
          height: 40px;
          width: 40px;
          border-radius: 4px;
          background-color: #1c1e26;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
