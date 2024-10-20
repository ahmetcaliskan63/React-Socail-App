import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLikeed, setIsLiked] = useState(false);

  const likeHandle = () => {
    setLike(isLikeed ? like - 1 : like + 1);
    setIsLiked(!isLikeed);
  };

  return (
    <div className="post">
      <div className="postWrepper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id == post.userId)[0].profilePicture}
              alt=""
            />
            <spam className="postUserName">
              {Users.filter((u) => u.id == post.userId)[0].username}
            </spam>
            <spam className="postDate">{post.date} mins ago</spam>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="linkeIcone"
              src="assets/like.png"
              onClick={likeHandle}
              alt=""
            />
            <img
              className="linkeIcone"
              src="assets/heart.png"
              onClick={likeHandle}
              alt=""
            />
            <span className="postLikeConuter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
