import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";
import P2pTradingColumn from "components/P2pTradingColumn";
import P2pTradingStack from "components/P2pTradingStack";

const RockitlyaboutPage = () => {
  const p2PTradingColumnPropList = [
    { userimage: "images/img_star.svg" },
    { besttradingplatform: " Comfortable Ecosystem" },
    { besttradingplatform: " Trusted Security" },
  ];

  return (
    <>
      <div className="bg-white-A700 flex font-satoshi h-[4610px] justify-end mx-auto relative w-full">
        <div className="md:h-[5792px] h-[6656px] mt-auto mx-auto md:px-5 w-full">
          <div className="flex flex-col m-auto w-full">
            <div className="h-[864px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
              <Img
                className="h-[864px] m-auto object-cover w-full"
                src="images/img_rectangle40003_2.png"
                alt="rectangle40003"
              />
              <Img
                className="absolute h-[864px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_rectangle40008_2.png"
                alt="rectangle40008"
              />
            </div>
            <Img
              className="h-[5806px] mt-[-14px] mx-auto object-cover w-full z-[1]"
              src="images/img_rectangle40011_5806x1600.png"
              alt="rectangle40011"
            />
            <div className="bg-gradient1  flex flex-col gap-[55px] items-center justify-start mb-auto mt-[-NaNpx] mx-auto p-6 sm:px-5 w-full z-[1]">
              <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
              <div className="font-chillax sm:h-[6497px] md:h-[6847px] h-[726px] mb-[5771px] relative w-[78%] md:w-full">
                <Text
                  className="ml-0.5 mt-[73px] md:text-5xl text-6xl text-white-A700 uppercase"
                  size="txtChillaxRegular60"
                >
                  About US
                </Text>
                <div className="absolute flex md:flex-col flex-row md:gap-[52px] h-full inset-[0] items-start justify-between m-auto w-full">
                  <div className="flex flex-col items-center justify-start md:mt-0 mt-[232px]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="leading-[46.00px] sm:text-[29px] md:text-[31px] text-[33px] text-white-A700 uppercase w-full"
                        size="txtChillaxSemibold33"
                      >
                        <span className="text-white-A700 font-chillax text-left font-semibold">
                          Our best users are all over the{" "}
                        </span>
                        <span className="text-indigo-A700 font-chillax text-left font-semibold">
                          world with wide coverage
                        </span>
                      </Text>
                      <Text
                        className="capitalize leading-[31.00px] mt-2.5 text-[19px] text-white-A700_87 w-full"
                        size="txtSatoshiRegular19WhiteA70087"
                      >
                        Our platform reaches people all over the world, hereby
                        we are trusted as the best platform for crypto trading
                      </Text>
                      <List
                        className="sm:flex-col flex-row md:gap-10 gap-[76px] grid sm:grid-cols-1 grid-cols-3 justify-center mt-[35px] w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="capitalize sm:text-[31px] md:text-[33px] text-[35px] text-white-A700"
                              size="txtChillaxSemibold35"
                            >
                              20M+
                            </Text>
                            <Text
                              className="capitalize leading-[21.00px] ml-1 md:ml-[0] text-[15px] text-white-A700 tracking-[1.50px] w-[98%] sm:w-full"
                              size="txtSatoshiRegular15"
                            >
                              People who have joined crybse
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="capitalize sm:text-[31px] md:text-[33px] text-[35px] text-white-A700"
                              size="txtChillaxSemibold35"
                            >
                              100+
                            </Text>
                            <Text
                              className="capitalize leading-[21.00px] ml-1 md:ml-[0] text-[15px] text-white-A700 tracking-[1.50px] w-[98%] sm:w-full"
                              size="txtSatoshiRegular15"
                            >
                              Famous people playing crybse
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="capitalize sm:text-[31px] md:text-[33px] text-[35px] text-white-A700"
                              size="txtChillaxSemibold35"
                            >
                              50
                            </Text>
                            <Text
                              className="capitalize leading-[21.00px] ml-1 md:ml-[0] text-[15px] text-white-A700 tracking-[1.50px] w-[98%] sm:w-full"
                              size="txtSatoshiRegular15"
                            >
                              Cooperation with big companies
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <Img
                    className="h-[726px] md:h-auto object-cover"
                    src="images/img_090991.png"
                    alt="090991"
                  />
                </div>
              </div>
            </div>
            <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[1023px] md:h-[NaNpx] ml-auto mt-[-NaNpx] rotate-[179deg] w-1/4 sm:w-full z-[1]">
              <div className="h-[860px] ml-auto my-auto w-[84%]">
                <Img
                  className="h-[860px] m-auto object-cover rotate-[-135deg] w-full"
                  src="images/img_ellipse264_860x328.png"
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
          </div>
          <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] h-[1023px] inset-y-[0] left-[0] my-auto rotate-[179deg] w-[23%]">
            <div className="h-[860px] my-auto w-[88%]">
              <Img
                className="h-[860px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_9.png"
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
                src="images/img_ellipse264_10.png"
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
        <div className="absolute flex flex-col md:gap-10 gap-[200px] inset-x-[0] items-end justify-start max-w-[1259px] mx-auto md:px-5 top-[22%] w-full">
          <div className="flex flex-col md:gap-10 gap-[200px] items-center justify-start w-[96%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-[54%] md:w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <Text
                    className="leading-[65.00px] md:text-5xl text-6xl text-center text-white-A700 uppercase w-full"
                    size="txtChillaxBold60"
                  >
                    We take care of our quality
                  </Text>
                  <Text
                    className="capitalize text-[19px] text-center text-white-A700"
                    size="txtSatoshiRegular19"
                  >
                    We always provide our best quality for users
                  </Text>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                {p2PTradingColumnPropList.map((props, index) => (
                  <React.Fragment key={`P2pTradingColumn${index}`}>
                    <P2pTradingColumn
                      className="flex flex-1 flex-col indigo_A700_82_indigo_A700_02_border15 items-center justify-end outline outline-[2px] p-3.5 rounded-[16px] w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="leading-[65.00px] md:text-5xl text-6xl text-center text-white-A700 uppercase w-[67%] sm:w-full"
                  size="txtChillaxBold60"
                >
                  Some markets that interest you today?
                </Text>
                <Text
                  className="mt-[3px] text-center text-white-A700 text-xl"
                  size="txtSatoshiMedium20"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod
                </Text>
                <List
                  className="sm:flex-col flex-row font-satoshi gap-6 grid md:grid-cols-1 grid-cols-2 justify-center mt-[41px] w-full"
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
          </div>
          <div className="md:h-[1079px] h-[612px] relative w-full">
            <div className="absolute bg-white-A700 h-[563px] inset-y-[0] my-auto right-[0] rounded-[16px] w-[96%]"></div>
            <div className="absolute flex md:flex-col flex-row gap-[35px] h-full inset-[0] items-center justify-between m-auto w-[98%]">
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod{" "}
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                    <br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.{" "}
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
          </div>
        </div>
        <div className="absolute bottom-[14%] flex flex-col gap-[19px] justify-start md:px-5 right-[0] w-[88%]">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod
            </Text>
          </div>
          <div className="flex flex-col gap-3.5 justify-start w-full">
            <Img
              className="h-8 md:ml-[0] ml-[1122px]"
              src="images/img_group1000006424.svg"
              alt="group1000006424"
            />
            <div className="sm:h-[1442px] h-[543px] md:h-[987px] overflow-auto relative w-full">
              <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto right-[0] w-full">
                <div className="flex flex-col gap-11 justify-start w-[78%] md:w-full">
                  <List
                    className="sm:flex-col flex-row gap-[26px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col indigo_A700_82_indigo_A700_02_border18 items-center justify-end sm:ml-[0] outline outline-[2px] p-[25px] sm:px-5 rounded-[16px] w-full">
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
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque{" "}
                        </Text>
                        <Text
                          className="leading-[26.00px] mt-3.5 text-[17px] text-white-A700_87 w-full"
                          size="txtSatoshiMedium17"
                        >
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi
                          nesciunt. Neque porro quisquam est, qui dolorem ipsum
                          quia dolor sit amet, consectetur,
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
                    <div className="flex flex-1 flex-col indigo_A700_82_indigo_A700_02_border19 items-center justify-end sm:ml-[0] outline outline-[2px] p-[25px] sm:px-5 rounded-[16px] w-full">
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
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque{" "}
                        </Text>
                        <Text
                          className="leading-[26.00px] mt-3.5 text-[17px] text-white-A700_87 w-full"
                          size="txtSatoshiMedium17"
                        >
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi
                          nesciunt. Neque porro quisquam est, qui dolorem ipsum
                          quia dolor sit amet, consectetur,
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
                    <div className="flex flex-1 flex-col indigo_A700_82_indigo_A700_02_border20 items-center justify-end sm:ml-[0] outline outline-[2px] p-[25px] sm:px-5 rounded-[16px] w-full">
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
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque{" "}
                        </Text>
                        <Text
                          className="leading-[26.00px] mt-3.5 text-[17px] text-white-A700_87 w-full"
                          size="txtSatoshiMedium17"
                        >
                          Nemo enim ipsam voluptatem quia voluptas sit
                          aspernatur aut odit aut fugit, sed quia consequuntur
                          magni dolores eos qui ratione voluptatem sequi
                          nesciunt. Neque porro quisquam est, qui dolorem ipsum
                          quia dolor sit amet, consectetur,
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
                  <div className="bg-indigo-A700 flex flex-col items-center justify-end md:ml-[0] ml-[521px] mr-[720px] p-[17px] rounded-[10px] shadow-bs">
                    <a
                      href="javascript:"
                      className="capitalize text-center text-lg text-white-A700 tracking-[1.80px]"
                    >
                      <Text size="txtSatoshiMedium18">View All</Text>
                    </a>
                  </div>
                </div>
              </div>
              <Img
                className="absolute h-[463px] object-cover right-[0] top-[0] w-[14%]"
                src="images/img_rectangle40021_463x187.png"
                alt="rectangle40021"
              />
            </div>
          </div>
        </div>
        <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] bottom-[0] h-[789px] left-[0] md:px-5 rotate-[179deg] w-[16%]">
          <div className="h-[664px] my-auto w-[86%]">
            <Img
              className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
              src="images/img_ellipse264_11.png"
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
        <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] bottom-[0] h-[789px] md:px-5 right-[0] rotate-[179deg] w-[15%]">
          <div className="h-[664px] ml-auto my-auto w-4/5">
            <Img
              className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
              src="images/img_ellipse264_12.png"
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
        <P2pTradingStack className="absolute bottom-[0] md:h-[1177px] h-[872px] inset-x-[0] mx-auto md:px-5 w-full" />
      </div>
    </>
  );
};

export default RockitlyaboutPage;
