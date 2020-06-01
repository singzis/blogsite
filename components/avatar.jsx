export default function Avatar() {
  return (
    <div className="avatar">
      <img src="/images/avatar_256.jpg" alt="avatar" />
      <style jsx>
        {`
          .avatar {
            width: 64px;
            height: 64px;
            border-radius: 100%;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
}
