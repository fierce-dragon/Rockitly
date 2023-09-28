import React from "react";

import { Button, Img, Input, Line, List, Switch, Text } from "components";
import Header from "components/Header";
import P2pTradingStack from "components/P2pTradingStack";

const Sellp2ptradinglistingPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-satoshi mx-auto relative w-full">
        <div className="h-[864px] md:h-[NaNpx] mt-[-NaNpx] mx-auto md:px-5 w-full z-[1]">
          <Img
            className="h-[864px] m-auto object-cover w-full"
            src="images/img_rectangle40003_10.png"
            alt="rectangle40003"
          />
          <Img
            className="absolute h-[864px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_rectangle40008_9.png"
            alt="rectangle40008"
          />
        </div>
        <Img
          className="h-[6376px] mt-[-14px] mx-auto object-cover w-full z-[1]"
          src="images/img_rectangle40011_9.png"
          alt="rectangle40011"
        />
        <div className="bg-gradient1  flex flex-col items-center justify-start mt-[-NaNpx] mx-auto pl-1 py-1 w-full z-[1]">
          <div className="flex flex-col items-center justify-start mb-[4747px] mt-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
            <Line className="bg-white-A700_7e h-px mt-[17px] w-full" />
            <div className="flex md:flex-col flex-row gap-[50px] items-start justify-start max-w-[1403px] mt-[33px] mx-auto md:px-5 w-full">
              <div className="flex md:flex-1 flex-col indigo_A700_82_indigo_A700_02_border39 items-center justify-start md:mt-0 mt-3.5 outline outline-[2px] p-[18px] rounded-[16px] w-1/4 md:w-full">
                <div className="flex flex-col items-start justify-start mb-4 w-[94%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-[17px] text-white-A700"
                        size="txtSatoshiBold17"
                      >
                        Sell
                      </Text>
                    </div>
                    <Input
                      name="group1000006490"
                      placeholder="BTC"
                      className="font-bold p-0 placeholder:text-white-A700 text-[16.87px] text-left w-full"
                      wrapClassName="flex mt-[3px] rounded-[10px] w-full"
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
                          Get paid via
                        </Text>
                      </div>
                      <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border37 flex flex-row items-center justify-between p-[11px] rounded-[10px] w-full">
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
                  <div className="flex flex-col items-start justify-start mt-[33px] w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-[17px] text-white-A700"
                        size="txtSatoshiBold17"
                      >
                        I Want To Get
                      </Text>
                    </div>
                    <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border38 flex flex-row items-center justify-start mt-[3px] p-[11px] rounded-[10px] w-full">
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
                  <div className="flex flex-row gap-5 items-start justify-between mt-[27px] w-full">
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
              <div className="flex md:flex-1 flex-col items-start justify-start w-[73%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 uppercase"
                    size="txtChillaxMedium40"
                  >
                    Sell Bitcoin (BTC).
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
                <List
                  className="flex flex-col gap-10 items-center mt-[59px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[22%] md:w-full">
                      <div className="h-[78px] relative w-full">
                        <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border39 h-[78px] m-auto rounded-[16px] w-[99%]"></div>
                        <div className="absolute bottom-[12%] flex flex-row inset-x-[0] items-start justify-start mx-auto w-[84%]">
                          <div className="flex flex-col items-center justify-start mb-[5px] w-[91%]">
                            <div className="flex flex-row gap-[9px] items-center justify-start w-full">
                              <Img
                                className="h-[49px] w-12"
                                src="images/img_mail_indigo_a700_49x48.svg"
                                alt="mail"
                              />
                              <Text
                                className="text-base text-white-A700"
                                size="txtSatoshiBold16"
                              >
                                Bank Transfers
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-[15px] mt-[39px] w-[15px]"
                            src="images/img_cursor.svg"
                            alt="cursor"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[22%] md:w-full">
                      <div className="h-[78px] relative w-full">
                        <div className="h-[78px] indigo_A700_82_indigo_A700_02_border40 m-auto outline outline-[2px] rounded-[16px] w-[99%]"></div>
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[74%]">
                          <div className="flex flex-row gap-2 items-end justify-start w-full">
                            <Img
                              className="h-[34px]"
                              src="images/img_trash.svg"
                              alt="trash"
                            />
                            <Text
                              className="mb-1 mt-[7px] text-base text-white-A700"
                              size="txtSatoshiBold16"
                            >
                              Online Wallets
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[24%] md:w-full">
                      <div className="h-[78px] relative w-full">
                        <div className="h-[78px] indigo_A700_82_indigo_A700_02_border41 m-auto outline outline-[2px] rounded-[16px] w-[99%]"></div>
                        <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[8%] my-auto w-[79%]">
                          <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                            <Img
                              className="h-[42px] w-[42px]"
                              src="images/img_computer.svg"
                              alt="computer"
                            />
                            <Text
                              className="text-base text-white-A700"
                              size="txtSatoshiBold16"
                            >
                              Debit/credit cards
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[22%] md:w-full">
                      <div className="h-[78px] relative w-full">
                        <div className="h-[78px] indigo_A700_82_indigo_A700_02_border42 m-auto outline outline-[2px] rounded-[16px] w-[99%]"></div>
                        <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[12%] my-auto w-[58%]">
                          <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                            <Img
                              className="h-[35px] w-9"
                              src="images/img_layer1_indigo_900.svg"
                              alt="layerOne"
                            />
                            <Text
                              className="text-base text-white-A700"
                              size="txtSatoshiBold16"
                            >
                              Gift Cards
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[22%] md:w-full">
                      <div className="h-[78px] relative w-full">
                        <div className="h-[78px] indigo_A700_82_indigo_A700_02_border43 m-auto outline outline-[2px] rounded-[16px] w-[99%]"></div>
                        <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[4%] w-[84%]">
                          <div className="flex flex-row gap-[15px] items-end justify-start w-full">
                            <Img
                              className="h-[35px] w-9"
                              src="images/img_arrowdown_indigo_900.svg"
                              alt="arrowdown"
                            />
                            <Text
                              className="mb-1 mt-[9px] text-base text-white-A700"
                              size="txtSatoshiBold16"
                            >
                              Digital currencies
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[22%] md:w-full">
                      <div className="h-[78px] relative w-full">
                        <div className="h-[78px] indigo_A700_82_indigo_A700_02_border44 m-auto outline outline-[2px] rounded-[16px] w-[99%]"></div>
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[76%]">
                          <div className="flex flex-row gap-[13px] items-start justify-start w-full">
                            <Img
                              className="h-7"
                              src="images/img_layer1_indigo_900_28x39.svg"
                              alt="layerOne"
                            />
                            <Text
                              className="mt-1 text-base text-white-A700"
                              size="txtSatoshiBold16"
                            >
                              Cash payments
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[24%] md:w-full">
                      <div className="h-[78px] relative w-full">
                        <div className="h-[78px] indigo_A700_82_indigo_A700_02_border45 m-auto outline outline-[2px] rounded-[16px] w-[99%]"></div>
                        <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[10%] my-auto w-[76%]">
                          <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                            <Img
                              className="h-[35px] w-9"
                              src="images/img_user_indigo_900.svg"
                              alt="user"
                            />
                            <Text
                              className="text-base text-white-A700"
                              size="txtSatoshiBold16"
                            >
                              Goods & services
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[22%] md:w-full">
                      <div className="h-[78px] relative w-full">
                        <div className="h-[78px] indigo_A700_82_indigo_A700_02_border46 m-auto outline outline-[2px] rounded-[16px] w-[99%]"></div>
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[71%]">
                          <div className="flex flex-row gap-5 items-center justify-start w-full">
                            <Img
                              className="h-[38px]"
                              src="images/img_file_indigo_900.svg"
                              alt="file"
                            />
                            <Text
                              className="text-base text-white-A700"
                              size="txtSatoshiBold16"
                            >
                              Mobile Money
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex flex-row gap-[7px] items-center justify-end md:ml-[0] ml-[791px] mt-[72px] w-[23%] md:w-full">
                  <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border40 h-[17px] rounded-[3px] w-[17px]"></div>
                  <Text
                    className="text-base text-right text-white-A700"
                    size="txtSatoshiRegular16"
                  >
                    Vendors active in last 10 min
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start mt-[17px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col gap-[31px] indigo_A700_82_indigo_A700_02_border47 items-center justify-start outline outline-[2px] pb-8 rounded-[16px] w-full">
                      <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border41 flex md:flex-col flex-row md:gap-5 items-center justify-start p-4 rounded-tl-[16px] rounded-tr-[16px] w-full">
                        <Text
                          className="ml-2.5 md:ml-[0] text-[17px] text-white-A700"
                          size="txtSatoshiBold17"
                        >
                          Sell to
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[147px] text-[17px] text-white-A700"
                          size="txtSatoshiBold17"
                        >
                          Get paid with
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[200px] text-[17px] text-white-A700"
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
                          className="h-[18px] md:ml-[0] ml-[21px] w-[18px]"
                          src="images/img_info.svg"
                          alt="info_One"
                        />
                      </div>
                      <List
                        className="flex flex-col gap-[30.5px] items-center w-[95%]"
                        orientation="vertical"
                      >
                        <div className="h-[120px] sm:h-[169px] md:h-[614px] relative w-full">
                          <Img
                            className="h-6 ml-auto mr-[375px] w-6"
                            src="images/img_timeprogress.svg"
                            alt="timeprogress"
                          />
                          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                                <div className="sm:h-[111px] md:h-[380px] h-[62px] relative w-full">
                                  <div className="absolute flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                                    <Text
                                      className="capitalize sm:mt-0 mt-[3px] text-base text-light_blue-800"
                                      size="txtSatoshiMedium16Lightblue800"
                                    >
                                      JollyEscolar26
                                    </Text>
                                    <Text
                                      className="capitalize sm:ml-[0] ml-[88px] text-base text-white-A700"
                                      size="txtSatoshiBlack16"
                                    >
                                      Game Items
                                    </Text>
                                    <Text
                                      className="capitalize sm:ml-[0] ml-[552px] text-right text-white-A700 text-xl"
                                      size="txtSatoshiBlack20"
                                    >
                                      56,680 USD
                                    </Text>
                                  </div>
                                  <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto w-full">
                                    <Img
                                      className="h-4 md:mt-0 mt-10 w-[15px]"
                                      src="images/img_thumbsup.svg"
                                      alt="thumbsup"
                                    />
                                    <Text
                                      className="capitalize md:ml-[0] ml-[11px] md:mt-0 mt-[39px] text-sm text-white-A700"
                                      size="txtSatoshiMedium14WhiteA700"
                                    >
                                      281
                                    </Text>
                                    <div className="bg-green-A700 flex flex-col h-[19px] items-end justify-start mb-[38px] md:ml-[0] ml-[258px] md:mt-0 mt-1 p-[3px] rounded-[9px] w-[19px]">
                                      <Img
                                        className="h-2 my-0.5 rounded-[1px]"
                                        src="images/img_checkmark_gray_900_05.svg"
                                        alt="checkmark"
                                      />
                                    </div>
                                    <Text
                                      className="ml-1.5 md:ml-[0] md:mt-0 mt-1 text-[15px] text-green-A700"
                                      size="txtSatoshiMedium15GreenA700"
                                    >
                                      VERIFIED
                                    </Text>
                                    <Text
                                      className="mb-9 md:ml-[0] ml-[104px] text-[19px] text-white-A700_87"
                                      size="txtSatoshiMedium19WhiteA70087"
                                    >
                                      11 min
                                    </Text>
                                    <Text
                                      className="md:ml-[0] ml-[119px] md:mt-0 mt-[38px] text-base text-right text-white-A700_87"
                                      size="txtSatoshiMedium16WhiteA70087"
                                    >
                                      1 USD = 2.1 USD of BTC
                                    </Text>
                                    <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center ml-4 md:ml-[0] md:mt-0 mt-9 w-[8%] md:w-full">
                                      <Img
                                        className="h-[15px] mt-1"
                                        src="images/img_arrowup_white_a700_15x10.svg"
                                        alt="arrowup"
                                      />
                                      <Text
                                        className="text-[19px] text-white-A700_87"
                                        size="txtSatoshiMedium19WhiteA70087"
                                      >
                                        100%
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-[18px] ml-3 md:ml-[0] md:mt-0 mt-[39px] w-[18px]"
                                      src="images/img_info.svg"
                                      alt="info"
                                    />
                                  </div>
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-[45px] items-start justify-between w-full">
                                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                    <div className="bg-green-800 h-[9px] mb-5 md:mt-0 mt-[17px] rounded w-[9px]"></div>
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
                                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[528px]">
                                      <Text
                                        className="text-base text-white-A700_87"
                                        size="txtSatoshiMedium16WhiteA70087"
                                      >
                                        Min sale: 10 USD
                                      </Text>
                                      <Text
                                        className="mt-[3px] text-base text-white-A700_87"
                                        size="txtSatoshiMedium16WhiteA70087"
                                      >
                                        Max sale: 50,000 USD
                                      </Text>
                                    </div>
                                  </div>
                                  <Button
                                    className="cursor-pointer flex items-center justify-center mb-1.5 min-w-[79px] md:mt-0 mt-[3px]"
                                    leftIcon={
                                      <div className="h-[19px] mb-px mr-[3px] pl-1 pr-[5px] w-[19px] bg-yellow-900 rounded-[9px] py-[3px] flex justify-center items-center">
                                        <Img
                                          src="images/img_airplane.svg"
                                          alt="airplane"
                                        />
                                      </div>
                                    }
                                    shape="round"
                                    color="indigo_A700"
                                    size="sm"
                                    variant="fill"
                                  >
                                    <div className="capitalize font-medium text-[15px] text-center tracking-[1.50px]">
                                      Sell
                                    </div>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Line className="self-center h-px bg-white-A700_33 w-full" />
                        <div className="h-[120px] sm:h-[169px] md:h-[614px] relative w-full">
                          <Img
                            className="h-6 ml-auto mr-[375px] w-6"
                            src="images/img_timeprogress.svg"
                            alt="timeprogress"
                          />
                          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                                <div className="sm:h-[111px] md:h-[380px] h-[62px] relative w-full">
                                  <div className="absolute flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                                    <Text
                                      className="capitalize sm:mt-0 mt-[3px] text-base text-light_blue-800"
                                      size="txtSatoshiMedium16Lightblue800"
                                    >
                                      JollyEscolar26
                                    </Text>
                                    <Text
                                      className="capitalize sm:ml-[0] ml-[88px] text-base text-white-A700"
                                      size="txtSatoshiBlack16"
                                    >
                                      Game Items
                                    </Text>
                                    <Text
                                      className="capitalize sm:ml-[0] ml-[552px] text-right text-white-A700 text-xl"
                                      size="txtSatoshiBlack20"
                                    >
                                      56,680 USD
                                    </Text>
                                  </div>
                                  <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto w-full">
                                    <Img
                                      className="h-4 md:mt-0 mt-10 w-[15px]"
                                      src="images/img_thumbsup.svg"
                                      alt="thumbsup"
                                    />
                                    <Text
                                      className="capitalize md:ml-[0] ml-[11px] md:mt-0 mt-[39px] text-sm text-white-A700"
                                      size="txtSatoshiMedium14WhiteA700"
                                    >
                                      281
                                    </Text>
                                    <div className="bg-green-A700 flex flex-col h-[19px] items-end justify-start mb-[38px] md:ml-[0] ml-[258px] md:mt-0 mt-1 p-[3px] rounded-[9px] w-[19px]">
                                      <Img
                                        className="h-2 my-0.5 rounded-[1px]"
                                        src="images/img_checkmark_gray_900_05.svg"
                                        alt="checkmark"
                                      />
                                    </div>
                                    <Text
                                      className="ml-1.5 md:ml-[0] md:mt-0 mt-1 text-[15px] text-green-A700"
                                      size="txtSatoshiMedium15GreenA700"
                                    >
                                      VERIFIED
                                    </Text>
                                    <Text
                                      className="mb-9 md:ml-[0] ml-[104px] text-[19px] text-white-A700_87"
                                      size="txtSatoshiMedium19WhiteA70087"
                                    >
                                      11 min
                                    </Text>
                                    <Text
                                      className="md:ml-[0] ml-[119px] md:mt-0 mt-[38px] text-base text-right text-white-A700_87"
                                      size="txtSatoshiMedium16WhiteA70087"
                                    >
                                      1 USD = 2.1 USD of BTC
                                    </Text>
                                    <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center ml-4 md:ml-[0] md:mt-0 mt-9 w-[8%] md:w-full">
                                      <Img
                                        className="h-[15px] mt-1"
                                        src="images/img_arrowup_white_a700_15x10.svg"
                                        alt="arrowup"
                                      />
                                      <Text
                                        className="text-[19px] text-white-A700_87"
                                        size="txtSatoshiMedium19WhiteA70087"
                                      >
                                        100%
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-[18px] ml-3 md:ml-[0] md:mt-0 mt-[39px] w-[18px]"
                                      src="images/img_info.svg"
                                      alt="info"
                                    />
                                  </div>
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-[45px] items-start justify-between w-full">
                                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                    <div className="bg-green-800 h-[9px] mb-5 md:mt-0 mt-[17px] rounded w-[9px]"></div>
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
                                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[528px]">
                                      <Text
                                        className="text-base text-white-A700_87"
                                        size="txtSatoshiMedium16WhiteA70087"
                                      >
                                        Min sale: 10 USD
                                      </Text>
                                      <Text
                                        className="mt-[3px] text-base text-white-A700_87"
                                        size="txtSatoshiMedium16WhiteA70087"
                                      >
                                        Max sale: 50,000 USD
                                      </Text>
                                    </div>
                                  </div>
                                  <Button
                                    className="cursor-pointer flex items-center justify-center mb-1.5 min-w-[79px] md:mt-0 mt-[3px]"
                                    leftIcon={
                                      <div className="h-[19px] mb-px mr-[3px] pl-1 pr-[5px] w-[19px] bg-yellow-900 rounded-[9px] py-[3px] flex justify-center items-center">
                                        <Img
                                          src="images/img_airplane.svg"
                                          alt="airplane"
                                        />
                                      </div>
                                    }
                                    shape="round"
                                    color="indigo_A700"
                                    size="sm"
                                    variant="fill"
                                  >
                                    <div className="capitalize font-medium text-[15px] text-center tracking-[1.50px]">
                                      Sell
                                    </div>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Line className="self-center h-px bg-white-A700_33 w-full" />
                        <div className="h-[120px] sm:h-[169px] md:h-[614px] relative w-full">
                          <Img
                            className="h-6 ml-auto mr-[375px] w-6"
                            src="images/img_timeprogress.svg"
                            alt="timeprogress"
                          />
                          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                                <div className="sm:h-[111px] md:h-[380px] h-[62px] relative w-full">
                                  <div className="absolute flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                                    <Text
                                      className="capitalize sm:mt-0 mt-[3px] text-base text-light_blue-800"
                                      size="txtSatoshiMedium16Lightblue800"
                                    >
                                      JollyEscolar26
                                    </Text>
                                    <Text
                                      className="capitalize sm:ml-[0] ml-[88px] text-base text-white-A700"
                                      size="txtSatoshiBlack16"
                                    >
                                      Game Items
                                    </Text>
                                    <Text
                                      className="capitalize sm:ml-[0] ml-[552px] text-right text-white-A700 text-xl"
                                      size="txtSatoshiBlack20"
                                    >
                                      56,680 USD
                                    </Text>
                                  </div>
                                  <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto w-full">
                                    <Img
                                      className="h-4 md:mt-0 mt-10 w-[15px]"
                                      src="images/img_thumbsup.svg"
                                      alt="thumbsup"
                                    />
                                    <Text
                                      className="capitalize md:ml-[0] ml-[11px] md:mt-0 mt-[39px] text-sm text-white-A700"
                                      size="txtSatoshiMedium14WhiteA700"
                                    >
                                      281
                                    </Text>
                                    <div className="bg-green-A700 flex flex-col h-[19px] items-end justify-start mb-[38px] md:ml-[0] ml-[258px] md:mt-0 mt-1 p-[3px] rounded-[9px] w-[19px]">
                                      <Img
                                        className="h-2 my-0.5 rounded-[1px]"
                                        src="images/img_checkmark_gray_900_05.svg"
                                        alt="checkmark"
                                      />
                                    </div>
                                    <Text
                                      className="ml-1.5 md:ml-[0] md:mt-0 mt-1 text-[15px] text-green-A700"
                                      size="txtSatoshiMedium15GreenA700"
                                    >
                                      VERIFIED
                                    </Text>
                                    <Text
                                      className="mb-9 md:ml-[0] ml-[104px] text-[19px] text-white-A700_87"
                                      size="txtSatoshiMedium19WhiteA70087"
                                    >
                                      11 min
                                    </Text>
                                    <Text
                                      className="md:ml-[0] ml-[119px] md:mt-0 mt-[38px] text-base text-right text-white-A700_87"
                                      size="txtSatoshiMedium16WhiteA70087"
                                    >
                                      1 USD = 2.1 USD of BTC
                                    </Text>
                                    <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center ml-4 md:ml-[0] md:mt-0 mt-9 w-[8%] md:w-full">
                                      <Img
                                        className="h-[15px] mt-1"
                                        src="images/img_arrowup_white_a700_15x10.svg"
                                        alt="arrowup"
                                      />
                                      <Text
                                        className="text-[19px] text-white-A700_87"
                                        size="txtSatoshiMedium19WhiteA70087"
                                      >
                                        100%
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-[18px] ml-3 md:ml-[0] md:mt-0 mt-[39px] w-[18px]"
                                      src="images/img_info.svg"
                                      alt="info"
                                    />
                                  </div>
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-[45px] items-start justify-between w-full">
                                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                    <div className="bg-green-800 h-[9px] mb-5 md:mt-0 mt-[17px] rounded w-[9px]"></div>
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
                                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[528px]">
                                      <Text
                                        className="text-base text-white-A700_87"
                                        size="txtSatoshiMedium16WhiteA70087"
                                      >
                                        Min sale: 10 USD
                                      </Text>
                                      <Text
                                        className="mt-[3px] text-base text-white-A700_87"
                                        size="txtSatoshiMedium16WhiteA70087"
                                      >
                                        Max sale: 50,000 USD
                                      </Text>
                                    </div>
                                  </div>
                                  <Button
                                    className="cursor-pointer flex items-center justify-center mb-1.5 min-w-[79px] md:mt-0 mt-[3px]"
                                    leftIcon={
                                      <div className="h-[19px] mb-px mr-[3px] pl-1 pr-[5px] w-[19px] bg-yellow-900 rounded-[9px] py-[3px] flex justify-center items-center">
                                        <Img
                                          src="images/img_airplane.svg"
                                          alt="airplane"
                                        />
                                      </div>
                                    }
                                    shape="round"
                                    color="indigo_A700"
                                    size="sm"
                                    variant="fill"
                                  >
                                    <div className="capitalize font-medium text-[15px] text-center tracking-[1.50px]">
                                      Sell
                                    </div>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Line className="self-center h-px bg-white-A700_33 w-full" />
                        <div className="h-[120px] sm:h-[169px] md:h-[614px] relative w-full">
                          <Img
                            className="h-6 ml-auto mr-[375px] w-6"
                            src="images/img_timeprogress.svg"
                            alt="timeprogress"
                          />
                          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                                <div className="sm:h-[111px] md:h-[380px] h-[62px] relative w-full">
                                  <div className="absolute flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                                    <Text
                                      className="capitalize sm:mt-0 mt-[3px] text-base text-light_blue-800"
                                      size="txtSatoshiMedium16Lightblue800"
                                    >
                                      JollyEscolar26
                                    </Text>
                                    <Text
                                      className="capitalize sm:ml-[0] ml-[88px] text-base text-white-A700"
                                      size="txtSatoshiBlack16"
                                    >
                                      Game Items
                                    </Text>
                                    <Text
                                      className="capitalize sm:ml-[0] ml-[552px] text-right text-white-A700 text-xl"
                                      size="txtSatoshiBlack20"
                                    >
                                      56,680 USD
                                    </Text>
                                  </div>
                                  <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto w-full">
                                    <Img
                                      className="h-4 md:mt-0 mt-10 w-[15px]"
                                      src="images/img_thumbsup.svg"
                                      alt="thumbsup"
                                    />
                                    <Text
                                      className="capitalize md:ml-[0] ml-[11px] md:mt-0 mt-[39px] text-sm text-white-A700"
                                      size="txtSatoshiMedium14WhiteA700"
                                    >
                                      281
                                    </Text>
                                    <div className="bg-green-A700 flex flex-col h-[19px] items-end justify-start mb-[38px] md:ml-[0] ml-[258px] md:mt-0 mt-1 p-[3px] rounded-[9px] w-[19px]">
                                      <Img
                                        className="h-2 my-0.5 rounded-[1px]"
                                        src="images/img_checkmark_gray_900_05.svg"
                                        alt="checkmark"
                                      />
                                    </div>
                                    <Text
                                      className="ml-1.5 md:ml-[0] md:mt-0 mt-1 text-[15px] text-green-A700"
                                      size="txtSatoshiMedium15GreenA700"
                                    >
                                      VERIFIED
                                    </Text>
                                    <Text
                                      className="mb-9 md:ml-[0] ml-[104px] text-[19px] text-white-A700_87"
                                      size="txtSatoshiMedium19WhiteA70087"
                                    >
                                      11 min
                                    </Text>
                                    <Text
                                      className="md:ml-[0] ml-[119px] md:mt-0 mt-[38px] text-base text-right text-white-A700_87"
                                      size="txtSatoshiMedium16WhiteA70087"
                                    >
                                      1 USD = 2.1 USD of BTC
                                    </Text>
                                    <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center ml-4 md:ml-[0] md:mt-0 mt-9 w-[8%] md:w-full">
                                      <Img
                                        className="h-[15px] mt-1"
                                        src="images/img_arrowup_white_a700_15x10.svg"
                                        alt="arrowup"
                                      />
                                      <Text
                                        className="text-[19px] text-white-A700_87"
                                        size="txtSatoshiMedium19WhiteA70087"
                                      >
                                        100%
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-[18px] ml-3 md:ml-[0] md:mt-0 mt-[39px] w-[18px]"
                                      src="images/img_info.svg"
                                      alt="info"
                                    />
                                  </div>
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-[45px] items-start justify-between w-full">
                                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                    <div className="bg-green-800 h-[9px] mb-5 md:mt-0 mt-[17px] rounded w-[9px]"></div>
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
                                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[528px]">
                                      <Text
                                        className="text-base text-white-A700_87"
                                        size="txtSatoshiMedium16WhiteA70087"
                                      >
                                        Min sale: 10 USD
                                      </Text>
                                      <Text
                                        className="mt-[3px] text-base text-white-A700_87"
                                        size="txtSatoshiMedium16WhiteA70087"
                                      >
                                        Max sale: 50,000 USD
                                      </Text>
                                    </div>
                                  </div>
                                  <Button
                                    className="cursor-pointer flex items-center justify-center mb-1.5 min-w-[79px] md:mt-0 mt-[3px]"
                                    leftIcon={
                                      <div className="h-[19px] mb-px mr-[3px] pl-1 pr-[5px] w-[19px] bg-yellow-900 rounded-[9px] py-[3px] flex justify-center items-center">
                                        <Img
                                          src="images/img_airplane.svg"
                                          alt="airplane"
                                        />
                                      </div>
                                    }
                                    shape="round"
                                    color="indigo_A700"
                                    size="sm"
                                    variant="fill"
                                  >
                                    <div className="capitalize font-medium text-[15px] text-center tracking-[1.50px]">
                                      Sell
                                    </div>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                    <Line className="bg-white-A700_33 h-px w-full" />
                    <div className="flex sm:flex-col flex-row gap-5 items-center justify-end md:ml-[0] ml-[623px] mt-[19px] w-[39%] md:w-full">
                      <Button
                        className="cursor-pointer font-medium min-w-[200px] text-[19px] text-center"
                        shape="round"
                        size="md"
                        variant="outline"
                        color="deep_purple_A400_4c_gray_50_00"
                      >
                        Load more Offers
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[172px] text-[19px] text-center"
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
                <div className="flex flex-col font-chillax items-center justify-start mt-[94px]">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 uppercase"
                    size="txtChillaxMedium40"
                  >
                    Showing Offers Worldwide
                  </Text>
                </div>
                <div className="flex flex-col font-satoshi items-center justify-start mt-4 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-col gap-[31px] indigo_A700_82_indigo_A700_02_border48 items-center justify-start outline outline-[2px] pb-8 rounded-[16px] w-full">
                      <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border42 flex md:flex-col flex-row md:gap-5 items-center justify-start p-4 rounded-tl-[16px] rounded-tr-[16px] w-full">
                        <Text
                          className="ml-2.5 md:ml-[0] text-[17px] text-white-A700"
                          size="txtSatoshiBold17"
                        >
                          Sell to
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[147px] text-[17px] text-white-A700"
                          size="txtSatoshiBold17"
                        >
                          Get paid with
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[200px] text-[17px] text-white-A700"
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
                            alt="question_One"
                          />
                        </div>
                        <Img
                          className="h-6 md:ml-[0] ml-[54px] w-6"
                          src="images/img_menu_white_a700_24x24.svg"
                          alt="menu_Three"
                        />
                        <Img
                          className="h-[18px] md:ml-[0] ml-[21px] w-[18px]"
                          src="images/img_info.svg"
                          alt="info_Two"
                        />
                      </div>
                      <List
                        className="flex flex-col gap-[30.5px] items-center w-[95%]"
                        orientation="vertical"
                      >
                        <div className="h-[120px] sm:h-[169px] md:h-[497px] relative w-full">
                          <Img
                            className="h-6 ml-auto mr-[375px] w-6"
                            src="images/img_timeprogress.svg"
                            alt="timeprogress"
                          />
                          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                                <div className="sm:h-[111px] md:h-[263px] h-[62px] relative w-full">
                                  <div className="absolute flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                                    <Text
                                      className="capitalize sm:mt-0 mt-[3px] text-base text-light_blue-800"
                                      size="txtSatoshiMedium16Lightblue800"
                                    >
                                      JollyEscolar26
                                    </Text>
                                    <Text
                                      className="capitalize sm:ml-[0] ml-[88px] text-base text-white-A700"
                                      size="txtSatoshiBlack16"
                                    >
                                      Game Items
                                    </Text>
                                    <Text
                                      className="capitalize sm:ml-[0] ml-[552px] text-right text-white-A700 text-xl"
                                      size="txtSatoshiBlack20"
                                    >
                                      56,680 USD
                                    </Text>
                                  </div>
                                  <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto w-full">
                                    <Img
                                      className="h-4 md:mt-0 mt-10 w-[15px]"
                                      src="images/img_thumbsup.svg"
                                      alt="thumbsup"
                                    />
                                    <Text
                                      className="capitalize md:ml-[0] ml-[11px] md:mt-0 mt-[39px] text-sm text-white-A700"
                                      size="txtSatoshiMedium14WhiteA700"
                                    >
                                      281
                                    </Text>
                                    <Text
                                      className="mb-9 md:ml-[0] ml-[452px] text-[19px] text-white-A700_87"
                                      size="txtSatoshiMedium19WhiteA70087"
                                    >
                                      11 min
                                    </Text>
                                    <Text
                                      className="md:ml-[0] ml-[119px] md:mt-0 mt-[38px] text-base text-right text-white-A700_87"
                                      size="txtSatoshiMedium16WhiteA70087"
                                    >
                                      1 USD = 2.1 USD of BTC
                                    </Text>
                                    <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center ml-4 md:ml-[0] md:mt-0 mt-9 w-[8%] md:w-full">
                                      <Img
                                        className="h-[15px] mt-1"
                                        src="images/img_arrowup_white_a700_15x10.svg"
                                        alt="arrowup"
                                      />
                                      <Text
                                        className="text-[19px] text-white-A700_87"
                                        size="txtSatoshiMedium19WhiteA70087"
                                      >
                                        100%
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-[18px] ml-3 md:ml-[0] md:mt-0 mt-[39px] w-[18px]"
                                      src="images/img_info.svg"
                                      alt="info"
                                    />
                                  </div>
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-[45px] items-start justify-between w-full">
                                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                    <div className="bg-green-800 h-[9px] mb-5 md:mt-0 mt-[17px] rounded w-[9px]"></div>
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
                                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[528px]">
                                      <Text
                                        className="text-base text-white-A700_87"
                                        size="txtSatoshiMedium16WhiteA70087"
                                      >
                                        Min sale: 10 USD
                                      </Text>
                                      <Text
                                        className="mt-[3px] text-base text-white-A700_87"
                                        size="txtSatoshiMedium16WhiteA70087"
                                      >
                                        Max sale: 50,000 USD
                                      </Text>
                                    </div>
                                  </div>
                                  <Button
                                    className="cursor-pointer flex items-center justify-center mb-1.5 min-w-[79px] md:mt-0 mt-[3px]"
                                    leftIcon={
                                      <div className="h-[19px] mb-px mr-[3px] pl-1 pr-[5px] w-[19px] bg-yellow-900 rounded-[9px] py-[3px] flex justify-center items-center">
                                        <Img
                                          src="images/img_airplane.svg"
                                          alt="airplane"
                                        />
                                      </div>
                                    }
                                    shape="round"
                                    color="indigo_A700"
                                    size="sm"
                                    variant="fill"
                                  >
                                    <div className="capitalize font-medium text-[15px] text-center tracking-[1.50px]">
                                      Sell
                                    </div>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Line className="self-center h-px bg-white-A700_33 w-full" />
                        <div className="h-[120px] sm:h-[169px] md:h-[497px] relative w-full">
                          <Img
                            className="h-6 ml-auto mr-[375px] w-6"
                            src="images/img_timeprogress.svg"
                            alt="timeprogress"
                          />
                          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                                <div className="sm:h-[111px] md:h-[263px] h-[62px] relative w-full">
                                  <div className="absolute flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                                    <Text
                                      className="capitalize sm:mt-0 mt-[3px] text-base text-light_blue-800"
                                      size="txtSatoshiMedium16Lightblue800"
                                    >
                                      JollyEscolar26
                                    </Text>
                                    <Text
                                      className="capitalize sm:ml-[0] ml-[88px] text-base text-white-A700"
                                      size="txtSatoshiBlack16"
                                    >
                                      Game Items
                                    </Text>
                                    <Text
                                      className="capitalize sm:ml-[0] ml-[552px] text-right text-white-A700 text-xl"
                                      size="txtSatoshiBlack20"
                                    >
                                      56,680 USD
                                    </Text>
                                  </div>
                                  <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto w-full">
                                    <Img
                                      className="h-4 md:mt-0 mt-10 w-[15px]"
                                      src="images/img_thumbsup.svg"
                                      alt="thumbsup"
                                    />
                                    <Text
                                      className="capitalize md:ml-[0] ml-[11px] md:mt-0 mt-[39px] text-sm text-white-A700"
                                      size="txtSatoshiMedium14WhiteA700"
                                    >
                                      281
                                    </Text>
                                    <Text
                                      className="mb-9 md:ml-[0] ml-[452px] text-[19px] text-white-A700_87"
                                      size="txtSatoshiMedium19WhiteA70087"
                                    >
                                      11 min
                                    </Text>
                                    <Text
                                      className="md:ml-[0] ml-[119px] md:mt-0 mt-[38px] text-base text-right text-white-A700_87"
                                      size="txtSatoshiMedium16WhiteA70087"
                                    >
                                      1 USD = 2.1 USD of BTC
                                    </Text>
                                    <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center ml-4 md:ml-[0] md:mt-0 mt-9 w-[8%] md:w-full">
                                      <Img
                                        className="h-[15px] mt-1"
                                        src="images/img_arrowup_white_a700_15x10.svg"
                                        alt="arrowup"
                                      />
                                      <Text
                                        className="text-[19px] text-white-A700_87"
                                        size="txtSatoshiMedium19WhiteA70087"
                                      >
                                        100%
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-[18px] ml-3 md:ml-[0] md:mt-0 mt-[39px] w-[18px]"
                                      src="images/img_info.svg"
                                      alt="info"
                                    />
                                  </div>
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-[45px] items-start justify-between w-full">
                                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                    <div className="bg-green-800 h-[9px] mb-5 md:mt-0 mt-[17px] rounded w-[9px]"></div>
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
                                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[528px]">
                                      <Text
                                        className="text-base text-white-A700_87"
                                        size="txtSatoshiMedium16WhiteA70087"
                                      >
                                        Min sale: 10 USD
                                      </Text>
                                      <Text
                                        className="mt-[3px] text-base text-white-A700_87"
                                        size="txtSatoshiMedium16WhiteA70087"
                                      >
                                        Max sale: 50,000 USD
                                      </Text>
                                    </div>
                                  </div>
                                  <Button
                                    className="cursor-pointer flex items-center justify-center mb-1.5 min-w-[79px] md:mt-0 mt-[3px]"
                                    leftIcon={
                                      <div className="h-[19px] mb-px mr-[3px] pl-1 pr-[5px] w-[19px] bg-yellow-900 rounded-[9px] py-[3px] flex justify-center items-center">
                                        <Img
                                          src="images/img_airplane.svg"
                                          alt="airplane"
                                        />
                                      </div>
                                    }
                                    shape="round"
                                    color="indigo_A700"
                                    size="sm"
                                    variant="fill"
                                  >
                                    <div className="capitalize font-medium text-[15px] text-center tracking-[1.50px]">
                                      Sell
                                    </div>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Line className="self-center h-px bg-white-A700_33 w-full" />
                        <div className="h-[120px] sm:h-[169px] md:h-[497px] relative w-full">
                          <Img
                            className="h-6 ml-auto mr-[375px] w-6"
                            src="images/img_timeprogress.svg"
                            alt="timeprogress"
                          />
                          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                                <div className="sm:h-[111px] md:h-[263px] h-[62px] relative w-full">
                                  <div className="absolute flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                                    <Text
                                      className="capitalize sm:mt-0 mt-[3px] text-base text-light_blue-800"
                                      size="txtSatoshiMedium16Lightblue800"
                                    >
                                      JollyEscolar26
                                    </Text>
                                    <Text
                                      className="capitalize sm:ml-[0] ml-[88px] text-base text-white-A700"
                                      size="txtSatoshiBlack16"
                                    >
                                      Game Items
                                    </Text>
                                    <Text
                                      className="capitalize sm:ml-[0] ml-[552px] text-right text-white-A700 text-xl"
                                      size="txtSatoshiBlack20"
                                    >
                                      56,680 USD
                                    </Text>
                                  </div>
                                  <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto w-full">
                                    <Img
                                      className="h-4 md:mt-0 mt-10 w-[15px]"
                                      src="images/img_thumbsup.svg"
                                      alt="thumbsup"
                                    />
                                    <Text
                                      className="capitalize md:ml-[0] ml-[11px] md:mt-0 mt-[39px] text-sm text-white-A700"
                                      size="txtSatoshiMedium14WhiteA700"
                                    >
                                      281
                                    </Text>
                                    <Text
                                      className="mb-9 md:ml-[0] ml-[452px] text-[19px] text-white-A700_87"
                                      size="txtSatoshiMedium19WhiteA70087"
                                    >
                                      11 min
                                    </Text>
                                    <Text
                                      className="md:ml-[0] ml-[119px] md:mt-0 mt-[38px] text-base text-right text-white-A700_87"
                                      size="txtSatoshiMedium16WhiteA70087"
                                    >
                                      1 USD = 2.1 USD of BTC
                                    </Text>
                                    <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center ml-4 md:ml-[0] md:mt-0 mt-9 w-[8%] md:w-full">
                                      <Img
                                        className="h-[15px] mt-1"
                                        src="images/img_arrowup_white_a700_15x10.svg"
                                        alt="arrowup"
                                      />
                                      <Text
                                        className="text-[19px] text-white-A700_87"
                                        size="txtSatoshiMedium19WhiteA70087"
                                      >
                                        100%
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-[18px] ml-3 md:ml-[0] md:mt-0 mt-[39px] w-[18px]"
                                      src="images/img_info.svg"
                                      alt="info"
                                    />
                                  </div>
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-[45px] items-start justify-between w-full">
                                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                    <div className="bg-green-800 h-[9px] mb-5 md:mt-0 mt-[17px] rounded w-[9px]"></div>
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
                                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[528px]">
                                      <Text
                                        className="text-base text-white-A700_87"
                                        size="txtSatoshiMedium16WhiteA70087"
                                      >
                                        Min sale: 10 USD
                                      </Text>
                                      <Text
                                        className="mt-[3px] text-base text-white-A700_87"
                                        size="txtSatoshiMedium16WhiteA70087"
                                      >
                                        Max sale: 50,000 USD
                                      </Text>
                                    </div>
                                  </div>
                                  <Button
                                    className="cursor-pointer flex items-center justify-center mb-1.5 min-w-[79px] md:mt-0 mt-[3px]"
                                    leftIcon={
                                      <div className="h-[19px] mb-px mr-[3px] pl-1 pr-[5px] w-[19px] bg-yellow-900 rounded-[9px] py-[3px] flex justify-center items-center">
                                        <Img
                                          src="images/img_airplane.svg"
                                          alt="airplane"
                                        />
                                      </div>
                                    }
                                    shape="round"
                                    color="indigo_A700"
                                    size="sm"
                                    variant="fill"
                                  >
                                    <div className="capitalize font-medium text-[15px] text-center tracking-[1.50px]">
                                      Sell
                                    </div>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Line className="self-center h-px bg-white-A700_33 w-full" />
                        <div className="h-[120px] sm:h-[169px] md:h-[497px] relative w-full">
                          <Img
                            className="h-6 ml-auto mr-[375px] w-6"
                            src="images/img_timeprogress.svg"
                            alt="timeprogress"
                          />
                          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                                <div className="sm:h-[111px] md:h-[263px] h-[62px] relative w-full">
                                  <div className="absolute flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                                    <Text
                                      className="capitalize sm:mt-0 mt-[3px] text-base text-light_blue-800"
                                      size="txtSatoshiMedium16Lightblue800"
                                    >
                                      JollyEscolar26
                                    </Text>
                                    <Text
                                      className="capitalize sm:ml-[0] ml-[88px] text-base text-white-A700"
                                      size="txtSatoshiBlack16"
                                    >
                                      Game Items
                                    </Text>
                                    <Text
                                      className="capitalize sm:ml-[0] ml-[552px] text-right text-white-A700 text-xl"
                                      size="txtSatoshiBlack20"
                                    >
                                      56,680 USD
                                    </Text>
                                  </div>
                                  <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto w-full">
                                    <Img
                                      className="h-4 md:mt-0 mt-10 w-[15px]"
                                      src="images/img_thumbsup.svg"
                                      alt="thumbsup"
                                    />
                                    <Text
                                      className="capitalize md:ml-[0] ml-[11px] md:mt-0 mt-[39px] text-sm text-white-A700"
                                      size="txtSatoshiMedium14WhiteA700"
                                    >
                                      281
                                    </Text>
                                    <Text
                                      className="mb-9 md:ml-[0] ml-[452px] text-[19px] text-white-A700_87"
                                      size="txtSatoshiMedium19WhiteA70087"
                                    >
                                      11 min
                                    </Text>
                                    <Text
                                      className="md:ml-[0] ml-[119px] md:mt-0 mt-[38px] text-base text-right text-white-A700_87"
                                      size="txtSatoshiMedium16WhiteA70087"
                                    >
                                      1 USD = 2.1 USD of BTC
                                    </Text>
                                    <div className="flex md:flex-1 flex-row gap-[7px] items-start justify-center ml-4 md:ml-[0] md:mt-0 mt-9 w-[8%] md:w-full">
                                      <Img
                                        className="h-[15px] mt-1"
                                        src="images/img_arrowup_white_a700_15x10.svg"
                                        alt="arrowup"
                                      />
                                      <Text
                                        className="text-[19px] text-white-A700_87"
                                        size="txtSatoshiMedium19WhiteA70087"
                                      >
                                        100%
                                      </Text>
                                    </div>
                                    <Img
                                      className="h-[18px] ml-3 md:ml-[0] md:mt-0 mt-[39px] w-[18px]"
                                      src="images/img_info.svg"
                                      alt="info"
                                    />
                                  </div>
                                </div>
                                <div className="flex md:flex-col flex-row md:gap-[45px] items-start justify-between w-full">
                                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                                    <div className="bg-green-800 h-[9px] mb-5 md:mt-0 mt-[17px] rounded w-[9px]"></div>
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
                                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[528px]">
                                      <Text
                                        className="text-base text-white-A700_87"
                                        size="txtSatoshiMedium16WhiteA70087"
                                      >
                                        Min sale: 10 USD
                                      </Text>
                                      <Text
                                        className="mt-[3px] text-base text-white-A700_87"
                                        size="txtSatoshiMedium16WhiteA70087"
                                      >
                                        Max sale: 50,000 USD
                                      </Text>
                                    </div>
                                  </div>
                                  <Button
                                    className="cursor-pointer flex items-center justify-center mb-1.5 min-w-[79px] md:mt-0 mt-[3px]"
                                    leftIcon={
                                      <div className="h-[19px] mb-px mr-[3px] pl-1 pr-[5px] w-[19px] bg-yellow-900 rounded-[9px] py-[3px] flex justify-center items-center">
                                        <Img
                                          src="images/img_airplane.svg"
                                          alt="airplane"
                                        />
                                      </div>
                                    }
                                    shape="round"
                                    color="indigo_A700"
                                    size="sm"
                                    variant="fill"
                                  >
                                    <div className="capitalize font-medium text-[15px] text-center tracking-[1.50px]">
                                      Sell
                                    </div>
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                    <Line className="bg-white-A700_33 h-px w-full" />
                    <div className="flex sm:flex-col flex-row gap-5 items-center justify-end md:ml-[0] ml-[623px] mt-[19px] w-[39%] md:w-full">
                      <Button
                        className="cursor-pointer font-medium min-w-[200px] text-[19px] text-center"
                        shape="round"
                        size="md"
                        variant="outline"
                        color="deep_purple_A400_4c_gray_50_00"
                      >
                        Load more Offers
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[172px] text-[19px] text-center"
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
            </div>
          </div>
        </div>
        <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] ml-auto mt-[-NaNpx] md:px-5 rotate-[179deg] w-[15%] z-[1]">
          <div className="h-[664px] ml-auto my-auto w-4/5">
            <Img
              className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
              src="images/img_ellipse264_38.png"
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

export default Sellp2ptradinglistingPage;
