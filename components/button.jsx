import { Button as Btn } from "antd";

export default function Button(props) {
  return (
    <>
      <Btn {...props} className="blog-btn">
        {props.children}
      </Btn>
      <style global jsx>{`
        .blog-btn {
          background-color: #1c1e26;
          border-color: #1c1e26;
        }
        .blog-btn:hover,
        .blog-btn:focus {
          background: #1c1e26;
          border-color: #1c1e26;
          color: #ffcc00;
        }
      `}</style>
    </>
  );
}
