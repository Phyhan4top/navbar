import React from "react";

const Condition = () => {
  return (
    <div className="mt-5 flex justify-start items-center w-[772px] border-[#dcdcdc] border-b-[2px] h-[103px]">
      <div className=" flex justify-between w-[70%]">
        <div className="flex gap-2">
          <div className="gap-2 items-center justify-center text-[16px] text-[#292929] font-[DMSans] font-[500]">
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM10.7627 19.9049C10.1039 18.2879 8.22077 13.9069 7 13.5C6.14617 13.2154 4.96833 13.2548 4.112 13.3416C4.68235 16.7196 7.37002 19.3781 10.7627 19.9049ZM4.32945 9.72049C5.31094 6.41274 8.37371 4 12 4C15.6263 4 18.6891 6.41274 19.6706 9.72049C18.0917 9.42464 15.2582 9 12 9C8.74181 9 5.90825 9.42464 4.32945 9.72049ZM19.888 13.3416C19.0317 13.2548 17.8538 13.2154 17 13.5C15.7792 13.9069 13.8961 18.2879 13.2373 19.9049C16.63 19.3781 19.3176 16.7196 19.888 13.3416Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <p className="text-[16px] text-[#292929] font-[DMSans] font-[600]">
              BMW
            </p>
            <small className="text-[16px] text-[#656565] font-[DMSans] font-normal">
              Brand/Manufacture
            </small>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-[#292929] font-[DMSans] font-[500]">
            <svg
              className="inline"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect x="2" y="6" width="20" height="12" rx="6" fill="black" />
              <circle cx="16" cy="12" r="5" fill="white" />
            </svg>
          </div>
          <div className="flex flex-col">
            <p className="text-[16px] text-[#292929] font-[DMSans] font-[600]">
              Automatic
            </p>
            <small className="flex text-[16px]  text-[#656565] font-[DMSans] font-normal">
              Transmission type
            </small>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="text-[16px] text-[#292929] font-[DMSans] font-[500]">
            <svg
              className="inline"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.0031 16.4531L11.2031 21.3375C11.1499 21.481 11.0539 21.6048 10.9282 21.6922C10.8025 21.7796 10.6531 21.8265 10.5 21.8265C10.3469 21.8265 10.1975 21.7796 10.0718 21.6922C9.94608 21.6048 9.85016 21.481 9.79688 21.3375L7.99688 16.4531C7.95889 16.35 7.89898 16.2564 7.82129 16.1787C7.7436 16.101 7.64998 16.0411 7.54688 16.0031L2.6625 14.2031C2.51897 14.1498 2.39518 14.0539 2.30776 13.9282C2.22035 13.8025 2.17349 13.6531 2.17349 13.5C2.17349 13.3469 2.22035 13.1974 2.30776 13.0717C2.39518 12.9461 2.51897 12.8501 2.6625 12.7968L7.54688 10.9968C7.64998 10.9589 7.7436 10.899 7.82129 10.8213C7.89898 10.7436 7.95889 10.6499 7.99688 10.5468L9.79688 5.66247C9.85016 5.51894 9.94608 5.39515 10.0718 5.30773C10.1975 5.22032 10.3469 5.17346 10.5 5.17346C10.6531 5.17346 10.8025 5.22032 10.9282 5.30773C11.0539 5.39515 11.1499 5.51894 11.2031 5.66247L13.0031 10.5468C13.0411 10.6499 13.101 10.7436 13.1787 10.8213C13.2564 10.899 13.35 10.9589 13.4531 10.9968L18.3375 12.7968C18.481 12.8501 18.6048 12.9461 18.6922 13.0717C18.7797 13.1974 18.8265 13.3469 18.8265 13.5C18.8265 13.6531 18.7797 13.8025 18.6922 13.9282C18.6048 14.0539 18.481 14.1498 18.3375 14.2031L13.4531 16.0031C13.35 16.0411 13.2564 16.101 13.1787 16.1787C13.101 16.2564 13.0411 16.35 13.0031 16.4531V16.4531Z"
                stroke="#191C1F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 1.5V6"
                stroke="#191C1F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.75 3.75H14.25"
                stroke="#191C1F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 6.75V9.75"
                stroke="#191C1F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.5 8.25H19.5"
                stroke="#191C1F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <p className="text-[16px] text-[#292929] font-[DMSans] font-[600]">
              Brand New
            </p>
            <small className="flex text-[16px] text-[#656565] font-[DMSans] font-normal">
              Condition
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Condition;
