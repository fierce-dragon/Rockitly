import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import DashboardTradeHistoryColumn from "components/DashboardTradeHistoryColumn";
import Header1 from "components/Header1";
import P2pTradingStack from "components/P2pTradingStack";

const DashboardtradestatisticsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-satoshi h-[2181px] justify-end mx-auto relative w-full">
        <div className="flex flex-col mt-auto mx-auto md:px-5 w-full">
          <div className="h-[864px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
            <Img
              className="h-[864px] m-auto object-cover w-full"
              src="images/img_rectangle40003_18.png"
              alt="rectangle40003"
            />
            <Img
              className="absolute h-[864px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_rectangle40008_16.png"
              alt="rectangle40008"
            />
          </div>
          <Img
            className="h-[6376px] mt-[-14px] mx-auto object-cover w-full z-[1]"
            src="images/img_rectangle40011_17.png"
            alt="rectangle40011"
          />
          <div className="bg-gradient1  flex flex-col items-center justify-start mb-auto mt-[-NaNpx] mx-auto pl-1 py-1 w-full z-[1]">
            <div className="flex flex-col items-center justify-start mb-[6452px] mt-5 w-full">
              <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
              <Line className="bg-white-A700_7e h-px mt-[17px] w-full" />
              <div className="flex flex-col items-start justify-start mt-[13px] w-[87%] md:w-full">
                <div className="flex flex-row gap-2.5 items-start justify-start w-[12%] md:w-full">
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
                    className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[15px] w-1/4 md:w-full"
                    usermenuimage="images/img_menu_white_a700_27x27.svg"
                    userclockimage="images/img_clock.svg"
                    userrecenttradepartnerstext="Recent Trade Partners"
                    userclockoneimage="images/img_orderlight_indigo_a700_27x27.svg"
                  />
                  <div className="flex md:flex-1 flex-col font-chillax gap-[46px] items-start justify-start w-[73%] md:w-full">
                    <Text
                      className="capitalize sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
                      size="txtChillaxRegular41"
                    >
                      Balance
                    </Text>
                    <div className="font-satoshi gap-[47px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-full">
                      <div className="flex flex-1 flex-col gap-[19px] indigo_A700_82_indigo_A700_02_border55 items-start justify-end outline outline-[2px] p-[13px] rounded-[16px] w-full">
                        <Text
                          className="ml-1.5 md:ml-[0] mt-0.5 text-[17px] text-white-A700"
                          size="txtSatoshiMedium17WhiteA700"
                        >
                          Monthly traded Bitcoin in total
                        </Text>
                        <Input
                          name="btcCounter"
                          placeholder="0 BTC"
                          className="font-black md:text-[25px] p-0 placeholder:text-white-A700 sm:text-[23px] text-[27px] text-left text-white-A700 w-full"
                          wrapClassName="flex ml-1.5 md:ml-[0] w-[49%]"
                          prefix={
                            <div className="h-[43px] mr-[9px] pl-2.5 pr-[11px] w-[43px] bg-yellow-900 rounded-[21px] py-2 flex justify-center items-center">
                              <Img
                                className="my-auto"
                                src="images/img_airplane.svg"
                                alt="airplane"
                              />
                            </div>
                          }
                        ></Input>
                        <div className="flex flex-col items-center justify-start ml-1.5 md:ml-[0]">
                          <Text
                            className="text-[17px] text-white-A700"
                            size="txtSatoshiRegular17"
                          >
                            0 BTC were sold and bought
                          </Text>
                          <Text
                            className="text-[17px] text-white-A700_7e"
                            size="txtSatoshiRegular17WhiteA7007e"
                          >
                            in the previous month (April)
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col indigo_A700_82_indigo_A700_02_border56 items-start justify-end outline outline-[2px] p-[13px] rounded-[16px] w-full">
                        <Text
                          className="ml-1.5 md:ml-[0] mt-0.5 text-[17px] text-white-A700"
                          size="txtSatoshiMedium17WhiteA700"
                        >
                          Monthly traded Tether in total
                        </Text>
                        <div className="flex flex-row gap-3 items-end justify-start md:ml-[0] ml-[3px] mt-[17px] w-[57%] md:w-full">
                          <Img
                            className="h-[43px] w-[43px]"
                            src="images/img_tether1.svg"
                            alt="tetherOne"
                          />
                          <Text
                            className="mt-[5px] sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                            size="txtSatoshiBlack27"
                          >
                            0 USDT
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start ml-1.5 md:ml-[0] mt-[22px]">
                          <Text
                            className="text-[17px] text-white-A700"
                            size="txtSatoshiRegular17"
                          >
                            0 USDT were sold and bought
                          </Text>
                          <Text
                            className="text-[17px] text-white-A700_7e"
                            size="txtSatoshiRegular17WhiteA7007e"
                          >
                            in the previous month (April)
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col indigo_A700_82_indigo_A700_02_border57 items-start justify-end outline outline-[2px] p-[13px] rounded-[16px] w-full">
                        <Text
                          className="ml-1.5 md:ml-[0] mt-0.5 text-[17px] text-white-A700"
                          size="txtSatoshiMedium17WhiteA700"
                        >
                          Monthly traded USD Coin in total
                        </Text>
                        <div className="flex flex-row gap-[9px] items-end justify-start ml-1.5 md:ml-[0] mt-[17px] w-[58%] md:w-full">
                          <Img
                            className="h-[43px] w-[43px]"
                            src="images/img_clock_blue_700.svg"
                            alt="clock_One"
                          />
                          <Text
                            className="mt-[5px] sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                            size="txtSatoshiBlack27"
                          >
                            0 USDC
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start ml-1.5 md:ml-[0] mt-[22px]">
                          <Text
                            className="text-[17px] text-white-A700"
                            size="txtSatoshiRegular17"
                          >
                            0 USDC were sold and bought
                          </Text>
                          <Text
                            className="text-[17px] text-white-A700_7e"
                            size="txtSatoshiRegular17WhiteA7007e"
                          >
                            in the previous month (April)
                          </Text>
                        </div>
                      </div>
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
                src="images/img_ellipse264_52.png"
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
        <div className="absolute flex flex-col font-chillax gap-[46px] items-start justify-start md:px-5 right-[6%] top-[23%] w-[64%]">
          <Text
            className="capitalize sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
            size="txtChillaxRegular41"
          >
            Trades
          </Text>
          <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border64 flex flex-col font-satoshi items-center justify-start p-[26px] sm:px-5 rounded-[10px] w-full">
            <div className="flex flex-col items-start justify-start mb-3 mt-[3px] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[91%] md:w-full">
                <div className="flex flex-col gap-[23px] items-start justify-start w-[31%] md:w-full">
                  <Text
                    className="text-[17px] text-white-A700"
                    size="txtSatoshiMedium17WhiteA700"
                  >
                    Monthly successful trades
                  </Text>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                      size="txtSatoshiBlack27"
                    >
                      0 BTC trades
                    </Text>
                    <Text
                      className="mt-1.5 sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                      size="txtSatoshiBlack27"
                    >
                      0 USDT trades
                    </Text>
                    <Text
                      className="mt-[9px] sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                      size="txtSatoshiBlack27"
                    >
                      0 USDC trades
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start ml-1 md:ml-[0]">
                    <Text
                      className="leading-[26.00px] text-[17px] text-white-A700"
                      size="txtSatoshiRegular17"
                    >
                      <>
                        0 successful BTC trades
                        <br />0 successful USDT trades
                        <br />0 successful USDC trades
                      </>
                    </Text>
                    <Text
                      className="text-[17px] text-white-A700_7e"
                      size="txtSatoshiRegular17WhiteA7007e"
                    >
                      in the previous month (April)
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[65px] w-[26%] md:w-full">
                  <Text
                    className="text-[17px] text-white-A700"
                    size="txtSatoshiMedium17WhiteA700"
                  >
                    Monthly total
                  </Text>
                  <div className="flex flex-col items-center justify-start mt-[23px]">
                    <Text
                      className="sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                      size="txtSatoshiBlack27"
                    >
                      0 BTC trades
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2 items-center justify-start ml-1 md:ml-[0] mt-[19px]">
                    <Text
                      className="text-[17px] text-white-A700"
                      size="txtSatoshiRegular17"
                    >
                      0 USD were sold and bought
                    </Text>
                    <Text
                      className="text-[17px] text-white-A700_7e"
                      size="txtSatoshiRegular17WhiteA7007e"
                    >
                      in the previous month (April)
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[109px] w-1/4 md:w-full">
                  <Text
                    className="text-[17px] text-white-A700"
                    size="txtSatoshiMedium17WhiteA700"
                  >
                    Monthly closing ratio
                  </Text>
                  <div className="flex flex-col items-center justify-start mt-[23px]">
                    <Text
                      className="sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                      size="txtSatoshiBlack27"
                    >
                      No trades
                    </Text>
                  </div>
                  <div className="flex flex-col gap-2.5 items-start justify-start ml-1 md:ml-[0] mt-[17px]">
                    <Text
                      className="text-[17px] text-white-A700"
                      size="txtSatoshiRegular17"
                    >
                      No trades
                    </Text>
                    <Text
                      className="text-[17px] text-white-A700_7e"
                      size="txtSatoshiRegular17WhiteA7007e"
                    >
                      in the previous month (April)
                    </Text>
                  </div>
                </div>
              </div>
              <div className="md:gap-5 gap-[45px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] ml-1 md:ml-[0] mt-[61px] w-full">
                <div className="bg-gray-900_7e border border-solid deep_purple_A400_7e_gray_50_7e_border flex flex-1 flex-col items-start justify-end p-[23px] sm:px-5 rounded-[10px] w-full">
                  <Text
                    className="mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                    size="txtSatoshiBold21"
                  >
                    Monthly successful trades
                  </Text>
                  <Text
                    className="text-[17px] text-white-A700_7e"
                    size="txtSatoshiRegular17WhiteA7007e"
                  >
                    Best offers by closing ratio
                  </Text>
                  <Line className="bg-white-A700_7e h-px mt-[11px] w-[93%]" />
                  <Text
                    className="mt-[15px] text-[17px] text-white-A700"
                    size="txtSatoshiRegular17"
                  >
                    No successful sell trades yet.
                  </Text>
                </div>
                <div className="bg-gray-900_7e border border-solid deep_purple_A400_7e_gray_50_7e_border2 flex flex-1 flex-col items-start justify-end p-[23px] sm:px-5 rounded-[10px] w-full">
                  <Text
                    className="mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                    size="txtSatoshiBold21"
                  >
                    Expired
                  </Text>
                  <Text
                    className="text-[17px] text-white-A700_7e"
                    size="txtSatoshiRegular17WhiteA7007e"
                  >
                    Most expired offers
                  </Text>
                  <Line className="bg-white-A700_7e h-px mt-[11px] w-[94%]" />
                  <Text
                    className="mt-[15px] text-[17px] text-white-A700"
                    size="txtSatoshiRegular17"
                  >
                    No successful sell trades yet.
                  </Text>
                </div>
                <div className="bg-gray-900_7e border border-solid deep_purple_A400_7e_gray_50_7e_border3 flex flex-1 flex-col items-start justify-end p-[23px] sm:px-5 rounded-[10px] w-full">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                    size="txtSatoshiBold21"
                  >
                    Cancelled
                  </Text>
                  <Text
                    className="mt-[3px] text-[17px] text-white-A700_7e"
                    size="txtSatoshiRegular17WhiteA7007e"
                  >
                    Most cancelled offers by buyers
                  </Text>
                  <Line className="bg-white-A700_7e h-px mt-[11px] w-[93%]" />
                  <Text
                    className="mt-[15px] text-[17px] text-white-A700"
                    size="txtSatoshiRegular17"
                  >
                    No cancelled trades with surveys yet.
                  </Text>
                </div>
                <div className="bg-gray-900_7e border border-solid deep_purple_A400_7e_gray_50_7e_border4 flex flex-1 flex-col items-start justify-end p-[23px] sm:px-5 rounded-[10px] w-full">
                  <Text
                    className="mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-white-A700"
                    size="txtSatoshiBold21"
                  >
                    Payment methods
                  </Text>
                  <Text
                    className="text-[17px] text-white-A700_7e"
                    size="txtSatoshiRegular17WhiteA7007e"
                  >
                    Payment methods
                  </Text>
                  <Line className="bg-white-A700_7e h-px mt-[11px] w-[94%]" />
                  <Text
                    className="mt-[15px] text-[17px] text-white-A700"
                    size="txtSatoshiRegular17"
                  >
                    No payment methods.
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-[45px] items-center justify-between ml-1 md:ml-[0] mt-[45px] w-full">
                <div className="bg-gray-900_7e border border-solid deep_purple_A400_7e_gray_50_7e_border5 flex md:flex-1 flex-col gap-[30px] items-start justify-end p-[23px] sm:px-5 rounded-[10px] w-[48%] md:w-full">
                  <Input
                    name="group463"
                    placeholder="Last 5 successful trades"
                    className="font-bold md:text-[19px] p-0 placeholder:text-white-A700 sm:pr-5 sm:text-[17px] text-[21px] text-left w-full"
                    wrapClassName="pb-6 pr-[35px] w-[93%]"
                    color="white_A700_7e"
                    variant="underline"
                  ></Input>
                  <Text
                    className="text-[17px] text-white-A700"
                    size="txtSatoshiRegular17"
                  >
                    No completed trades yet.
                  </Text>
                </div>
                <div className="bg-gray-900_7e border border-solid deep_purple_A400_7e_gray_50_7e_border6 flex md:flex-1 flex-col gap-[30px] items-start justify-end p-[23px] sm:px-5 rounded-[10px] w-[48%] md:w-full">
                  <Input
                    name="group465"
                    placeholder="Recently trusted users"
                    className="font-bold md:text-[19px] p-0 placeholder:text-white-A700 sm:pr-5 sm:text-[17px] text-[21px] text-left w-full"
                    wrapClassName="mt-1 pr-[35px] w-[94%]"
                    color="white_A700_7e"
                    size="xl"
                    variant="underline"
                  ></Input>
                  <Text
                    className="text-[17px] text-white-A700"
                    size="txtSatoshiRegular17"
                  >
                    You trust nobody.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardtradestatisticsPage;
