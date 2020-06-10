import { parseISO, format } from "date-fns";
import { zhCN } from "date-fns/locale";

const locale = {
  locale: zhCN,
};

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>{format(date, "yyyy年MM月dd日", locale)}</time>
  );
}
