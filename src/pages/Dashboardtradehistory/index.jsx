import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import DashboardTradeHistoryColumn from "components/DashboardTradeHistoryColumn";
import Header1 from "components/Header1";
import P2pTradingStack from "components/P2pTradingStack";

const DashboardtradehistoryPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-satoshi h-[1852px] justify-end mx-auto relative w-full">
        <div className="flex flex-col mt-auto mx-auto md:px-5 w-full">
          <div className="h-[864px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
            <Img
              className="h-[864px] m-auto object-cover w-full"
              src="images/img_rectangle40003_13.png"
              alt="rectangle40003"
            />
            <Img
              className="absolute h-[864px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_rectangle40008_11.png"
              alt="rectangle40008"
            />
          </div>
          <Img
            className="h-[6376px] mt-[-14px] mx-auto object-cover w-full z-[1]"
            src="images/img_rectangle40011_12.png"
            alt="rectangle40011"
          />
          <div className="bg-gradient1  flex flex-col items-center justify-start mb-auto mt-[-NaNpx] mx-auto pl-1 py-1 w-full z-[1]">
            <div className="flex flex-col items-center justify-start mb-[6373px] mt-5 w-full">
              <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
              <Line className="bg-white-A700_7e h-px mt-[17px] w-full" />
              <div className="flex flex-col items-start justify-start mt-[13px] w-[89%] md:w-full">
                <div className="flex flex-row gap-2.5 items-start justify-start w-[11%] md:w-full">
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
                <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border48 flex md:flex-col flex-row font-chillax md:gap-10 items-start justify-between mt-[5px] p-[3px] rounded-[11px] w-full">
                  <div className="flex flex-col items-center justify-start ml-3 md:ml-[0]">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <Img
                        className="h-[47px] md:h-auto object-cover w-[47px]"
                        src="images/img_partypopper1.png"
                        alt="partypopperOne"
                      />
                      <Text
                        className="capitalize text-white-A700 text-xl"
                        size="txtChillaxSemibold20"
                      >
                        HEY, Congratulations and welcome!
                      </Text>
                      <Text
                        className="lowercase text-[17px] text-white-A700"
                        size="txtChillaxMedium17"
                      >
                        <span className="text-white-A700 font-chillax uppercase text-left font-normal">
                          S
                        </span>
                        <span className="text-white-A700 font-chillax text-left font-normal">
                          tart with depositing crypto to your wallet balance!
                        </span>
                      </Text>
                    </div>
                  </div>
                  <Img
                    className="h-6 w-6"
                    src="images/img_close_white_a700_24x24.svg"
                    alt="close"
                  />
                </div>
                <div className="flex md:flex-col flex-row font-satoshi md:gap-[47px] items-start justify-between mt-8 w-full">
                  <DashboardTradeHistoryColumn
                    className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-0.5 w-1/4 md:w-full"
                    userclockimage="images/img_clock.svg"
                    userrecenttradepartnerstext="Recent Trade Partners"
                  />
                  <div className="h-[140px] md:h-[342px] relative w-[73%] md:w-full">
                    <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto w-full">
                      <div className="h-[140px] relative w-[31%] md:w-full">
                        <Img
                          className="h-6 ml-auto mr-[5px] mt-1 w-6"
                          src="images/img_close_white_a700_24x24.svg"
                          alt="close_One"
                        />
                        <div className="absolute flex flex-col h-full indigo_A700_82_indigo_A700_02_border52 inset-[0] items-center justify-center m-auto outline outline-[2px] p-[7px] rounded-[16px] w-full">
                          <Text
                            className="leading-[31.00px] mb-0.5 text-[17px] text-white-A700"
                            size="txtSatoshiMedium17WhiteA700"
                          >
                            <span className="text-white-A700 font-satoshi text-left font-black">
                              Account Level:
                            </span>
                            <span className="text-white-A700 font-satoshi text-left font-medium">
                              <>
                                {" "}
                                0<br />
                                Account Limit: 0 USD
                                <br />
                              </>
                            </span>
                            <a
                              href="javascript:"
                              className="text-indigo-A700 font-satoshi text-left font-medium underline"
                            >
                              Verify your phone
                            </a>
                            <span className="text-white-A700 font-satoshi text-left font-medium">
                              {" "}
                              to increase the limit
                            </span>
                          </Text>
                        </div>
                      </div>
                      <div className="md:h-[138px] h-[140px] md:ml-[0] ml-[42px] relative w-[31%] md:w-full">
                        <Img
                          className="h-6 ml-auto mr-1 mt-1 w-6"
                          src="images/img_close_white_a700_24x24.svg"
                          alt="close_Two"
                        />
                        <div className="absolute flex flex-col gap-[9px] h-full indigo_A700_82_indigo_A700_02_border53 inset-[0] items-start justify-center m-auto outline outline-[2px] p-[11px] rounded-[16px] w-full">
                          <Text
                            className="ml-2 md:ml-[0] text-[17px] text-white-A700"
                            size="txtSatoshiBlack17"
                          >
                            Phone Number Not Verified
                          </Text>
                          <Text
                            className="leading-[27.00px] mb-[30px] ml-2 md:ml-[0] text-[17px] text-white-A700 w-[94%] sm:w-full"
                            size="txtSatoshiRegular17"
                          >
                            <span className="text-white-A700 font-satoshi text-left font-normal">
                              Take a minute to verify your number{" "}
                            </span>
                            <a
                              href="javascript:"
                              className="text-indigo-A700 font-satoshi text-left font-normal underline"
                            >
                              Verify Me
                            </a>
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-6 md:ml-[0] ml-[324px] md:mt-0 mt-1 w-6"
                        src="images/img_close_white_a700_24x24.svg"
                        alt="close_Three"
                      />
                    </div>
                    <div className="absolute flex flex-col gap-[9px] h-full indigo_A700_82_indigo_A700_02_border54 inset-y-[0] items-start justify-start my-auto outline outline-[2px] p-[11px] right-[0] rounded-[16px]">
                      <Text
                        className="ml-2 md:ml-[0] text-[17px] text-white-A700"
                        size="txtSatoshiBlack17"
                      >
                        2FA Not Enabled
                      </Text>
                      <Text
                        className="leading-[27.00px] mb-[3px] ml-2 md:ml-[0] text-[17px] text-white-A700"
                        size="txtSatoshiBlack17"
                      >
                        <span className="text-white-A700 font-satoshi text-left font-normal">
                          <>
                            Enabling two-factor authentication is great way to
                            secure your account.
                            <br />
                          </>
                        </span>
                        <a
                          href="javascript:"
                          className="text-indigo-A700 font-satoshi text-left font-normal underline"
                        >
                          Setup 2FA Now
                        </a>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] mb-[1130px] ml-auto mt-[-NaNpx] rotate-[179deg] w-[15%] z-[1]">
            <div className="h-[664px] ml-auto my-auto w-4/5">
              <Img
                className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_47.png"
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
        <div className="absolute bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border50 flex flex-col font-chillax items-start justify-center p-[25px] md:px-5 right-[6%] rounded-[10px] top-[21%] w-[64%]">
          <Text
            className="mt-2 text-[17px] text-white-A700"
            size="txtChillaxRegular17"
          >
            You are viewing all trades for the last 14 days
          </Text>
          <div className="flex flex-col font-satoshi gap-5 items-center justify-start mt-[26px] w-full">
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
          <div className="border border-solid deep_purple_A400_4c_gray_50_00_border51 flex flex-col font-satoshi md:gap-10 gap-[120px] items-center justify-start mb-[30px] ml-0.5 md:ml-[0] mt-[35px] pb-[198px] rounded-[16px] w-full">
            <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border52 flex md:flex-col flex-row md:gap-5 items-center justify-end p-[18px] rounded-tl-[16px] rounded-tr-[16px] w-full">
              <Text
                className="capitalize text-[17px] text-white-A700"
                size="txtSatoshiBold17"
              >
                My Past Trades
              </Text>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[148px] md:ml-[0] ml-[489px] rounded-[7px]"
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
              <div className="bg-indigo-A700 flex md:flex-1 flex-col items-center justify-end ml-5 md:ml-[0] p-[9px] rounded-[7px] shadow-bs1 w-[16%] md:w-full">
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
            <div className="flex flex-col gap-[11px] items-center justify-start">
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
        </div>
      </div>
    </>
  );
};

export default DashboardtradehistoryPage;
