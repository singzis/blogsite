import { Badge } from "evergreen-ui";
import { INIT_COLOR } from "../lib/init";

export default function Tag({ text }) {
  return (
    <Badge color={INIT_COLOR[text]} isSolid marginRight={8}>
      {text}
    </Badge>
  );
}
