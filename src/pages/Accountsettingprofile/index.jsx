import React from "react";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";
import AccountsettingProfileRowrectangle40052 from "components/AccountsettingProfileRowrectangle40052";
import Header1 from "components/Header1";
import P2pTradingStack from "components/P2pTradingStack";

const AccountsettingprofilePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-satoshi h-[1602px] justify-end mx-auto relative w-full">
        <div className="flex flex-col mt-auto mx-auto md:px-5 w-full">
          <div className="h-[864px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
            <Img
              className="h-[864px] m-auto object-cover w-full"
              src="images/img_rectangle40003_21.png"
              alt="rectangle40003"
            />
            <Img
              className="absolute h-[864px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_rectangle40008_19.png"
              alt="rectangle40008"
            />
          </div>
          <Img
            className="h-[6376px] mt-[-14px] mx-auto object-cover w-full z-[1]"
            src="images/img_rectangle40011_20.png"
            alt="rectangle40011"
          />
          <div className="bg-gradient1  flex flex-col items-center justify-start mb-auto mt-[-NaNpx] mx-auto pl-1 py-1 w-full z-[1]">
            <div className="flex flex-col items-start justify-start mb-[6472px] mt-5 w-full">
              <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[94px] w-full" />
              <Line className="bg-white-A700_7e h-px mt-[17px] w-full" />
              <div className="flex flex-col gap-[5px] items-start justify-start md:ml-[0] ml-[93px] mt-[13px] w-[46%] md:w-full">
                <div className="flex flex-row gap-2.5 items-start justify-start w-[31%] md:w-full">
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
                    Profile
                  </Text>
                </div>
                <div className="flex md:flex-col flex-row md:gap-[47px] items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-2.5 w-[47%] md:w-full">
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
                        className="absolute bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border71 flex flex-row gap-5 h-max inset-[0] items-start justify-center m-auto rounded-[10px] w-full"
                        userclockimage="images/img_clock.svg"
                        userlocalizationtext="Localization"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="capitalize sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
                      size="txtChillaxRegular41"
                    >
                      Account settings
                    </Text>
                    <Text
                      className="text-[15px] text-white-A700_7e"
                      size="txtSatoshiMedium15WhiteA7007e"
                    >
                      (max.chimp19@gmail.com)
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] mb-[1130px] ml-auto mt-[-NaNpx] rotate-[179deg] w-[15%] z-[1]">
            <div className="h-[664px] ml-auto my-auto w-4/5">
              <Img
                className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_55.png"
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
        <div className="absolute flex flex-col items-center justify-start md:px-5 right-[6%] top-[15%] w-[64%]">
          <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border73 flex flex-col items-center justify-start p-[18px] rounded-[10px] w-full">
            <div className="flex flex-col items-start justify-start mb-1 w-[99%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-11 items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[48%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="capitalize text-[19px] text-white-A700"
                        size="txtSatoshiRegular19"
                      >
                        Phone
                      </Text>
                      <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border74 flex sm:flex-col flex-row sm:gap-5 items-start justify-end mt-[3px] p-1.5 rounded-[16px] w-full">
                        <Img
                          className="h-[22px] sm:mt-0 mt-4 w-[22px]"
                          src="images/img_group1000006492.svg"
                          alt="group1000006492"
                        />
                        <Text
                          className="ml-1 sm:ml-[0] sm:mt-0 mt-4 text-[16.87px] text-white-A700"
                          size="txtSatoshiBold1687"
                        >
                          USA
                        </Text>
                        <Img
                          className="h-1 sm:ml-[0] ml-[15px] sm:mt-0 mt-[25px]"
                          src="images/img_vector10.svg"
                          alt="vectorTen_One"
                        />
                        <Text
                          className="sm:ml-[0] ml-[17px] sm:mt-0 mt-3.5 text-[19px] text-white-A700_75"
                          size="txtSatoshiMedium19WhiteA70075"
                        >
                          1 (205) 201-0933
                        </Text>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[122px] ml-16 sm:ml-[0]"
                          leftIcon={
                            <Img
                              className="h-6 mr-0.5 my-px"
                              src="images/img_checkmark_white_a700_24x24.svg"
                              alt="checkmark"
                            />
                          }
                          shape="round"
                          color="blue_gray_900_05"
                          size="md"
                          variant="fill"
                        >
                          <div className="capitalize font-medium text-center text-lg tracking-[1.80px]">
                            Confirm
                          </div>
                        </Button>
                      </div>
                      <Text
                        className="leading-[23.00px] mt-2.5 text-[15px] text-white-A700"
                        size="txtSatoshiMedium15"
                      >
                        <>
                          Please set your phone number with country code.
                          <br />
                          Must be a mobile number!
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="capitalize text-[19px] text-white-A700"
                        size="txtSatoshiRegular19"
                      >
                        Confirmation code
                      </Text>
                      <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border75 flex flex-row items-center justify-between mt-[3px] p-1.5 rounded-[16px] w-full">
                        <Text
                          className="ml-[9px] text-[19px] text-white-A700_75"
                          size="txtSatoshiMedium19WhiteA70075"
                        >
                          Enter confirmation code
                        </Text>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[122px]"
                          leftIcon={
                            <Img
                              className="h-6 mr-[7px] my-px"
                              src="images/img_checkmark_white_a700_24x24.svg"
                              alt="checkmark"
                            />
                          }
                          shape="round"
                          color="blue_gray_900_05"
                          size="md"
                          variant="fill"
                        >
                          <div className="capitalize font-medium text-center text-lg tracking-[1.80px]">
                            Submit
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-3 items-center justify-start w-[48%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="capitalize text-[19px] text-white-A700"
                        size="txtSatoshiRegular19"
                      >
                        Username
                      </Text>
                      <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border76 flex sm:flex-col flex-row sm:gap-5 items-center justify-end mt-[3px] p-1.5 rounded-[16px] w-full">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_ellipse3.png"
                          alt="ellipseThree_One"
                        />
                        <Text
                          className="ml-2.5 sm:ml-[0] text-[19px] text-white-A700_75"
                          size="txtSatoshiMedium19WhiteA70075"
                        >
                          CozyLovebird424
                        </Text>
                        <div className="bg-blue_gray-900_05 flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[130px] p-[11px] rounded-[10px] w-[24%] sm:w-full">
                          <CheckBox
                            className="capitalize font-medium text-center text-lg text-white-A700 tracking-[1.80px]"
                            inputClassName="mr-[5px]"
                            name="save"
                            id="save"
                            label="Save"
                            shape="square"
                          ></CheckBox>
                        </div>
                      </div>
                      <Text
                        className="mt-3 text-[15px] text-white-A700"
                        size="txtSatoshiMedium15"
                      >
                        You can change your username only once
                      </Text>
                      <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border77 flex sm:flex-col flex-row sm:gap-5 items-center justify-end mt-[13px] p-1.5 rounded-[16px] w-full">
                        <Img
                          className="h-10 md:h-auto rounded-[50%] w-10"
                          src="images/img_ellipse3.png"
                          alt="ellipseFour"
                        />
                        <Text
                          className="ml-2.5 sm:ml-[0] text-[19px] text-white-A700_75"
                          size="txtSatoshiMedium19WhiteA70075"
                        >
                          Change Image
                        </Text>
                        <Button
                          className="cursor-pointer flex items-center justify-center min-w-[186px] sm:ml-[0] ml-[75px]"
                          leftIcon={
                            <Img
                              className="h-6 mb-px mr-2"
                              src="images/img_download_white_a700.svg"
                              alt="download"
                            />
                          }
                          shape="round"
                          color="blue_gray_900_05"
                          size="md"
                          variant="fill"
                        >
                          <div className="capitalize font-medium text-center text-lg tracking-[1.80px]">
                            Upload Image
                          </div>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="leading-[23.00px] text-[15px] text-white-A700 w-full"
                    size="txtSatoshiMedium15"
                  >
                    Upload a nice picture, preferably of yourself. If you upload
                    any explicit or otherwise inappropriate image, we’ll remove
                    it immediately.
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[54px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    name="description_Two"
                    placeholder="It is mandatory to set answers to your security questions in case you have to reset or change the phone number. Set answers"
                    className="font-medium p-0 placeholder:text-white-A700 text-base text-left w-full"
                    wrapClassName="w-full"
                    type="number"
                    shape="round"
                    color="teal_800_ad"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="border border-solid deep_purple_A400_4c_gray_50_00_border78 flex flex-col gap-5 justify-start mt-[18px] pb-[189px] rounded-[16px] w-full">
                <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border79 flex flex-col items-start justify-start p-[25px] sm:px-5 rounded-tl-[16px] rounded-tr-[16px] w-full">
                  <Text
                    className="capitalize my-[3px] text-[17px] text-white-A700"
                    size="txtSatoshiBold17"
                  >
                    Bio
                  </Text>
                </div>
                <Text
                  className="capitalize md:ml-[0] ml-[25px] text-[17px] text-white-A700_87"
                  size="txtSatoshiRegular17WhiteA70087"
                >
                  Your bio appears on your public profile
                </Text>
              </div>
              <Text
                className="capitalize mt-3 text-[13px] text-white-A700_87"
                size="txtSatoshiRegular13"
              >
                Maximum 3 lines and 180 characters
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountsettingprofilePage;
