import React from "react";

import { Button, Img, Line, List, Radio, Text } from "components";
import DashboardTradeHistoryColumn from "components/DashboardTradeHistoryColumn";
import Header1 from "components/Header1";
import P2pTradingStack from "components/P2pTradingStack";

const DashboardrecenttradepartnerPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-satoshi h-[1400px] justify-end mx-auto relative w-full">
        <div className="sm:h-[7223px] h-[7226px] md:h-[7489px] mt-auto mx-auto md:px-5 w-full">
          <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
            <div className="h-[864px] mx-auto w-full">
              <Img
                className="h-[864px] m-auto object-cover w-full"
                src="images/img_rectangle40003_15.png"
                alt="rectangle40003"
              />
              <Img
                className="absolute h-[864px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_rectangle40008_13.png"
                alt="rectangle40008"
              />
            </div>
            <Img
              className="h-[6376px] mt-[-14px] mx-auto object-cover w-full z-[1]"
              src="images/img_rectangle40011_14.png"
              alt="rectangle40011"
            />
          </div>
          <div className="absolute bg-gradient1  flex flex-col h-full inset-[0] items-start justify-center m-auto pl-1 py-1 w-full">
            <Header1 className="flex md:flex-col flex-row font-satoshi md:gap-5 items-center justify-center md:ml-[0] ml-[94px] mt-5 w-full" />
            <Line className="bg-white-A700_7e h-px mt-[17px] w-full" />
            <div className="flex flex-row font-satoshi gap-2.5 items-start justify-start md:ml-[0] ml-[93px] mt-[13px] w-[12%] md:w-full">
              <Text
                className="text-sm text-white-A700_90"
                size="txtSatoshiRegular14WhiteA70090"
              >
                Home
              </Text>
              <Img
                className="h-1.5 mt-[7px]"
                src="images/img_vector52.svg"
                alt="vectorFiftyTwo"
              />
              <Text
                className="text-sm text-white-A700"
                size="txtSatoshiRegular14"
              >
                Recent Trade History
              </Text>
            </div>
            <Text
              className="capitalize mb-[7026px] md:ml-[0] ml-[480px] mt-1 sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
              size="txtChillaxRegular41"
            >
              Recent Trade History
            </Text>
          </div>
          <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] bottom-[16%] h-[789px] right-[0] rotate-[179deg] w-[15%]">
            <div className="h-[664px] ml-auto my-auto w-4/5">
              <Img
                className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_49.png"
                alt="ellipse264"
              />
              <Img
                className="absolute h-[633px] inset-[0] justify-center m-auto object-cover rounded-[93px]"
                src="images/img_rectangle26.png"
                alt="rectangleTwentySix"
              />
            </div>
            <Img
              className="absolute h-[789px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_noise_789x239.png"
              alt="noise"
            />
          </div>
          <P2pTradingStack className="absolute md:h-[1177px] h-[872px] inset-x-[0] mx-auto top-[10%] w-full" />
        </div>
        <div className="absolute flex md:flex-col flex-row gap-[49px] inset-x-[0] items-start justify-start max-w-[1404px] mx-auto md:px-5 top-[11%] w-full">
          <DashboardTradeHistoryColumn
            className="flex md:flex-1 flex-col items-center justify-start mb-[23px] w-1/4 md:w-full"
            usermenuimage="images/img_menu_white_a700_27x27.svg"
          />
          <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border58 flex flex-col items-center justify-start md:mt-0 mt-[58px] p-[35px] sm:px-5 rounded-[10px]">
            <Text
              className="capitalize mb-[493px] text-[17px] text-center text-white-A700"
              size="txtSatoshiRegular17"
            >
              No recent trades found
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardrecenttradepartnerPage;
