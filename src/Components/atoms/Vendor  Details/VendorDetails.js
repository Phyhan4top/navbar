import React from "react";

const VendorDetails = () => {
  return (
    <div
      className="flex gap-3 border-[
#dcdcdc] border-b-[1px] w-full h-[200px] justify-start mt-5"
    >
      <img src="images/leave.png" className="w-[63px] h-[63px] rounded-2xl" alt="leave" />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col h-[62px] justify-between">
          <div className="text-2xl font-bold text-[#000000] font-[DMSans]">
            Ads by Leaf Buy
          </div>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 text-[16px] font-normal text-[#656565] font-[DMSans]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.45 10.79 7.56 8.84 7.56 6.44C7.56 3.99 9.54 2 12 2C14.45 2 16.44 3.99 16.44 6.44C16.43 8.84 14.54 10.79 12.16 10.87Z"
                  stroke="#656565"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
                  stroke="#656565"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Joined 8yrs 4m ago</p>
            </div>
            <div className="flex items-center gap-2 text-[16px] font-normal text-[#656565] font-[DMSans]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3.75 10.7531V5.25C3.75 5.05109 3.82902 4.86032 3.96967 4.71967C4.11032 4.57902 4.30109 4.5 4.5 4.5H19.5C19.6989 4.5 19.8897 4.57902 20.0303 4.71967C20.171 4.86032 20.25 5.05109 20.25 5.25V10.7531C20.25 18.6281 13.5656 21.2344 12.2344 21.675C12.0831 21.731 11.9169 21.731 11.7656 21.675C10.4344 21.2344 3.75 18.6281 3.75 10.7531Z"
                  stroke="#656565"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.125 9.75L10.6219 15L7.875 12.375"
                  stroke="#656565"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Identity verified</p>
            </div>
            <div className="flex items-center gap-2 text-[16px] font-normal text-[#656565] font-[DMSans]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.99 8.96002H7.01001"
                  stroke="#656565"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 7.28003V8.96002"
                  stroke="#656565"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.5 8.94C14.5 13.24 11.14 16.72 7 16.72"
                  stroke="#656565"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 16.72C15.2 16.72 13.6 15.76 12.45 14.25"
                  stroke="#656565"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="#656565"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p> English, Yoruba</p>
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          <button className="flex justify-center items-center gap-1 rounded-lg bg-[#70ffc4] text-lg font-[500] text-center font-[DMSans] text-[#292929] py-2 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6.9 20.6C8.4 21.5 10.2 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 13.8 2.5 15.5 3.3 17L2.44044 20.306C2.24572 21.0549 2.93892 21.7317 3.68299 21.5191L6.9 20.6Z"
                stroke="#212121"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 14.8485C16.5 15.0105 16.4639 15.177 16.3873 15.339C16.3107 15.501 16.2116 15.654 16.0809 15.798C15.86 16.041 15.6167 16.2165 15.3418 16.329C15.0714 16.4415 14.7784 16.5 14.4629 16.5C14.0033 16.5 13.512 16.392 12.9937 16.1715C12.4755 15.951 11.9572 15.654 11.4434 15.2805C10.9251 14.9025 10.4339 14.484 9.9652 14.0205C9.501 13.5525 9.08187 13.062 8.70781 12.549C8.33826 12.036 8.04081 11.523 7.82449 11.0145C7.60816 10.5015 7.5 10.011 7.5 9.543C7.5 9.237 7.55408 8.9445 7.66224 8.6745C7.77041 8.4 7.94166 8.148 8.18052 7.923C8.46895 7.6395 8.78443 7.5 9.11793 7.5C9.24412 7.5 9.37031 7.527 9.48297 7.581C9.60015 7.635 9.70381 7.716 9.78493 7.833L10.8305 9.3045C10.9116 9.417 10.9702 9.5205 11.0108 9.6195C11.0513 9.714 11.0739 9.8085 11.0739 9.894C11.0739 10.002 11.0423 10.11 10.9792 10.2135C10.9206 10.317 10.835 10.425 10.7268 10.533L10.3843 10.8885C10.3348 10.938 10.3122 10.9965 10.3122 11.0685C10.3122 11.1045 10.3167 11.136 10.3257 11.172C10.3393 11.208 10.3528 11.235 10.3618 11.262C10.4429 11.4105 10.5826 11.604 10.7809 11.838C10.9837 12.072 11.2 12.3105 11.4344 12.549C11.6778 12.7875 11.9121 13.008 12.151 13.2105C12.3853 13.4085 12.5791 13.5435 12.7323 13.6245C12.7549 13.6335 12.7819 13.647 12.8135 13.6605C12.8495 13.674 12.8856 13.6785 12.9261 13.6785C13.0028 13.6785 13.0613 13.6515 13.1109 13.602L13.4534 13.2645C13.5661 13.152 13.6743 13.0665 13.7779 13.0125C13.8816 12.9495 13.9852 12.918 14.0979 12.918C14.1835 12.918 14.2737 12.936 14.3728 12.9765C14.472 13.017 14.5756 13.0755 14.6883 13.152L16.18 14.2095C16.2972 14.2905 16.3783 14.385 16.4279 14.4975C16.473 14.61 16.5 14.7225 16.5 14.8485Z"
                stroke="#212121"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
            </svg>
            <p>WhatsApp Me</p>
          </button>
          <button className="flex justify-center items-center gap-1 rounded-lg bg-[#292929] text-lg font-[500] text-center font-[DMSans] text-[#fefefe] py-2 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M22.47 18.33C22.47 18.69 22.39 19.06 22.22 19.42C22.05 19.78 21.83 20.12 21.54 20.44C21.05 20.98 20.51 21.37 19.9 21.62C19.3 21.87 18.65 22 17.95 22C16.93 22 15.84 21.76 14.69 21.27C13.54 20.78 12.39 20.12 11.25 19.29C10.1 18.45 9.01 17.52 7.97 16.49C6.94 15.45 6.01 14.36 5.18 13.22C4.36 12.08 3.7 10.94 3.22 9.81C2.74 8.67 2.5 7.58 2.5 6.54C2.5 5.86 2.62 5.21 2.86 4.61C3.1 4 3.48 3.44 4.01 2.94C4.65 2.31 5.35 2 6.09 2C6.37 2 6.65 2.06 6.9 2.18C7.16 2.3 7.39 2.48 7.57 2.74L9.89 6.01C10.07 6.26 10.2 6.49 10.29 6.71C10.38 6.92 10.43 7.13 10.43 7.32C10.43 7.56 10.36 7.8 10.22 8.03C10.09 8.26 9.9 8.5 9.66 8.74L8.9 9.53C8.79 9.64 8.74 9.77 8.74 9.93C8.74 10.01 8.75 10.08 8.77 10.16C8.8 10.24 8.83 10.3 8.85 10.36C9.03 10.69 9.34 11.12 9.78 11.64C10.23 12.16 10.71 12.69 11.23 13.22C11.77 13.75 12.29 14.24 12.82 14.69C13.34 15.13 13.77 15.43 14.11 15.61C14.16 15.63 14.22 15.66 14.29 15.69C14.37 15.72 14.45 15.73 14.54 15.73C14.71 15.73 14.84 15.67 14.95 15.56L15.71 14.81C15.96 14.56 16.2 14.37 16.43 14.25C16.66 14.11 16.89 14.04 17.14 14.04C17.33 14.04 17.53 14.08 17.75 14.17C17.97 14.26 18.2 14.39 18.45 14.56L21.76 16.91C22.02 17.09 22.2 17.3 22.31 17.55C22.41 17.8 22.47 18.05 22.47 18.33Z"
                stroke="#FEFEFE"
                stroke-width="1.5"
                stroke-miterlimit="10"
              />
            </svg>
            <p>Reveal Contact</p>
          </button>
          <button className="flex justify-center items-center gap-1 rounded-lg bg-[#fdc174] text-lg font-[500] text-center font-[DMSans] text-[#292929] py-2 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5.26875 9.75C5.2675 8.86086 5.44217 7.98025 5.78271 7.1589C6.12325 6.33755 6.62292 5.59169 7.25294 4.96428C7.88297 4.33687 8.6309 3.8403 9.45366 3.50318C10.2764 3.16606 11.1577 2.99505 12.0469 3C15.7594 3.02813 18.7312 6.1125 18.7312 9.83438V10.5C18.7312 13.8563 19.4344 15.8063 20.0531 16.875C20.1188 16.9888 20.1535 17.1179 20.1536 17.2493C20.1537 17.3808 20.1193 17.5099 20.0538 17.6239C19.9883 17.7378 19.894 17.8325 19.7803 17.8985C19.6667 17.9645 19.5377 17.9995 19.4062 18H4.59375C4.46232 17.9995 4.33332 17.9645 4.21967 17.8985C4.10603 17.8325 4.01172 17.7378 3.94621 17.6239C3.8807 17.5099 3.84627 17.3808 3.84639 17.2493C3.84651 17.1179 3.88116 16.9888 3.94687 16.875C4.56562 15.8063 5.26875 13.8563 5.26875 10.5V9.75Z"
                stroke="#191C1F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 18V18.75C9 19.5456 9.31607 20.3087 9.87868 20.8713C10.4413 21.4339 11.2044 21.75 12 21.75C12.7956 21.75 13.5587 21.4339 14.1213 20.8713C14.6839 20.3087 15 19.5456 15 18.75V18"
                stroke="#191C1F"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p> Follow Me</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorDetails;
