import Topbar from "../../companents/topbar/Topbar";
import Sidebar from "../../companents/sidebar/Sidebar";
import Feed from "../../companents/feed/Feed";
import Rightbar from "../../companents/rightbar/Rightbar";
import "./home.css";
import "./home.css";

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}
