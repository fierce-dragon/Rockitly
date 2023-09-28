import React from "react";

import { Button, Img, Line, List, Radio, Text } from "components";
import DashboardTradeHistoryColumn from "components/DashboardTradeHistoryColumn";
import Header1 from "components/Header1";
import P2pTradingStack from "components/P2pTradingStack";

const DashboardshareprofilePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-satoshi h-[1428px] justify-end mx-auto relative w-full">
        <div className="sm:h-[7223px] h-[7226px] md:h-[7489px] mt-auto mx-auto md:px-5 w-full">
          <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
            <div className="h-[864px] mx-auto w-full">
              <Img
                className="h-[864px] m-auto object-cover w-full"
                src="images/img_rectangle40003_20.png"
                alt="rectangle40003"
              />
              <Img
                className="absolute h-[864px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_rectangle40008_18.png"
                alt="rectangle40008"
              />
            </div>
            <Img
              className="h-[6376px] mt-[-14px] mx-auto object-cover w-full z-[1]"
              src="images/img_rectangle40011_19.png"
              alt="rectangle40011"
            />
          </div>
          <div className="absolute bg-gradient1  flex flex-col h-full inset-[0] items-start justify-center m-auto pl-1 py-1 w-full">
            <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[94px] mt-5 w-full" />
            <Line className="bg-white-A700_7e h-px mt-[17px] w-full" />
            <div className="flex flex-row gap-2.5 items-start justify-start md:ml-[0] ml-[93px] mt-[13px] w-[10%] md:w-full">
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
            <div className="flex flex-col font-chillax items-center justify-start mb-[7031px] md:ml-[0] ml-[478px]">
              <Text
                className="capitalize sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
                size="txtChillaxRegular41"
              >
                Share a link to your profile
              </Text>
            </div>
          </div>
          <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] bottom-[16%] h-[789px] right-[0] rotate-[179deg] w-[15%]">
            <div className="h-[664px] ml-auto my-auto w-4/5">
              <Img
                className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_54.png"
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
          <P2pTradingStack className="absolute md:h-[1177px] h-[872px] inset-x-[0] mx-auto top-[11%] w-full" />
        </div>
        <div className="absolute flex md:flex-col flex-row gap-[47px] inset-x-[0] items-start justify-start max-w-[1402px] mx-auto md:px-5 top-[10%] w-full">
          <DashboardTradeHistoryColumn
            className="flex md:flex-1 flex-col items-center justify-start mb-[25px] w-1/4 md:w-full"
            usermenuimage="images/img_menu_white_a700_27x27.svg"
            usersettingsimage="images/img_orderlight_27x27.svg"
            usercutimage="images/img_cut_white_a700.svg"
          />
          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[89px] w-[73%] md:w-full">
            <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border68 flex md:flex-col flex-row md:gap-[52px] items-start justify-between p-[22px] sm:px-5 rounded-[10px] w-full">
              <div className="bg-gray-900_7e border border-solid deep_purple_A400_7e_gray_50_7e_border9 flex md:flex-1 flex-col items-center justify-start mb-[145px] ml-1 md:ml-[0] p-[29px] sm:px-5 rounded-[10px] w-[48%] md:w-full">
                <div className="flex flex-col items-start justify-start mb-[18px] mt-3 w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <div className="flex flex-row gap-[17px] items-center justify-start w-[63%] md:w-full">
                      <div className="bg-white-A700 flex flex-col h-[43px] items-center justify-start p-[9px] rounded-[21px] w-[43px]">
                        <Img
                          className="h-[25px]"
                          src="images/img_location_indigo_a700_43x43.svg"
                          alt="location"
                        />
                      </div>
                      <Text
                        className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                        size="txtSatoshiBold25"
                      >
                        User Profile Link
                      </Text>
                    </div>
                    <Line className="bg-white-A700_7e h-px w-full" />
                  </div>
                  <Text
                    className="capitalize mt-[21px] text-[19px] text-white-A700"
                    size="txtSatoshiBold19"
                  >
                    Your Profile Link
                  </Text>
                  <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border69 flex flex-row gap-6 items-center justify-end mt-[3px] p-[5px] rounded-[16px] w-full">
                    <Text
                      className="text-sm text-white-A700_75"
                      size="txtSatoshiMedium14WhiteA70075"
                    >
                      https://rockitly/user/CozyLovebird424
                    </Text>
                    <div className="bg-indigo-A700 flex flex-col items-start justify-end p-[9px] rounded-[10px] shadow-bs w-[28%]">
                      <div className="h-[26px] md:h-[27px] ml-0.5 md:ml-[0] mt-0.5 relative w-[81%]">
                        <Img
                          className="absolute h-6 left-[0] top-[0] w-6"
                          src="images/img_file_white_a700.svg"
                          alt="file_One"
                        />
                        <Text
                          className="absolute bottom-[0] capitalize right-[0] text-center text-lg text-white-A700 tracking-[1.80px]"
                          size="txtSatoshiMedium18"
                        >
                          Copy
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="mt-[15px] text-[15px] text-white-A700"
                    size="txtSatoshiMedium15"
                  >
                    Anyone who uses this link will be navigated to your profile
                  </Text>
                  <Text
                    className="mt-3.5 text-[15px] text-white-A700"
                    size="txtSatoshiBold15"
                  >
                    Share your link on social media
                  </Text>
                  <div className="flex flex-row gap-[17px] items-center justify-start mt-1.5 w-[29%] md:w-full">
                    <div className="flex flex-col h-[27px] items-center justify-start w-[27px]">
                      <Img
                        className="h-[27px] w-[27px]"
                        src="images/img_facebook.svg"
                        alt="facebook"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-7">
                      <Img
                        className="h-[27px] w-7"
                        src="images/img_twitter.svg"
                        alt="twitter"
                      />
                    </div>
                    <div className="flex flex-col h-[27px] items-center justify-start w-[27px]">
                      <Img
                        className="h-[27px] w-[27px]"
                        src="images/img_linkedin.svg"
                        alt="linkedin"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900_7e border border-solid deep_purple_A400_7e_gray_50_7e_border10 h-[368px] md:h-[379px] mb-[145px] p-[29px] sm:px-5 relative rounded-[10px] w-[48%] md:w-full">
                <div className="absolute bg-gradient  border border-solid bottom-[24%] deep_purple_A400_4c_gray_50_00_border70 flex flex-col h-[155px] items-center justify-start left-[8%] p-[7px] rounded-[10px] w-[155px]">
                  <Img
                    className="h-[141px] md:h-auto object-cover w-[141px]"
                    src="images/img_9781118370711fg0101fmt.png"
                    alt="9781118370711fg"
                  />
                </div>
                <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[11%] w-[88%]">
                  <div className="flex flex-row gap-[17px] items-end justify-start w-[76%] md:w-full">
                    <Button
                      className="flex h-[43px] items-center justify-center rounded-[21px] w-[43px]"
                      color="white_A700"
                      size="md"
                      variant="fill"
                    >
                      <Img
                        className="h-6"
                        src="images/img_group84.svg"
                        alt="groupEighteen"
                      />
                    </Button>
                    <Text
                      className="my-1 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                      size="txtSatoshiBold25"
                    >
                      User Profile QR code
                    </Text>
                  </div>
                  <Line className="bg-white-A700_7e h-px mt-5 w-full" />
                  <div className="flex flex-col gap-[27px] items-start justify-start md:ml-[0] ml-[181px] mt-[25px] w-[55%] md:w-full">
                    <Text
                      className="leading-[24.00px] text-lg text-white-A700 w-full"
                      size="txtSatoshiBold18"
                    >
                      Anyone who scans this QR code will be navigated to your
                      profile.
                    </Text>
                    <div className="h-[46px] relative w-[90%]">
                      <Text
                        className="absolute h-full inset-[0] justify-center leading-[23.00px] m-auto text-base text-white-A700 w-[98%] sm:w-full"
                        size="txtSatoshiRegular16"
                      >
                        Embed QR code to your website
                      </Text>
                      <Img
                        className="absolute h-[5px] right-[0] top-[28%]"
                        src="images/img_vector10.svg"
                        alt="vectorTen_One"
                      />
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

export default DashboardshareprofilePage;
