import React from "react";

import { Button, Img, Line, List, Text } from "components";
import DashboardTradeHistoryColumn from "components/DashboardTradeHistoryColumn";
import Header1 from "components/Header1";
import P2pTradingStack from "components/P2pTradingStack";

const DashboardtraderprogrambadgesPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-satoshi mx-auto relative w-full">
        <div className="h-[864px] md:h-[NaNpx] mt-[-NaNpx] mx-auto md:px-5 w-full z-[1]">
          <Img
            className="h-[864px] m-auto object-cover w-full"
            src="images/img_rectangle40003_19.png"
            alt="rectangle40003"
          />
          <Img
            className="absolute h-[864px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_rectangle40008_17.png"
            alt="rectangle40008"
          />
        </div>
        <Img
          className="h-[6376px] mt-[-14px] mx-auto object-cover w-full z-[1]"
          src="images/img_rectangle40011_18.png"
          alt="rectangle40011"
        />
        <div className="bg-gradient1  flex flex-col items-center justify-start mt-[-NaNpx] mx-auto pl-1 py-1 w-full z-[1]">
          <div className="flex flex-col items-center justify-start mb-[6272px] mt-5 w-full">
            <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
            <Line className="bg-white-A700_7e h-px mt-[17px] w-full" />
            <div className="flex flex-col gap-[5px] items-start justify-start max-w-[1403px] mt-[13px] mx-auto md:px-5 w-full">
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
                  Trade Statistics
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[47px] items-start justify-between w-full">
                <DashboardTradeHistoryColumn
                  className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-2.5 w-1/4 md:w-full"
                  usermenuimage="images/img_menu_white_a700_27x27.svg"
                  userclockimage="images/img_clock.svg"
                  userrecenttradepartnerstext="Recent Trade Partners"
                  userorderlightimage="images/img_ticket_indigo_a700.svg"
                />
                <div className="flex md:flex-1 flex-col font-chillax gap-[41px] items-start justify-start w-[73%] md:w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="capitalize sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
                      size="txtChillaxRegular41"
                    >
                      Trader Program Badges
                    </Text>
                  </div>
                  <div className="flex flex-col font-satoshi items-center justify-start w-full">
                    <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border65 flex flex-col items-center justify-start p-[23px] sm:px-5 rounded-[10px] w-full">
                      <div className="flex flex-col items-center justify-start mb-[30px] w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="leading-[31.00px] text-[17px] text-white-A700"
                              size="txtSatoshiMedium17WhiteA700"
                            >
                              <span className="text-white-A700 font-satoshi text-left font-medium">
                                <>
                                  Your performance is measured and updated daily
                                  across a 90-day period. Meet the requirements
                                  to receive your badge and maintain your
                                  status.
                                  <br />
                                  Check out the{" "}
                                </>
                              </span>
                              <span className="text-indigo-A700 font-satoshi text-left font-medium">
                                Rockitly
                              </span>
                              <span className="text-indigo-A700 font-satoshi text-left font-medium">
                                {" "}
                                Trader Program
                              </span>
                              <span className="text-white-A700 font-satoshi text-left font-medium">
                                {" "}
                                page
                              </span>
                              <span className="text-white-A700 font-satoshi text-left font-medium">
                                {" "}
                                to find out more about exclusive benefits.
                              </span>
                            </Text>
                          </div>
                        </div>
                        <div className="h-[34px] md:h-[82px] mt-12 relative w-full">
                          <div className="absolute h-px inset-[0] justify-center m-auto w-full">
                            <Line className="bg-indigo-A700 h-px m-auto w-full" />
                            <Line className="absolute bg-blue_gray-400_01 h-px inset-y-[0] my-auto right-[0] w-1/2" />
                          </div>
                          <div className="absolute flex flex-row sm:gap-10 h-full inset-[0] items-center justify-between m-auto w-[55%]">
                            <div className="bg-indigo-A700 flex flex-col h-[34px] items-center justify-start p-[9px] rounded-[50%] w-[34px]">
                              <div className="bg-white-A700 h-4 rounded-[50%] w-4"></div>
                            </div>
                            <div className="bg-gray-900_07 flex flex-col h-[34px] items-center justify-start p-[9px] rounded-[50%] w-[34px]">
                              <div className="bg-white-A700 h-4 rounded-[50%] w-4"></div>
                            </div>
                          </div>
                        </div>
                        <List
                          className="sm:flex-col flex-row gap-[51px] grid md:grid-cols-1 grid-cols-2 justify-center mt-[29px] w-full"
                          orientation="horizontal"
                        >
                          <div className="bg-indigo-A700_7e border border-solid deep_purple_A400_7e_gray_50_7e_border7 flex flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-[10px] w-full">
                            <div className="flex flex-col items-start justify-start mb-[19px] mt-1.5 w-[96%] md:w-full">
                              <div className="flex flex-row gap-[17px] items-center justify-start w-[57%] md:w-full">
                                <Button
                                  className="flex h-[43px] items-center justify-center rounded-[21px] w-[43px]"
                                  color="white_A700"
                                  size="md"
                                  variant="fill"
                                >
                                  <Img
                                    src="images/img_location_indigo_a700_43x43.svg"
                                    alt="location"
                                  />
                                </Button>
                                <Text
                                  className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                                  size="txtSatoshiBold25"
                                >
                                  Power Trader
                                </Text>
                              </div>
                              <Line className="bg-white-A700_7e h-px mt-5 w-full" />
                              <div className="flex flex-row gap-2.5 items-center justify-start mt-5 w-3/4 md:w-full">
                                <Img
                                  className="h-[136px]"
                                  src="images/img_group1000006702.svg"
                                  alt="group1000006702"
                                />
                                <Text
                                  className="leading-[42.00px] text-[17px] text-white-A700"
                                  size="txtSatoshiRegular17"
                                >
                                  <>
                                    ID Verification
                                    <br />
                                    Address Verification
                                    <br />
                                    90-day-old account
                                    <br />
                                    Good behaviour score
                                  </>
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-5 w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Line className="bg-white-A700_7e h-[3px] rounded-[1px] w-full" />
                                  <div className="flex flex-row items-start justify-between mt-1 w-full">
                                    <Text
                                      className="text-white-A700 text-xs"
                                      size="txtSatoshiMedium12WhiteA700"
                                    >
                                      Trade Partners
                                    </Text>
                                    <Text
                                      className="text-right text-white-A700 text-xs"
                                      size="txtSatoshiMedium12WhiteA700"
                                    >
                                      0 / 125
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-6 w-full">
                                <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                                  <Line className="bg-white-A700_7e h-[3px] rounded-[1px] w-full" />
                                  <div className="flex flex-row items-center justify-between w-full">
                                    <Text
                                      className="text-white-A700 text-xs"
                                      size="txtSatoshiMedium12WhiteA700"
                                    >
                                      Successful Trades
                                    </Text>
                                    <Text
                                      className="text-right text-white-A700 text-xs"
                                      size="txtSatoshiMedium12WhiteA700"
                                    >
                                      0 / 250
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-900_7e border border-solid deep_purple_A400_7e_gray_50_7e_border8 flex flex-1 flex-col items-start justify-start p-[29px] sm:px-5 rounded-[10px] w-full">
                            <div className="flex flex-col items-start justify-start mb-5 mt-[7px] w-[96%] md:w-full">
                              <div className="flex flex-row gap-[17px] items-end justify-start w-[58%] md:w-full">
                                <Button
                                  className="flex h-[43px] items-center justify-center rounded-[21px] w-[43px]"
                                  color="white_A700"
                                  size="md"
                                  variant="fill"
                                >
                                  <Img
                                    className="h-6"
                                    src="images/img_group84.svg"
                                    alt="groupEightyFour"
                                  />
                                </Button>
                                <Text
                                  className="mt-[7px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                                  size="txtSatoshiBold25"
                                >
                                  Expert Trader
                                </Text>
                              </div>
                              <Line className="bg-white-A700_7e h-px mt-5 w-full" />
                              <div className="flex flex-row gap-2.5 items-center justify-start mt-5 w-3/4 md:w-full">
                                <Img
                                  className="h-[136px]"
                                  src="images/img_group1000006702.svg"
                                  alt="group1000006702"
                                />
                                <Text
                                  className="leading-[42.00px] text-[17px] text-white-A700"
                                  size="txtSatoshiRegular17"
                                >
                                  <>
                                    ID Verification
                                    <br />
                                    Address Verification
                                    <br />
                                    90-day-old account
                                    <br />
                                    Good behaviour score
                                  </>
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-5 w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Line className="bg-white-A700_7e h-[3px] rounded-[1px] w-full" />
                                  <div className="flex flex-row items-start justify-between mt-1 w-full">
                                    <Text
                                      className="text-white-A700 text-xs"
                                      size="txtSatoshiMedium12WhiteA700"
                                    >
                                      Trade Partners
                                    </Text>
                                    <Text
                                      className="text-right text-white-A700 text-xs"
                                      size="txtSatoshiMedium12WhiteA700"
                                    >
                                      0 / 125
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-6 w-full">
                                <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                                  <Line className="bg-white-A700_7e h-[3px] rounded-[1px] w-full" />
                                  <div className="flex flex-row items-center justify-between w-full">
                                    <Text
                                      className="text-white-A700 text-xs"
                                      size="txtSatoshiMedium12WhiteA700"
                                    >
                                      Successful Trades
                                    </Text>
                                    <Text
                                      className="text-right text-white-A700 text-xs"
                                      size="txtSatoshiMedium12WhiteA700"
                                    >
                                      0 / 250
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] ml-auto mt-[-NaNpx] md:px-5 rotate-[179deg] w-[15%] z-[1]">
          <div className="h-[664px] ml-auto my-auto w-4/5">
            <Img
              className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
              src="images/img_ellipse264_53.png"
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
        <P2pTradingStack className="h-[872px] md:h-[NaNpx] mt-[-NaNpx] mx-auto md:px-5 w-full z-[1]" />
      </div>
    </>
  );
};

export default DashboardtraderprogrambadgesPage;
