import React from "react";
const ReviewCard = ({ name, date, review, react }) => {
 
  return (
    <div className="w-[420px] h-[151px] flex gap-3">
      <img
        src="images/reviewUser.png"
        className="w-[63px] h-[63px] rounded-2xl"
        alt="leave"
      />

      <div className="flex flex-col justify-between">


        <div className="flex flex-col h-[62px]r">

          <div className="flex items-center gap-[16px] text-2xl font-bold text-[#000000] font-[DMSans]">
            <p>{name}</p>
            {react}
          </div>


          <div className="flex flex-col gap-5 text-[16px] font-normal text-[#656565] font-[DMSans]">

            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                  stroke="#656565"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001"
                  stroke="#656565"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>{date}</p>
            </div>

            <p>{review}
            </p>

          </div>

        </div>
        <a href="#" className="underline text-[16px] font-[500] text-[#292929] font-[DMSans]">View More</a>
      </div>
    </div>
  );
};

export default ReviewCard;
