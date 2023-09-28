import React from "react";

import { Img, Text } from "components";

const RockitlyLandingpageColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start mb-1.5 mt-[38px] w-full">
          {!!props?.userimage ? (
            <Img
              className="h-[42px] ml-0.5 md:ml-[0] w-[42px]"
              alt="icon"
              src="props?.userimage"
            />
          ) : null}
          <Text
            className="mt-[31px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
            size="txtSatoshiBold22"
          >
            {props?.banktransfertext}
          </Text>
          <Text
            className="leading-[26.00px] mt-2 text-[17px] text-white-A700_87 w-full"
            size="txtSatoshiMedium17"
          >
            {props?.loremipsumtext}
          </Text>
        </div>
      </div>
    </>
  );
};

RockitlyLandingpageColumn.defaultProps = {
  banktransfertext: "Bank Transfer",
  loremipsumtext:
    "Lorem ipsum dolor sit consectetur adipiscing elit, sed do eiusmod tempor incididunt",
};

export default RockitlyLandingpageColumn;
