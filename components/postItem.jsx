export default function PostItem() {
  return (
    <div className="item">
      <div className="title">这是文章标题</div>
      <div className="text">
        这是文章大概，这是文章大概，这是文章大概，这是文章大概，这是文章大概，
        这是文章大概，这是文章大概，这是文章大概，这是文章大概，这是文章大概，这是文章大概，这是文章大概，这是文章大概，这是文章大概，这是文章大概，
      </div>
      <div className="info">
        <span className="date">2020-06-01</span>
        <a className="read">read</a>
      </div>
      <style jsx>{`
        .item {
          margin-bottom: 25px;
          padding: 0 20px;
        }
        .item:hover {
           {
            /* box-shadow: 5px 5px 5px -5px black; */
          }
        }
        .title {
          font-size: 20px;
          margin-bottom: 5px;
        }
        .text {
          margin-bottom: 10px;
        }
        .info {
          display: flex;
        }
        .date {
          margin-right: 5px;
        }
        .read {
        }
      `}</style>
    </div>
  );
}
