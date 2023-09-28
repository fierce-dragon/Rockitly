import React from "react";

import { Button, Img, Input, Line, List, Switch, Text } from "components";
import Header from "components/Header";
import P2pTradingStack from "components/P2pTradingStack";

const Buyp2ptradinglistingPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-satoshi h-[3768px] justify-end mx-auto relative w-full">
        <div className="flex flex-col mt-auto mx-auto md:px-5 w-full">
          <div className="h-[864px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
            <Img
              className="h-[864px] m-auto object-cover w-full"
              src="images/img_rectangle40003_8.png"
              alt="rectangle40003"
            />
            <Img
              className="absolute h-[864px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_rectangle40008_8.png"
              alt="rectangle40008"
            />
          </div>
          <Img
            className="h-[6376px] mt-[-14px] mx-auto object-cover w-full z-[1]"
            src="images/img_rectangle40011_7.png"
            alt="rectangle40011"
          />
          <div className="bg-gradient1  flex flex-col items-center justify-start mb-auto mt-[-NaNpx] mx-auto pl-1 py-1 w-full z-[1]">
            <div className="flex flex-col items-center justify-start mb-[5121px] mt-5 w-full">
              <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
              <Line className="bg-white-A700_7e h-px mt-[17px] w-full" />
              <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start mt-[33px] w-[88%] md:w-full">
                <div className="flex flex-col indigo_A700_82_indigo_A700_02_border34 items-center justify-start md:mt-0 mt-3.5 outline outline-[2px] p-5 rounded-[16px] w-1/4 md:w-full">
                  <div className="flex flex-col items-start justify-start mb-5 w-[95%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-[17px] text-white-A700"
                          size="txtSatoshiBold17"
                        >
                          Buy
                        </Text>
                      </div>
                      <Input
                        name="group1000006490"
                        placeholder="BTC"
                        className="font-bold p-0 placeholder:text-white-A700 text-[16.87px] text-left w-full"
                        wrapClassName="flex rounded-[10px] w-full"
                        prefix={
                          <Img
                            className="mt-auto mb-px h-[22px] mr-[7px]"
                            src="images/img_close_yellow_900.svg"
                            alt="close"
                          />
                        }
                        suffix={
                          <div className="mt-2 mb-[9px] ml-[35px] sm:w-full sm:mx-0 w-[4%] border-white-A700 border-2 border-solid">
                            <Img
                              className="my-auto"
                              src="images/img_vector10.svg"
                              alt="Vector 10"
                            />
                          </div>
                        }
                        size="sm"
                        variant="outline"
                        color="deep_purple_A400_4c_gray_50_00"
                      ></Input>
                      <div className="flex flex-row items-start justify-start mt-2 w-[68%] md:w-full">
                        <Text
                          className="capitalize text-[15.9px] text-white-A700_87"
                          size="txtSatoshiRegular159"
                        >
                          1 BTC =
                        </Text>
                        <Text
                          className="capitalize ml-1 text-[15.9px] text-right text-white-A700"
                          size="txtSatoshiMedium159"
                        >
                          29,294.47 USD
                        </Text>
                        <Img
                          className="h-2 ml-[5px] mt-[7px]"
                          src="images/img_icon.svg"
                          alt="icon"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[27px] w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-[17px] text-white-A700"
                            size="txtSatoshiBold17"
                          >
                            Pay via
                          </Text>
                        </div>
                        <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border21 flex flex-row items-center justify-between p-[11px] rounded-[10px] w-full">
                          <div className="flex flex-row items-center justify-start ml-[3px]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_search.svg"
                              alt="search"
                            />
                            <Text
                              className="ml-[3px] text-[19px] text-white-A700"
                              size="txtSatoshiMedium19"
                            >
                              Bank Transfers
                            </Text>
                          </div>
                          <Img
                            className="h-[11px] w-[11px]"
                            src="images/img_close_white_a700.svg"
                            alt="close_One"
                          />
                          <Img
                            className="h-2.5 mr-3.5"
                            src="images/img_menu_white_a700.svg"
                            alt="menu_One"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[35px] w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-[17px] text-white-A700"
                          size="txtSatoshiBold17"
                        >
                          I Want To Spend
                        </Text>
                      </div>
                      <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border22 flex flex-row items-center justify-start p-[11px] rounded-[10px] w-full">
                        <div className="flex flex-col items-center justify-start ml-1">
                          <Text
                            className="text-[19px] text-white-A700_75"
                            size="txtSatoshiMedium19WhiteA70075"
                          >
                            Enter Amount
                          </Text>
                        </div>
                        <Text
                          className="capitalize ml-[50px] text-base text-white-A700"
                          size="txtSatoshiMedium16WhiteA700"
                        >
                          USD
                        </Text>
                        <Img
                          className="h-[5px] ml-7"
                          src="images/img_vector10.svg"
                          alt="vectorEleven"
                        />
                      </div>
                    </div>
                    <div className="md:h-24 h-[76px] mt-[33px] relative w-full">
                      <div className="absolute flex flex-col gap-4 justify-start left-[0] top-[0] w-[41%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-[17px] text-white-A700"
                            size="txtSatoshiBold17"
                          >
                            Offer Location
                          </Text>
                        </div>
                        <Img
                          className="h-6 ml-3 md:ml-[0] w-6"
                          src="images/img_location.svg"
                          alt="location"
                        />
                      </div>
                      <Input
                        name="group1000006538"
                        placeholder="Abc Location"
                        className="!placeholder:text-white-A700_75 !text-white-A700_75 font-medium p-0 text-[19px] text-left w-full"
                        wrapClassName="bottom-[0] flex inset-x-[0] mx-auto rounded-[10px] w-full"
                        suffix={
                          <div className="mt-2.5 mb-[9px] ml-[35px] sm:w-full sm:mx-0 w-[4%] border-white-A700 border-2 border-solid top-[13%] bottom-[12%] left-[12%] absolute">
                            <Img
                              className="absolute my-auto"
                              src="images/img_vector10.svg"
                              alt="Vector 11"
                            />
                          </div>
                        }
                        size="xs"
                        variant="outline"
                        color="deep_purple_A400_4c_gray_50_00"
                      ></Input>
                    </div>
                    <div className="md:h-24 h-[76px] mt-[33px] relative w-full">
                      <div className="absolute flex flex-col gap-4 inset-x-[0] justify-start mx-auto top-[0] w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-[17px] text-white-A700"
                            size="txtSatoshiBold17"
                          >
                            Offer Owner Location
                          </Text>
                          <Switch
                            onColor="#1f51ff"
                            offColor="#1f51ff"
                            onHandleColor="#ffffff"
                            offHandleColor="#ffffff"
                            value={true}
                            className=""
                          />
                        </div>
                        <Img
                          className="h-6 ml-3 md:ml-[0] w-6"
                          src="images/img_location.svg"
                          alt="location_One"
                        />
                      </div>
                      <Input
                        name="group1000006538_One"
                        placeholder="Abc Location"
                        className="!placeholder:text-white-A700_75 !text-white-A700_75 font-medium p-0 text-[19px] text-left w-full"
                        wrapClassName="bottom-[0] flex inset-x-[0] mx-auto rounded-[10px] w-full"
                        suffix={
                          <div className="ml-[35px] sm:w-full sm:mx-0 w-[4%] border-white-A700 border-2 border-solid left-[12%] absolute my-2.5 inset-y-[13%]">
                            <Img
                              className="absolute my-auto"
                              src="images/img_vector10.svg"
                              alt="Vector 11"
                            />
                          </div>
                        }
                        size="xs"
                        variant="outline"
                        color="deep_purple_A400_4c_gray_50_00"
                      ></Input>
                    </div>
                    <div className="flex flex-col gap-3.5 items-start justify-start mt-[35px] w-[91%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-[17px] text-white-A700"
                            size="txtSatoshiBold17"
                          >
                            Offers Tags
                          </Text>
                          <Img
                            className="h-[5px]"
                            src="images/img_vector11.svg"
                            alt="vectorEleven_One"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[87%] md:w-full">
                        <div className="flex flex-row gap-[13px] items-start justify-start w-[64%] md:w-full">
                          <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border23 h-[17px] rounded-[3px] w-[17px]"></div>
                          <Text
                            className="lowercase text-[19px] text-white-A700_90"
                            size="txtSatoshiMedium19WhiteA70090"
                          >
                            Guided Trade
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[13px] items-start justify-start mt-4 w-[98%] md:w-full">
                          <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border24 h-[17px] rounded-[3px] w-[17px]"></div>
                          <Text
                            className="lowercase text-[19px] text-white-A700_90"
                            size="txtSatoshiMedium19WhiteA70090"
                          >
                            Invoices are Accepted
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[13px] items-start justify-start mt-[17px] w-[85%] md:w-full">
                          <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border25 h-[17px] rounded-[3px] w-[17px]"></div>
                          <Text
                            className="lowercase text-[19px] text-white-A700_90"
                            size="txtSatoshiMedium19WhiteA70090"
                          >
                            no receipt needed
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[13px] items-start justify-start mt-[17px] w-[73%] md:w-full">
                          <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border26 h-[17px] rounded-[3px] w-[17px]"></div>
                          <Text
                            className="lowercase text-[19px] text-white-A700_90"
                            size="txtSatoshiMedium19WhiteA70090"
                          >
                            no third parties
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[13px] items-start justify-start mt-[15px] w-full">
                          <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border27 h-[17px] mt-[3px] rounded-[3px] w-[17px]"></div>
                          <Text
                            className="lowercase text-[19px] text-white-A700_90"
                            size="txtSatoshiMedium19WhiteA70090"
                          >
                            no verification needed
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[13px] items-start justify-start mt-[18px] w-[81%] md:w-full">
                          <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border28 h-[17px] rounded-[3px] w-[17px]"></div>
                          <Text
                            className="lowercase text-[19px] text-white-A700_90"
                            size="txtSatoshiMedium19WhiteA70090"
                          >
                            photo id required
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[13px] items-start justify-start mt-[17px] w-[76%] md:w-full">
                          <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border29 h-[17px] rounded-[3px] w-[17px]"></div>
                          <Text
                            className="lowercase text-[19px] text-white-A700_90"
                            size="txtSatoshiMedium19WhiteA70090"
                          >
                            receipt required
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[13px] items-start justify-start mt-[17px] w-[74%] md:w-full">
                          <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border30 h-[17px] rounded-[3px] w-[17px]"></div>
                          <Text
                            className="lowercase text-[19px] text-white-A700_90"
                            size="txtSatoshiMedium19WhiteA70090"
                          >
                            same bank only
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-5 items-start justify-between mt-[33px] w-full">
                      <Text
                        className="text-[17px] text-white-A700"
                        size="txtSatoshiBold17"
                      >
                        Rockitly Verified Offers Only
                      </Text>
                      <Switch
                        onColor="#1f51ff"
                        offColor="#1f51ff"
                        onHandleColor="#ffffff"
                        offHandleColor="#ffffff"
                        value={true}
                        className=""
                      />
                    </div>
                    <div className="flex flex-row gap-3 items-start justify-start mt-[34px] w-[47%] md:w-full">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_info.svg"
                        alt="info"
                      />
                      <Text
                        className="text-[17px] text-white-A700"
                        size="txtSatoshiBold17"
                      >
                        What is this?
                      </Text>
                    </div>
                    <Text
                      className="bg-indigo-A700 capitalize h-[60px] justify-center mt-10 sm:px-5 px-[35px] py-[17px] rounded-[10px] text-center text-lg text-shadow-ts text-white-A700 tracking-[1.80px] w-[282px]"
                      size="txtSatoshiMedium18"
                    >
                      Find Offers
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[73%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 uppercase"
                      size="txtChillaxMedium40"
                    >
                      Buy Bitcoin (BTC).
                    </Text>
                    <Text
                      className="text-[19px] text-white-A700"
                      size="txtSatoshiRegular19"
                    >
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantiu rem aperiam,
                      eaque ipsa.
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[7px] items-center justify-end md:ml-[0] ml-[791px] mt-[65px] w-[23%] md:w-full">
                    <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border31 h-[17px] rounded-[3px] w-[17px]"></div>
                    <Text
                      className="text-base text-right text-white-A700"
                      size="txtSatoshiRegular16"
                    >
                      Vendors active in last 10 min
                    </Text>
                  </div>
                  <div className="flex flex-col gap-8 indigo_A700_82_indigo_A700_02_border35 items-center justify-start mt-[17px] outline outline-[2px] pb-[33px] rounded-[16px] w-full">
                    <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border32 flex md:flex-col flex-row md:gap-5 items-start justify-start p-4 rounded-tl-[16px] rounded-tr-[16px] w-full">
                      <Text
                        className="ml-2.5 md:ml-[0] md:mt-0 mt-1 text-[17px] text-white-A700"
                        size="txtSatoshiBold17"
                      >
                        Buy from
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[123px] md:mt-0 mt-1 text-[17px] text-white-A700"
                        size="txtSatoshiBold17"
                      >
                        Pay with
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[239px] md:mt-0 mt-1 text-[17px] text-white-A700"
                        size="txtSatoshiBold17"
                      >
                        Avg. trade speed
                      </Text>
                      <div className="flex md:flex-1 flex-row items-start justify-center md:ml-[0] ml-[47px] w-[17%] md:w-full">
                        <Text
                          className="mt-[3px] text-[17px] text-white-A700"
                          size="txtSatoshiBold17"
                        >
                          Price per Bitcoin
                        </Text>
                        <Img
                          className="h-6 mb-0.5 ml-1 w-6"
                          src="images/img_question.svg"
                          alt="question"
                        />
                      </div>
                      <Img
                        className="h-6 md:ml-[0] ml-[54px] w-6"
                        src="images/img_menu_white_a700_24x24.svg"
                        alt="menu_Two"
                      />
                      <Img
                        className="h-[18px] md:ml-[0] ml-[21px] md:mt-0 mt-1 w-[18px]"
                        src="images/img_info.svg"
                        alt="info_One"
                      />
                    </div>
                    <List
                      className="flex flex-col gap-[31px] items-center w-[95%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                              <Text
                                className="capitalize sm:mt-0 mt-[3px] text-base text-light_blue-800"
                                size="txtSatoshiMedium16Lightblue800"
                              >
                                SammeyLobs
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[97px] text-base text-white-A700"
                                size="txtSatoshiBlack16"
                              >
                                Other Bank Transfer
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[459px] text-right text-white-A700 text-xl"
                                size="txtSatoshiBlack20"
                              >
                                29,264.06 USD
                              </Text>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[5px] w-full">
                              <Img
                                className="h-4 md:mt-0 mt-[7px] w-[15px]"
                                src="images/img_thumbsup.svg"
                                alt="thumbsup"
                              />
                              <Text
                                className="capitalize md:ml-[0] ml-[11px] md:mt-0 mt-[5px] text-sm text-white-A700"
                                size="txtSatoshiMedium14WhiteA700"
                              >
                                2345
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[132px] md:mt-0 mt-0.5 text-[19px] text-white-A700_87"
                                size="txtSatoshiMedium19WhiteA70087"
                              >
                                Facebook - Zelle
                              </Text>
                              <Button
                                className="capitalize cursor-pointer font-medium min-w-[87px] md:ml-[0] ml-[163px] rounded-[14px] text-center text-sm"
                                color="indigo_A700_75"
                                size="xs"
                                variant="fill"
                              >
                                New offer
                              </Button>
                              <Text
                                className="md:ml-[0] ml-[100px] md:mt-0 mt-1 text-base text-right text-white-A700_87"
                                size="txtSatoshiMedium16WhiteA70087"
                              >
                                1 USD = 0.92 USD of BTC
                              </Text>
                              <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center ml-4 md:ml-[0] md:mt-0 mt-0.5 w-[5%] md:w-full">
                                <Img
                                  className="h-[15px] mt-1"
                                  src="images/img_arrowup_white_a700_15x10.svg"
                                  alt="arrowup"
                                />
                                <Text
                                  className="text-[19px] text-white-A700_87"
                                  size="txtSatoshiMedium19WhiteA70087"
                                >
                                  9%
                                </Text>
                              </div>
                              <Img
                                className="h-[18px] ml-1 md:ml-[0] md:mt-0 mt-1.5 w-[18px]"
                                src="images/img_info.svg"
                                alt="info"
                              />
                            </div>
                            <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between mt-[11px] w-full">
                              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                <div className="bg-green-800 h-[9px] mb-[21px] md:mt-0 mt-4 rounded w-[9px]"></div>
                                <Text
                                  className="capitalize md:ml-[0] ml-[7px] text-sm text-white-A700_75"
                                  size="txtSatoshiMedium14WhiteA70075"
                                >
                                  <span className="text-white-A700 font-satoshi text-left font-medium">
                                    seen{" "}
                                  </span>
                                  <span className="text-white-A700 font-satoshi text-left font-medium">
                                    5 minutes ago
                                  </span>
                                </Text>
                                <Button
                                  className="capitalize cursor-pointer font-medium mb-[11px] min-w-[139px] ml-12 md:ml-[0] md:mt-0 mt-1.5 rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  Photo id required
                                </Button>
                                <Button
                                  className="capitalize cursor-pointer font-medium mb-[11px] min-w-[133px] ml-2.5 md:ml-[0] md:mt-0 mt-1.5 rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  no third parties
                                </Button>
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[198px]">
                                  <Text
                                    className="text-base text-white-A700_87"
                                    size="txtSatoshiMedium16WhiteA70087"
                                  >
                                    Min purchase: 100 USD
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-base text-white-A700_87"
                                    size="txtSatoshiMedium16WhiteA70087"
                                  >
                                    Max purchase: 1,000 USD
                                  </Text>
                                </div>
                              </div>
                              <Button
                                className="cursor-pointer flex items-center justify-center mb-[7px] min-w-[79px] md:mt-0 mt-0.5"
                                leftIcon={
                                  <div className="h-[19px] mb-[3px] mr-1 pl-1 pr-[5px] w-[19px] bg-yellow-900 rounded-[9px] py-[3px] flex justify-center items-center">
                                    <Img
                                      src="images/img_airplane.svg"
                                      alt="airplane"
                                    />
                                  </div>
                                }
                                shape="round"
                                color="indigo_A700"
                                size="xs"
                                variant="fill"
                              >
                                <div className="capitalize font-medium text-[15px] text-center tracking-[1.50px]">
                                  Buy
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-white-A700_33 w-full" />
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                              <Text
                                className="capitalize sm:mt-0 mt-[3px] text-base text-light_blue-800"
                                size="txtSatoshiMedium16Lightblue800"
                              >
                                SammeyLobs
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[97px] text-base text-white-A700"
                                size="txtSatoshiBlack16"
                              >
                                Other Bank Transfer
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[459px] text-right text-white-A700 text-xl"
                                size="txtSatoshiBlack20"
                              >
                                29,264.06 USD
                              </Text>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[5px] w-full">
                              <Img
                                className="h-4 md:mt-0 mt-[7px] w-[15px]"
                                src="images/img_thumbsup.svg"
                                alt="thumbsup"
                              />
                              <Text
                                className="capitalize md:ml-[0] ml-[11px] md:mt-0 mt-[5px] text-sm text-white-A700"
                                size="txtSatoshiMedium14WhiteA700"
                              >
                                2345
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[132px] md:mt-0 mt-0.5 text-[19px] text-white-A700_87"
                                size="txtSatoshiMedium19WhiteA70087"
                              >
                                Facebook - Zelle
                              </Text>
                              <Button
                                className="capitalize cursor-pointer font-medium min-w-[87px] md:ml-[0] ml-[163px] rounded-[14px] text-center text-sm"
                                color="indigo_A700_75"
                                size="xs"
                                variant="fill"
                              >
                                New offer
                              </Button>
                              <Text
                                className="md:ml-[0] ml-[100px] md:mt-0 mt-1 text-base text-right text-white-A700_87"
                                size="txtSatoshiMedium16WhiteA70087"
                              >
                                1 USD = 0.92 USD of BTC
                              </Text>
                              <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center ml-4 md:ml-[0] md:mt-0 mt-0.5 w-[5%] md:w-full">
                                <Img
                                  className="h-[15px] mt-1"
                                  src="images/img_arrowup_white_a700_15x10.svg"
                                  alt="arrowup"
                                />
                                <Text
                                  className="text-[19px] text-white-A700_87"
                                  size="txtSatoshiMedium19WhiteA70087"
                                >
                                  9%
                                </Text>
                              </div>
                              <Img
                                className="h-[18px] ml-1 md:ml-[0] md:mt-0 mt-1.5 w-[18px]"
                                src="images/img_info.svg"
                                alt="info"
                              />
                            </div>
                            <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between mt-[11px] w-full">
                              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                <div className="bg-green-800 h-[9px] mb-[21px] md:mt-0 mt-4 rounded w-[9px]"></div>
                                <Text
                                  className="capitalize md:ml-[0] ml-[7px] text-sm text-white-A700_75"
                                  size="txtSatoshiMedium14WhiteA70075"
                                >
                                  <span className="text-white-A700 font-satoshi text-left font-medium">
                                    seen{" "}
                                  </span>
                                  <span className="text-white-A700 font-satoshi text-left font-medium">
                                    5 minutes ago
                                  </span>
                                </Text>
                                <Button
                                  className="capitalize cursor-pointer font-medium mb-[11px] min-w-[139px] ml-12 md:ml-[0] md:mt-0 mt-1.5 rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  Photo id required
                                </Button>
                                <Button
                                  className="capitalize cursor-pointer font-medium mb-[11px] min-w-[133px] ml-2.5 md:ml-[0] md:mt-0 mt-1.5 rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  no third parties
                                </Button>
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[198px]">
                                  <Text
                                    className="text-base text-white-A700_87"
                                    size="txtSatoshiMedium16WhiteA70087"
                                  >
                                    Min purchase: 100 USD
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-base text-white-A700_87"
                                    size="txtSatoshiMedium16WhiteA70087"
                                  >
                                    Max purchase: 1,000 USD
                                  </Text>
                                </div>
                              </div>
                              <Button
                                className="cursor-pointer flex items-center justify-center mb-[7px] min-w-[79px] md:mt-0 mt-0.5"
                                leftIcon={
                                  <div className="h-[19px] mb-[3px] mr-1 pl-1 pr-[5px] w-[19px] bg-yellow-900 rounded-[9px] py-[3px] flex justify-center items-center">
                                    <Img
                                      src="images/img_airplane.svg"
                                      alt="airplane"
                                    />
                                  </div>
                                }
                                shape="round"
                                color="indigo_A700"
                                size="xs"
                                variant="fill"
                              >
                                <div className="capitalize font-medium text-[15px] text-center tracking-[1.50px]">
                                  Buy
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-white-A700_33 w-full" />
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                              <Text
                                className="capitalize sm:mt-0 mt-[3px] text-base text-light_blue-800"
                                size="txtSatoshiMedium16Lightblue800"
                              >
                                SammeyLobs
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[97px] text-base text-white-A700"
                                size="txtSatoshiBlack16"
                              >
                                Other Bank Transfer
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[459px] text-right text-white-A700 text-xl"
                                size="txtSatoshiBlack20"
                              >
                                29,264.06 USD
                              </Text>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[5px] w-full">
                              <Img
                                className="h-4 md:mt-0 mt-[7px] w-[15px]"
                                src="images/img_thumbsup.svg"
                                alt="thumbsup"
                              />
                              <Text
                                className="capitalize md:ml-[0] ml-[11px] md:mt-0 mt-[5px] text-sm text-white-A700"
                                size="txtSatoshiMedium14WhiteA700"
                              >
                                2345
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[132px] md:mt-0 mt-0.5 text-[19px] text-white-A700_87"
                                size="txtSatoshiMedium19WhiteA70087"
                              >
                                Facebook - Zelle
                              </Text>
                              <Button
                                className="capitalize cursor-pointer font-medium min-w-[87px] md:ml-[0] ml-[163px] rounded-[14px] text-center text-sm"
                                color="indigo_A700_75"
                                size="xs"
                                variant="fill"
                              >
                                New offer
                              </Button>
                              <Text
                                className="md:ml-[0] ml-[100px] md:mt-0 mt-1 text-base text-right text-white-A700_87"
                                size="txtSatoshiMedium16WhiteA70087"
                              >
                                1 USD = 0.92 USD of BTC
                              </Text>
                              <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center ml-4 md:ml-[0] md:mt-0 mt-0.5 w-[5%] md:w-full">
                                <Img
                                  className="h-[15px] mt-1"
                                  src="images/img_arrowup_white_a700_15x10.svg"
                                  alt="arrowup"
                                />
                                <Text
                                  className="text-[19px] text-white-A700_87"
                                  size="txtSatoshiMedium19WhiteA70087"
                                >
                                  9%
                                </Text>
                              </div>
                              <Img
                                className="h-[18px] ml-1 md:ml-[0] md:mt-0 mt-1.5 w-[18px]"
                                src="images/img_info.svg"
                                alt="info"
                              />
                            </div>
                            <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between mt-[11px] w-full">
                              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                <div className="bg-green-800 h-[9px] mb-[21px] md:mt-0 mt-4 rounded w-[9px]"></div>
                                <Text
                                  className="capitalize md:ml-[0] ml-[7px] text-sm text-white-A700_75"
                                  size="txtSatoshiMedium14WhiteA70075"
                                >
                                  <span className="text-white-A700 font-satoshi text-left font-medium">
                                    seen{" "}
                                  </span>
                                  <span className="text-white-A700 font-satoshi text-left font-medium">
                                    5 minutes ago
                                  </span>
                                </Text>
                                <Button
                                  className="capitalize cursor-pointer font-medium mb-[11px] min-w-[139px] ml-12 md:ml-[0] md:mt-0 mt-1.5 rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  Photo id required
                                </Button>
                                <Button
                                  className="capitalize cursor-pointer font-medium mb-[11px] min-w-[133px] ml-2.5 md:ml-[0] md:mt-0 mt-1.5 rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  no third parties
                                </Button>
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[198px]">
                                  <Text
                                    className="text-base text-white-A700_87"
                                    size="txtSatoshiMedium16WhiteA70087"
                                  >
                                    Min purchase: 100 USD
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-base text-white-A700_87"
                                    size="txtSatoshiMedium16WhiteA70087"
                                  >
                                    Max purchase: 1,000 USD
                                  </Text>
                                </div>
                              </div>
                              <Button
                                className="cursor-pointer flex items-center justify-center mb-[7px] min-w-[79px] md:mt-0 mt-0.5"
                                leftIcon={
                                  <div className="h-[19px] mb-[3px] mr-1 pl-1 pr-[5px] w-[19px] bg-yellow-900 rounded-[9px] py-[3px] flex justify-center items-center">
                                    <Img
                                      src="images/img_airplane.svg"
                                      alt="airplane"
                                    />
                                  </div>
                                }
                                shape="round"
                                color="indigo_A700"
                                size="xs"
                                variant="fill"
                              >
                                <div className="capitalize font-medium text-[15px] text-center tracking-[1.50px]">
                                  Buy
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-white-A700_33 w-full" />
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                              <Text
                                className="capitalize sm:mt-0 mt-[3px] text-base text-light_blue-800"
                                size="txtSatoshiMedium16Lightblue800"
                              >
                                SammeyLobs
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[97px] text-base text-white-A700"
                                size="txtSatoshiBlack16"
                              >
                                Other Bank Transfer
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[459px] text-right text-white-A700 text-xl"
                                size="txtSatoshiBlack20"
                              >
                                29,264.06 USD
                              </Text>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[5px] w-full">
                              <Img
                                className="h-4 md:mt-0 mt-[7px] w-[15px]"
                                src="images/img_thumbsup.svg"
                                alt="thumbsup"
                              />
                              <Text
                                className="capitalize md:ml-[0] ml-[11px] md:mt-0 mt-[5px] text-sm text-white-A700"
                                size="txtSatoshiMedium14WhiteA700"
                              >
                                2345
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[132px] md:mt-0 mt-0.5 text-[19px] text-white-A700_87"
                                size="txtSatoshiMedium19WhiteA70087"
                              >
                                Facebook - Zelle
                              </Text>
                              <Button
                                className="capitalize cursor-pointer font-medium min-w-[87px] md:ml-[0] ml-[163px] rounded-[14px] text-center text-sm"
                                color="indigo_A700_75"
                                size="xs"
                                variant="fill"
                              >
                                New offer
                              </Button>
                              <Text
                                className="md:ml-[0] ml-[100px] md:mt-0 mt-1 text-base text-right text-white-A700_87"
                                size="txtSatoshiMedium16WhiteA70087"
                              >
                                1 USD = 0.92 USD of BTC
                              </Text>
                              <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center ml-4 md:ml-[0] md:mt-0 mt-0.5 w-[5%] md:w-full">
                                <Img
                                  className="h-[15px] mt-1"
                                  src="images/img_arrowup_white_a700_15x10.svg"
                                  alt="arrowup"
                                />
                                <Text
                                  className="text-[19px] text-white-A700_87"
                                  size="txtSatoshiMedium19WhiteA70087"
                                >
                                  9%
                                </Text>
                              </div>
                              <Img
                                className="h-[18px] ml-1 md:ml-[0] md:mt-0 mt-1.5 w-[18px]"
                                src="images/img_info.svg"
                                alt="info"
                              />
                            </div>
                            <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between mt-[11px] w-full">
                              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                <div className="bg-green-800 h-[9px] mb-[21px] md:mt-0 mt-4 rounded w-[9px]"></div>
                                <Text
                                  className="capitalize md:ml-[0] ml-[7px] text-sm text-white-A700_75"
                                  size="txtSatoshiMedium14WhiteA70075"
                                >
                                  <span className="text-white-A700 font-satoshi text-left font-medium">
                                    seen{" "}
                                  </span>
                                  <span className="text-white-A700 font-satoshi text-left font-medium">
                                    5 minutes ago
                                  </span>
                                </Text>
                                <Button
                                  className="capitalize cursor-pointer font-medium mb-[11px] min-w-[139px] ml-12 md:ml-[0] md:mt-0 mt-1.5 rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  Photo id required
                                </Button>
                                <Button
                                  className="capitalize cursor-pointer font-medium mb-[11px] min-w-[133px] ml-2.5 md:ml-[0] md:mt-0 mt-1.5 rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  no third parties
                                </Button>
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[198px]">
                                  <Text
                                    className="text-base text-white-A700_87"
                                    size="txtSatoshiMedium16WhiteA70087"
                                  >
                                    Min purchase: 100 USD
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-base text-white-A700_87"
                                    size="txtSatoshiMedium16WhiteA70087"
                                  >
                                    Max purchase: 1,000 USD
                                  </Text>
                                </div>
                              </div>
                              <Button
                                className="cursor-pointer flex items-center justify-center mb-[7px] min-w-[79px] md:mt-0 mt-0.5"
                                leftIcon={
                                  <div className="h-[19px] mb-[3px] mr-1 pl-1 pr-[5px] w-[19px] bg-yellow-900 rounded-[9px] py-[3px] flex justify-center items-center">
                                    <Img
                                      src="images/img_airplane.svg"
                                      alt="airplane"
                                    />
                                  </div>
                                }
                                shape="round"
                                color="indigo_A700"
                                size="xs"
                                variant="fill"
                              >
                                <div className="capitalize font-medium text-[15px] text-center tracking-[1.50px]">
                                  Buy
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-white-A700_33 w-full" />
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                              <Text
                                className="capitalize sm:mt-0 mt-[3px] text-base text-light_blue-800"
                                size="txtSatoshiMedium16Lightblue800"
                              >
                                SammeyLobs
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[97px] text-base text-white-A700"
                                size="txtSatoshiBlack16"
                              >
                                Other Bank Transfer
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[459px] text-right text-white-A700 text-xl"
                                size="txtSatoshiBlack20"
                              >
                                29,264.06 USD
                              </Text>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[5px] w-full">
                              <Img
                                className="h-4 md:mt-0 mt-[7px] w-[15px]"
                                src="images/img_thumbsup.svg"
                                alt="thumbsup"
                              />
                              <Text
                                className="capitalize md:ml-[0] ml-[11px] md:mt-0 mt-[5px] text-sm text-white-A700"
                                size="txtSatoshiMedium14WhiteA700"
                              >
                                2345
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[132px] md:mt-0 mt-0.5 text-[19px] text-white-A700_87"
                                size="txtSatoshiMedium19WhiteA70087"
                              >
                                Facebook - Zelle
                              </Text>
                              <Button
                                className="capitalize cursor-pointer font-medium min-w-[87px] md:ml-[0] ml-[163px] rounded-[14px] text-center text-sm"
                                color="indigo_A700_75"
                                size="xs"
                                variant="fill"
                              >
                                New offer
                              </Button>
                              <Text
                                className="md:ml-[0] ml-[100px] md:mt-0 mt-1 text-base text-right text-white-A700_87"
                                size="txtSatoshiMedium16WhiteA70087"
                              >
                                1 USD = 0.92 USD of BTC
                              </Text>
                              <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center ml-4 md:ml-[0] md:mt-0 mt-0.5 w-[5%] md:w-full">
                                <Img
                                  className="h-[15px] mt-1"
                                  src="images/img_arrowup_white_a700_15x10.svg"
                                  alt="arrowup"
                                />
                                <Text
                                  className="text-[19px] text-white-A700_87"
                                  size="txtSatoshiMedium19WhiteA70087"
                                >
                                  9%
                                </Text>
                              </div>
                              <Img
                                className="h-[18px] ml-1 md:ml-[0] md:mt-0 mt-1.5 w-[18px]"
                                src="images/img_info.svg"
                                alt="info"
                              />
                            </div>
                            <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between mt-[11px] w-full">
                              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                <div className="bg-green-800 h-[9px] mb-[21px] md:mt-0 mt-4 rounded w-[9px]"></div>
                                <Text
                                  className="capitalize md:ml-[0] ml-[7px] text-sm text-white-A700_75"
                                  size="txtSatoshiMedium14WhiteA70075"
                                >
                                  <span className="text-white-A700 font-satoshi text-left font-medium">
                                    seen{" "}
                                  </span>
                                  <span className="text-white-A700 font-satoshi text-left font-medium">
                                    5 minutes ago
                                  </span>
                                </Text>
                                <Button
                                  className="capitalize cursor-pointer font-medium mb-[11px] min-w-[139px] ml-12 md:ml-[0] md:mt-0 mt-1.5 rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  Photo id required
                                </Button>
                                <Button
                                  className="capitalize cursor-pointer font-medium mb-[11px] min-w-[133px] ml-2.5 md:ml-[0] md:mt-0 mt-1.5 rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  no third parties
                                </Button>
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[198px]">
                                  <Text
                                    className="text-base text-white-A700_87"
                                    size="txtSatoshiMedium16WhiteA70087"
                                  >
                                    Min purchase: 100 USD
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-base text-white-A700_87"
                                    size="txtSatoshiMedium16WhiteA70087"
                                  >
                                    Max purchase: 1,000 USD
                                  </Text>
                                </div>
                              </div>
                              <Button
                                className="cursor-pointer flex items-center justify-center mb-[7px] min-w-[79px] md:mt-0 mt-0.5"
                                leftIcon={
                                  <div className="h-[19px] mb-[3px] mr-1 pl-1 pr-[5px] w-[19px] bg-yellow-900 rounded-[9px] py-[3px] flex justify-center items-center">
                                    <Img
                                      src="images/img_airplane.svg"
                                      alt="airplane"
                                    />
                                  </div>
                                }
                                shape="round"
                                color="indigo_A700"
                                size="xs"
                                variant="fill"
                              >
                                <div className="capitalize font-medium text-[15px] text-center tracking-[1.50px]">
                                  Buy
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-white-A700_33 w-full" />
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                              <Text
                                className="capitalize sm:mt-0 mt-[3px] text-base text-light_blue-800"
                                size="txtSatoshiMedium16Lightblue800"
                              >
                                SammeyLobs
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[97px] text-base text-white-A700"
                                size="txtSatoshiBlack16"
                              >
                                Other Bank Transfer
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[459px] text-right text-white-A700 text-xl"
                                size="txtSatoshiBlack20"
                              >
                                29,264.06 USD
                              </Text>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[5px] w-full">
                              <Img
                                className="h-4 md:mt-0 mt-[7px] w-[15px]"
                                src="images/img_thumbsup.svg"
                                alt="thumbsup"
                              />
                              <Text
                                className="capitalize md:ml-[0] ml-[11px] md:mt-0 mt-[5px] text-sm text-white-A700"
                                size="txtSatoshiMedium14WhiteA700"
                              >
                                2345
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[132px] md:mt-0 mt-0.5 text-[19px] text-white-A700_87"
                                size="txtSatoshiMedium19WhiteA70087"
                              >
                                Facebook - Zelle
                              </Text>
                              <Button
                                className="capitalize cursor-pointer font-medium min-w-[87px] md:ml-[0] ml-[163px] rounded-[14px] text-center text-sm"
                                color="indigo_A700_75"
                                size="xs"
                                variant="fill"
                              >
                                New offer
                              </Button>
                              <Text
                                className="md:ml-[0] ml-[100px] md:mt-0 mt-1 text-base text-right text-white-A700_87"
                                size="txtSatoshiMedium16WhiteA70087"
                              >
                                1 USD = 0.92 USD of BTC
                              </Text>
                              <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center ml-4 md:ml-[0] md:mt-0 mt-0.5 w-[5%] md:w-full">
                                <Img
                                  className="h-[15px] mt-1"
                                  src="images/img_arrowup_white_a700_15x10.svg"
                                  alt="arrowup"
                                />
                                <Text
                                  className="text-[19px] text-white-A700_87"
                                  size="txtSatoshiMedium19WhiteA70087"
                                >
                                  9%
                                </Text>
                              </div>
                              <Img
                                className="h-[18px] ml-1 md:ml-[0] md:mt-0 mt-1.5 w-[18px]"
                                src="images/img_info.svg"
                                alt="info"
                              />
                            </div>
                            <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between mt-[11px] w-full">
                              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                <div className="bg-green-800 h-[9px] mb-[21px] md:mt-0 mt-4 rounded w-[9px]"></div>
                                <Text
                                  className="capitalize md:ml-[0] ml-[7px] text-sm text-white-A700_75"
                                  size="txtSatoshiMedium14WhiteA70075"
                                >
                                  <span className="text-white-A700 font-satoshi text-left font-medium">
                                    seen{" "}
                                  </span>
                                  <span className="text-white-A700 font-satoshi text-left font-medium">
                                    5 minutes ago
                                  </span>
                                </Text>
                                <Button
                                  className="capitalize cursor-pointer font-medium mb-[11px] min-w-[139px] ml-12 md:ml-[0] md:mt-0 mt-1.5 rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  Photo id required
                                </Button>
                                <Button
                                  className="capitalize cursor-pointer font-medium mb-[11px] min-w-[133px] ml-2.5 md:ml-[0] md:mt-0 mt-1.5 rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  no third parties
                                </Button>
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[198px]">
                                  <Text
                                    className="text-base text-white-A700_87"
                                    size="txtSatoshiMedium16WhiteA70087"
                                  >
                                    Min purchase: 100 USD
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-base text-white-A700_87"
                                    size="txtSatoshiMedium16WhiteA70087"
                                  >
                                    Max purchase: 1,000 USD
                                  </Text>
                                </div>
                              </div>
                              <Button
                                className="cursor-pointer flex items-center justify-center mb-[7px] min-w-[79px] md:mt-0 mt-0.5"
                                leftIcon={
                                  <div className="h-[19px] mb-[3px] mr-1 pl-1 pr-[5px] w-[19px] bg-yellow-900 rounded-[9px] py-[3px] flex justify-center items-center">
                                    <Img
                                      src="images/img_airplane.svg"
                                      alt="airplane"
                                    />
                                  </div>
                                }
                                shape="round"
                                color="indigo_A700"
                                size="xs"
                                variant="fill"
                              >
                                <div className="capitalize font-medium text-[15px] text-center tracking-[1.50px]">
                                  Buy
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-white-A700_33 w-full" />
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                              <Text
                                className="capitalize sm:mt-0 mt-[3px] text-base text-light_blue-800"
                                size="txtSatoshiMedium16Lightblue800"
                              >
                                SammeyLobs
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[97px] text-base text-white-A700"
                                size="txtSatoshiBlack16"
                              >
                                Other Bank Transfer
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[459px] text-right text-white-A700 text-xl"
                                size="txtSatoshiBlack20"
                              >
                                29,264.06 USD
                              </Text>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[5px] w-full">
                              <Img
                                className="h-4 md:mt-0 mt-[7px] w-[15px]"
                                src="images/img_thumbsup.svg"
                                alt="thumbsup"
                              />
                              <Text
                                className="capitalize md:ml-[0] ml-[11px] md:mt-0 mt-[5px] text-sm text-white-A700"
                                size="txtSatoshiMedium14WhiteA700"
                              >
                                2345
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[132px] md:mt-0 mt-0.5 text-[19px] text-white-A700_87"
                                size="txtSatoshiMedium19WhiteA70087"
                              >
                                Facebook - Zelle
                              </Text>
                              <Button
                                className="capitalize cursor-pointer font-medium min-w-[87px] md:ml-[0] ml-[163px] rounded-[14px] text-center text-sm"
                                color="indigo_A700_75"
                                size="xs"
                                variant="fill"
                              >
                                New offer
                              </Button>
                              <Text
                                className="md:ml-[0] ml-[100px] md:mt-0 mt-1 text-base text-right text-white-A700_87"
                                size="txtSatoshiMedium16WhiteA70087"
                              >
                                1 USD = 0.92 USD of BTC
                              </Text>
                              <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center ml-4 md:ml-[0] md:mt-0 mt-0.5 w-[5%] md:w-full">
                                <Img
                                  className="h-[15px] mt-1"
                                  src="images/img_arrowup_white_a700_15x10.svg"
                                  alt="arrowup"
                                />
                                <Text
                                  className="text-[19px] text-white-A700_87"
                                  size="txtSatoshiMedium19WhiteA70087"
                                >
                                  9%
                                </Text>
                              </div>
                              <Img
                                className="h-[18px] ml-1 md:ml-[0] md:mt-0 mt-1.5 w-[18px]"
                                src="images/img_info.svg"
                                alt="info"
                              />
                            </div>
                            <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between mt-[11px] w-full">
                              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                <div className="bg-green-800 h-[9px] mb-[21px] md:mt-0 mt-4 rounded w-[9px]"></div>
                                <Text
                                  className="capitalize md:ml-[0] ml-[7px] text-sm text-white-A700_75"
                                  size="txtSatoshiMedium14WhiteA70075"
                                >
                                  <span className="text-white-A700 font-satoshi text-left font-medium">
                                    seen{" "}
                                  </span>
                                  <span className="text-white-A700 font-satoshi text-left font-medium">
                                    5 minutes ago
                                  </span>
                                </Text>
                                <Button
                                  className="capitalize cursor-pointer font-medium mb-[11px] min-w-[139px] ml-12 md:ml-[0] md:mt-0 mt-1.5 rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  Photo id required
                                </Button>
                                <Button
                                  className="capitalize cursor-pointer font-medium mb-[11px] min-w-[133px] ml-2.5 md:ml-[0] md:mt-0 mt-1.5 rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  no third parties
                                </Button>
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[198px]">
                                  <Text
                                    className="text-base text-white-A700_87"
                                    size="txtSatoshiMedium16WhiteA70087"
                                  >
                                    Min purchase: 100 USD
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-base text-white-A700_87"
                                    size="txtSatoshiMedium16WhiteA70087"
                                  >
                                    Max purchase: 1,000 USD
                                  </Text>
                                </div>
                              </div>
                              <Button
                                className="cursor-pointer flex items-center justify-center mb-[7px] min-w-[79px] md:mt-0 mt-0.5"
                                leftIcon={
                                  <div className="h-[19px] mb-[3px] mr-1 pl-1 pr-[5px] w-[19px] bg-yellow-900 rounded-[9px] py-[3px] flex justify-center items-center">
                                    <Img
                                      src="images/img_airplane.svg"
                                      alt="airplane"
                                    />
                                  </div>
                                }
                                shape="round"
                                color="indigo_A700"
                                size="xs"
                                variant="fill"
                              >
                                <div className="capitalize font-medium text-[15px] text-center tracking-[1.50px]">
                                  Buy
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-white-A700_33 w-full" />
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                              <Text
                                className="capitalize sm:mt-0 mt-[3px] text-base text-light_blue-800"
                                size="txtSatoshiMedium16Lightblue800"
                              >
                                SammeyLobs
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[97px] text-base text-white-A700"
                                size="txtSatoshiBlack16"
                              >
                                Other Bank Transfer
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[459px] text-right text-white-A700 text-xl"
                                size="txtSatoshiBlack20"
                              >
                                29,264.06 USD
                              </Text>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[5px] w-full">
                              <Img
                                className="h-4 md:mt-0 mt-[7px] w-[15px]"
                                src="images/img_thumbsup.svg"
                                alt="thumbsup"
                              />
                              <Text
                                className="capitalize md:ml-[0] ml-[11px] md:mt-0 mt-[5px] text-sm text-white-A700"
                                size="txtSatoshiMedium14WhiteA700"
                              >
                                2345
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[132px] md:mt-0 mt-0.5 text-[19px] text-white-A700_87"
                                size="txtSatoshiMedium19WhiteA70087"
                              >
                                Facebook - Zelle
                              </Text>
                              <Button
                                className="capitalize cursor-pointer font-medium min-w-[87px] md:ml-[0] ml-[163px] rounded-[14px] text-center text-sm"
                                color="indigo_A700_75"
                                size="xs"
                                variant="fill"
                              >
                                New offer
                              </Button>
                              <Text
                                className="md:ml-[0] ml-[100px] md:mt-0 mt-1 text-base text-right text-white-A700_87"
                                size="txtSatoshiMedium16WhiteA70087"
                              >
                                1 USD = 0.92 USD of BTC
                              </Text>
                              <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center ml-4 md:ml-[0] md:mt-0 mt-0.5 w-[5%] md:w-full">
                                <Img
                                  className="h-[15px] mt-1"
                                  src="images/img_arrowup_white_a700_15x10.svg"
                                  alt="arrowup"
                                />
                                <Text
                                  className="text-[19px] text-white-A700_87"
                                  size="txtSatoshiMedium19WhiteA70087"
                                >
                                  9%
                                </Text>
                              </div>
                              <Img
                                className="h-[18px] ml-1 md:ml-[0] md:mt-0 mt-1.5 w-[18px]"
                                src="images/img_info.svg"
                                alt="info"
                              />
                            </div>
                            <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between mt-[11px] w-full">
                              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                <div className="bg-green-800 h-[9px] mb-[21px] md:mt-0 mt-4 rounded w-[9px]"></div>
                                <Text
                                  className="capitalize md:ml-[0] ml-[7px] text-sm text-white-A700_75"
                                  size="txtSatoshiMedium14WhiteA70075"
                                >
                                  <span className="text-white-A700 font-satoshi text-left font-medium">
                                    seen{" "}
                                  </span>
                                  <span className="text-white-A700 font-satoshi text-left font-medium">
                                    5 minutes ago
                                  </span>
                                </Text>
                                <Button
                                  className="capitalize cursor-pointer font-medium mb-[11px] min-w-[139px] ml-12 md:ml-[0] md:mt-0 mt-1.5 rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  Photo id required
                                </Button>
                                <Button
                                  className="capitalize cursor-pointer font-medium mb-[11px] min-w-[133px] ml-2.5 md:ml-[0] md:mt-0 mt-1.5 rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  no third parties
                                </Button>
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[198px]">
                                  <Text
                                    className="text-base text-white-A700_87"
                                    size="txtSatoshiMedium16WhiteA70087"
                                  >
                                    Min purchase: 100 USD
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-base text-white-A700_87"
                                    size="txtSatoshiMedium16WhiteA70087"
                                  >
                                    Max purchase: 1,000 USD
                                  </Text>
                                </div>
                              </div>
                              <Button
                                className="cursor-pointer flex items-center justify-center mb-[7px] min-w-[79px] md:mt-0 mt-0.5"
                                leftIcon={
                                  <div className="h-[19px] mb-[3px] mr-1 pl-1 pr-[5px] w-[19px] bg-yellow-900 rounded-[9px] py-[3px] flex justify-center items-center">
                                    <Img
                                      src="images/img_airplane.svg"
                                      alt="airplane"
                                    />
                                  </div>
                                }
                                shape="round"
                                color="indigo_A700"
                                size="xs"
                                variant="fill"
                              >
                                <div className="capitalize font-medium text-[15px] text-center tracking-[1.50px]">
                                  Buy
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Line className="self-center h-px bg-white-A700_33 w-full" />
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                              <Text
                                className="capitalize sm:mt-0 mt-[3px] text-base text-light_blue-800"
                                size="txtSatoshiMedium16Lightblue800"
                              >
                                SammeyLobs
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[97px] text-base text-white-A700"
                                size="txtSatoshiBlack16"
                              >
                                Other Bank Transfer
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[459px] text-right text-white-A700 text-xl"
                                size="txtSatoshiBlack20"
                              >
                                29,264.06 USD
                              </Text>
                            </div>
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[5px] w-full">
                              <Img
                                className="h-4 md:mt-0 mt-[7px] w-[15px]"
                                src="images/img_thumbsup.svg"
                                alt="thumbsup"
                              />
                              <Text
                                className="capitalize md:ml-[0] ml-[11px] md:mt-0 mt-[5px] text-sm text-white-A700"
                                size="txtSatoshiMedium14WhiteA700"
                              >
                                2345
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[132px] md:mt-0 mt-0.5 text-[19px] text-white-A700_87"
                                size="txtSatoshiMedium19WhiteA70087"
                              >
                                Facebook - Zelle
                              </Text>
                              <Button
                                className="capitalize cursor-pointer font-medium min-w-[87px] md:ml-[0] ml-[163px] rounded-[14px] text-center text-sm"
                                color="indigo_A700_75"
                                size="xs"
                                variant="fill"
                              >
                                New offer
                              </Button>
                              <Text
                                className="md:ml-[0] ml-[100px] md:mt-0 mt-1 text-base text-right text-white-A700_87"
                                size="txtSatoshiMedium16WhiteA70087"
                              >
                                1 USD = 0.92 USD of BTC
                              </Text>
                              <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center ml-4 md:ml-[0] md:mt-0 mt-0.5 w-[5%] md:w-full">
                                <Img
                                  className="h-[15px] mt-1"
                                  src="images/img_arrowup_white_a700_15x10.svg"
                                  alt="arrowup"
                                />
                                <Text
                                  className="text-[19px] text-white-A700_87"
                                  size="txtSatoshiMedium19WhiteA70087"
                                >
                                  9%
                                </Text>
                              </div>
                              <Img
                                className="h-[18px] ml-1 md:ml-[0] md:mt-0 mt-1.5 w-[18px]"
                                src="images/img_info.svg"
                                alt="info"
                              />
                            </div>
                            <div className="flex md:flex-col flex-row gap-[21px] items-start justify-between mt-[11px] w-full">
                              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                <div className="bg-green-800 h-[9px] mb-[21px] md:mt-0 mt-4 rounded w-[9px]"></div>
                                <Text
                                  className="capitalize md:ml-[0] ml-[7px] text-sm text-white-A700_75"
                                  size="txtSatoshiMedium14WhiteA70075"
                                >
                                  <span className="text-white-A700 font-satoshi text-left font-medium">
                                    seen{" "}
                                  </span>
                                  <span className="text-white-A700 font-satoshi text-left font-medium">
                                    5 minutes ago
                                  </span>
                                </Text>
                                <Button
                                  className="capitalize cursor-pointer font-medium mb-[11px] min-w-[139px] ml-12 md:ml-[0] md:mt-0 mt-1.5 rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  Photo id required
                                </Button>
                                <Button
                                  className="capitalize cursor-pointer font-medium mb-[11px] min-w-[133px] ml-2.5 md:ml-[0] md:mt-0 mt-1.5 rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  no third parties
                                </Button>
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[198px]">
                                  <Text
                                    className="text-base text-white-A700_87"
                                    size="txtSatoshiMedium16WhiteA70087"
                                  >
                                    Min purchase: 100 USD
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-base text-white-A700_87"
                                    size="txtSatoshiMedium16WhiteA70087"
                                  >
                                    Max purchase: 1,000 USD
                                  </Text>
                                </div>
                              </div>
                              <Button
                                className="cursor-pointer flex items-center justify-center mb-[7px] min-w-[79px] md:mt-0 mt-0.5"
                                leftIcon={
                                  <div className="h-[19px] mb-[3px] mr-1 pl-1 pr-[5px] w-[19px] bg-yellow-900 rounded-[9px] py-[3px] flex justify-center items-center">
                                    <Img
                                      src="images/img_airplane.svg"
                                      alt="airplane"
                                    />
                                  </div>
                                }
                                shape="round"
                                color="indigo_A700"
                                size="xs"
                                variant="fill"
                              >
                                <div className="capitalize font-medium text-[15px] text-center tracking-[1.50px]">
                                  Buy
                                </div>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                  <Button
                    className="cursor-pointer font-medium min-w-[180px] md:ml-[0] ml-[835px] mt-5 text-[19px] text-center"
                    shape="round"
                    size="md"
                    variant="outline"
                    color="deep_purple_A400_4c_gray_50_00"
                  >
                    Create an Offer
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] mb-[1130px] ml-auto mt-[-NaNpx] rotate-[179deg] w-[15%] z-[1]">
            <div className="h-[664px] ml-auto my-auto w-4/5">
              <Img
                className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_34.png"
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
          <P2pTradingStack className="h-[872px] md:h-[NaNpx] mb-auto mt-[-NaNpx] mx-auto w-full z-[1]" />
        </div>
        <div className="absolute bottom-[16%] flex flex-col font-chillax gap-[31px] items-start justify-start md:px-5 right-[6%] w-[64%]">
          <Text
            className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 uppercase"
            size="txtChillaxMedium40"
          >
            How to Buy Bitcoin on Rockitly
          </Text>
          <div className="flex flex-col font-satoshi items-center justify-start w-full">
            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
              <Text
                className="leading-[34.00px] text-[19px] text-white-A700 w-full"
                size="txtSatoshiRegular19"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Text
                className="leading-[34.00px] text-[19px] text-white-A700 w-full"
                size="txtSatoshiRegular19"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </Text>
              <Text
                className="leading-[34.00px] text-[19px] text-white-A700 w-full"
                size="txtSatoshiRegular19"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <Text
                className="leading-[34.00px] text-[19px] text-white-A700 w-full"
                size="txtSatoshiRegular19"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buyp2ptradinglistingPage;
