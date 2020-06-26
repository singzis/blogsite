import {
  EnvironmentFilled,
  GithubOutlined,
  WechatOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { Popover } from "antd";
import Avatar from "./avatar";

export default function Personal() {
  const wechatQr = (
    <img
      src="https://singz72.com/blogImage/wechatqr.jpg"
      alt="wechatQr"
      style={{ width: "100px", height: "100px" }}
    />
  );
  return (
    <div className="personal">
      <div className="avatar">
        <Avatar />
      </div>
      <div className="info">
        <div className="name">SINGZ72</div>
        <div className="desc">
          🥳 🥳 🥳
          目标只是过程的终点🏁一切的行为都应遵守约定。学习就是为了完善自身，是为了走的更远，在某天我也会是一名优秀的开发者
        </div>
        <div className="info-col">
          <EnvironmentFilled />
          <span className="info-col-text">四川-成都</span>
        </div>
        <div className="info-col">
          <GoogleOutlined />
          <span className="info-col-text">
            <a href="mailto:singzochn@gmail.com">singzochn@gmail.com</a>
          </span>
        </div>
        {/* <div className="info-col">
          <WechatOutlined />
          <Popover content={wechatQr} placement="bottom">
            <span className="info-col-text">singzois</span>
          </Popover>
        </div> */}
        <div className="info-col">
          <GithubOutlined />
          <span className="info-col-text">
            <a href="https://github.com/Singz72">Singz72</a>
          </span>
        </div>
      </div>
      <style jsx>{`
        .personal {
          padding-right: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #24292e;
        }
        .avatar {
          border-radius: 100px;
          border: 3px solid #ffcc00;
          margin-bottom: 30px;
        }
        .name {
          font-size: 28px;
          font-weight: 600;
        }
        .desc {
          margin-bottom: 10px;
          color: #666;
        }
        .info {
          display: flex;
          flex-direction: column;
        }
        .info-col {
          font-size: 14px;
          line-height: 2em;
        }
        .info-col-text {
          padding-left: 10px;
        }
      `}</style>
    </div>
  );
}
