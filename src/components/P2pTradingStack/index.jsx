import React from "react";

import { Button, Img, Line, List, Text } from "components";

const P2pTradingStack = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="h-[872px] m-auto w-full">
          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[52%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="h-[872px] relative w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-full">
                  <div className="overflow-x-auto w-full">
                    <div className="flex flex-col gap-[21px] justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Img
                          className="h-[344px] md:h-auto object-cover"
                          src="images/img_group.png"
                          alt="group"
                        />
                        <div className="md:h-96 h-[607px] relative w-[52%] md:w-full">
                          <div className="absolute md:h-[344px] h-[525px] left-[0] top-[0] w-[56%] sm:w-full">
                            <Img
                              className="absolute h-[344px] left-[0] object-cover top-[0]"
                              src="images/img_group.png"
                              alt="group_One"
                            />
                            <Img
                              className="absolute bottom-[0] h-[278px] object-cover right-[0]"
                              src="images/img_group.png"
                              alt="group_Two"
                            />
                          </div>
                          <div className="absolute flex flex-col items-center justify-start right-[0] top-[6%] w-[24%]">
                            <div className="flex flex-col gap-6 items-end justify-start w-full">
                              <div className="flex flex-row items-start justify-between w-full">
                                <Img
                                  className="h-6 md:h-auto mt-16 object-cover w-6"
                                  src="images/img_vector_24x24.png"
                                  alt="vector"
                                />
                                <div className="md:h-[50px] h-[77px] mb-2.5 relative w-[29%]">
                                  <Img
                                    className="absolute h-6 object-cover right-[0] top-[22%]"
                                    src="images/img_vector_24x24.png"
                                    alt="vector_One"
                                  />
                                  <Img
                                    className="absolute bottom-[0] h-10 object-cover right-[0]"
                                    src="images/img_vector_24x24.png"
                                    alt="vector_Two"
                                  />
                                  <Img
                                    className="absolute h-[33px] left-[0] object-cover top-[0] w-[33px]"
                                    src="images/img_vector_24x24.png"
                                    alt="vector_Three"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-row gap-[42px] items-start justify-end w-[58%] md:w-full">
                                <Img
                                  className="h-[33px] md:h-auto object-cover w-[33px]"
                                  src="images/img_vector_24x24.png"
                                  alt="vector_Four"
                                />
                                <Img
                                  className="h-[34px] md:h-auto mt-6 object-cover w-[34px]"
                                  src="images/img_vector_24x24.png"
                                  alt="vector_Five"
                                />
                              </div>
                            </div>
                          </div>
                          <Img
                            className="absolute bottom-[0] h-96 object-cover right-[6%]"
                            src="images/img_group_384x499.png"
                            alt="group_Three"
                          />
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 gap-[115px] items-start justify-end md:ml-[0] ml-[783px] w-[33%] md:w-full">
                        <Img
                          className="h-[169px] md:h-auto sm:mt-0 mt-[35px] object-cover"
                          src="images/img_group_169x203.png"
                          alt="group_Four"
                        />
                        <Img
                          className="h-[169px] md:h-auto mb-[35px] object-cover"
                          src="images/img_group_1.png"
                          alt="group_Five"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[872px] inset-[0] justify-center m-auto"
                  src="images/img_group_white_a700.svg"
                  alt="group_Six"
                />
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[52%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:h-[832px] h-[872px] pb-[19px] relative w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pt-[37px] w-full">
                  <div className="overflow-x-auto w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end overflow-auto w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[626px] w-[12%] md:w-full">
                        <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                          <div className="flex flex-row gap-[43px] items-start justify-start w-[57%] md:w-full">
                            <Img
                              className="h-[34px] md:h-auto mb-[18px] object-cover"
                              src="images/img_vector_24x24.png"
                              alt="vector_Six"
                            />
                            <Img
                              className="h-[33px] md:h-auto mt-5 object-cover w-[33px]"
                              src="images/img_vector_33x33.png"
                              alt="vector_Seven"
                            />
                          </div>
                          <div className="flex flex-row items-start justify-between w-full">
                            <div className="md:h-[63px] h-[75px] mt-[23px] relative w-[30%]">
                              <Img
                                className="absolute bottom-[19%] h-6 left-[0] object-cover"
                                src="images/img_vector_33x33.png"
                                alt="vector_Eight"
                              />
                              <Img
                                className="absolute h-10 left-[0] object-cover top-[0]"
                                src="images/img_vector_24x24.png"
                                alt="vector_Nine"
                              />
                              <Img
                                className="absolute bottom-[0] h-[33px] object-cover right-[0] w-[33px]"
                                src="images/img_vector_24x24.png"
                                alt="vector_Ten"
                              />
                            </div>
                            <Img
                              className="h-6 md:h-auto object-cover w-6"
                              src="images/img_vector_24x24.png"
                              alt="vector_Eleven"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="md:h-[395px] h-[783px] mb-[11px] md:ml-[0] ml-[45px] relative w-[38%] md:w-full">
                        <div className="md:h-96 h-[783px] m-auto w-full">
                          <Img
                            className="absolute h-[278px] left-[0] object-cover top-[27%]"
                            src="images/img_group.png"
                            alt="group_Seven"
                          />
                          <Img
                            className="absolute bottom-[3%] h-[169px] left-[12%] object-cover"
                            src="images/img_group_1.png"
                            alt="group_Eight"
                          />
                          <Img
                            className="absolute h-[171px] object-cover right-[0] top-[0]"
                            src="images/img_group_171x205.png"
                            alt="group_Nine"
                          />
                          <Img
                            className="absolute bottom-[0] h-[348px] object-cover right-[1%]"
                            src="images/img_group_171x205.png"
                            alt="group_Ten"
                          />
                          <Img
                            className="absolute h-96 object-cover right-[0] top-[0]"
                            src="images/img_group_2.png"
                            alt="group_Eleven"
                          />
                        </div>
                        <Img
                          className="absolute h-96 inset-y-[0] left-[5%] my-auto object-cover"
                          src="images/img_group_384x499.png"
                          alt="group_Twelve"
                        />
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[51px] justify-start mb-[11px] md:ml-[0] ml-[286px] w-[32%] md:w-full">
                        <Img
                          className="h-96 md:h-auto object-cover"
                          src="images/img_group_2.png"
                          alt="group_Thirteen"
                        />
                        <Img
                          className="h-[348px] md:h-auto md:ml-[0] ml-[218px] object-cover"
                          src="images/img_group_171x205.png"
                          alt="group_Fourteen"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[657px] left-[0] object-cover top-[0]"
                  src="images/img_group_white_a700_872x788.png"
                  alt="group_Fifteen"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col md:gap-10 gap-[171px] justify-start right-[8%] top-[0] w-4/5">
          {!!props?.descriptionOne ? (
            <Text
              className="text-[19px] text-white-A700"
              size="txtSatoshiRegular19"
            >
              {props?.descriptionOne}
            </Text>
          ) : null}
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly md:ml-[0] ml-[17px] w-[99%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[96%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[84px] items-start justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[89%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[17%] md:w-full">
                    <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
                      <div className="flex flex-row items-end justify-evenly w-full">
                        <div className="h-14 md:h-[54px] relative w-[72%]">
                          <div className="h-14 md:h-[54px] m-auto w-full">
                            <div className="absolute flex flex-row gap-5 h-max inset-y-[0] items-end justify-between left-[0] my-auto w-[95%]">
                              <div className="md:h-[45px] h-[54px] relative w-[67%]">
                                <Img
                                  className="absolute bottom-[0] h-[45px] left-[0]"
                                  src="images/img_airplane_indigo_a700.svg"
                                  alt="airplane_One"
                                />
                                <Img
                                  className="absolute h-[21px] inset-x-[0] mx-auto top-[0]"
                                  src="images/img_volume_indigo_a700.svg"
                                  alt="volume"
                                />
                                <Img
                                  className="absolute bottom-[0] h-[18px] right-[0]"
                                  src="images/img_eye.svg"
                                  alt="eye"
                                />
                              </div>
                              <Img
                                className="h-[17px] mt-[35px]"
                                src="images/img_airplane_indigo_a700_17x20.svg"
                                alt="airplane_Two"
                              />
                            </div>
                            <Img
                              className="absolute bottom-[0] h-[18px] right-[21%] w-[18px]"
                              src="images/img_vector_indigo_a700_18x18.svg"
                              alt="vector_Twelve"
                            />
                            <Img
                              className="absolute bottom-[0] h-[17px] right-[0]"
                              src="images/img_vector_indigo_a700_17x8.svg"
                              alt="vector_Thirteen"
                            />
                            <Img
                              className="absolute h-[7px] right-[32%] top-[0]"
                              src="images/img_play.svg"
                              alt="play"
                            />
                          </div>
                          <Img
                            className="absolute h-px right-[39%] top-[7%] w-0.5"
                            src="images/img_vector_indigo_a700_1x2.svg"
                            alt="vector_Fourteen"
                          />
                        </div>
                        <div className="h-[17px] md:h-[53px] mt-9 relative w-[16%]">
                          <Img
                            className="absolute h-[17px] inset-y-[0] left-[0] my-auto w-4"
                            src="images/img_airplane_indigo_a700_17x16.svg"
                            alt="airplane_Three"
                          />
                          <Img
                            className="absolute h-[17px] inset-y-[0] my-auto right-[0]"
                            src="images/img_airplane_indigo_a700_17x16.svg"
                            alt="airplane_Four"
                          />
                        </div>
                        <Img
                          className="h-[17px] mt-9 w-[18px]"
                          src="images/img_cart.svg"
                          alt="cart"
                        />
                      </div>
                      <Img
                        className="h-4"
                        src="images/img_group1000006367.svg"
                        alt="group1000006367"
                      />
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[126px] grid sm:grid-cols-1 grid-cols-2 md:mt-0 mt-1 w-[47%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                      <div className="flex flex-col gap-1.5 items-start justify-start w-[65%] md:w-full">
                        <Text
                          className="capitalize text-[22px] text-indigo-A700 sm:text-lg md:text-xl"
                          size="txtSatoshiBold22IndigoA700"
                        >
                          {props?.links}
                        </Text>
                        <Line className="bg-indigo-A700 h-px w-full" />
                      </div>
                      <Text
                        className="capitalize h-[185px] leading-[40.00px] text-base text-white-A700_cc w-[185px]"
                        size="txtSatoshiMedium16WhiteA700cc"
                      >
                        {props?.marketplacep2p}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-[65%] md:w-full">
                        <Text
                          className="capitalize text-[22px] text-indigo-A700 sm:text-lg md:text-xl"
                          size="txtSatoshiBold22IndigoA700"
                        >
                          {props?.trading}
                        </Text>
                        <Line className="bg-indigo-A700 h-px mt-[3px] w-full" />
                      </div>
                      <Text
                        className="capitalize h-[185px] leading-[40.00px] text-base text-white-A700_cc w-[185px]"
                        size="txtSatoshiMedium16WhiteA700cc"
                      >
                        {props?.description}
                      </Text>
                    </div>
                  </List>
                  <div className="flex flex-col gap-[18px] items-start justify-start md:mt-0 mt-[7px] w-[14%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-[83%] md:w-full">
                      <Text
                        className="capitalize text-[22px] text-indigo-A700 sm:text-lg md:text-xl"
                        size="txtSatoshiBold22IndigoA700"
                      >
                        {props?.support}
                      </Text>
                      <Line className="bg-indigo-A700 h-px mt-[3px] w-full" />
                    </div>
                    <Text
                      className="capitalize leading-[40.00px] text-base text-white-A700_cc w-full"
                      size="txtSatoshiMedium16WhiteA700cc"
                    >
                      {props?.termandcondition}
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                  <Text
                    className="capitalize mb-1 md:mt-0 mt-[39px] text-sm text-white-A700_cc"
                    size="txtSatoshiMedium14"
                  >
                    {props?.copyright2023}
                  </Text>
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex sm:flex-col flex-row gap-[35px] items-end justify-between w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="capitalize md:text-2xl sm:text-[22px] text-[26px] text-white-A700_cc"
                          size="txtSatoshiBold26"
                        >
                          {props?.newsletter}
                        </Text>
                        <Text
                          className="mt-[3px] text-[17px] text-white-A700_87"
                          size="txtSatoshiMedium17"
                        >
                          {props?.loremipsumdolorOne}
                        </Text>
                      </div>
                      <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border5 flex sm:flex-1 flex-row items-center justify-between mb-0.5 sm:mt-0 mt-[7px] p-[5px] rounded-[16px] w-[59%] sm:w-full">
                        <Text
                          className="ml-2.5 text-[13px] text-white-A700_6c"
                          size="txtSatoshiMedium13"
                        >
                          {props?.enteryouremail}
                        </Text>
                        <Button
                          className="!text-white-A700_cc border border-indigo-A700 border-solid capitalize cursor-pointer font-medium font-satoshi min-w-[98px] rounded-[12px] text-base text-center"
                          shape="round"
                          color="indigo_A700"
                          size="md"
                          variant="fill"
                        >
                          {props?.subscribe}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="flex h-[60px] items-center justify-center mb-[241px] md:mt-0 mt-[106px] w-[60px]"
              shape="round"
              color="indigo_A700"
              size="lg"
              variant="fill"
            >
              <Img
                className="h-8"
                src="images/img_group1000006445.svg"
                alt="group1000006445"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

P2pTradingStack.defaultProps = {
  links: "Links",
  marketplacep2p: (
    <>
      Marketplace
      <br />
      P2P Trading
      <br />
      About us
      <br />
      Finance
      <br />
      Contact
    </>
  ),
  trading: "Trading",
  description: (
    <>
      Trading Box
      <br />
      Calculator
      <br />
      Chatting
      <br />
      Escrow System
      <br />
      Testimonials
    </>
  ),
  support: "Support",
  termandcondition: (
    <>
      How it Works <br />
      FAQs <br />
      Terms & Conditions <br />
      Privacy Policy <br />
      Contact Us
    </>
  ),
  copyright2023: "@ Copyright 2023. All rights reserved.",
  newsletter: "Newsletter",
  loremipsumdolorOne: "Lorem ipsum dolor sit amet",
  enteryouremail: "Enter Your Email",
  subscribe: "Subscribe",
};

export default P2pTradingStack;
