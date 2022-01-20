import React, { useState } from "react";
import { ThumbUpIcon } from "@heroicons/react/solid";

// TODO record likes to local storage by passing image id
const LikeButton = () => {
  const [isLiked, setLike] = useState(false);
  const handleLike = () => {
    if (!isLiked) {
      setLike(true);
    } else {
      setLike(false);
    }
  };
  return (
    <button>
      <ThumbUpIcon
        onClick={handleLike}
        className={`h-8 w-8 ${isLiked ? "text-red-500" : ""}`}
      />
    </button>
  );
};

export default LikeButton;
