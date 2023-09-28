import React from "react";

import { Button, Img, Input, Line, List, Radio, Text } from "components";
import AccountsettingProfileRowrectangle40052 from "components/AccountsettingProfileRowrectangle40052";
import Header1 from "components/Header1";
import P2pTradingStack from "components/P2pTradingStack";

const AccountsettingquestionsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-satoshi h-[1339px] justify-end mx-auto relative w-full">
        <div className="sm:h-[7224px] h-[7226px] md:h-[7490px] mt-auto mx-auto md:px-5 w-full">
          <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
            <div className="h-[864px] mx-auto w-full">
              <Img
                className="h-[864px] m-auto object-cover w-full"
                src="images/img_rectangle40003_28.png"
                alt="rectangle40003"
              />
              <Img
                className="absolute h-[864px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_rectangle40008_26.png"
                alt="rectangle40008"
              />
            </div>
            <Img
              className="h-[6376px] mt-[-14px] mx-auto object-cover w-full z-[1]"
              src="images/img_rectangle40011_27.png"
              alt="rectangle40011"
            />
          </div>
          <div className="absolute bg-gradient1  flex flex-col h-full inset-[0] items-start justify-center m-auto pl-1 py-1 w-full">
            <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[94px] mt-5 w-full" />
            <Line className="bg-white-A700_7e h-px mt-[17px] w-full" />
            <div className="flex flex-row gap-2.5 items-start justify-start mb-[7089px] md:ml-[0] ml-[93px] mt-[13px] w-[19%] md:w-full">
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
                Security Questions
              </Text>
            </div>
          </div>
          <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] bottom-[16%] h-[789px] right-[0] rotate-[179deg] w-[15%]">
            <div className="h-[664px] ml-auto my-auto w-4/5">
              <Img
                className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_62.png"
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
          <P2pTradingStack className="absolute md:h-[1177px] h-[872px] inset-x-[0] mx-auto top-[9%] w-full" />
        </div>
        <div className="absolute flex md:flex-col flex-row gap-11 inset-x-[0] items-center justify-start max-w-[1401px] mx-auto md:px-5 top-[10%] w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-1/4 md:w-full">
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
                className="absolute bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border167 flex flex-row gap-5 h-max inset-[0] items-start justify-center m-auto rounded-[10px] w-full"
                usermenuimage="images/img_menu_white_a700_27x27.svg"
              />
            </div>
          </div>
          <div className="flex md:flex-1 flex-col font-chillax items-center justify-start w-[73%] md:w-full">
            <div className="flex flex-col gap-3 items-start justify-start w-full">
              <Text
                className="capitalize sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
                size="txtChillaxRegular41"
              >
                Set Security Questions
              </Text>
              <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border168 flex flex-col font-satoshi items-start justify-start p-[21px] sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[5px] mt-2">
                  <Text
                    className="text-[17px] text-white-A700"
                    size="txtSatoshiMedium17WhiteA700"
                  >
                    Remember these answers as they’ll help us confirm your
                    identity.
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[5px] mt-[41px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-[67%] md:w-full">
                      <Text
                        className="text-[17px] text-white-A700"
                        size="txtSatoshiBold17"
                      >
                        Question 1
                      </Text>
                      <Text
                        className="text-[17px] text-white-A700"
                        size="txtSatoshiBold17"
                      >
                        Answer
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[35px] items-center justify-between mt-0.5 w-full">
                      <Input
                        name="group1000006738"
                        placeholder="What was the first name of your best friend in high school?"
                        className="font-medium p-0 placeholder:text-white-A700 text-[17px] text-left w-full"
                        wrapClassName="flex sm:flex-1 sm:w-full"
                        type="text"
                        suffix={
                          <div className="mt-1.5 mb-3 ml-[35px] border-white-A700 border-2 border-solid">
                            <Img
                              className="my-auto"
                              src="images/img_vector10.svg"
                              alt="Vector 10"
                            />
                          </div>
                        }
                        shape="round"
                        size="lg"
                        variant="outline"
                        color="deep_purple_A400_4c_gray_50_00"
                      ></Input>
                      <Input
                        name="rectangle40046_One"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex sm:flex-1 h-[60px] sm:w-full"
                        shape="round"
                        variant="outline"
                        color="deep_purple_A400_4c_gray_50_00"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[5px] mt-9 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-[67%] md:w-full">
                      <Text
                        className="text-[17px] text-white-A700"
                        size="txtSatoshiBold17"
                      >
                        Question 2
                      </Text>
                      <Text
                        className="text-[17px] text-white-A700"
                        size="txtSatoshiBold17"
                      >
                        Answer
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[35px] items-center justify-between mt-0.5 w-full">
                      <Input
                        name="group1000006738_One"
                        placeholder="What was the first name of your best friend in high school?"
                        className="font-medium p-0 placeholder:text-white-A700 text-[17px] text-left w-full"
                        wrapClassName="flex sm:flex-1 sm:w-full"
                        type="text"
                        suffix={
                          <div className="mt-1.5 mb-3 ml-[35px] border-white-A700 border-2 border-solid">
                            <Img
                              className="my-auto"
                              src="images/img_vector10.svg"
                              alt="Vector 10"
                            />
                          </div>
                        }
                        shape="round"
                        size="lg"
                        variant="outline"
                        color="deep_purple_A400_4c_gray_50_00"
                      ></Input>
                      <Input
                        name="rectangle40046_Two"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex sm:flex-1 h-[60px] sm:w-full"
                        shape="round"
                        variant="outline"
                        color="deep_purple_A400_4c_gray_50_00"
                      ></Input>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[5px] mt-9 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-[67%] md:w-full">
                      <Text
                        className="text-[17px] text-white-A700"
                        size="txtSatoshiBold17"
                      >
                        Question 3
                      </Text>
                      <Text
                        className="text-[17px] text-white-A700"
                        size="txtSatoshiBold17"
                      >
                        Answer
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[35px] items-center justify-between mt-0.5 w-full">
                      <Input
                        name="group1000006738_Two"
                        placeholder="What was the first name of your best friend in high school?"
                        className="font-medium p-0 placeholder:text-white-A700 text-[17px] text-left w-full"
                        wrapClassName="flex sm:flex-1 sm:w-full"
                        type="text"
                        suffix={
                          <div className="mt-1.5 mb-3 ml-[35px] border-white-A700 border-2 border-solid">
                            <Img
                              className="my-auto"
                              src="images/img_vector10.svg"
                              alt="Vector 10"
                            />
                          </div>
                        }
                        shape="round"
                        size="lg"
                        variant="outline"
                        color="deep_purple_A400_4c_gray_50_00"
                      ></Input>
                      <Input
                        name="rectangle40046_Three"
                        placeholder=""
                        className="p-0 w-full"
                        wrapClassName="flex sm:flex-1 h-[60px] sm:w-full"
                        shape="round"
                        variant="outline"
                        color="deep_purple_A400_4c_gray_50_00"
                      ></Input>
                    </div>
                  </div>
                </div>
                <Button
                  className="capitalize cursor-pointer font-medium mb-[33px] min-w-[228px] ml-1.5 md:ml-[0] mt-9 text-center text-lg tracking-[1.80px]"
                  shape="round"
                  color="indigo_A700"
                  size="md"
                  variant="fill"
                >
                  Save Answer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountsettingquestionsPage;
