import { Tag } from "antd";
import { INIT_COLOR } from "../lib/init";

export default function Comp({ text }) {
  return <Tag color={INIT_COLOR[text]}>{text}</Tag>;
}
