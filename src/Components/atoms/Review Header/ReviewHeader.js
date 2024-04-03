import React from 'react'
import { AllReviews, HappyReviews, NeutralReviews, SadReviews } from '../Review Feelings/ReviewsFeelings'

const ReviewHeader = () => {
  return (
    <div className="h-[160px] w-full flex flex-col justify-start gap-4 pt-8 pb-4">
      <div className="flex justify-between items-center h-12 p-0">
        <h3 className="font-bold text-left text-[#292929] text-[21.3px]">
          Reviews
        </h3>
        <div className="font-[500] text-left text-[#292929] text-lg flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
              stroke="#292929"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 10.125C9 10.3321 8.83211 10.5 8.625 10.5C8.41789 10.5 8.25 10.3321 8.25 10.125C8.25 9.91789 8.41789 9.75 8.625 9.75C8.83211 9.75 9 9.91789 9 10.125Z"
              fill="#292929"
              stroke="#292929"
              stroke-width="1.5"
            />
            <path
              d="M15.375 11.25C15.9963 11.25 16.5 10.7463 16.5 10.125C16.5 9.50368 15.9963 9 15.375 9C14.7537 9 14.25 9.50368 14.25 10.125C14.25 10.7463 14.7537 11.25 15.375 11.25Z"
              fill="#292929"
            />
            <path
              d="M15.9 14.25C15.5035 14.9331 14.9346 15.5 14.2502 15.8941C13.5657 16.2882 12.7898 16.4956 12 16.4956C11.2102 16.4956 10.4343 16.2882 9.74984 15.8941C9.06541 15.5 8.49648 14.9331 8.10001 14.25"
              stroke="#292929"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>Give Feedback</p>
        </div>
      </div>
      <div className='flex justify-start items-start gap-4 p-0'>
        <AllReviews/>
        <HappyReviews/>
        <NeutralReviews/>
        <SadReviews/>
      </div>
    </div>
  );
}

export default ReviewHeader
