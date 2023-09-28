import React from "react";

import { Button, CheckBox, Img, Line, List, SelectBox, Text } from "components";
import Header from "components/Header";
import P2pTradingStack from "components/P2pTradingStack";

const priceTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Sellp2ptradingdetailsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-satoshi mx-auto relative w-full">
        <div className="h-[864px] md:h-[NaNpx] mt-[-NaNpx] mx-auto md:px-5 w-full z-[1]">
          <Img
            className="h-[864px] m-auto object-cover w-full"
            src="images/img_rectangle40003_11.png"
            alt="rectangle40003"
          />
          <div className="absolute bg-gray-900_9d flex flex-col gap-[18px] h-full inset-[0] items-center justify-center m-auto w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center mt-[23px] w-full" />
            <Line className="bg-white-A700_7e h-px mb-[764px] w-full" />
          </div>
        </div>
        <Img
          className="h-[5806px] mt-[-14px] mx-auto object-cover w-full z-[1]"
          src="images/img_rectangle40011_10.png"
          alt="rectangle40011"
        />
        <div className="bg-gradient1  flex flex-col items-start justify-start mt-[-NaNpx] mx-auto p-[19px] w-full z-[1]">
          <div className="bg-white-A700 flex flex-col font-chillax items-center justify-start max-w-[1200px] mx-auto p-9 md:px-5 rounded-[16px] w-full">
            <Text
              className="leading-[50.00px] text-4xl sm:text-[32px] md:text-[34px] text-center text-indigo-A700 uppercase"
              size="txtChillaxRegular36"
            >
              <span className="text-indigo-A700 font-chillax font-normal">
                <>
                  Sell Bitcoin with Bank Transfer
                  <br />
                </>
              </span>
              <span className="text-indigo-A700 font-chillax font-semibold">
                (USD) — All Banks
              </span>
            </Text>
          </div>
          <div className="flex flex-col font-chillax items-center justify-start md:ml-[0] ml-[180px] mt-[31px] md:px-5 w-[39%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="sm:text-[29px] md:text-[31px] text-[33px] text-white-A700 uppercase"
                size="txtChillaxSemibold33"
              >
                How much do you want to Sell?
              </Text>
            </div>
          </div>
          <div className="flex flex-col font-satoshi items-center justify-start max-w-[1200px] mt-10 mx-auto md:px-5 w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[43px] items-start justify-start w-full">
                <div className="flex flex-col gap-[46px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-2.5 justify-start w-[47%] md:w-full">
                      <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[3px]">
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                            size="txtSatoshiBold22"
                          >
                            I will receive
                          </Text>
                        </div>
                        <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border44 flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-[15px] rounded-[16px] w-full">
                          <Text
                            className="sm:ml-[0] ml-[3px] sm:mt-0 my-0.5 text-[19px] text-white-A700_75"
                            size="txtSatoshiMedium19WhiteA70075"
                          >
                            Enter amount
                          </Text>
                          <Text
                            className="mb-[3px] sm:ml-[0] ml-[341px] text-[19px] text-white-A700"
                            size="txtSatoshiBold19"
                          >
                            USD
                          </Text>
                          <Img
                            className="h-[7px] sm:ml-[0] ml-[9px] sm:mt-0 mt-2.5"
                            src="images/img_arrowdown.svg"
                            alt="arrowdown"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-2.5 items-start justify-start ml-1.5 md:ml-[0] w-2/5 md:w-full">
                        <Img
                          className="h-[18px] w-[18px]"
                          src="images/img_info.svg"
                          alt="info"
                        />
                        <Text
                          className="text-base text-white-A700_87"
                          size="txtSatoshiRegular16WhiteA70087"
                        >
                          Enter amount to get started
                        </Text>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-0.5 w-[47%] md:w-full">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                            size="txtSatoshiBold22"
                          >
                            and pay in Bitcoin
                          </Text>
                        </div>
                        <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border45 flex flex-row sm:gap-10 items-center justify-between p-[13px] rounded-[16px] w-full">
                          <Text
                            className="ml-2.5 text-[19px] text-white-A700_75"
                            size="txtSatoshiMedium19WhiteA70075"
                          >
                            0.12431876
                          </Text>
                          <div className="flex flex-col items-center justify-center mr-[18px] w-auto">
                            <div className="flex flex-row gap-[8.33px] items-center justify-start w-auto">
                              <Button
                                className="flex h-[33px] items-center justify-center rounded-[16px] w-[33px]"
                                shape="circle"
                                color="yellow_900"
                                size="xs"
                                variant="fill"
                              >
                                <Img
                                  src="images/img_airplane.svg"
                                  alt="airplane"
                                />
                              </Button>
                              <Text
                                className="text-[19px] text-white-A700 w-auto"
                                size="txtSatoshiBold19"
                              >
                                BTC
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2.5 justify-start w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <div className="flex flex-row gap-2.5 items-start justify-start md:ml-[0] ml-[3px] w-[18%] md:w-full">
                        <Text
                          className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                          size="txtSatoshiBold22"
                        >
                          My Bank Account
                        </Text>
                        <Img
                          className="h-[18px] mt-1 w-[18px]"
                          src="images/img_info.svg"
                          alt="info_One"
                        />
                      </div>
                      <SelectBox
                        className="!text-white-A700_75 font-medium text-[19px] text-left w-full"
                        placeholderClassName="!text-white-A700_75"
                        indicator={
                          <Img
                            className="h-[7px] mr-[0] border-white-A700 border-[3px] border-solid w-3.5"
                            src="images/img_arrowdown.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="price_Two"
                        options={priceTwoOptionsList}
                        isSearchable={false}
                        placeholder="Select your bank account: USA, USD"
                        shape="round"
                        size="sm"
                        variant="outline"
                        color="deep_purple_A400_4c_gray_50_00"
                      />
                    </div>
                    <div className="flex flex-row gap-2.5 items-start justify-start ml-1.5 md:ml-[0] w-[17%] md:w-full">
                      <Img
                        className="h-[18px] w-[18px]"
                        src="images/img_info.svg"
                        alt="info_Two"
                      />
                      <Text
                        className="text-base text-white-A700_87"
                        size="txtSatoshiRegular16WhiteA70087"
                      >
                        Bank Account is required
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[18px] justify-start w-[47%] md:w-full">
                  <Button
                    className="capitalize cursor-pointer font-medium min-w-[562px] sm:min-w-full text-center text-lg tracking-[1.80px]"
                    shape="round"
                    color="indigo_A700"
                    size="xl"
                    variant="fill"
                  >
                    Sign up to sell
                  </Button>
                  <Text
                    className="ml-2 md:ml-[0] text-center text-sm text-white-A700_75"
                    size="txtSatoshiMedium14WhiteA70075"
                  >
                    Don’t worry, once you’ve signed up, we’ll bring you right
                    back to this page.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-satoshi md:gap-10 gap-[76px] items-center justify-center max-w-[1200px] mt-[81px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start w-[47%] md:w-full">
              <Text
                className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                size="txtSatoshiBold22"
              >
                About this offer
              </Text>
              <div className="h-[400px] relative w-full">
                <div className="absolute h-[400px] indigo_A700_82_indigo_A700_02_border49 inset-[0] justify-center m-auto outline outline-[2px] rounded-[16px] w-full"></div>
                <div className="absolute flex flex-col gap-[55px] h-max inset-[0] items-start justify-center m-auto w-full">
                  <div className="flex flex-col items-center justify-start ml-8 md:ml-[0] w-[54%] md:w-full">
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <div className="flex flex-row gap-2 items-start justify-start w-[38%] md:w-full">
                        <Text
                          className="text-[19px] text-white-A700_7e"
                          size="txtSatoshiMedium19WhiteA7007e"
                        >
                          Buyer rate
                        </Text>
                        <Img
                          className="h-4 w-[17px]"
                          src="images/img_location_white_a700.svg"
                          alt="location"
                        />
                      </div>
                      <div className="flex flex-row gap-[7px] items-center justify-start w-full">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtSatoshiBold20WhiteA700"
                        >
                          26,796.03 USD
                        </Text>
                        <Text
                          className="text-[19px] text-white-A700_7e"
                          size="txtSatoshiMedium19WhiteA7007e"
                        >
                          2% below market
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700_60 flex flex-col indigo_A700_60_indigo_A700_60_01_border4 items-start justify-end outline outline-[2px] p-5 w-full">
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[11px] mt-0.5 w-[63%] md:w-full">
                      <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                        <Text
                          className="text-[19px] text-white-A700_7e"
                          size="txtSatoshiMedium19WhiteA7007e"
                        >
                          Sell Limits
                        </Text>
                        <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                          <div className="flex flex-row gap-1.5 items-center justify-start w-2/5">
                            <Text
                              className="text-white-A700_87 text-xl"
                              size="txtSatoshiBold20WhiteA70087"
                            >
                              Min
                            </Text>
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtSatoshiBold20WhiteA700"
                            >
                              500 USD
                            </Text>
                          </div>
                          <div className="flex flex-row items-start justify-between w-[59%]">
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtSatoshiBold20WhiteA700"
                            >
                              -
                            </Text>
                            <Text
                              className="text-white-A700_87 text-xl"
                              size="txtSatoshiBold20WhiteA70087"
                            >
                              Max
                            </Text>
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtSatoshiBold20WhiteA700"
                            >
                              4,15600 USD
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-20 items-center justify-start ml-8 md:ml-[0] w-[56%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[43%]">
                      <div className="flex flex-col gap-2 items-start justify-start w-full">
                        <Text
                          className="text-[19px] text-white-A700_7e"
                          size="txtSatoshiMedium19WhiteA7007e"
                        >
                          Trade time limit
                        </Text>
                        <div className="flex flex-col items-center justify-start w-1/2 md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="text-white-A700 text-xl"
                              size="txtSatoshiBold20WhiteA700"
                            >
                              30 min
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[32%]">
                      <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                        <Text
                          className="text-[19px] text-white-A700_7e"
                          size="txtSatoshiMedium19WhiteA7007e"
                        >
                          Rockitly fee
                        </Text>
                        <div className="flex flex-col h-[27px] items-center justify-start w-[27px]">
                          <div className="flex flex-col h-[27px] items-center justify-start w-[27px]">
                            <Text
                              className="h-[27px] text-white-A700 text-xl"
                              size="txtSatoshiBold20WhiteA700"
                            >
                              1%
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start w-[47%] md:w-full">
              <Text
                className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                size="txtSatoshiBold22"
              >
                About this buyer
              </Text>
              <div className="flex flex-col gap-[17px] indigo_A700_82_indigo_A700_02_border50 justify-end outline outline-[2px] pt-[30px] rounded-[16px] w-full">
                <div className="flex sm:flex-col flex-row gap-3 items-center justify-start md:ml-[0] ml-[30px] mr-[331px] w-[36%] md:w-full">
                  <Img
                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                    src="images/img_ellipse2776_50x50.png"
                    alt="ellipse2776"
                  />
                  <div className="flex flex-col items-start justify-start w-[70%] sm:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <Text
                        className="text-[19px] text-white-A700"
                        size="txtSatoshiMedium19"
                      >
                        ariana66
                      </Text>
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_group1000006492.svg"
                        alt="group1000006492"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_share.svg"
                        alt="share"
                      />
                    </div>
                    <Text
                      className="capitalize mt-0.5 text-sm text-white-A700_75"
                      size="txtSatoshiMedium14WhiteA70075"
                    >
                      <span className="text-white-A700 font-satoshi text-left font-medium">
                        seen{" "}
                      </span>
                      <span className="text-white-A700 font-satoshi text-left font-medium">
                        5 minutes ago
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700_60 flex flex-col indigo_A700_60_indigo_A700_60_01_border5 items-start justify-end outline outline-[2px] p-[13px] w-full">
                      <div className="flex flex-col items-center justify-start ml-4 md:ml-[0] mt-1 w-[77%] md:w-full">
                        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            <div className="flex flex-col items-center justify-start mb-0.5 w-[37%]">
                              <div className="flex flex-col items-center justify-start w-full">
                                <Text
                                  className="text-[19px] text-white-A700_7e"
                                  size="txtSatoshiMedium19WhiteA7007e"
                                >
                                  Positive feedback
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start mt-0.5 w-2/5">
                              <div className="flex flex-col items-center justify-start w-full">
                                <Text
                                  className="text-[19px] text-white-A700_7e"
                                  size="txtSatoshiMedium19WhiteA7007e"
                                >
                                  Negative feedback
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-between ml-0.5 md:ml-[0] w-[71%] md:w-full">
                            <div className="flex flex-row gap-3 items-start justify-start w-[23%]">
                              <Img
                                className="h-4 mt-1 w-[15px]"
                                src="images/img_thumbsup.svg"
                                alt="thumbsup"
                              />
                              <Text
                                className="text-white-A700 text-xl"
                                size="txtSatoshiBold20WhiteA700"
                              >
                                204
                              </Text>
                            </div>
                            <div className="flex flex-row gap-3 items-start justify-between w-[15%]">
                              <Img
                                className="h-4 mt-1 w-[15px]"
                                src="images/img_file_red_900.svg"
                                alt="file"
                              />
                              <Text
                                className="text-white-A700 text-xl"
                                size="txtSatoshiBold20WhiteA700"
                              >
                                0
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[30px] w-[69%] md:w-full">
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <CheckBox
                          className="font-medium text-[15px] text-left"
                          inputClassName="h-[19px] mr-[5px] w-[19px]"
                          name="idverified"
                          id="idverified"
                          label="ID verified"
                          color="green_A700"
                          variant="fill"
                        ></CheckBox>
                        <CheckBox
                          className="font-medium text-[15px] text-left"
                          inputClassName="h-[19px] mr-[5px] w-[19px]"
                          name="addressverified_One"
                          id="addressverified_One"
                          label="Address verified"
                          color="green_A700"
                          variant="fill"
                        ></CheckBox>
                      </div>
                      <div className="flex flex-row items-center justify-between w-[98%] md:w-full">
                        <CheckBox
                          className="font-medium text-[15px] text-left"
                          inputClassName="h-[19px] mr-[5px] w-[19px]"
                          name="emailverified"
                          id="emailverified"
                          label="Email verified"
                          color="green_A700"
                          variant="fill"
                        ></CheckBox>
                        <CheckBox
                          className="font-medium text-[15px] text-left"
                          inputClassName="h-[19px] mr-[5px] w-[19px]"
                          name="phoneverified"
                          id="phoneverified"
                          label="Phone verified"
                          color="green_A700"
                          variant="fill"
                        ></CheckBox>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-white-A700_60 flex flex-col indigo_A700_60_indigo_A700_60_01_border6 items-start justify-start outline outline-[2px] p-[19px] rounded-bl-[16px] rounded-br-[16px] w-full">
                      <div className="flex flex-col gap-[5px] justify-start mb-3.5 md:ml-[0] ml-[11px] w-[39%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row items-start justify-evenly w-full">
                              <Text
                                className="mt-0.5 text-[19px] text-white-A700_7e"
                                size="txtSatoshiMedium19WhiteA7007e"
                              >
                                Average trade speed
                              </Text>
                              <Img
                                className="h-6 w-6"
                                src="images/img_question.svg"
                                alt="question"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-3 md:ml-[0]">
                          <Text
                            className="text-[19px] text-white-A700"
                            size="txtSatoshiMedium19"
                          >
                            13 min
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-chillax gap-[11px] items-start justify-start max-w-[1200px] mt-[79px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 uppercase"
              size="txtChillaxMedium40"
            >
              Offer terms
            </Text>
            <div className="flex flex-col font-satoshi items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="leading-[34.00px] text-[19px] text-white-A700"
                  size="txtSatoshiRegular19"
                >
                  <>
                    1. Before a trade starts, the seller selects the bank
                    account they’ll receive payment to and the buyer selects the
                    account they will send funds to.
                    <br />
                    2. When the seller is ready to start the trade, they&#39;ll
                    share their bank account details with the buyer.
                    <br />
                    3. The buyer makes the payment to the seller&#39;s specified
                    account.
                    <br />
                    4. We recommend the buyer uploads a screenshot of the
                    transaction, featuring the transaction reference number, as
                    proof of payment.
                  </>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row font-satoshi items-start justify-between md:ml-[0] ml-[178px] mt-[85px] md:px-5 w-[28%] md:w-full">
            <div className="flex flex-row gap-1.5 items-center justify-start mt-[5px] w-[41%]">
              <Img
                className="h-[37px] w-[37px]"
                src="images/img_bookmark_indigo_a700.svg"
                alt="bookmark"
              />
              <Text
                className="text-lg text-white-A700"
                size="txtSatoshiMedium18"
              >
                Receipt required
              </Text>
            </div>
            <div className="flex flex-row gap-[9px] items-end justify-start mb-[5px] w-[36%]">
              <Img
                className="h-[37px] w-[37px]"
                src="images/img_menu_indigo_a700_37x37.svg"
                alt="menu_One"
              />
              <Text
                className="mb-[3px] mt-2 text-lg text-white-A700"
                size="txtSatoshiMedium18"
              >
                Guided trade
              </Text>
            </div>
          </div>
          <div className="flex flex-col font-satoshi items-center justify-start max-w-[1200px] mt-[86px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-3.5 items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtSatoshiBold22"
                >
                  Feedback on this offer
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[23px] grid grid-cols-3 sm:mt-0 mt-1"
                  orientation="horizontal"
                >
                  <div className="flex flex-row gap-2 items-center justify-between w-full">
                    <Text
                      className="capitalize text-base text-indigo-A700"
                      size="txtSatoshiMedium16"
                    >
                      All
                    </Text>
                    <div className="h-[19px] relative w-[52%]">
                      <div className="absolute bg-indigo-A700 h-[19px] inset-[0] justify-center m-auto rounded-[9px] w-full"></div>
                      <Text
                        className="absolute bottom-[0] capitalize inset-x-[0] mx-auto text-[13px] text-center text-white-A700 w-max"
                        size="txtSatoshiBold13"
                      >
                        16
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[7px] items-start justify-center w-full">
                    <Text
                      className="capitalize text-base text-white-A700"
                      size="txtSatoshiMedium16WhiteA700"
                    >
                      Positive
                    </Text>
                    <div className="h-[19px] relative w-[32%]">
                      <div className="absolute bg-blue_gray-900_04 h-[19px] inset-[0] justify-center m-auto rounded-[9px] w-full"></div>
                      <Text
                        className="absolute bottom-[0] capitalize inset-x-[0] mx-auto text-[13px] text-center text-white-A700 w-max"
                        size="txtSatoshiBold13"
                      >
                        16
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-[7px] items-start justify-between w-full">
                    <Text
                      className="capitalize text-base text-white-A700"
                      size="txtSatoshiMedium16WhiteA700"
                    >
                      Negative
                    </Text>
                    <div className="h-[19px] relative w-[29%]">
                      <div className="absolute bg-blue_gray-900_04 h-[19px] inset-[0] justify-center m-auto rounded-[9px] w-full"></div>
                      <Text
                        className="absolute bottom-[0] capitalize inset-x-[0] mx-auto text-[13px] text-center text-white-A700 w-max"
                        size="txtSatoshiBold13"
                      >
                        0
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="sm:h-[1376px] md:h-[572px] h-[591px] relative w-full">
                <List
                  className="absolute flex flex-col gap-[60px] indigo_A700_82_indigo_A700_02_border51 inset-[0] items-center justify-center m-auto outline outline-[2px] p-6 sm:px-5 rounded-[16px] w-full"
                  orientation="vertical"
                >
                  <div className="sm:h-[287px] md:h-[86px] h-[89px] relative w-1/2 sm:w-full">
                    <div className="absolute flex sm:flex-col flex-row gap-3 h-max inset-[0] items-start justify-between m-auto w-full">
                      <Img
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        src="images/img_ellipse2776_50x50.png"
                        alt="ellipse2776"
                      />
                      <div className="sm:h-[225px] h-[86px] relative w-[90%] sm:w-full">
                        <Text
                          className="capitalize mt-[29px] text-sm text-white-A700_75"
                          size="txtSatoshiMedium14WhiteA70075"
                        >
                          april 4, 2023
                        </Text>
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                          <div className="flex flex-col gap-10 justify-start w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                              <Text
                                className="text-[19px] text-white-A700"
                                size="txtSatoshiMedium19"
                              >
                                abc client name
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[75px] text-[19px] text-white-A700"
                                size="txtSatoshiMedium19"
                              >
                                Bank Transfer
                              </Text>
                              <Button
                                className="cursor-pointer font-medium min-w-[52px] ml-2.5 sm:ml-[0] outline outline-[1px] outline-white-A700_75 rounded-md text-center text-sm"
                                color="blue_gray_400_75"
                                size="xs"
                                variant="fill"
                              >
                                USD
                              </Button>
                              <Button
                                className="cursor-pointer font-medium min-w-[100px] ml-2.5 sm:ml-[0] outline outline-[1px] outline-orange-800_75 rounded-md text-center text-sm"
                                color="lime_900_75"
                                size="xs"
                                variant="fill"
                              >
                                Low amount
                              </Button>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[212px] text-sm text-white-A700"
                              size="txtSatoshiMedium14WhiteA700"
                            >
                              Easy and instant trade thanks
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="bottom-[0] cursor-pointer flex items-center justify-center left-[11%] min-w-[91px] ml-[62px] outline outline-[1px] outline-green-A700_75 rounded-md"
                      leftIcon={
                        <Img
                          className="mr-1.5 right-[1%] absolute my-px inset-y-[1%]"
                          src="images/img_thumbsup.svg"
                          alt="thumbs_up"
                        />
                      }
                      color="teal_900_75"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-center text-sm">
                        Positive
                      </div>
                    </Button>
                  </div>
                  <div className="sm:h-[287px] md:h-[86px] h-[89px] relative w-1/2 sm:w-full">
                    <div className="absolute flex sm:flex-col flex-row gap-3 h-max inset-[0] items-start justify-between m-auto w-full">
                      <Img
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        src="images/img_ellipse2776_50x50.png"
                        alt="ellipse2776"
                      />
                      <div className="sm:h-[225px] h-[86px] relative w-[90%] sm:w-full">
                        <Text
                          className="capitalize mt-[29px] text-sm text-white-A700_75"
                          size="txtSatoshiMedium14WhiteA70075"
                        >
                          april 4, 2023
                        </Text>
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                          <div className="flex flex-col gap-10 justify-start w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                              <Text
                                className="text-[19px] text-white-A700"
                                size="txtSatoshiMedium19"
                              >
                                abc client name
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[75px] text-[19px] text-white-A700"
                                size="txtSatoshiMedium19"
                              >
                                Bank Transfer
                              </Text>
                              <Button
                                className="cursor-pointer font-medium min-w-[52px] ml-2.5 sm:ml-[0] outline outline-[1px] outline-white-A700_75 rounded-md text-center text-sm"
                                color="blue_gray_400_75"
                                size="xs"
                                variant="fill"
                              >
                                USD
                              </Button>
                              <Button
                                className="cursor-pointer font-medium min-w-[100px] ml-2.5 sm:ml-[0] outline outline-[1px] outline-orange-800_75 rounded-md text-center text-sm"
                                color="lime_900_75"
                                size="xs"
                                variant="fill"
                              >
                                Low amount
                              </Button>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[212px] text-sm text-white-A700"
                              size="txtSatoshiMedium14WhiteA700"
                            >
                              Easy and instant trade thanks
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="bottom-[0] cursor-pointer flex items-center justify-center left-[11%] min-w-[91px] ml-[62px] outline outline-[1px] outline-green-A700_75 rounded-md"
                      leftIcon={
                        <Img
                          className="mr-1.5 right-[1%] absolute my-px inset-y-[1%]"
                          src="images/img_thumbsup.svg"
                          alt="thumbs_up"
                        />
                      }
                      color="teal_900_75"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-center text-sm">
                        Positive
                      </div>
                    </Button>
                  </div>
                  <div className="sm:h-[287px] md:h-[86px] h-[89px] relative w-1/2 sm:w-full">
                    <div className="absolute flex sm:flex-col flex-row gap-3 h-max inset-[0] items-start justify-between m-auto w-full">
                      <Img
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        src="images/img_ellipse2776_50x50.png"
                        alt="ellipse2776"
                      />
                      <div className="sm:h-[225px] h-[86px] relative w-[90%] sm:w-full">
                        <Text
                          className="capitalize mt-[29px] text-sm text-white-A700_75"
                          size="txtSatoshiMedium14WhiteA70075"
                        >
                          april 4, 2023
                        </Text>
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                          <div className="flex flex-col gap-10 justify-start w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                              <Text
                                className="text-[19px] text-white-A700"
                                size="txtSatoshiMedium19"
                              >
                                abc client name
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[75px] text-[19px] text-white-A700"
                                size="txtSatoshiMedium19"
                              >
                                Bank Transfer
                              </Text>
                              <Button
                                className="cursor-pointer font-medium min-w-[52px] ml-2.5 sm:ml-[0] outline outline-[1px] outline-white-A700_75 rounded-md text-center text-sm"
                                color="blue_gray_400_75"
                                size="xs"
                                variant="fill"
                              >
                                USD
                              </Button>
                              <Button
                                className="cursor-pointer font-medium min-w-[100px] ml-2.5 sm:ml-[0] outline outline-[1px] outline-orange-800_75 rounded-md text-center text-sm"
                                color="lime_900_75"
                                size="xs"
                                variant="fill"
                              >
                                Low amount
                              </Button>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[212px] text-sm text-white-A700"
                              size="txtSatoshiMedium14WhiteA700"
                            >
                              Easy and instant trade thanks
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="bottom-[0] cursor-pointer flex items-center justify-center left-[11%] min-w-[91px] ml-[62px] outline outline-[1px] outline-green-A700_75 rounded-md"
                      leftIcon={
                        <Img
                          className="mr-1.5 right-[1%] absolute my-px inset-y-[1%]"
                          src="images/img_thumbsup.svg"
                          alt="thumbs_up"
                        />
                      }
                      color="teal_900_75"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-center text-sm">
                        Positive
                      </div>
                    </Button>
                  </div>
                  <div className="sm:h-[287px] md:h-[86px] h-[89px] relative w-1/2 sm:w-full">
                    <div className="absolute flex sm:flex-col flex-row gap-3 h-max inset-[0] items-start justify-between m-auto w-full">
                      <Img
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        src="images/img_ellipse2776_50x50.png"
                        alt="ellipse2776"
                      />
                      <div className="sm:h-[225px] h-[86px] relative w-[90%] sm:w-full">
                        <Text
                          className="capitalize mt-[29px] text-sm text-white-A700_75"
                          size="txtSatoshiMedium14WhiteA70075"
                        >
                          april 4, 2023
                        </Text>
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                          <div className="flex flex-col gap-10 justify-start w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                              <Text
                                className="text-[19px] text-white-A700"
                                size="txtSatoshiMedium19"
                              >
                                abc client name
                              </Text>
                              <Text
                                className="sm:ml-[0] ml-[75px] text-[19px] text-white-A700"
                                size="txtSatoshiMedium19"
                              >
                                Bank Transfer
                              </Text>
                              <Button
                                className="cursor-pointer font-medium min-w-[52px] ml-2.5 sm:ml-[0] outline outline-[1px] outline-white-A700_75 rounded-md text-center text-sm"
                                color="blue_gray_400_75"
                                size="xs"
                                variant="fill"
                              >
                                USD
                              </Button>
                              <Button
                                className="cursor-pointer font-medium min-w-[100px] ml-2.5 sm:ml-[0] outline outline-[1px] outline-orange-800_75 rounded-md text-center text-sm"
                                color="lime_900_75"
                                size="xs"
                                variant="fill"
                              >
                                Low amount
                              </Button>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[212px] text-sm text-white-A700"
                              size="txtSatoshiMedium14WhiteA700"
                            >
                              Easy and instant trade thanks
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="bottom-[0] cursor-pointer flex items-center justify-center left-[11%] min-w-[91px] ml-[62px] outline outline-[1px] outline-green-A700_75 rounded-md"
                      leftIcon={
                        <Img
                          className="mr-1.5 right-[1%] absolute my-px inset-y-[1%]"
                          src="images/img_thumbsup.svg"
                          alt="thumbs_up"
                        />
                      }
                      color="teal_900_75"
                      size="xs"
                      variant="fill"
                    >
                      <div className="font-medium text-center text-sm">
                        Positive
                      </div>
                    </Button>
                  </div>
                </List>
                <Line className="absolute bg-white-A700_33 h-px inset-x-[0] mx-auto top-[24%] w-full" />
                <Line className="absolute bg-white-A700_33 bottom-1/4 h-px inset-x-[0] mx-auto w-full" />
                <Line className="absolute bg-white-A700_33 h-px inset-[0] justify-center m-auto w-full" />
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer font-medium font-satoshi mb-[4162px] min-w-[263px] md:ml-[0] ml-[1118px] mt-[35px] text-[19px] text-center"
            shape="round"
            size="md"
            variant="outline"
            color="deep_purple_A400_4c_gray_50_00"
          >
            Show more feedback
          </Button>
        </div>
        <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] ml-auto mt-[-NaNpx] md:px-5 rotate-[179deg] w-[13%] z-[1]">
          <div className="h-[664px] ml-auto my-auto w-[77%]">
            <Img
              className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
              src="images/img_ellipse264_39.png"
              alt="ellipse264"
            />
            <Img
              className="absolute h-[633px] inset-[0] justify-center m-auto object-cover rounded-[78px]"
              src="images/img_rectangle26.png"
              alt="rectangleTwentySix"
            />
          </div>
          <Img
            className="absolute h-[789px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_noise_789x208.png"
            alt="noise"
          />
        </div>
        <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] mt-[-NaNpx] md:px-5 rotate-[179deg] w-[16%] z-[1]">
          <div className="h-[664px] my-auto w-[86%]">
            <Img
              className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
              src="images/img_ellipse264_40.png"
              alt="ellipse264_One"
            />
            <Img
              className="absolute h-[633px] inset-y-[0] left-[0] my-auto object-cover rounded-[96px]"
              src="images/img_rectangle26.png"
              alt="rectangleTwentySix_One"
            />
          </div>
          <Img
            className="absolute h-[789px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_noise_1.png"
            alt="noise_One"
          />
        </div>
        <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] ml-auto mt-[-NaNpx] md:px-5 rotate-[179deg] w-[15%] z-[1]">
          <div className="h-[664px] ml-auto my-auto w-4/5">
            <Img
              className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
              src="images/img_ellipse264_41.png"
              alt="ellipse264_Two"
            />
            <Img
              className="absolute h-[633px] inset-[0] justify-center m-auto object-cover rounded-[93px]"
              src="images/img_rectangle26.png"
              alt="rectangleTwentySix_Two"
            />
          </div>
          <Img
            className="absolute h-[789px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_noise_789x239.png"
            alt="noise_Two"
          />
        </div>
        <P2pTradingStack className="h-[872px] md:h-[NaNpx] mt-[-NaNpx] mx-auto md:px-5 w-full z-[1]" />
      </div>
    </>
  );
};

export default Sellp2ptradingdetailsPage;
