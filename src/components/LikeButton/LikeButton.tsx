import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";

import "./LikeButton.css";

const LikeButton = () => {
  const [liked, setLiked] = useState<boolean>(false);
  const showHeart = () => {
    if (liked) {
      return <FaHeart className="heart" />;
    } else {
      return <FaRegHeart className="heart" />;
    }
  };

  const like = () => {
    if (liked) {
      setLiked(false);
      console.log("unliked");
    } else {
      setLiked(true);
      console.log("liked");
    }
  };

  return <div onClick={like}>{showHeart()}</div>;
};
export default LikeButton;
