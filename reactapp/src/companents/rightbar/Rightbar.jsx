import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="BirthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdeyText">
            <b>Ahmet Çalışkan</b> and <b>other friends</b> have a birthdey todey
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friend</h4>
        <ul className="rightbarFriendList">
          {Users.map((p) => {
            return <Online key={p.id} user={p} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">City:</div>
          <div className="rightbarInfoValue">New York</div>
        </div>
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">From:</div>
          <div className="rightbarInfoValue">Madrid</div>
        </div>{" "}
        <div className="rightbarInfoItem">
          <div className="rightbarInfoKey">Relationship:</div>
          <div className="rightbarInfoValue">Single</div>
        </div>
        <h4 className="rightbarInfoItem">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/1.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">Batuhan Salkım</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/2.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">Batuhan Salkım</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/3.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">Batuhan Salkım</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="assets/person/4.jpeg"
              alt=""
            />
            <span className="rightbarFollowingName">Batuhan Salkım</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  );
}
