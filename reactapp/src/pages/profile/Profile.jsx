import Topbar from "../../companents/topbar/Topbar";
import Sidebar from "../../companents/sidebar/Sidebar";
import Feed from "../../companents/feed/Feed";
import Rightbar from "../../companents/rightbar/Rightbar";

import "./profile.css";

export default function Profile() {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profilrRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfe">
              <h4 className="profileInfoName">Ahmet Çalışkan</h4>
              <span className="profileInfoDesc">Hello My Friend</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </div>
  );
}
