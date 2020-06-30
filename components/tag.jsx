import { Badge } from "evergreen-ui";
import { INIT_COLOR } from "../lib/init";

export default function Tag({ text }) {
  return <Badge color="teal" isSolid marginRight={8}>{text}</Badge>;
}
