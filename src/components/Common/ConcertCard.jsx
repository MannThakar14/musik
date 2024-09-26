import { Heart } from "lucide-react";
import { CUSTOM_CAROUSEL_IMAGES } from "../../utils/images";

const ConcertCard = ({ likes, comments, heading, image, hashtags }) => {
  const { comment } = CUSTOM_CAROUSEL_IMAGES;
  return (
    <>
      <div className="w-[370px] h-[506px]">
        <img src={image} alt="concert Image" />
        <div>
          <div className="flex gap-10 mt-6">
            <div className="flex gap-2">
              <Heart />
              <h2 className="font-bold font-montserrat text-base">{likes}</h2>
            </div>
            <div className="flex gap-2">
              <img src={comment} alt="comment" srcset="" />
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
