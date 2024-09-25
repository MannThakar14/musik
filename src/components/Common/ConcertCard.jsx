import { Heart } from "lucide-react";
import comment from "../../assets/imgs/concert_imgs/04_comments.svg";

const ConcertCard = ({ likes, comments, heading, image, hashtags }) => {
  return (
    <>
      <div className="w-[370px] h-[506px]">
        <img src={image} alt="" />
        <div>
          <div className="flex gap-10 mt-6">
            <div className="flex gap-2">
              <Heart />
              <h2 className="font-bold font-montserrat text-base">{likes}</h2>
            </div>
            <div className="flex gap-2">
              <img src={comment} alt="" srcset="" />
              <h2 className="font-bold font-montserrat text-base">
                {comments}
              </h2>
            </div>
          </div>
          <div>
            <h2 className="mt-2 font-normal font-raleway text-base">
              {heading}
            </h2>
            <p className="opacity-50 mt-2 font-normal font-raleway text-[#222222] text-base">
              {hashtags}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConcertCard;
