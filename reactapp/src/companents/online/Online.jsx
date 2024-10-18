import "./online.css";

export default function Online({ user }) {
  return (
    <li className="rightBarFriend">
      <div className="rigthbarProfileImgContainer">
        <img src={user.profilePicture} alt="" className="rihgtbarProfileImg" />
        <span className="rightBarOnline"></span>
        <span className=""></span>
      </div>

      <span className="rightbarUserName">{user.username}</span>
    </li>
  );
}
