import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import AccountsettingProfileRowrectangle40052 from "components/AccountsettingProfileRowrectangle40052";
import Header1 from "components/Header1";
import P2pTradingStack from "components/P2pTradingStack";

const AccountsettingmessengerPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-satoshi h-[2150px] justify-end mx-auto relative w-full">
        <div className="flex flex-col mt-auto mx-auto md:px-5 w-full">
          <div className="h-[864px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
            <Img
              className="h-[864px] m-auto object-cover w-full"
              src="images/img_rectangle40003_23.png"
              alt="rectangle40003"
            />
            <Img
              className="absolute h-[864px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_rectangle40008_21.png"
              alt="rectangle40008"
            />
          </div>
          <Img
            className="h-[6376px] mt-[-14px] mx-auto object-cover w-full z-[1]"
            src="images/img_rectangle40011_22.png"
            alt="rectangle40011"
          />
          <div className="bg-gradient1  flex flex-col items-center justify-start mb-auto mt-[-NaNpx] mx-auto pl-1 py-1 w-full z-[1]">
            <div className="flex flex-col items-center justify-start mb-[6472px] mt-5 w-full">
              <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
              <Line className="bg-white-A700_7e h-px mt-[17px] w-full" />
              <div className="flex flex-col gap-[5px] items-start justify-start mt-[13px] w-[88%] md:w-full">
                <div className="flex flex-row gap-2.5 items-start justify-start w-[18%] md:w-full">
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
                    className="text-sm text-white-A700_90"
                    size="txtSatoshiRegular14WhiteA70090"
                  >
                    Account Setting
                  </Text>
                  <Img
                    className="h-1.5 mt-[7px]"
                    src="images/img_vector52.svg"
                    alt="vectorFiftyThree"
                  />
                  <Text
                    className="text-sm text-white-A700"
                    size="txtSatoshiRegular14"
                  >
                    Messenger
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[47px] items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-2.5 w-1/4 md:w-full">
                    <div className="h-[602px] relative w-full">
                      <div className="absolute flex flex-col gap-[41px] h-full inset-[0] justify-center m-auto p-2.5 w-full">
                        <Line className="bg-white-A700_6c h-px mt-[490px] w-full" />
                        <div className="flex flex-row gap-[13px] items-start justify-start mb-[23px] ml-3 md:ml-[0] mr-[183px] w-[39%] md:w-full">
                          <Img
                            className="h-[27px] w-[27px]"
                            src="images/img_cut_white_a700_27x27.svg"
                            alt="cut"
                          />
                          <Text
                            className="mt-[3px] text-[17px] text-white-A700"
                            size="txtSatoshiRegular17"
                          >
                            Dashboard
                          </Text>
                        </div>
                      </div>
                      <AccountsettingProfileRowrectangle40052
                        className="absolute bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border83 flex flex-row gap-5 h-max inset-[0] items-start justify-center m-auto rounded-[10px] w-full"
                        usermenuimage="images/img_menu_white_a700_27x27.svg"
                        userclockimage="images/img_clock.svg"
                        userlocalizationtext="Localization"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col font-chillax gap-8 items-start justify-start w-[73%] md:w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="capitalize sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
                          size="txtChillaxRegular41"
                        >
                          Messenger
                        </Text>
                      </div>
                      <div className="flex flex-col font-satoshi items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border84 flex flex-col items-start justify-start p-5 rounded-[10px] w-full">
                            <div className="flex flex-col items-center justify-start mb-[3px] ml-1.5 md:ml-[0] w-[48%] md:w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="capitalize text-[19px] text-white-A700"
                                  size="txtSatoshiRegular19"
                                >
                                  Accept new incoming chats from
                                </Text>
                                <Input
                                  name="groupFortyOne"
                                  placeholder="Everyone"
                                  className="font-bold p-0 placeholder:text-white-A700 text-[16.87px] text-left w-full"
                                  wrapClassName="flex w-full"
                                  suffix={
                                    <div className="mt-[3px] mb-3.5 ml-[35px] sm:w-full sm:mx-0 w-[2%] border-white-A700 border-2 border-solid">
                                      <Img
                                        className="my-auto"
                                        src="images/img_vector10.svg"
                                        alt="Vector 10"
                                      />
                                    </div>
                                  }
                                  shape="round"
                                  size="3xl"
                                  variant="outline"
                                  color="deep_purple_A400_4c_gray_50_00"
                                ></Input>
                                <Text
                                  className="mt-[11px] text-[15px] text-white-A700"
                                  size="txtSatoshiMedium15"
                                >
                                  Choose who can write to you
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="capitalize sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
                        size="txtChillaxRegular41"
                      >
                        Account notifications settings
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
                src="images/img_ellipse264_57.png"
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
        <div className="absolute flex flex-col items-center justify-start md:px-5 right-[6%] top-[22%] w-[64%]">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border86 flex flex-col gap-[47px] items-center justify-start p-[23px] sm:px-5 rounded-[10px] w-full">
              <div className="flex flex-col items-center justify-start mt-[9px] w-full">
                <div className="sm:h-[770px] h-[776px] md:h-[892px] relative w-full">
                  <div className="absolute flex flex-col items-center justify-start right-[10%] top-[0]">
                    <Text
                      className="text-[15px] text-center text-white-A700"
                      size="txtSatoshiMedium15"
                    >
                      Telegram
                    </Text>
                    <Text
                      className="text-[13px] text-center text-indigo-A700"
                      size="txtSatoshiMedium13IndigoA700"
                    >
                      Active
                    </Text>
                  </div>
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-[99%] md:w-full">
                        <Text
                          className="text-[15px] text-white-A700"
                          size="txtSatoshiMedium15"
                        >
                          Select All
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[549px] text-[15px] text-center text-white-A700"
                          size="txtSatoshiMedium15"
                        >
                          Web
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[74px] text-[15px] text-center text-white-A700"
                          size="txtSatoshiMedium15"
                        >
                          Email
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[171px] text-[15px] text-center text-white-A700"
                          size="txtSatoshiMedium15"
                        >
                          App
                        </Text>
                      </div>
                      <div className="h-[466px] md:h-[491px] mt-[25px] relative w-full">
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                          <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
                            <Line className="bg-white-A700_6c h-px w-full" />
                            <Line className="bg-white-A700_6c h-px w-full" />
                            <Line className="bg-white-A700_6c h-px w-full" />
                            <Line className="bg-white-A700_6c h-px w-full" />
                            <Line className="bg-white-A700_6c h-px w-full" />
                            <Line className="bg-white-A700_6c h-px w-full" />
                            <Line className="bg-white-A700_6c h-px w-full" />
                          </div>
                        </div>
                        <div className="absolute flex flex-row items-center justify-between right-[2%] top-[4%] w-[35%]">
                          <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border87 flex flex-col h-[17px] items-start justify-start p-[3px] rounded-[3px] w-[17px]">
                            <Img
                              className="h-[7px]"
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          </div>
                          <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border88 h-[17px] rounded-[3px] w-[17px]"></div>
                          <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border89 h-[17px] rounded-[3px] w-[17px]"></div>
                          <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border90 h-[17px] rounded-[3px] w-[17px]"></div>
                        </div>
                        <div className="absolute bottom-[13%] flex flex-col gap-11 items-center justify-start right-[2%] w-[35%]">
                          <List
                            className="flex flex-col gap-[45px] items-center w-full"
                            orientation="vertical"
                          >
                            <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                              <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border91 h-[17px] rounded-[3px] w-[17px]"></div>
                              <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border92 flex flex-col h-[17px] items-center justify-start rounded-[3px] w-[17px]">
                                <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border93 flex flex-col h-[17px] items-start justify-start p-[3px] rounded-[3px] w-[17px]">
                                  <Img
                                    className="h-[7px]"
                                    src="images/img_checkmark.svg"
                                    alt="checkmark"
                                  />
                                </div>
                              </div>
                              <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border94 h-[17px] rounded-[3px] w-[17px]"></div>
                              <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border95 h-[17px] rounded-[3px] w-[17px]"></div>
                            </div>
                            <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                              <div className="bg-blue_gray-400_7e border border-solid deep_purple_A400_7e_gray_50_7e_border11 h-[17px] rounded-[3px] w-[17px]"></div>
                              <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border96 h-[17px] rounded-[3px] w-[17px]"></div>
                              <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border97 flex flex-col h-[17px] items-center justify-start rounded-[3px] w-[17px]">
                                <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border98 flex flex-col h-[17px] items-start justify-start p-[3px] rounded-[3px] w-[17px]">
                                  <Img
                                    className="h-[7px]"
                                    src="images/img_checkmark.svg"
                                    alt="checkmark"
                                  />
                                </div>
                              </div>
                              <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border99 h-[17px] rounded-[3px] w-[17px]"></div>
                            </div>
                            <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                              <div className="bg-blue_gray-400_7e border border-solid deep_purple_A400_7e_gray_50_7e_border12 h-[17px] rounded-[3px] w-[17px]"></div>
                              <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border100 h-[17px] rounded-[3px] w-[17px]"></div>
                              <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border101 h-[17px] rounded-[3px] w-[17px]"></div>
                              <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border102 flex flex-col h-[17px] items-center justify-start rounded-[3px] w-[17px]">
                                <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border103 flex flex-col h-[17px] items-start justify-start p-[3px] rounded-[3px] w-[17px]">
                                  <Img
                                    className="h-[7px]"
                                    src="images/img_checkmark.svg"
                                    alt="checkmark"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                              <div className="bg-blue_gray-400_7e border border-solid deep_purple_A400_7e_gray_50_7e_border13 h-[17px] rounded-[3px] w-[17px]"></div>
                              <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border104 h-[17px] rounded-[3px] w-[17px]"></div>
                              <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border105 flex flex-col h-[17px] items-center justify-start rounded-[3px] w-[17px]">
                                <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border106 flex flex-col h-[17px] items-start justify-start p-[3px] rounded-[3px] w-[17px]">
                                  <Img
                                    className="h-[7px]"
                                    src="images/img_checkmark.svg"
                                    alt="checkmark"
                                  />
                                </div>
                              </div>
                              <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border107 h-[17px] rounded-[3px] w-[17px]"></div>
                            </div>
                          </List>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border108 h-[17px] rounded-[3px] w-[17px]"></div>
                            <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border109 flex flex-col h-[17px] items-start justify-start p-[3px] rounded-[3px] w-[17px]">
                              <Img
                                className="h-[7px]"
                                src="images/img_checkmark.svg"
                                alt="checkmark_One"
                              />
                            </div>
                            <div className="bg-blue_gray-400_7e border border-solid deep_purple_A400_7e_gray_50_7e_border14 h-[17px] rounded-[3px] w-[17px]"></div>
                            <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border110 h-[17px] rounded-[3px] w-[17px]"></div>
                          </div>
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border111 flex flex-col h-[17px] items-start justify-start p-[3px] rounded-[3px] w-[17px]">
                              <Img
                                className="h-[7px]"
                                src="images/img_checkmark.svg"
                                alt="checkmark_Two"
                              />
                            </div>
                            <div className="bg-blue_gray-400_7e border border-solid deep_purple_A400_7e_gray_50_7e_border15 h-[17px] rounded-[3px] w-[17px]"></div>
                            <div className="bg-blue_gray-400_7e border border-solid deep_purple_A400_7e_gray_50_7e_border16 h-[17px] rounded-[3px] w-[17px]"></div>
                            <div className="bg-blue_gray-400_7e border border-solid deep_purple_A400_7e_gray_50_7e_border17 h-[17px] rounded-[3px] w-[17px]"></div>
                          </div>
                        </div>
                        <div className="absolute bottom-[1%] flex flex-row items-center justify-between right-[2%] w-[35%]">
                          <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border112 h-[17px] rounded-[3px] w-[17px]"></div>
                          <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border113 flex flex-col h-[17px] items-start justify-start p-[3px] rounded-[3px] w-[17px]">
                            <Img
                              className="h-[7px]"
                              src="images/img_checkmark.svg"
                              alt="checkmark_Three"
                            />
                          </div>
                          <div className="bg-blue_gray-400_7e border border-solid deep_purple_A400_7e_gray_50_7e_border18 h-[17px] rounded-[3px] w-[17px]"></div>
                          <div className="bg-blue_gray-400_7e border border-solid deep_purple_A400_7e_gray_50_7e_border19 h-[17px] rounded-[3px] w-[17px]"></div>
                        </div>
                        <Text
                          className="absolute capitalize h-full inset-y-[0] leading-[60.00px] left-[0] my-auto text-[19px] text-white-A700"
                          size="txtSatoshiRegular19"
                        >
                          <>
                            Buyer started uploading cards
                            <br />
                            Cryptocurrency deposit confirmed
                            <br />
                            Cryptocurrency purchased
                            <br />
                            Cryptocurrency sent
                            <br />
                            Cryptocurrency sold
                            <br />
                            Funds reserved for trade
                            <br />
                            Incoming trade
                            <br />
                            New chat message
                            <br />
                            New moderator message
                            <br />
                            Partner paid for trade
                            <br />
                            Someone viewed my profile
                            <br />
                            Trade cancelled/expired
                          </>
                        </Text>
                      </div>
                      <Line className="bg-white-A700_6c h-px mt-[15px] w-full" />
                      <div className="flex flex-row items-center justify-end md:ml-[0] ml-[616px] mt-[19px] w-[35%] md:w-full">
                        <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border114 h-[17px] rounded-[3px] w-[17px]"></div>
                        <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border115 h-[17px] ml-24 rounded-[3px] w-[17px]"></div>
                        <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border116 flex flex-col h-[17px] items-start justify-start ml-[84px] p-[3px] rounded-[3px] w-[17px]">
                          <Img
                            className="h-[7px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark_Four"
                          />
                        </div>
                        <div className="bg-blue_gray-400_7e border border-solid deep_purple_A400_7e_gray_50_7e_border20 h-[17px] ml-[86px] rounded-[3px] w-[17px]"></div>
                      </div>
                      <Line className="bg-white-A700_6c h-px mt-6 w-full" />
                      <div className="flex flex-row items-center justify-end md:ml-[0] ml-[616px] mt-[19px] w-[35%] md:w-full">
                        <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border117 h-[17px] rounded-[3px] w-[17px]"></div>
                        <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border118 h-[17px] ml-24 rounded-[3px] w-[17px]"></div>
                        <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border119 h-[17px] ml-[84px] rounded-[3px] w-[17px]"></div>
                        <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border120 flex flex-col h-[17px] items-start justify-start ml-[86px] p-[3px] rounded-[3px] w-[17px]">
                          <Img
                            className="h-[7px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark_Five"
                          />
                        </div>
                      </div>
                      <Line className="bg-white-A700_6c h-px mt-[21px] w-full" />
                      <div className="flex flex-row items-center justify-end md:ml-[0] ml-[616px] mt-[23px] w-[35%] md:w-full">
                        <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border121 h-[17px] rounded-[3px] w-[17px]"></div>
                        <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border122 h-[17px] ml-24 rounded-[3px] w-[17px]"></div>
                        <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border123 flex flex-col h-[17px] items-start justify-start ml-[84px] p-[3px] rounded-[3px] w-[17px]">
                          <Img
                            className="h-[7px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark_Six"
                          />
                        </div>
                        <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border124 h-[17px] ml-[86px] rounded-[3px] w-[17px]"></div>
                      </div>
                      <Line className="bg-white-A700_6c h-px mt-5 w-full" />
                      <div className="flex flex-row items-center justify-end md:ml-[0] ml-[616px] mt-[23px] w-[35%] md:w-full">
                        <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border125 h-[17px] rounded-[3px] w-[17px]"></div>
                        <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border126 flex flex-col h-[17px] items-start justify-start ml-24 p-[3px] rounded-[3px] w-[17px]">
                          <Img
                            className="h-[7px]"
                            src="images/img_checkmark.svg"
                            alt="checkmark_Seven"
                          />
                        </div>
                        <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border127 h-[17px] ml-[84px] rounded-[3px] w-[17px]"></div>
                        <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border128 h-[17px] ml-[86px] rounded-[3px] w-[17px]"></div>
                      </div>
                      <Line className="bg-white-A700_6c h-px mt-5 w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-[189px] sm:h-[207px] md:h-[274px] justify-end mb-5 relative w-full">
                <div className="absolute bg-indigo-A700 border border-solid bottom-[21%] deep_purple_A400_4c_gray_50_00_border129 flex flex-col h-[17px] items-start justify-start left-[0] p-[3px] rounded-[3px] w-[17px]">
                  <Img
                    className="h-[7px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark_Eight"
                  />
                </div>
                <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border130 flex flex-col h-full items-start justify-start mb-0.5 mt-auto p-[3px] rounded-[3px] w-[17px]">
                  <Img
                    className="h-[7px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark_Nine"
                  />
                </div>
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="capitalize text-[19px] text-white-A700"
                        size="txtSatoshiRegular19"
                      >
                        Time Travel
                      </Text>
                      <div className="flex md:flex-col flex-row gap-[18px] items-center justify-start mt-1.5 w-full">
                        <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border131 flex md:flex-1 flex-row items-center justify-start p-1.5 rounded-[16px] w-[26%] md:w-full">
                          <Text
                            className="ml-[11px] text-[16.87px] text-white-A700"
                            size="txtSatoshiBold1687"
                          >
                            0
                          </Text>
                          <Line className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border132 h-12 ml-[102px] rounded-[1px] w-px" />
                          <Text
                            className="ml-[26px] text-[16.87px] text-white-A700"
                            size="txtSatoshiBold1687"
                          >
                            minutes
                          </Text>
                        </div>
                        <Text
                          className="leading-[23.00px] text-[15px] text-white-A700"
                          size="txtSatoshiMedium15"
                        >
                          <>
                            How often would you like be notified of new chat
                            messages?
                            <br />
                            Enter 0 to be notified of every new message.
                          </>
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[26px] mt-[38px] text-[15px] text-white-A700"
                        size="txtSatoshiMedium15"
                      >
                        Play notification sound for new messages and trades
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[26px] mt-[15px] text-[15px] text-white-A700"
                        size="txtSatoshiMedium15"
                      >
                        Receive important emails from us occasionally
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountsettingmessengerPage;
