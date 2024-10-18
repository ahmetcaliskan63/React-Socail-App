import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

export default function share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="sharebottom">
          <div className="shareOptions">
            <div className="shareoption">
              <PermMedia htmlColor="tomato" className="shareIcone" />
              <span className="shareoptionText">Photo or Video</span>
            </div>
            <div className="shareoption">
              <Label htmlColor="blue" className="shareIcone" />
              <span className="shareoptionText">Tag</span>
            </div>{" "}
            <div className="shareoption">
              <Room htmlColor="green" className="shareIcone" />
              <span className="shareoptionText">Location</span>
            </div>{" "}
            <div className="shareoption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcone" />
              <span className="shareoptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
