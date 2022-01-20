import React from "react";
import moment from "moment";
import LikeButton from "./LikeButton";

const ImageCard = ({ image }) => {
  const truncate = (input) =>
    input?.length > 300 ? `${input.substring(0, 254)}...` : input;

  if (image.hasOwnProperty("links")) {
    return (
      <div className="rounded overflow-hidden shadow-lg">
        <img src={image.links[0].href} alt="" className="w-full" />
        <p className="text-gray-900 mt-2 text-lg">{image.data[0].title}</p>
        <p className="text-sm">
          {moment(image.data[0].date_created).format("MMMM Do YYYY")}
        </p>
        <LikeButton />
        <p className="text-sm">{truncate(image.data[0].description)}</p>
      </div>
    );
  }
  return <div></div>;
};

export default ImageCard;
