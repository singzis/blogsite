import { parseISO, format } from "date-fns";
import { zhCN } from "date-fns/locale";

const locale = {
  locale: zhCN,
};

export default function Date({ dateString, type = "yyyy年MM月dd日" }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, type, locale)}</time>;
}
