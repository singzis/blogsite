import { Input } from "antd";
import styles from "./input.module.css";

export default function InputComp(props) {
  return (
    <div className={styles[`search-input`]}>
      <Input {...props} />
    </div>
  );
}
