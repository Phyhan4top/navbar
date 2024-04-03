import React from "react";
import {
  Happy,
  Neutral,
  Sad,
} from "../../atoms/Review Feelings/ReviewsFeelings";
import ReviewCard from "../../atoms/Review Card/ReviewCard";

const Reviews = () => {
  const reviews = [
    {
      name: "Alfredo",
      date: "5th February,2023 3PM",
      review:
        "Amazing place and experience! We had a great time. The kids loved it.",
      react: <Happy />,
    },
    {
      name: "Alfredo",
      date: "5th February,2023 3PM",
      review:
        "Amazing place and experience! We had a great time. The kids loved it.",
      react: <Neutral />,
    },
    {
      name: "Alfredo",
      date: "5th February,2023 3PM",
      review:
        "Amazing place and experience! We had a great time. The kids loved it.",
      react: <Sad />,
    },
    {
      name: "Alfredo",
      date: "5th February,2023 3PM",
      review:
        "Amazing place and experience! We had a great time. The kids loved it.",
      react: <Happy />,
    },
    {
      name: "Alfredo",
      date: "5th February,2023 3PM",
      review:
        "Amazing place and experience! We had a great time. The kids loved it.",
      react: <Neutral />,
    },
    {
      name: "Alfredo",
      date: "5th February,2023 3PM",
      review:
        "Amazing place and experience! We had a great time. The kids loved it.",
      react: <Sad />,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-[48px] w-full h-[510px] py-8 border-[#dcdcdc] border-b-[1px]">
      <div className="flex flex-wrap justify-between gap-10 ">
        {reviews.map((el) => {
          return (
            <ReviewCard
              name={el.name}
              date={el.date}
              review={el.review}
              react={el.react}
            />
          );
        })}
      </div>
      <button className="h-[48px] p-2 rounded-lg w-[154px] border-[#dcdcdc] border-[1px]">
        View all 15 reviews
      </button>
    </div>
  );
};

export default Reviews;
