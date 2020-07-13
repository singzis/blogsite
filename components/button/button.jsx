import styles from "./button.module.css";

export default function BlogBtn(props) {
  return (
    <button {...props} className={styles["blog_btn-button"]}>
      {props.children}
    </button>
  );
}
