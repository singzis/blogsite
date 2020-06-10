export default function Avatar() {
  return (
    <div className="avatar">
      <img src="/images/avatar_256.jpg" alt="avatar" />
      <style jsx>
        {`
          .avatar {
            width: 100%;
            height: 100%;
            min-width: 32px;
            min-height: 32px;
            max-width: 128px;
            max-height: 128px;
            border-radius: 100%;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  );
}
