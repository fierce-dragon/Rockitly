import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import DashboardTradeHistoryColumn from "components/DashboardTradeHistoryColumn";
import Header1 from "components/Header1";
import P2pTradingStack from "components/P2pTradingStack";

const DashboardtradehistoryOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-satoshi h-[1649px] justify-end mx-auto relative w-full">
        <div className="flex flex-col mt-auto mx-auto md:px-5 w-full">
          <div className="h-[864px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
            <Img
              className="h-[864px] m-auto object-cover w-full"
              src="images/img_rectangle40003_14.png"
              alt="rectangle40003"
            />
            <Img
              className="absolute h-[864px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_rectangle40008_12.png"
              alt="rectangle40008"
            />
          </div>
          <Img
            className="h-[6376px] mt-[-14px] mx-auto object-cover w-full z-[1]"
            src="images/img_rectangle40011_13.png"
            alt="rectangle40011"
          />
          <div className="bg-gradient1  flex flex-col items-center justify-start mb-auto mt-[-NaNpx] mx-auto pl-1 py-1 w-full z-[1]">
            <div className="flex flex-col items-start justify-start mb-[6452px] mt-5 w-full">
              <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[94px] w-full" />
              <Line className="bg-white-A700_7e h-px mt-[17px] w-full" />
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[93px] mt-[13px] w-[41%] md:w-full">
                <div className="flex flex-row gap-2.5 items-start justify-start w-[22%] md:w-full">
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
                    Trade History
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[49px] items-start justify-between mt-1 w-full">
                  <DashboardTradeHistoryColumn
                    className="flex flex-col font-satoshi items-center justify-start md:mt-0 mt-2.5"
                    userclockimage="images/img_clock.svg"
                    userrecenttradepartnerstext="Recent Trade Partners"
                  />
                  <Text
                    className="capitalize sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
                    size="txtChillaxRegular41"
                  >
                    Trade History
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] mb-[1130px] ml-auto mt-[-NaNpx] rotate-[179deg] w-[15%] z-[1]">
            <div className="h-[664px] ml-auto my-auto w-4/5">
              <Img
                className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_48.png"
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
          <P2pTradingStack className="h-[872px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]" />
        </div>
        <div className="absolute bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border54 flex flex-col font-chillax items-start justify-center p-[25px] md:px-5 right-[6%] rounded-[10px] top-[13%] w-[64%]">
          <Text
            className="mt-2 text-[17px] text-white-A700"
            size="txtChillaxRegular17"
          >
            You are viewing all trades for the last 14 days
          </Text>
          <div className="flex flex-col font-satoshi gap-5 items-center justify-start mt-8 w-full">
            <Input
              name="group1000006667"
              placeholder="Filters"
              className="capitalize p-0 placeholder:text-white-A700 text-[19px] text-left w-full"
              wrapClassName="flex w-full"
              suffix={
                <Img
                  className="h-[29px] ml-[35px] my-auto"
                  src="images/img_settings_white_a700_29x29.svg"
                  alt="settings"
                />
              }
              shape="round"
              size="md"
              variant="outline"
              color="deep_purple_A400_4c_gray_50_00"
            ></Input>
            <Input
              name="group1000006668"
              placeholder="Export Trades"
              className="capitalize p-0 placeholder:text-white-A700 text-[19px] text-left w-full"
              wrapClassName="flex w-full"
              suffix={
                <Img
                  className="mt-auto mb-px h-[29px] ml-[35px]"
                  src="images/img_download.svg"
                  alt="download"
                />
              }
              shape="round"
              size="md"
              variant="outline"
              color="deep_purple_A400_4c_gray_50_00"
            ></Input>
            <Input
              name="group1000006669"
              placeholder="Completed Trades: 0% (trades out of 0)"
              className="capitalize p-0 placeholder:text-white-A700 text-[17px] text-left w-full"
              wrapClassName="bg-transparent flex w-full"
              suffix={
                <Img
                  className="h-[29px] ml-[35px] my-auto"
                  src="images/img_download.svg"
                  alt="download"
                />
              }
              shape="round"
              size="md"
              variant="outline"
              color="deep_purple_A400_4c_gray_50_00"
            ></Input>
          </div>
          <div className="font-satoshi h-[458px] md:h-[513px] my-[29px] relative w-full">
            <div className="absolute border border-solid deep_purple_A400_4c_gray_50_00_border55 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[198px] md:px-10 sm:px-5 rounded-[16px] w-full">
              <div className="flex flex-col gap-[11px] items-center justify-start mt-0.5">
                <Text
                  className="capitalize text-[17px] text-center text-white-A700"
                  size="txtSatoshiRegular17"
                >
                  <>You haven&#39;t traded yet.</>
                </Text>
                <Text
                  className="capitalize text-[17px] text-center text-indigo-A700"
                  size="txtSatoshiRegular17IndigoA700"
                >
                  Start Trading Now
                </Text>
              </div>
            </div>
            <div className="absolute bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border56 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-end mx-auto p-4 rounded-tl-[16px] rounded-tr-[16px] top-[0] w-full">
              <Text
                className="capitalize text-[17px] text-white-A700"
                size="txtSatoshiBold17"
              >
                My Past Trades
              </Text>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[148px] md:ml-[0] ml-[496px] md:mt-0 my-[3px] rounded-[7px]"
                rightIcon={
                  <Img
                    className="mb-0.5 ml-[13px]"
                    src="images/img_download_white_a700.svg"
                    alt="download"
                  />
                }
                color="indigo_A700"
                size="md"
                variant="fill"
              >
                <div className="font-bold text-[14.59px] text-left">
                  Export Trades
                </div>
              </Button>
              <div className="bg-indigo-A700 flex md:flex-1 flex-col items-center justify-end md:ml-[0] ml-[13px] md:mt-0 my-[3px] p-[9px] rounded-[7px] shadow-bs1 w-[16%] md:w-full">
                <div className="flex flex-row gap-[22px] items-start justify-between mt-0.5 w-[97%] md:w-full">
                  <Text
                    className="text-[14.59px] text-white-A700"
                    size="txtSatoshiBold1459"
                  >
                    Copy Details
                  </Text>
                  <Img
                    className="h-[18px] w-[17px]"
                    src="images/img_file_white_a700.svg"
                    alt="file_One"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardtradehistoryOnePage;
