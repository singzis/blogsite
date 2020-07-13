import { BackTop as Bt } from "antd";
import { CaretUpFilled } from "@ant-design/icons";

export default function BackTop() {
  return (
    <>
      <Bt>
        <div className="back-top">
          <CaretUpFilled style={{ color: "#f6f6f6", fontSize: "28px" }} />
        </div>
      </Bt>
      <style jsx>{`
        .back-top {
          height: 40px;
          width: 40px;
          border-radius: 2px;
          background-color: #1c1e26;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
