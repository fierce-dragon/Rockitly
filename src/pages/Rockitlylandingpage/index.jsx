import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import Header from "components/Header";
import RockitlyLandingpageColumn from "components/RockitlyLandingpageColumn";

const btcOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const RockitlylandingpagePage = () => {
  const rockitlyLandingpageColumnPropList = [
    { userimage: "images/img_icon_indigo_a700.svg" },
    { banktransfertext: "Cash Payment" },
    { banktransfertext: "Online Wallets" },
    { banktransfertext: "Discounted Gifts Cards" },
    { banktransfertext: "Digital Currencies" },
    { banktransfertext: "Goods and Services" },
  ];

  return (
    <>
      <div className="bg-white-A700 font-satoshi h-[6656px] mx-auto relative w-full">
        <div className="md:h-[5362px] h-[6869px] m-auto md:px-5 w-full">
          <div className="md:h-[5362px] h-[6869px] m-auto w-full">
            <div className="md:h-[5362px] h-[6869px] m-auto w-full">
              <div className="absolute md:h-[5362px] h-[6656px] inset-[0] justify-center m-auto w-full">
                <div className="md:h-[5362px] h-[6656px] m-auto w-full">
                  <div className="flex flex-col m-auto w-full">
                    <div className="h-[1294px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
                      <Img
                        className="absolute h-[864px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                        src="images/img_rectangle40003.png"
                        alt="rectangle40003"
                      />
                      <Img
                        className="absolute h-[864px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                        src="images/img_rectangle40008.png"
                        alt="rectangle40008"
                      />
                      <div className="absolute h-[1294px] inset-[0] justify-center m-auto w-full">
                        <div className="h-[1294px] m-auto w-full">
                          <Img
                            className="h-[1294px] m-auto object-cover w-full"
                            src="images/img_mrmkrocketbl.png"
                            alt="mrmkrocketbl"
                          />
                          <div className="absolute flex flex-col items-center justify-start right-[0] top-[8%] w-[52%]">
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
                                          <div className="absolute md:h-[344px] h-[525px] left-[0] top-[0] w-[57%] sm:w-full">
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
                                          <div className="absolute flex flex-col items-center justify-start right-[0] top-[6%] w-[23%]">
                                            <div className="flex flex-col gap-6 items-end justify-start w-full">
                                              <div className="flex flex-row items-start justify-between w-full">
                                                <Img
                                                  className="h-6 md:h-auto mt-16 object-cover w-6"
                                                  src="images/img_vector_24x24.png"
                                                  alt="vector"
                                                />
                                                <div className="md:h-[50px] h-[77px] mb-2.5 relative w-[27%]">
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
                                            className="absolute bottom-[0] h-96 object-cover right-[5%]"
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
                        </div>
                        <div className="absolute flex flex-col items-center justify-start left-[0] top-[8%] w-[52%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="h-[872px] relative w-full">
                              <div className="absolute flex flex-col h-max inset-[0] items-end justify-center m-auto pt-[37px] w-full">
                                <div className="overflow-x-auto w-full">
                                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end overflow-auto w-full">
                                    <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[626px] w-[12%] md:w-full">
                                      <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                                        <div className="flex flex-row gap-[43px] items-start justify-start w-[58%] md:w-full">
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
                                          <div className="md:h-[63px] h-[75px] mt-[23px] relative w-[31%]">
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
                                          className="h-[171px] ml-auto mt-0.5 object-cover"
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
                                className="absolute h-[872px] inset-y-[0] left-[0] my-auto object-cover"
                                src="images/img_group_white_a700_872x788.png"
                                alt="group_Fifteen"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-[5806px] mt-[-444.59px] mx-auto object-cover w-full z-[1]"
                      src="images/img_rectangle40011.png"
                      alt="rectangle40011"
                    />
                    <div className="bg-gradient1  flex flex-col items-center justify-start mb-auto mt-[-NaNpx] mx-auto p-6 sm:px-5 w-full z-[1]">
                      <div className="flex flex-col md:gap-10 gap-[95px] items-center justify-start mb-[5908px] w-[91%] md:w-full">
                        <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
                        <div className="flex md:flex-col flex-row md:gap-10 gap-[87px] items-start justify-start w-[86%] md:w-full">
                          <div className="md:h-[498px] h-[549px] sm:h-[743px] relative w-[76%] md:w-full">
                            <div className="absolute md:h-[498px] h-[549px] sm:h-[743px] inset-y-[0] my-auto right-[0] w-[62%] sm:w-full">
                              <div className="absolute border border-indigo-A200_3d border-solid flex flex-col gap-[27px] sm:h-auto h-full inset-[0] justify-center m-auto p-2.5 rounded-[274px] w-[549px]">
                                <div className="bg-indigo-300 h-[19px] md:ml-[0] ml-[146px] mr-[363px] mt-[5px] rounded-[10px] w-5"></div>
                                <div className="md:h-[427px] h-[430px] sm:h-[672px] mb-12 mr-1 relative w-full">
                                  <div className="absolute border border-indigo-A200_3d border-solid flex sm:flex-col flex-row gap-[52px] sm:h-auto h-max inset-[0] items-center justify-center m-auto p-[9px] rounded-[189px] w-[379px]">
                                    <div className="bg-indigo-400 h-5 mb-[247px] sm:mt-0 mt-[94px] rounded-[50%] w-5"></div>
                                    <div className="border border-indigo-A200_3d border-solid flex flex-col items-center justify-start sm:mt-0 my-[72px] p-[54px] md:px-10 sm:px-5 rounded-[108px] w-[217px] sm:w-full">
                                      <div className="bg-white-A700_07 flex flex-col h-[108px] items-center justify-start p-[34px] sm:px-5 rounded-[50%] w-[108px]">
                                        <Img
                                          className="h-[39px] w-[39px]"
                                          src="images/img_frame.svg"
                                          alt="frame"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <Img
                                    className="absolute bottom-[0] h-[103px] left-[0] w-[103px]"
                                    src="images/img_btc.svg"
                                    alt="btc"
                                  />
                                  <Img
                                    className="absolute h-[100px] right-[0] top-[0] w-[100px]"
                                    src="images/img_eth.svg"
                                    alt="eth"
                                  />
                                  <div className="absolute bg-blue_gray-400 bottom-[4%] h-5 left-[46%] rounded-[50%] w-5"></div>
                                </div>
                              </div>
                              <div className="absolute bg-indigo-400 h-[19px] right-[0] rounded-[10px] top-[45%] w-5"></div>
                            </div>
                            <Text
                              className="absolute leading-[59.00px] left-[0] sm:text-[37px] md:text-[43px] text-[47px] text-white-A700 top-[21%] uppercase w-[48%] sm:w-full"
                              size="txtChillaxBold47"
                            >
                              <span className="text-white-A700 font-chillax text-left font-light">
                                The{" "}
                              </span>
                              <span className="text-white-A700 font-chillax text-left font-bold">
                                Most{" "}
                              </span>
                              <span className="text-white-A700 font-chillax text-left font-light">
                                secure crypto
                              </span>
                              <span className="text-white-A700 font-chillax text-left font-bold">
                                {" "}
                                trading Center
                              </span>
                            </Text>
                            <Text
                              className="absolute bottom-[30%] capitalize leading-[31.00px] left-[0] text-[19px] text-white-A700 tracking-[1.90px] w-[47%] sm:w-full"
                              size="txtSatoshiRegular19"
                            >
                              Sed ut perspiciatis unde omnis iste sit voluptatem
                              accusantium doloremque
                            </Text>
                            <Button
                              className="absolute bottom-[16%] capitalize cursor-pointer font-medium font-satoshi left-[0] min-w-[176px] text-center text-lg tracking-[1.80px]"
                              shape="round"
                              color="indigo_A700"
                              size="xl"
                              variant="fill"
                            >
                              Start Trading
                            </Button>
                          </div>
                          <div className="flex flex-col gap-[49px] items-center justify-start md:mt-0 mt-[55px] w-[17%] md:w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="capitalize sm:text-[31px] md:text-[33px] text-[35px] text-white-A700"
                                size="txtChillaxSemibold35"
                              >
                                <span className="text-white-A700 font-chillax text-left font-semibold">
                                  $37
                                </span>
                                <span className="text-white-A700 font-chillax text-left font-normal">
                                  {" "}
                                  Billion
                                </span>
                              </Text>
                              <Text
                                className="capitalize leading-[21.00px] ml-1 md:ml-[0] text-[15px] text-white-A700 tracking-[1.50px] w-[99%] sm:w-full"
                                size="txtSatoshiRegular15"
                              >
                                ed do eiusmod tempor incididunt ut labore
                              </Text>
                            </div>
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="capitalize sm:text-[31px] md:text-[33px] text-[35px] text-white-A700"
                                size="txtChillaxSemibold35"
                              >
                                600+
                              </Text>
                              <Text
                                className="capitalize leading-[21.00px] ml-1 md:ml-[0] text-[15px] text-white-A700 tracking-[1.50px] w-[99%] sm:w-full"
                                size="txtSatoshiRegular15"
                              >
                                Ut enim ad minim quis nostrud exercitation
                              </Text>
                            </div>
                            <div className="md:h-[47px] h-[93px] relative w-full">
                              <Text
                                className="absolute capitalize left-[0] sm:text-[31px] md:text-[33px] text-[35px] text-white-A700 top-[0]"
                                size="txtChillaxSemibold35"
                              >
                                <span className="text-white-A700 font-chillax text-left font-semibold">
                                  20
                                </span>
                                <span className="text-white-A700 font-chillax text-left font-normal">
                                  {" "}
                                  Million
                                </span>
                              </Text>
                              <Text
                                className="absolute bottom-[0] capitalize inset-x-[0] leading-[21.00px] mx-auto text-[15px] text-white-A700 tracking-[1.50px] w-[99%] sm:w-full"
                                size="txtSatoshiRegular15"
                              >
                                Duis aute irure dolor in reprehenderit voluptate
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] h-[1023px] right-[0] rotate-[179deg] top-[19%] w-1/4 sm:w-full">
                    <div className="h-[860px] ml-auto my-auto w-[84%]">
                      <Img
                        className="h-[860px] m-auto object-cover rotate-[-135deg] w-full"
                        src="images/img_ellipse264.png"
                        alt="ellipse264"
                      />
                      <Img
                        className="absolute h-[821px] inset-[0] justify-center m-auto object-cover rounded-[162px]"
                        src="images/img_rectangle26.png"
                        alt="rectangleTwentySix"
                      />
                    </div>
                    <Img
                      className="absolute h-[1023px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_noise.png"
                      alt="noise"
                    />
                  </div>
                  <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] h-[1023px] inset-y-[0] left-[0] my-auto rotate-[179deg] w-[23%]">
                    <div className="h-[860px] my-auto w-[88%]">
                      <Img
                        className="h-[860px] m-auto object-cover rotate-[-135deg] w-full"
                        src="images/img_ellipse264_860x309.png"
                        alt="ellipse264_One"
                      />
                      <Img
                        className="absolute h-[821px] inset-y-[0] left-[0] my-auto object-cover rounded-[144px]"
                        src="images/img_rectangle26.png"
                        alt="rectangleTwentySix_One"
                      />
                    </div>
                    <Img
                      className="absolute h-[1023px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_noise_1023x355.png"
                      alt="noise_One"
                    />
                  </div>
                  <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] bottom-[31%] h-[789px] right-[0] rotate-[179deg] w-[13%]">
                    <div className="h-[664px] ml-auto my-auto w-[77%]">
                      <Img
                        className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                        src="images/img_ellipse264_664x159.png"
                        alt="ellipse264_Two"
                      />
                      <Img
                        className="absolute h-[633px] inset-[0] justify-center m-auto object-cover rounded-[78px]"
                        src="images/img_rectangle26.png"
                        alt="rectangleTwentySix_Two"
                      />
                    </div>
                    <Img
                      className="absolute h-[789px] inset-[0] justify-center m-auto object-cover w-full"
                      src="images/img_noise_789x208.png"
                      alt="noise_Two"
                    />
                  </div>
                </div>
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[14%] w-[76%]">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-[35px] items-center justify-start w-[41%] md:w-full">
                      <div className="flex flex-row gap-5 items-center justify-center w-[56%] md:w-full">
                        <Button
                          className="capitalize cursor-pointer font-bold min-w-[125px] rounded-[22px] sm:text-[19px] md:text-[21px] text-[23px] text-center tracking-[2.30px]"
                          color="indigo_A700"
                          size="xs"
                          variant="fill"
                        >
                          Buy
                        </Button>
                        <Button
                          className="capitalize cursor-pointer font-bold min-w-[125px] rounded-[22px] sm:text-[19px] md:text-[21px] text-[23px] text-center tracking-[2.30px]"
                          color="indigo_A700_7e"
                          size="xs"
                          variant="outline"
                        >
                          Sell
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                          <SelectBox
                            className="font-bold sm:text-[20.98px] md:text-[22.98px] text-[24.98px] text-left w-full"
                            placeholderClassName="text-white-A700"
                            indicator={
                              <Img
                                className="h-[7px] mr-[0] border-white-A700 border-[3px] border-solid w-3.5"
                                src="images/img_arrowdown.svg"
                                alt="arrow_down"
                              />
                            }
                            isSearchable={false}
                            placeholder="BTC"
                            getOptionLabel={(e) => (
                              <div className="flex items-center">
                                <Img
                                  className="h-5 mr-2 pl-2 pr-[9px] rounded-[16px] py-1.5"
                                  src="images/img_airplane.svg"
                                  alt="airplane"
                                />
                                <span>{e.label}</span>
                              </div>
                            )}
                            name="group163"
                            isMulti={false}
                            options={btcOptionsList}
                            shape="round"
                            size="xs"
                            variant="outline"
                            color="deep_purple_A400_4c_gray_50_00"
                          />
                          <div className="flex flex-row items-center justify-start w-[47%] md:w-full">
                            <Text
                              className="capitalize text-[19px] text-white-A700_87"
                              size="txtSatoshiRegular19WhiteA70087"
                            >
                              1 BTC =
                            </Text>
                            <Text
                              className="capitalize ml-1 text-[19px] text-right text-white-A700"
                              size="txtSatoshiMedium19"
                            >
                              29,294.47 USD
                            </Text>
                            <Img
                              className="h-2.5 ml-[7px]"
                              src="images/img_icon.svg"
                              alt="icon"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[41px] w-full">
                          <div className="flex flex-col gap-[17px] items-center justify-start w-full">
                            <div className="flex flex-col gap-2 items-start justify-start w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                                  size="txtSatoshiBold22"
                                >
                                  Pay with
                                </Text>
                              </div>
                              <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border7 flex flex-row items-center justify-between md:ml-[0] ml-[3px] p-3.5 rounded-[16px] w-full">
                                <Text
                                  className="ml-[13px] mt-[5px] text-[19px] text-white-A700_75"
                                  size="txtSatoshiMedium19WhiteA70075"
                                >
                                  Select Payment Method (350+)
                                </Text>
                                <Text
                                  className="capitalize mr-[7px] text-base text-indigo-A700 text-right"
                                  size="txtSatoshiMedium16"
                                >
                                  Show All
                                </Text>
                              </div>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-2 items-center justify-between w-full">
                              <div className="flex sm:flex-1 sm:flex-col flex-row gap-3.5 items-center justify-between w-[95%] sm:w-full">
                                <Button
                                  className="capitalize cursor-pointer font-medium min-w-[107px] rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  Bank Transfer
                                </Button>
                                <Button
                                  className="capitalize cursor-pointer font-medium min-w-[65px] rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  PayPal
                                </Button>
                                <Button
                                  className="capitalize cursor-pointer font-medium min-w-[79px] rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  Gift Card
                                </Button>
                                <Button
                                  className="capitalize cursor-pointer font-medium min-w-[164px] rounded-[14px] text-center text-sm"
                                  color="indigo_A700_75"
                                  size="xs"
                                  variant="fill"
                                >
                                  Steam Wallet Gift Card
                                </Button>
                              </div>
                              <Img
                                className="h-5 w-5"
                                src="images/img_arrowright.svg"
                                alt="arrowright"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[11px] items-start justify-start mt-[39px] w-full">
                          <div className="flex flex-col gap-2 items-start justify-start w-full">
                            <div className="flex flex-col items-center justify-start">
                              <Text
                                className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                                size="txtSatoshiBold22"
                              >
                                I want to spend
                              </Text>
                            </div>
                            <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border8 flex sm:flex-col flex-row sm:gap-5 items-center justify-end md:ml-[0] ml-[3px] p-[15px] rounded-[16px] w-full">
                              <Text
                                className="sm:mt-0 mt-0.5 text-[19px] text-white-A700_75"
                                size="txtSatoshiMedium19WhiteA70075"
                              >
                                Enter amount
                              </Text>
                              <Text
                                className="capitalize sm:ml-[0] ml-[263px] text-base text-white-A700"
                                size="txtSatoshiMedium16WhiteA700"
                              >
                                USD
                              </Text>
                              <Img
                                className="h-[7px] sm:ml-[0] ml-[9px] mr-1.5"
                                src="images/img_arrowdown.svg"
                                alt="arrowdown"
                              />
                            </div>
                          </div>
                          <div className="flex flex-row gap-2.5 items-center justify-start md:ml-[0] ml-[3px] w-[32%] md:w-full">
                            <Text
                              className="capitalize text-[19px] text-white-A700_87"
                              size="txtSatoshiRegular19WhiteA70087"
                            >
                              Minimum:
                            </Text>
                            <Text
                              className="capitalize text-[19px] text-white-A700"
                              size="txtSatoshiMedium19"
                            >
                              10 USD
                            </Text>
                          </div>
                        </div>
                        <Button
                          className="capitalize cursor-pointer font-medium min-w-[486px] sm:min-w-full mt-[37px] text-center text-lg tracking-[1.80px]"
                          shape="round"
                          color="indigo_A700"
                          size="xl"
                          variant="fill"
                        >
                          Find Offers
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="md:text-5xl text-6xl text-white-A700 uppercase"
                        size="txtChillaxBold60"
                      >
                        buy or sell
                      </Text>
                      <Text
                        className="leading-[38.00px] mt-[18px] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                        size="txtSatoshiBold30"
                      >
                        <span className="text-white-A700 font-satoshi text-left font-bold">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod{" "}
                        </span>
                        <span className="text-indigo-A700 font-satoshi text-left font-bold">
                          tempor incididunt ut labore et dolore magna
                        </span>
                      </Text>
                      <Text
                        className="italic leading-[30.00px] mt-[25px] text-white-A700 text-xl w-full"
                        size="txtSatoshiItalic20"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                      </Text>
                      <Text
                        className="leading-[30.00px] mt-[25px] text-white-A700 text-xl w-full"
                        size="txtSatoshiMedium20"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[199px] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="md:text-5xl text-6xl text-center text-white-A700 uppercase"
                        size="txtChillaxBold60"
                      >
                        buy & selling Listings
                      </Text>
                      <Text
                        className="text-center text-white-A700 text-xl"
                        size="txtSatoshiMedium20"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        sed do eiusmod
                      </Text>
                      <List
                        className="sm:flex-col flex-row font-satoshi gap-6 grid md:grid-cols-1 grid-cols-2 justify-center mt-[71px] w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                          <div className="bg-indigo-A200_1e flex flex-col items-center justify-end pr-[17px] pt-[17px] rounded-[16px] w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
                                <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                                  <Text
                                    className="mt-0.5 text-center text-white-A700 text-xl"
                                    size="txtSatoshiMedium20"
                                  >
                                    Trending Market
                                  </Text>
                                  <Text
                                    className="text-[15px] text-center text-white-A700"
                                    size="txtSatoshiMedium15"
                                  >
                                    View All
                                  </Text>
                                </div>
                                <div className="flex flex-row items-center justify-between ml-3 md:ml-[0] mt-[31px] w-[87%] md:w-full">
                                  <Text
                                    className="text-base text-white-A700_99"
                                    size="txtSatoshiMedium16WhiteA70099"
                                  >
                                    Name
                                  </Text>
                                  <Text
                                    className="text-base text-white-A700_99"
                                    size="txtSatoshiMedium16WhiteA70099"
                                  >
                                    Price
                                  </Text>
                                  <Text
                                    className="text-base text-white-A700_99"
                                    size="txtSatoshiMedium16WhiteA70099"
                                  >
                                    Chart
                                  </Text>
                                </div>
                                <Line className="bg-indigo-A700_87 h-px mt-4 w-full" />
                                <div className="flex flex-row items-start justify-between ml-3 md:ml-[0] mt-[13px] w-[96%] md:w-full">
                                  <div className="flex flex-row gap-[15px] items-start justify-start">
                                    <Button
                                      className="flex h-7 items-center justify-center w-7"
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
                                      className="mt-[3px] text-[16.74px] text-gray-100"
                                      size="txtSatoshiMedium1674"
                                    >
                                      Bitcoin
                                    </Text>
                                  </div>
                                  <Text
                                    className="mt-1 text-[16.74px] text-gray-100"
                                    size="txtSatoshiMedium1674"
                                  >
                                    USD 5,000
                                  </Text>
                                  <Img
                                    className="h-[29px]"
                                    src="images/img_vector.svg"
                                    alt="vector"
                                  />
                                </div>
                              </div>
                              <div className="flex mt-1 relative w-full">
                                <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[195px] my-auto rotate-[-105deg] w-[42%]"></div>
                                <Line className="bg-white-A700_66 h-px ml-[-215.56px] mr-auto mt-3 w-[97%] z-[1]" />
                                <Line className="bg-white-A700_66 h-px ml-[-215.56px] mr-auto mt-[70px] w-[97%] z-[1]" />
                                <Line className="bg-white-A700_66 h-px mb-[63px] ml-[-215.56px] mr-auto mt-auto w-[97%] z-[1]" />
                                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-[-203.56px] mr-auto mt-[21px] w-[92%] z-[1]">
                                  <div className="flex flex-row gap-[15px] items-start justify-start sm:mt-0 mt-0.5 w-[23%] sm:w-full">
                                    <Button
                                      className="flex h-7 items-center justify-center w-7"
                                      shape="circle"
                                      color="indigo_A200_01"
                                      size="xs"
                                      variant="fill"
                                    >
                                      <Img
                                        src="images/img_arrowdown_white_a700.svg"
                                        alt="arrowdown"
                                      />
                                    </Button>
                                    <Text
                                      className="mt-[3px] text-[16.74px] text-gray-100"
                                      size="txtSatoshiMedium1674"
                                    >
                                      Ethereum
                                    </Text>
                                  </div>
                                  <Text
                                    className="sm:ml-[0] ml-[103px] sm:mt-0 mt-1.5 text-[16.74px] text-gray-100"
                                    size="txtSatoshiMedium1674"
                                  >
                                    USD 3,980
                                  </Text>
                                  <Img
                                    className="h-8 sm:ml-[0] ml-[130px]"
                                    src="images/img_mail.svg"
                                    alt="mail"
                                  />
                                </div>
                                <div className="flex flex-row items-start justify-between ml-[-203.56px] mr-auto my-auto w-[92%] z-[1]">
                                  <div className="flex flex-row gap-3.5 items-start justify-between mt-0.5 w-[15%]">
                                    <Button
                                      className="flex h-[29px] items-center justify-center rounded-[14px] w-[29px]"
                                      color="yellow_700"
                                      size="xs"
                                      variant="fill"
                                    >
                                      <Img
                                        className="h-[18px]"
                                        src="images/img_close.svg"
                                        alt="close"
                                      />
                                    </Button>
                                    <Text
                                      className="mt-[3px] text-[16.74px] text-gray-100"
                                      size="txtSatoshiMedium1674"
                                    >
                                      BNB
                                    </Text>
                                  </div>
                                  <Text
                                    className="mt-1.5 text-[16.74px] text-gray-100"
                                    size="txtSatoshiMedium1674"
                                  >
                                    USD 3,550
                                  </Text>
                                  <Img
                                    className="h-[29px]"
                                    src="images/img_vector.svg"
                                    alt="vector_One"
                                  />
                                </div>
                                <div className="flex flex-row items-start justify-between mb-5 ml-[-203.56px] mr-auto mt-auto w-[92%] z-[1]">
                                  <div className="flex flex-row gap-3.5 items-start justify-between mt-0.5 w-[16%]">
                                    <Img
                                      className="h-[29px] w-[29px]"
                                      src="images/img_luna.svg"
                                      alt="luna"
                                    />
                                    <Text
                                      className="mt-[3px] text-[16.74px] text-gray-100"
                                      size="txtSatoshiMedium1674"
                                    >
                                      Terra
                                    </Text>
                                  </div>
                                  <Text
                                    className="mt-1.5 text-[16.74px] text-gray-100"
                                    size="txtSatoshiMedium1674"
                                  >
                                    USD 2,870
                                  </Text>
                                  <Img
                                    className="h-[29px]"
                                    src="images/img_vector.svg"
                                    alt="vector_Two"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                          <div className="bg-indigo-A200_1e flex flex-col items-center justify-end pl-[17px] pt-[17px] rounded-[16px] w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <div className="flex flex-row sm:gap-10 items-start justify-between w-[97%] md:w-full">
                                <Text
                                  className="mt-0.5 text-white-A700 text-xl"
                                  size="txtSatoshiMedium20"
                                >
                                  Top Gainer
                                </Text>
                                <Text
                                  className="text-[15px] text-center text-white-A700"
                                  size="txtSatoshiMedium15"
                                >
                                  View All
                                </Text>
                              </div>
                              <div className="flex flex-row items-center justify-between ml-3 md:ml-[0] mt-[31px] w-[84%] md:w-full">
                                <Text
                                  className="text-base text-white-A700_99"
                                  size="txtSatoshiMedium16WhiteA70099"
                                >
                                  Name
                                </Text>
                                <Text
                                  className="text-base text-white-A700_99"
                                  size="txtSatoshiMedium16WhiteA70099"
                                >
                                  Price
                                </Text>
                                <Text
                                  className="text-base text-white-A700_99"
                                  size="txtSatoshiMedium16WhiteA70099"
                                >
                                  Chart
                                </Text>
                              </div>
                              <Line className="bg-indigo-A700_87 h-px mt-4 w-[97%]" />
                              <div className="flex flex-row items-start justify-between ml-3 md:ml-[0] mt-[13px] w-[92%] md:w-full">
                                <div className="flex flex-row gap-[15px] items-start justify-start">
                                  <Button
                                    className="flex h-7 items-center justify-center w-7"
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
                                    className="mt-[3px] text-[16.74px] text-gray-100"
                                    size="txtSatoshiMedium1674"
                                  >
                                    Bitcoin
                                  </Text>
                                </div>
                                <Text
                                  className="mt-1 text-[16.74px] text-gray-100"
                                  size="txtSatoshiMedium1674"
                                >
                                  USD 5,000
                                </Text>
                                <Img
                                  className="h-[29px]"
                                  src="images/img_vector.svg"
                                  alt="vector"
                                />
                              </div>
                              <div className="h-[195px] sm:h-[199px] md:h-[648px] mt-1 relative w-full">
                                <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] flex md:flex-col flex-row md:gap-10 h-full inset-y-[0] items-start justify-between my-auto right-[0] rotate-[-105deg] w-[83%]">
                                  <div className="h-[380px] relative w-full">
                                    <div className="h-56 m-auto w-[73%]">
                                      <div className="backdrop-opacity-[0.5] bg-gradient2  blur-[264.00px] h-56 m-auto rotate-[-135deg] rounded-[184px] w-full"></div>
                                      <Img
                                        className="absolute h-[213px] inset-[0] justify-center m-auto object-cover rounded-[106px]"
                                        src="images/img_rectangle26_213x352.png"
                                        alt="rectangleTwentySix"
                                      />
                                    </div>
                                    <Img
                                      className="absolute h-[380px] inset-[0] justify-center m-auto object-cover w-full"
                                      src="images/img_noise_380x506.png"
                                      alt="noise"
                                    />
                                  </div>
                                  <div className="flex md:h-56 h-[195px] justify-end relative w-full">
                                    <div className="flex md:h-56 h-[120px] justify-end ml-auto mr-[30px] mt-auto w-[79%]">
                                      <div className="backdrop-opacity-[0.5] bg-gradient2  blur-[264.00px] h-56 mt-auto mx-auto rotate-[-135deg] rounded-[184px] w-full"></div>
                                      <Img
                                        className="absolute bottom-[0] h-[213px] inset-x-[0] mx-auto object-cover rounded-[106px]"
                                        src="images/img_rectangle26_213x352.png"
                                        alt="rectangleTwentySix_One"
                                      />
                                    </div>
                                    <Img
                                      className="absolute h-[195px] inset-[0] justify-center m-auto object-cover w-full"
                                      src="images/img_noise_380x506.png"
                                      alt="noise_One"
                                    />
                                  </div>
                                </div>
                                <Line className="absolute bg-white-A700_66 h-px inset-x-[0] mx-auto top-[6%] w-[97%]" />
                                <Line className="absolute bg-white-A700_66 h-px inset-x-[0] mx-auto top-[36%] w-[97%]" />
                                <Line className="absolute bg-white-A700_66 bottom-[32%] h-px inset-x-[0] mx-auto w-[97%]" />
                                <div className="absolute flex sm:flex-col flex-row sm:gap-5 items-start justify-start left-[2%] top-[11%] w-[92%]">
                                  <div className="flex flex-row gap-[15px] items-start justify-start sm:mt-0 mt-0.5 w-[23%] sm:w-full">
                                    <Button
                                      className="flex h-7 items-center justify-center w-7"
                                      shape="circle"
                                      color="indigo_A200_01"
                                      size="xs"
                                      variant="fill"
                                    >
                                      <Img
                                        src="images/img_arrowdown_white_a700.svg"
                                        alt="arrowdown"
                                      />
                                    </Button>
                                    <Text
                                      className="mt-[3px] text-[16.74px] text-gray-100"
                                      size="txtSatoshiMedium1674"
                                    >
                                      Ethereum
                                    </Text>
                                  </div>
                                  <Text
                                    className="sm:ml-[0] ml-[103px] sm:mt-0 mt-1.5 text-[16.74px] text-gray-100"
                                    size="txtSatoshiMedium1674"
                                  >
                                    USD 3,980
                                  </Text>
                                  <Img
                                    className="h-8 sm:ml-[0] ml-[130px]"
                                    src="images/img_mail.svg"
                                    alt="mail"
                                  />
                                </div>
                                <div className="absolute flex flex-row h-max inset-[0] items-start justify-between m-auto w-[92%]">
                                  <div className="flex flex-row gap-3.5 items-start justify-between mt-0.5 w-[15%]">
                                    <Button
                                      className="flex h-[29px] items-center justify-center rounded-[14px] w-[29px]"
                                      color="yellow_700"
                                      size="xs"
                                      variant="fill"
                                    >
                                      <Img
                                        className="h-[18px]"
                                        src="images/img_close.svg"
                                        alt="close"
                                      />
                                    </Button>
                                    <Text
                                      className="mt-[3px] text-[16.74px] text-gray-100"
                                      size="txtSatoshiMedium1674"
                                    >
                                      BNB
                                    </Text>
                                  </div>
                                  <Text
                                    className="mt-1.5 text-[16.74px] text-gray-100"
                                    size="txtSatoshiMedium1674"
                                  >
                                    USD 3,550
                                  </Text>
                                  <Img
                                    className="h-[29px]"
                                    src="images/img_vector.svg"
                                    alt="vector_One"
                                  />
                                </div>
                                <div className="absolute bottom-[10%] flex flex-row inset-x-[0] items-start justify-between mx-auto w-[92%]">
                                  <div className="flex flex-row gap-3.5 items-start justify-between mt-0.5 w-[16%]">
                                    <Img
                                      className="h-[29px] w-[29px]"
                                      src="images/img_luna.svg"
                                      alt="luna"
                                    />
                                    <Text
                                      className="mt-[3px] text-[16.74px] text-gray-100"
                                      size="txtSatoshiMedium1674"
                                    >
                                      Terra
                                    </Text>
                                  </div>
                                  <Text
                                    className="mt-1.5 text-[16.74px] text-gray-100"
                                    size="txtSatoshiMedium1674"
                                  >
                                    USD 2,870
                                  </Text>
                                  <Img
                                    className="h-[29px]"
                                    src="images/img_vector.svg"
                                    alt="vector_Two"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="bg-white-A700 h-[563px] mt-[226px] rounded-[16px] w-full"></div>
                </div>
              </div>
              <div className="absolute flex flex-col md:gap-10 gap-[199px] h-max inset-[0] justify-center m-auto w-[79%]">
                <div className="flex md:flex-col flex-row gap-[35px] items-center justify-between mr-[33px] w-[98%] md:w-full">
                  <Img
                    className="h-[612px] md:h-auto object-cover"
                    src="images/img_1234221.png"
                    alt="1234221"
                  />
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="md:text-5xl text-6xl text-indigo-A700 uppercase"
                      size="txtChillaxBold60IndigoA700"
                    >
                      Escrow system
                    </Text>
                    <Text
                      className="leading-[38.00px] ml-0.5 md:ml-[0] text-3xl sm:text-[26px] md:text-[28px] text-white-A700 w-full"
                      size="txtSatoshiBold30"
                    >
                      <span className="text-gray-900 font-satoshi text-left font-bold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod{" "}
                      </span>
                      <span className="text-indigo-A700 font-satoshi text-left font-bold">
                        tempor incididunt ut labore et dolore magna
                      </span>
                    </Text>
                    <Text
                      className="leading-[30.00px] ml-0.5 md:ml-[0] mt-[17px] text-gray-900_87 text-xl"
                      size="txtSatoshiMedium20Gray90087"
                    >
                      <>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                        <br />
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                      </>
                    </Text>
                    <Button
                      className="capitalize cursor-pointer font-medium font-satoshi min-w-[257px] ml-0.5 md:ml-[0] mt-[37px] text-center text-lg tracking-[1.80px]"
                      shape="round"
                      color="indigo_A700"
                      size="xl"
                      variant="fill"
                    >
                      totam rem aperiam
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[61px] w-[96%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="md:text-5xl text-6xl text-center text-white-A700 uppercase"
                      size="txtChillaxBold60"
                    >
                      buy & selling Listings
                    </Text>
                    <Text
                      className="text-center text-white-A700 text-xl"
                      size="txtSatoshiMedium20"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      sed do eiusmod
                    </Text>
                    <div className="flex sm:flex-col flex-row font-satoshi gap-5 items-center justify-center mt-[68px] w-[37%] md:w-full">
                      <Button
                        className="capitalize cursor-pointer font-bold min-w-[200px] rounded-[22px] sm:text-[19px] md:text-[21px] text-[23px] text-center tracking-[2.30px]"
                        color="indigo_A700"
                        size="xs"
                        variant="fill"
                      >
                        Sell Bitcoin
                      </Button>
                      <Button
                        className="capitalize cursor-pointer font-bold min-w-[214px] rounded-[22px] sm:text-[19px] md:text-[21px] text-[23px] text-center tracking-[2.30px]"
                        color="indigo_A700_7e"
                        size="xs"
                        variant="outline"
                      >
                        Buy Bitcoin
                      </Button>
                    </div>
                    <div className="flex flex-col font-satoshi gap-12 items-center justify-start mt-[43px] w-full">
                      <div className="md:gap-5 gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                        {rockitlyLandingpageColumnPropList.map(
                          (props, index) => (
                            <React.Fragment
                              key={`RockitlyLandingpageColumn${index}`}
                            >
                              <RockitlyLandingpageColumn
                                className="flex flex-1 flex-col indigo_A700_82_indigo_A700_02_border3 items-center justify-start outline outline-[2px] p-3.5 rounded-[16px] w-full"
                                {...props}
                              />
                            </React.Fragment>
                          ),
                        )}
                      </div>
                      <Button
                        className="capitalize cursor-pointer font-medium min-w-[257px] text-center text-lg tracking-[1.80px]"
                        shape="round"
                        color="indigo_A700"
                        size="xl"
                        variant="fill"
                      >
                        Start Trading
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-1/4 flex flex-col gap-[19px] justify-start right-[0] w-[88%]">
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[282px]">
                  <Text
                    className="md:text-5xl text-6xl text-center text-white-A700 uppercase"
                    size="txtChillaxBold60"
                  >
                    Testimonials
                  </Text>
                  <Text
                    className="text-center text-white-A700 text-xl"
                    size="txtSatoshiMedium20"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod
                  </Text>
                </div>
                <div className="flex flex-col gap-3.5 justify-start w-full">
                  <Img
                    className="h-8 md:ml-[0] ml-[1122px]"
                    src="images/img_group1000006424.svg"
                    alt="group1000006424"
                  />
                  <div className="sm:h-[1443px] h-[543px] md:h-[988px] overflow-auto relative w-full">
                    <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto right-[0] w-full">
                      <div className="flex flex-col gap-11 justify-start w-[78%] md:w-full">
                        <List
                          className="sm:flex-col flex-row gap-[26px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-1 flex-col indigo_A700_82_indigo_A700_02_border4 items-center justify-end sm:ml-[0] outline outline-[2px] p-[25px] sm:px-5 rounded-[16px] w-full">
                            <div className="flex flex-col items-start justify-start mt-2.5 w-[92%] md:w-full">
                              <Img
                                className="h-[52px]"
                                src="images/img_vector_indigo_a700.svg"
                                alt="vector"
                              />
                              <Text
                                className="leading-[34.00px] mt-[27px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                                size="txtSatoshiBold22"
                              >
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque{" "}
                              </Text>
                              <Text
                                className="leading-[26.00px] mt-3.5 text-[17px] text-white-A700_87 w-full"
                                size="txtSatoshiMedium17"
                              >
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet,
                                consectetur,
                              </Text>
                              <div className="flex flex-row gap-5 items-center justify-start mt-[37px] w-[38%] md:w-full">
                                <Img
                                  className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                                  src="images/img_rectangle766.png"
                                  alt="rectangle766"
                                />
                                <div className="flex flex-col items-start justify-start">
                                  <Text
                                    className="text-[15px] text-white-A700"
                                    size="txtSatoshiBold15"
                                  >
                                    Amru Alabidi
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-sm text-white-A700"
                                    size="txtSatoshiRegular14"
                                  >
                                    Worley
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col indigo_A700_82_indigo_A700_02_border5 items-center justify-end sm:ml-[0] outline outline-[2px] p-[25px] sm:px-5 rounded-[16px] w-full">
                            <div className="flex flex-col items-start justify-start mt-2.5 w-[92%] md:w-full">
                              <Img
                                className="h-[52px]"
                                src="images/img_vector_indigo_a700.svg"
                                alt="vector"
                              />
                              <Text
                                className="leading-[34.00px] mt-[27px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                                size="txtSatoshiBold22"
                              >
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque{" "}
                              </Text>
                              <Text
                                className="leading-[26.00px] mt-3.5 text-[17px] text-white-A700_87 w-full"
                                size="txtSatoshiMedium17"
                              >
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet,
                                consectetur,
                              </Text>
                              <div className="flex flex-row gap-5 items-center justify-start mt-[37px] w-[37%] md:w-full">
                                <Img
                                  className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                                  src="images/img_rectangle766_70x70.png"
                                  alt="rectangle766"
                                />
                                <div className="flex flex-col items-start justify-start">
                                  <Text
                                    className="text-[15px] text-white-A700"
                                    size="txtSatoshiBold15"
                                  >
                                    Y. Residence
                                  </Text>
                                  <Text
                                    className="mt-0.5 text-sm text-white-A700"
                                    size="txtSatoshiRegular14"
                                  >
                                    John Doe
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-1 flex-col indigo_A700_82_indigo_A700_02_border6 items-center justify-end sm:ml-[0] outline outline-[2px] p-[25px] sm:px-5 rounded-[16px] w-full">
                            <div className="flex flex-col items-start justify-start mt-2.5 w-[92%] md:w-full">
                              <Img
                                className="h-[52px]"
                                src="images/img_vector_indigo_a700.svg"
                                alt="vector"
                              />
                              <Text
                                className="leading-[34.00px] mt-[27px] text-[22px] sm:text-lg text-white-A700 md:text-xl w-full"
                                size="txtSatoshiBold22"
                              >
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque{" "}
                              </Text>
                              <Text
                                className="leading-[26.00px] mt-3.5 text-[17px] text-white-A700_87 w-full"
                                size="txtSatoshiMedium17"
                              >
                                Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt. Neque porro quisquam
                                est, qui dolorem ipsum quia dolor sit amet,
                                consectetur,
                              </Text>
                              <div className="flex flex-row gap-5 items-center justify-start mt-[37px] w-[38%] md:w-full">
                                <Img
                                  className="h-[70px] md:h-auto rounded-[50%] w-[70px]"
                                  src="images/img_rectangle766.png"
                                  alt="rectangle766"
                                />
                                <div className="flex flex-col items-start justify-start">
                                  <Text
                                    className="text-[15px] text-white-A700"
                                    size="txtSatoshiBold15"
                                  >
                                    Amru Alabidi
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-sm text-white-A700"
                                    size="txtSatoshiRegular14"
                                  >
                                    Worley
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </List>
                        <Button
                          className="capitalize cursor-pointer font-medium min-w-[159px] md:ml-[0] ml-[521px] mr-[720px] text-center text-lg tracking-[1.80px]"
                          shape="round"
                          color="indigo_A700"
                          size="xl"
                          variant="fill"
                        >
                          View All
                        </Button>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[463px] object-cover right-[0] top-[0] w-[14%]"
                      src="images/img_rectangle40021.png"
                      alt="rectangle40021"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[53%]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="h-[872px] relative w-full">
                    <div className="absolute inset-[0] justify-center m-auto overflow-x-auto w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Img
                          className="h-[344px] md:h-auto object-cover"
                          src="images/img_group.png"
                          alt="group_Sixteen"
                        />
                        <div className="md:h-96 sm:h-[413px] h-[833px] relative w-full">
                          <div className="md:h-96 sm:h-[413px] h-[833px] m-auto w-full">
                            <div className="absolute md:h-[344px] h-[525px] left-[0] top-[0] w-[55%] sm:w-full">
                              <Img
                                className="absolute h-[344px] left-[0] object-cover top-[0]"
                                src="images/img_group.png"
                                alt="group_Seventeen"
                              />
                              <Img
                                className="absolute bottom-[0] h-[278px] object-cover right-[0]"
                                src="images/img_group.png"
                                alt="group_Eighteen"
                              />
                            </div>
                            <div className="absolute bottom-[0] flex sm:flex-col flex-row sm:gap-10 items-start justify-between left-[0] w-[62%]">
                              <Img
                                className="h-[169px] md:h-auto sm:mt-0 mt-[35px] object-cover"
                                src="images/img_group_169x203.png"
                                alt="group_Nineteen"
                              />
                              <Img
                                className="h-[169px] md:h-auto mb-[35px] object-cover"
                                src="images/img_group_1.png"
                                alt="group_Twenty"
                              />
                            </div>
                            <div className="flex flex-col h-full items-center justify-start ml-auto mt-[39px] w-1/4">
                              <div className="flex flex-col gap-6 justify-start w-full">
                                <div className="flex flex-row items-start justify-between w-full">
                                  <Img
                                    className="h-6 md:h-auto mt-16 object-cover w-6"
                                    src="images/img_vector_24x24.png"
                                    alt="vector_Twelve"
                                  />
                                  <div className="md:h-[50px] h-[77px] mb-2.5 relative w-[34%]">
                                    <Img
                                      className="absolute h-6 object-cover right-[3%] top-[22%] w-6"
                                      src="images/img_vector_24x24.png"
                                      alt="vector_Thirteen"
                                    />
                                    <Img
                                      className="absolute bottom-[0] h-10 object-cover right-[0] w-10"
                                      src="images/img_vector_24x24.png"
                                      alt="vector_Fourteen"
                                    />
                                    <Img
                                      className="absolute h-[33px] left-[0] object-cover top-[0] w-[33px]"
                                      src="images/img_vector_24x24.png"
                                      alt="vector_Fifteen"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-row gap-[42px] items-start justify-end md:ml-[0] ml-[79px] w-[54%] md:w-full">
                                  <Img
                                    className="h-[33px] md:h-auto object-cover w-[33px]"
                                    src="images/img_vector_24x24.png"
                                    alt="vector_Sixteen"
                                  />
                                  <Img
                                    className="h-[34px] md:h-auto mt-6 object-cover w-[34px]"
                                    src="images/img_vector_24x24.png"
                                    alt="vector_Seventeen"
                                  />
                                </div>
                              </div>
                            </div>
                            <Img
                              className="absolute bottom-[1%] h-[348px] object-cover right-[1%]"
                              src="images/img_group_171x205.png"
                              alt="group_TwentyOne"
                            />
                            <Img
                              className="absolute h-96 object-cover right-[0] top-[4%]"
                              src="images/img_group_2.png"
                              alt="group_TwentyTwo"
                            />
                          </div>
                          <Img
                            className="absolute h-96 inset-y-[0] my-auto object-cover right-[7%]"
                            src="images/img_group_384x499.png"
                            alt="group_TwentyThree"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[872px] inset-y-[0] left-[1%] my-auto"
                      src="images/img_group_white_a700.svg"
                      alt="group_TwentyFour"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[51%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[659px] sm:h-[833px] h-[872px] pb-[19px] relative w-full">
                  <div className="absolute flex md:flex-col flex-row md:gap-[46px] h-max inset-[0] items-start justify-between m-auto pt-[37px] w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[626px] w-[22%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row gap-[43px] items-start justify-start w-[53%] md:w-full">
                          <Img
                            className="h-[34px] md:h-auto mb-[18px] object-cover"
                            src="images/img_vector_24x24.png"
                            alt="vector_Eighteen"
                          />
                          <Img
                            className="h-[33px] md:h-auto mt-5 object-cover w-[33px]"
                            src="images/img_vector_33x33.png"
                            alt="vector_Nineteen"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-between mt-[17px] w-full">
                          <Img
                            className="h-10 md:h-auto mt-[23px] object-cover"
                            src="images/img_vector_24x24.png"
                            alt="vector_Twenty"
                          />
                          <Img
                            className="h-6 md:h-auto object-cover w-6"
                            src="images/img_vector_24x24.png"
                            alt="vector_TwentyOne"
                          />
                        </div>
                        <Img
                          className="h-[33px] md:h-auto md:ml-[0] ml-[5px] object-cover w-[33px]"
                          src="images/img_vector_24x24.png"
                          alt="vector_TwentyTwo"
                        />
                      </div>
                    </div>
                    <div className="md:h-[395px] h-[783px] mb-[11px] relative w-[74%] md:w-full">
                      <div className="md:h-96 h-[783px] m-auto w-full">
                        <Img
                          className="absolute h-[278px] left-[0] object-cover top-[27%]"
                          src="images/img_group.png"
                          alt="group_TwentyFive"
                        />
                        <Img
                          className="absolute bottom-[3%] h-[169px] left-[12%] object-cover"
                          src="images/img_group_1.png"
                          alt="group_TwentySix"
                        />
                        <Img
                          className="h-[171px] ml-auto mt-0.5 object-cover"
                          src="images/img_group_171x205.png"
                          alt="group_TwentySeven"
                        />
                        <Img
                          className="absolute bottom-[0] h-[348px] object-cover right-[1%]"
                          src="images/img_group_171x205.png"
                          alt="group_TwentyEight"
                        />
                        <Img
                          className="absolute h-96 object-cover right-[0] top-[0]"
                          src="images/img_group_2.png"
                          alt="group_TwentyNine"
                        />
                      </div>
                      <Img
                        className="absolute h-96 inset-y-[0] left-[5%] my-auto object-cover"
                        src="images/img_group_384x499.png"
                        alt="group_Thirty"
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute h-[659px] left-[0] object-cover top-[0]"
                    src="images/img_group_white_a700_872x788.png"
                    alt="group_ThirtyOne"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[4%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto w-[79%]">
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
                              alt="vector_TwentyThree"
                            />
                            <Img
                              className="absolute bottom-[0] h-[17px] right-[0]"
                              src="images/img_vector_indigo_a700_17x8.svg"
                              alt="vector_TwentyFour"
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
                            alt="vector_TwentyFive"
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
                          Links
                        </Text>
                        <Line className="bg-indigo-A700 h-px w-full" />
                      </div>
                      <Text
                        className="capitalize h-[185px] leading-[40.00px] text-base text-white-A700_cc"
                        size="txtSatoshiMedium16WhiteA700cc"
                      >
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
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-[65%] md:w-full">
                        <Text
                          className="capitalize text-[22px] text-indigo-A700 sm:text-lg md:text-xl"
                          size="txtSatoshiBold22IndigoA700"
                        >
                          Trading
                        </Text>
                        <Line className="bg-indigo-A700 h-px mt-[3px] w-full" />
                      </div>
                      <Text
                        className="capitalize h-[185px] leading-[40.00px] text-base text-white-A700_cc"
                        size="txtSatoshiMedium16WhiteA700cc"
                      >
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
                      </Text>
                    </div>
                  </List>
                  <div className="flex flex-col gap-[18px] items-start justify-start md:mt-0 mt-[7px] w-[14%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-[83%] md:w-full">
                      <a
                        href="javascript:"
                        className="capitalize text-[22px] text-indigo-A700 sm:text-lg md:text-xl"
                      >
                        <Text size="txtSatoshiBold22IndigoA700">Support</Text>
                      </a>
                      <Line className="bg-indigo-A700 h-px mt-[3px] w-full" />
                    </div>
                    <Text
                      className="capitalize leading-[40.00px] text-base text-white-A700_cc"
                      size="txtSatoshiMedium16WhiteA700cc"
                    >
                      <>
                        How it Works <br />
                        FAQs <br />
                        Terms & Conditions <br />
                        Privacy Policy <br />
                        Contact Us
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                  <Text
                    className="capitalize mb-1 md:mt-0 mt-[39px] text-sm text-white-A700_cc"
                    size="txtSatoshiMedium14"
                  >
                    @ Copyright 2023. All rights reserved.
                  </Text>
                  <div className="flex flex-col items-center justify-start">
                    <div className="flex sm:flex-col flex-row gap-[35px] items-end justify-between w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="capitalize md:text-2xl sm:text-[22px] text-[26px] text-white-A700_cc"
                          size="txtSatoshiBold26"
                        >
                          Newsletter
                        </Text>
                        <Text
                          className="mt-[3px] text-[17px] text-white-A700_87"
                          size="txtSatoshiMedium17"
                        >
                          Lorem ipsum dolor sit amet
                        </Text>
                      </div>
                      <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border9 flex sm:flex-1 flex-row items-center justify-between mb-0.5 sm:mt-0 mt-[7px] p-[5px] rounded-[16px] w-[59%] sm:w-full">
                        <Text
                          className="ml-2.5 text-[13px] text-white-A700_6c"
                          size="txtSatoshiMedium13"
                        >
                          Enter Your Email
                        </Text>
                        <Button
                          className="!text-white-A700_cc border border-indigo-A700 border-solid capitalize cursor-pointer font-medium min-w-[98px] rounded-[12px] text-base text-center"
                          shape="round"
                          color="indigo_A700"
                          size="md"
                          variant="fill"
                        >
                          Subscribe
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
          <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] bottom-[17%] h-[789px] left-[0] rotate-[179deg] w-[16%]">
            <div className="h-[664px] my-auto w-[86%]">
              <Img
                className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_664x207.png"
                alt="ellipse264_Three"
              />
              <Img
                className="absolute h-[633px] inset-y-[0] left-[0] my-auto object-cover rounded-[96px]"
                src="images/img_rectangle26.png"
                alt="rectangleTwentySix_Three"
              />
            </div>
            <Img
              className="absolute h-[789px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_noise_789x243.png"
              alt="noise_Three"
            />
          </div>
          <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] bottom-[11%] h-[789px] right-[0] rotate-[179deg] w-[15%]">
            <div className="h-[664px] ml-auto my-auto w-4/5">
              <Img
                className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_664x190.png"
                alt="ellipse264_Four"
              />
              <Img
                className="absolute h-[633px] inset-[0] justify-center m-auto object-cover rounded-[93px]"
                src="images/img_rectangle26.png"
                alt="rectangleTwentySix_Four"
              />
            </div>
            <Img
              className="absolute h-[789px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_noise_789x239.png"
              alt="noise_Four"
            />
          </div>
        </div>
        <div className="absolute bottom-[10%] flex flex-col inset-x-[0] items-center justify-start max-w-[1221px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:h-[684px] h-[692px] relative w-full">
              <div className="md:h-[684px] h-[692px] m-auto w-full">
                <div className="md:h-[684px] h-[692px] m-auto w-full">
                  <div className="md:h-[684px] h-[692px] m-auto w-full">
                    <div className="absolute h-[684px] inset-[0] justify-center m-auto w-full">
                      <div className="absolute bg-white-A700 h-[684px] inset-[0] justify-center m-auto rounded-[16px] w-full"></div>
                      <Img
                        className="absolute bottom-[28%] h-24 right-[0]"
                        src="images/img_group1000006439.svg"
                        alt="group1000006439"
                      />
                    </div>
                    <Img
                      className="absolute bottom-[0] h-24 right-[0]"
                      src="images/img_group1000006439.svg"
                      alt="group1000006440"
                    />
                    <Img
                      className="absolute bottom-[29%] h-24 left-[0]"
                      src="images/img_group1000006439.svg"
                      alt="group1000006438"
                    />
                  </div>
                  <Img
                    className="absolute bottom-[0] h-24 left-[0]"
                    src="images/img_group1000006439.svg"
                    alt="group1000006441"
                  />
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[63%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="md:text-5xl text-6xl text-center text-indigo-A700 uppercase"
                          size="txtChillaxBold60IndigoA700"
                        >
                          Ready to get started?
                        </Text>
                        <Text
                          className="leading-[30.00px] text-center text-gray-900_87 text-xl w-[96%] sm:w-full"
                          size="txtSatoshiMedium20Gray90087"
                        >
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </Text>
                      </div>
                      <Img
                        className="h-[196px] mt-[69px]"
                        src="images/img_frame_lime_700.svg"
                        alt="frame_One"
                      />
                      <div className="bg-indigo-A700 flex flex-col items-center justify-end mt-12 p-[17px] rounded-[10px] shadow-bs">
                        <Text
                          className="capitalize text-center text-lg text-white-A700 tracking-[1.80px]"
                          size="txtSatoshiMedium18"
                        >
                          Create Your Account
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute bottom-[15%] h-24 right-[0]"
                  src="images/img_group1000006439.svg"
                  alt="group1000006439_One"
                />
              </div>
              <Img
                className="absolute bottom-[15%] h-24 left-[0]"
                src="images/img_group1000006439.svg"
                alt="group1000006438_One"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RockitlylandingpagePage;
