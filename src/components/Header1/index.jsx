import React from "react";

import { Img, Text } from "components";

const Header1 = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-14"
          src="images/img_group1000006364.svg"
          alt="group1000006364"
        />
        <div className="flex h-12 md:h-[52px] justify-end ml-52 md:ml-[0] md:mt-0 my-1 relative w-[36%] md:w-full">
          <Text
            className="capitalize mb-[11px] ml-5 mt-auto text-base text-white-A700_87 tracking-[1.60px]"
            size="txtSatoshiMedium16WhiteA70087"
          >
            Search...
          </Text>
          <div className="absolute flex flex-col h-full inset-[0] items-end justify-center m-auto outline outline-[1px] outline-white-A700_75 p-2.5 rounded-[16px] w-full">
            <Img
              className="h-6 mr-2.5 mt-1 w-6"
              src="images/img_search.svg"
              alt="search_One"
            />
          </div>
        </div>
        <div className="flex flex-row gap-1.5 items-end justify-center md:ml-[0] ml-[134px] md:mt-0 my-[13px] w-[9%] md:w-full">
          <Img
            className="h-[30px] w-[30px]"
            src="images/img_file_indigo_a700_30x30.svg"
            alt="file"
          />
          <Text
            className="capitalize mb-0.5 mt-[5px] text-base text-center text-white-A700 tracking-[1.60px]"
            size="txtSatoshiBold16"
          >
            $3421.00
          </Text>
        </div>
        <Img
          className="h-[31px] md:ml-[0] ml-[30px] md:mt-0 my-3 w-[31px]"
          src="images/img_notification.svg"
          alt="notification"
        />
        <div className="flex flex-row gap-[7px] items-center justify-between md:ml-[0] ml-[30px] md:mt-0 my-2 w-[13%] md:w-full">
          <Img
            className="h-10 md:h-auto rounded-[50%] w-10"
            src="images/img_ellipse3.png"
            alt="ellipseThree"
          />
          <Text
            className="capitalize text-base text-center text-white-A700 tracking-[1.60px]"
            size="txtSatoshiMedium16WhiteA700"
          >
            Adam James
          </Text>
          <Img
            className="h-[5px]"
            src="images/img_vector10.svg"
            alt="vectorTen"
          />
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
