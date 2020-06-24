import { Button } from "antd";
import styles from "./button.module.css";

export default function Btn(props) {
  return <Button {...props} className={styles[`blog-btn`]}>{props.children}</Button>;
}
