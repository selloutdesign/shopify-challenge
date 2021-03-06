import React from "react";
import moment from "moment";
import LikeButton from "./LikeButton";

const ImageCard = ({ image }) => {
  const truncate = (input) =>
    input?.length > 300 ? `${input.substring(0, 254)}...` : input;

  if (image.hasOwnProperty("links")) {
    return (
      <div className="rounded overflow-hidden shadow-lg">
        <div className="image-container">
          <img src={image.links[0].href} alt="" className="sq-img" />
        </div>
        <div className="grid grid-cols-5 p-5">
          <div className="col-span-4">
            <p className="text-gray-900 mt-2 text-lg">{image.data[0].title}</p>
            <p className="text-sm">
              {moment(image.data[0].date_created).format("MMMM Do YYYY")}
            </p>
          </div>
          <div className="col-span-1 text-center	">
            <LikeButton />
          </div>
          <div className="col-span-5 pt-1">
            <p className="text-sm">{truncate(image.data[0].description)}</p>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default ImageCard;
