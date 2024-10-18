import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Lamasocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="serchIcon" />
          <input
            placeholder="Search for friend, post"
            className="searchImput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcone">
          <div className="topbarIconeItem">
            <Person />
            <span className="topbarIconeBadge">1</span>
          </div>
          <div className="topbarIconeItem">
            <Chat />
            <span className="topbarIconeBadge">2</span>
          </div>{" "}
          <div className="topbarIconeItem">
            <Notifications />
            <span className="topbarIconeBadge">1</span>
          </div>
        </div>
        <img src="assets/person/1.jpeg" className="topbarImg" />
      </div>
    </div>
  );
}
