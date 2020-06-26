import { Pagination as Pgnt } from "antd";

export default function Pagination(props) {
  return (
    <div className="pagination">
      <Pgnt {...props} />
      <style jsx>{`
        .pagination {
          display: inline-block;
        }
      `}</style>
      <style global jsx>{`
        .pagination .ant-pagination-item-active {
          border-color: #ffcc00;
        }
        .pagination .ant-pagination-item-active a {
          color: #ffcc00;
        }
        .pagination .ant-pagination-item:focus a,
        .pagination .ant-pagination-item:hover a {
          color: #ffcc00;
        }
        .pagination .ant-pagination-prev:focus .ant-pagination-item-link,
        .pagination .ant-pagination-next:focus .ant-pagination-item-link,
        .pagination .ant-pagination-prev:hover .ant-pagination-item-link,
        .pagination .ant-pagination-next:hover .ant-pagination-item-link {
          color: #ffcc00;
        }
        .pagination
          .ant-pagination-jump-prev
          .ant-pagination-item-container
          .ant-pagination-item-link-icon,
        .pagination
          .ant-pagination-jump-next
          .ant-pagination-item-container
          .ant-pagination-item-link-icon {
          color: #ffcc00;
        }
      `}</style>
    </div>
  );
}
