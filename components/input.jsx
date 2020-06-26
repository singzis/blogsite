import { Input as Inp } from "antd";

export default function Input(props) {
  return (
    <div className="search-input">
      <Inp {...props} />
      <style global jsx>{`
        .search-input .ant-input-affix-wrapper:hover,
        .search-input .ant-input-affix-wrapper:focus {
          border-color: #ffcc00;
        }

        .search-input .ant-input-affix-wrapper-focused {
          border-color: #ffcc00;
          box-shadow: 0 0 0 2px rgba(255, 180, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
