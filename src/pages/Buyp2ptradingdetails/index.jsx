import React from "react";

import { Button, CheckBox, Img, Line, List, Text } from "components";
import Header from "components/Header";
import P2pTradingStack from "components/P2pTradingStack";

const Buyp2ptradingdetailsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-satoshi h-[3367px] justify-end mx-auto relative w-full">
        <div className="flex flex-col mt-auto mx-auto md:px-5 w-full">
          <div className="h-[864px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
            <Img
              className="h-[864px] m-auto object-cover w-full"
              src="images/img_rectangle40003_9.png"
              alt="rectangle40003"
            />
            <div className="absolute bg-gray-900_9d flex flex-col gap-[18px] h-full inset-[0] items-center justify-center m-auto w-full">
              <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center mt-[23px] w-full" />
              <Line className="bg-white-A700_7e h-px mb-[764px] w-full" />
            </div>
          </div>
          <Img
            className="h-[5806px] mb-[207px] mt-[-14px] mx-auto object-cover w-full z-[1]"
            src="images/img_rectangle40011_8.png"
            alt="rectangle40011"
          />
          <div className="bg-gradient1  flex flex-col items-center justify-start mb-auto mt-[-NaNpx] mx-auto p-[19px] w-full z-[1]">
            <div className="flex flex-col items-start justify-start mb-[4202px] w-[77%] md:w-full">
              <div className="bg-white-A700 flex flex-col font-chillax items-center justify-start p-9 sm:px-5 rounded-[16px] w-full">
                <Text
                  className="leading-[50.00px] text-4xl sm:text-[32px] md:text-[34px] text-center text-indigo-A700 uppercase"
                  size="txtChillaxSemibold36"
                >
                  <span className="text-indigo-A700 font-chillax font-normal">
                    <>
                      Buy Bitcoin with ANY Credit/Debit Card
                      <br />
                    </>
                  </span>
                  <span className="text-indigo-A700 font-chillax font-semibold">
                    (USD) — 5104r5557r5288r5268r4120
                  </span>
                </Text>
              </div>
              <div className="flex flex-col font-chillax items-center justify-start mt-[31px] w-1/2 md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="sm:text-[29px] md:text-[31px] text-[33px] text-white-A700 uppercase"
                    size="txtChillaxSemibold33"
                  >
                    How much do you want to Buy?
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-satoshi items-center justify-start mt-10 w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[42px] items-start justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                      <div className="flex md:flex-1 flex-col gap-2.5 justify-start md:mt-0 mt-0.5 w-[47%] md:w-full">
                        <div className="flex flex-col gap-2 items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[3px]">
                            <Text
                              className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                              size="txtSatoshiBold22"
                            >
                              I will pay
                            </Text>
                          </div>
                          <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border34 flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-[15px] rounded-[16px] w-full">
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
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full">
                        <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                              size="txtSatoshiBold22"
                            >
                              and receive
                            </Text>
                          </div>
                          <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border35 flex flex-row sm:gap-10 items-center justify-between p-[13px] rounded-[16px] w-full">
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
                    <Button
                      className="capitalize cursor-pointer font-medium min-w-[561px] sm:min-w-full text-center text-lg tracking-[1.80px]"
                      shape="round"
                      color="indigo_A700"
                      size="xl"
                      variant="fill"
                    >
                      Sign up to buy
                    </Button>
                  </div>
                </div>
              </div>
              <Text
                className="md:ml-[0] ml-[9px] mt-[18px] text-center text-sm text-white-A700_75"
                size="txtSatoshiMedium14WhiteA70075"
              >
                Don’t worry, once you’ve signed up, we’ll bring you right back
                to this page.
              </Text>
              <div className="flex md:flex-col flex-row font-satoshi md:gap-10 items-center justify-between mt-[81px] w-full">
                <div className="flex md:flex-1 flex-col gap-3.5 items-start justify-start w-[47%] md:w-full">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtSatoshiBold22"
                  >
                    About this offer
                  </Text>
                  <div className="h-[400px] relative w-full">
                    <div className="absolute h-[400px] indigo_A700_82_indigo_A700_02_border36 inset-[0] justify-center m-auto outline outline-[2px] rounded-[16px] w-full"></div>
                    <div className="absolute flex flex-col gap-[54px] h-max inset-[0] items-start justify-center m-auto w-full">
                      <div className="flex flex-col items-center justify-start ml-8 md:ml-[0] w-[61%] md:w-full">
                        <div className="flex flex-col gap-[15px] items-start justify-start w-full">
                          <div className="flex flex-row gap-1.5 items-start justify-start w-[33%] md:w-full">
                            <Text
                              className="text-[19px] text-white-A700_7e"
                              size="txtSatoshiMedium19WhiteA7007e"
                            >
                              Seller rate
                            </Text>
                            <Img
                              className="h-4 mt-0.5 w-[17px]"
                              src="images/img_location_white_a700.svg"
                              alt="location"
                            />
                          </div>
                          <div className="flex flex-row gap-[7px] items-start justify-start w-full">
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
                              •same as market price
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white-A700_60 flex flex-col indigo_A700_60_indigo_A700_60_01_border items-start justify-end outline outline-[2px] p-5 w-full">
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[11px] mt-1 w-[63%] md:w-full">
                          <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                            <Text
                              className="text-[19px] text-white-A700_7e"
                              size="txtSatoshiMedium19WhiteA7007e"
                            >
                              Buy Limits
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
                            <div className="flex flex-col items-center justify-start w-[34%] md:w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <Text
                                  className="text-white-A700 text-xl"
                                  size="txtSatoshiBold20WhiteA700"
                                >
                                  0%
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
                  <div className="flex flex-col gap-[17px] indigo_A700_82_indigo_A700_02_border37 justify-end outline outline-[2px] pt-[30px] rounded-[16px] w-full">
                    <div className="flex sm:flex-col flex-row gap-3 items-center justify-start md:ml-[0] ml-[30px] mr-[331px] w-[36%] md:w-full">
                      <Img
                        className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                        src="images/img_ellipse2776.png"
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
                        <div className="bg-white-A700_60 flex flex-col indigo_A700_60_indigo_A700_60_01_border2 items-start justify-end outline outline-[2px] p-[13px] w-full">
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
                        <div className="bg-white-A700_60 flex flex-col indigo_A700_60_indigo_A700_60_01_border3 items-start justify-start outline outline-[2px] p-[19px] rounded-bl-[16px] rounded-br-[16px] w-full">
                          <div className="flex flex-col items-start justify-start mb-3.5 md:ml-[0] ml-[11px] w-[39%] md:w-full">
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
                            <Button
                              className="cursor-pointer font-medium min-w-[76px] mt-1 outline outline-[1px] outline-green-A700 rounded-md text-center text-sm"
                              color="teal_900_05"
                              size="xs"
                              variant="fill"
                            >
                              Instant
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col font-chillax gap-[21px] items-start justify-start mt-[79px] w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700 uppercase"
                  size="txtChillaxMedium40"
                >
                  Offer terms
                </Text>
                <div className="flex flex-col font-satoshi items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[19px] text-white-A700"
                      size="txtSatoshiRegular19"
                    >
                      Dont send your card without my agreement.
                    </Text>
                    <Text
                      className="leading-[34.00px] mt-[23px] text-[19px] text-white-A700"
                      size="txtSatoshiRegular19"
                    >
                      <>
                        1.Please tell me the first four digits of the card
                        number.Let me check if it is possible to use.
                        <br />
                        2. Please do not send any card information before I ask
                        you to send the card information.
                        <br />
                        3. In order to use the card, I need you to provide the
                        card information and balance screenshot and receive the
                        code binding card. The store needs some time to complete
                        the use, please wait patiently!
                        <br />
                        4. After completing the card, please send the
                        consumption record, AND I will release BTC immediately.
                        <br />
                        5. Please cancel the transaction because the card cannot
                        be bound or the code cannot be accepted or failed to be
                        used. Don&#39;t maliciously lock my coins and follow
                        paxful&#39;s trading rules.
                      </>
                    </Text>
                    <Text
                      className="leading-[34.00px] mt-[22px] text-[19px] text-white-A700"
                      size="txtSatoshiRegular19"
                    >
                      <>
                        5104-----money lion
                        <br />
                        5557-----Albert
                        <br />
                        5295-----dave
                        <br />
                        5119-----yotta
                        <br />
                        4115-----current
                        <br />
                        4143-----greendot
                        <br />
                        4133-----go2bank
                        <br />
                        4403-----cashapp transfer
                        <br />
                        5556-----sable
                        <br />
                        4879 -----varo
                        <br />
                        4120-----lili
                        <br />
                        4240-----stash
                      </>
                    </Text>
                    <Text
                      className="mt-[26px] text-[19px] text-white-A700"
                      size="txtSatoshiRegular19"
                    >
                      I need 5104 5557 5295 5119 4115 4143 4133 4403 5556 5372
                      4879 4120 4240, etc.
                    </Text>
                  </div>
                </div>
              </div>
              <div className="font-satoshi md:h-[136px] h-[54px] mt-[82px] relative w-[15%]">
                <Text
                  className="absolute bottom-[22%] right-[0] text-lg text-white-A700"
                  size="txtSatoshiMedium18"
                >
                  No third parties
                </Text>
                <Img
                  className="absolute h-[54px] inset-y-[0] left-[0] my-auto w-[54px]"
                  src="images/img_user_indigo_a700.svg"
                  alt="user_One"
                />
              </div>
              <div className="flex flex-col font-satoshi gap-3.5 items-start justify-start mt-20 w-full">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtSatoshiBold22"
                >
                  Feedback on this offer
                </Text>
                <div className="flex flex-col indigo_A700_82_indigo_A700_02_border38 items-center justify-start ml-0.5 md:ml-[0] outline outline-[2px] p-[30px] sm:px-5 rounded-[16px] w-full">
                  <div className="md:h-[105px] sm:h-[164px] h-[26px] mb-[79px] relative w-full">
                    <Img
                      className="h-4 ml-[22px] mt-[3px] w-4"
                      src="images/img_search_indigo_a700.svg"
                      alt="search"
                    />
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Img
                          className="h-3 sm:mt-0 mt-[5px]"
                          src="images/img_menu_indigo_a700.svg"
                          alt="menu_One"
                        />
                        <Text
                          className="sm:ml-[0] ml-[29px] text-[19px] text-white-A700_7e"
                          size="txtSatoshiMedium19WhiteA7007e"
                        >
                          <>Offer hasn&#39;t received any feedback</>
                        </Text>
                        <Img
                          className="h-[7px] sm:ml-[0] ml-[773px] sm:mt-0 mt-1.5"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] mb-[2300px] ml-auto mt-[-NaNpx] rotate-[179deg] w-[13%] z-[1]">
            <div className="h-[664px] ml-auto my-auto w-[77%]">
              <Img
                className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_35.png"
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
          <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] mb-[1193px] mt-[-NaNpx] rotate-[179deg] w-[16%] z-[1]">
            <div className="h-[664px] my-auto w-[86%]">
              <Img
                className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_36.png"
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
          <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] mb-[767px] ml-auto mt-[-NaNpx] rotate-[179deg] w-[15%] z-[1]">
            <div className="h-[664px] ml-auto my-auto w-4/5">
              <Img
                className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_37.png"
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
          <P2pTradingStack className="h-[872px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]" />
        </div>
        <Text
          className="absolute bottom-[19%] inset-x-[0] leading-[34.00px] mx-auto text-[19px] text-white-A700 w-3/4 sm:w-full"
          size="txtSatoshiRegular19"
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore.
        </Text>
      </div>
    </>
  );
};

export default Buyp2ptradingdetailsPage;
