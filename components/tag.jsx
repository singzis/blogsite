import { Tag } from "antd";

const INIT_COLOR = {
  javascript: "#108ee9",
  react: "#2db7f5",
  css: "#f50",
  webpack: "#2478ba",
};

export default function Comp({ text }) {
  return <Tag color={INIT_COLOR[text]}>{text}</Tag>;
}
