import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import AccountsettingProfileRowrectangle40052 from "components/AccountsettingProfileRowrectangle40052";
import Header1 from "components/Header1";
import P2pTradingStack from "components/P2pTradingStack";

const AccountsettingsecurityPage = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex font-satoshi h-[3447px] justify-end mx-auto relative w-full">
        <div className="flex flex-col mt-auto mx-auto md:px-5 w-full">
          <div className="h-[864px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
            <Img
              className="h-[864px] m-auto object-cover w-full"
              src="images/img_rectangle40003_24.png"
              alt="rectangle40003"
            />
            <Img
              className="absolute h-[864px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_rectangle40008_22.png"
              alt="rectangle40008"
            />
          </div>
          <Img
            className="h-[6376px] mt-[-14px] mx-auto object-cover w-full z-[1]"
            src="images/img_rectangle40011_23.png"
            alt="rectangle40011"
          />
          <div className="bg-gradient1  flex flex-col items-start justify-center mb-auto mt-[-NaNpx] mx-auto pl-1 py-1 w-full z-[1]">
            <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[94px] mt-5 w-full" />
            <Line className="bg-white-A700_7e h-px mt-[17px] w-full" />
            <div className="flex flex-col gap-[15px] items-start justify-start mb-[6472px] md:ml-[0] ml-[93px] mt-[13px] w-[22%] md:w-full">
              <div className="flex flex-row gap-2.5 items-start justify-start w-[69%] md:w-full">
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
                  Security
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
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
                    className="absolute bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border133 flex flex-row gap-5 h-max inset-[0] items-start justify-center m-auto rounded-[10px] w-full"
                    usermenuimage="images/img_menu_white_a700_27x27.svg"
                    userclockimage="images/img_clock.svg"
                    userlocalizationtext="Localization"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] mb-[1130px] ml-auto mt-[-NaNpx] rotate-[179deg] w-[15%] z-[1]">
            <div className="h-[664px] ml-auto my-auto w-4/5">
              <Img
                className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_58.png"
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
        <div className="absolute flex flex-col font-chillax gap-3 items-start justify-start md:px-5 right-[6%] top-[4%] w-[64%]">
          <Text
            className="capitalize sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
            size="txtChillaxRegular41"
          >
            Two-factor authentication (2FA) settings
          </Text>
          <div className="md:h-[1188px] sm:h-[2626px] h-[2630px] relative w-full">
            <div className="sm:h-[2626px] h-[2630px] md:h-[759px] m-auto w-full">
              <Text
                className="absolute bottom-[8%] capitalize left-[0] sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
                size="txtChillaxRegular41"
              >
                Closing account
              </Text>
              <div className="absolute flex flex-col font-satoshi md:gap-10 gap-[1995px] h-full inset-[0] items-center justify-center m-auto w-full">
                <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border135 flex flex-col items-center justify-start p-[27px] sm:px-5 rounded-[10px] w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Input
                      name="group1000006719"
                      placeholder="Set answers to your security questions before setting up 2FA. Setup now"
                      className="font-medium p-0 placeholder:text-white-A700 text-base text-left w-full"
                      wrapClassName="w-full"
                      shape="round"
                      color="teal_800_ad"
                      size="sm"
                      variant="fill"
                    ></Input>
                    <Text
                      className="text-base text-white-A700"
                      size="txtSatoshiMedium16WhiteA700"
                    >
                      Set up your 2FA and make your account more secure.
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-12 w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border136 flex md:flex-col flex-row gap-[17px] items-center justify-start p-6 sm:px-5 rounded-[10px] w-full">
                          <Img
                            className="h-[31px]"
                            src="images/img_mail_indigo_a700_31x27.svg"
                            alt="mail"
                          />
                          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-[95%] md:w-full">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="capitalize text-[19px] text-white-A700"
                                size="txtSatoshiRegular19"
                              >
                                Google Authenticator or Authy
                              </Text>
                              <Text
                                className="text-[15px] text-white-A700"
                                size="txtSatoshiMedium15"
                              >
                                Random time-bound passcode generated by the app.
                              </Text>
                            </div>
                            <Button
                              className="capitalize cursor-pointer font-medium min-w-[179px] text-center text-lg tracking-[1.80px]"
                              shape="round"
                              color="indigo_A700"
                              size="md"
                              variant="fill"
                            >
                              Activate now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-3 mt-[30px] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border137 flex md:flex-col flex-row gap-[11px] items-center justify-start p-[19px] rounded-[10px] w-full">
                          <Img
                            className="h-[38px] w-[38px]"
                            src="images/img_mail_indigo_a700_38x38.svg"
                            alt="mail_One"
                          />
                          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between md:mt-0 my-[5px] w-[94%] md:w-full">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="capitalize text-[19px] text-white-A700"
                                size="txtSatoshiRegular19"
                              >
                                A unique time-bound code sent via email.
                              </Text>
                              <Text
                                className="text-[15px] text-white-A700"
                                size="txtSatoshiMedium15"
                              >
                                A unique time-bound code sent via email.
                              </Text>
                            </div>
                            <Button
                              className="capitalize cursor-pointer font-medium min-w-[179px] text-center text-lg tracking-[1.80px]"
                              shape="round"
                              color="indigo_A700"
                              size="md"
                              variant="fill"
                            >
                              Activate now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border138 flex flex-col items-center justify-end p-[21px] sm:px-5 rounded-[10px] w-full">
                  <div className="flex flex-col gap-[18px] items-start justify-start mt-1.5 w-[99%] md:w-full">
                    <Input
                      name="description"
                      placeholder="Closing your user account will delete all your information on Noones such as your past trades, transactions etc.
Once you submit the request to close your account, you’ll receive a confirmation link via email and a moderator will process your request."
                      className="font-medium leading-[31.00px] p-0 placeholder:text-white-A700 text-base text-left w-full"
                      wrapClassName="w-full"
                      type="email"
                      shape="round"
                      color="teal_800_ad"
                      size="xs"
                      variant="fill"
                    ></Input>
                    <Text
                      className="text-[19px] text-indigo-A700"
                      size="txtSatoshiBold19IndigoA700"
                    >
                      Close Account
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col gap-3 inset-x-[0] items-start justify-start mx-auto top-[18%] w-full">
              <Text
                className="capitalize sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
                size="txtChillaxRegular41"
              >
                Change password
              </Text>
              <div className="font-satoshi h-[596px] relative w-full">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  activeIndex={sliderState}
                  responsive={{
                    0: { items: 1 },
                    550: { items: 1 },
                    1050: { items: 1 },
                  }}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="m-auto w-full"
                  items={[...Array(3)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border139 flex flex-col items-center justify-start mx-2.5 p-[27px] sm:px-5 rounded-[10px]">
                        <div className="flex flex-col items-center justify-start mb-[7px] w-full">
                          <div className="flex flex-col gap-14 justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Input
                                name="group1000006719"
                                placeholder="If you forgot your current password, logout, go to the Login screen and click Forgot password."
                                className="font-medium p-0 placeholder:text-white-A700 text-base text-left w-full"
                                wrapClassName="w-full"
                                shape="round"
                                color="teal_800_ad"
                                size="sm"
                                variant="fill"
                              ></Input>
                            </div>
                            <div className="flex flex-col items-start justify-start ml-4 md:ml-[0] w-[70%] md:w-full">
                              <div className="flex flex-col items-center justify-start w-[66%] md:w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="capitalize text-[19px] text-white-A700"
                                    size="txtSatoshiRegular19"
                                  >
                                    Current Password
                                  </Text>
                                  <Input
                                    name="group127"
                                    placeholder="****************"
                                    className="!placeholder:text-white-A700_75 !text-white-A700_75 font-medium p-0 text-[19px] text-left w-full"
                                    wrapClassName="mt-[3px] w-full"
                                    shape="round"
                                    size="lg"
                                    variant="outline"
                                    color="deep_purple_A400_4c_gray_50_00"
                                  ></Input>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[30px] w-[66%] md:w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <div className="flex flex-row items-end justify-between w-[74%] md:w-full">
                                      <Text
                                        className="capitalize text-[19px] text-white-A700"
                                        size="txtSatoshiRegular19"
                                      >
                                        New Password
                                      </Text>
                                      <Text
                                        className="capitalize italic mb-0.5 mt-1.5 text-white-A700_87 text-xs"
                                        size="txtSatoshiItalic12"
                                      >
                                        password strength
                                      </Text>
                                    </div>
                                    <Input
                                      name="group128"
                                      placeholder="****************"
                                      className="!placeholder:text-white-A700_75 !text-white-A700_75 font-medium p-0 text-[19px] text-left w-full"
                                      wrapClassName="mt-[3px] w-full"
                                      shape="round"
                                      size="lg"
                                      variant="outline"
                                      color="deep_purple_A400_4c_gray_50_00"
                                    ></Input>
                                  </div>
                                </div>
                              </div>
                              <div className="md:h-[138px] h-[89px] mt-[49px] relative w-[66%] sm:w-full">
                                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <div className="flex flex-row gap-[74px] items-end justify-start w-[74%] md:w-full">
                                      <Text
                                        className="capitalize text-[19px] text-white-A700"
                                        size="txtSatoshiRegular19"
                                      >
                                        Confirm Password
                                      </Text>
                                      <Text
                                        className="capitalize italic mb-0.5 mt-1.5 text-white-A700_87 text-xs"
                                        size="txtSatoshiItalic12"
                                      >
                                        password strength
                                      </Text>
                                    </div>
                                    <Input
                                      name="group129"
                                      placeholder="****************"
                                      className="!placeholder:text-white-A700_75 !text-white-A700_75 font-medium p-0 text-[19px] text-left w-full"
                                      wrapClassName="mt-[3px] w-full"
                                      shape="round"
                                      size="lg"
                                      variant="outline"
                                      color="deep_purple_A400_4c_gray_50_00"
                                    ></Input>
                                  </div>
                                </div>
                              </div>
                              <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-start mt-[33px] w-full">
                                <Input
                                  name="button"
                                  placeholder="Change Password"
                                  className="capitalize font-medium p-0 placeholder:text-white-A700 text-center text-lg tracking-[1.80px] w-full"
                                  wrapClassName="sm:flex-1 rounded-[10px] w-[32%] sm:w-full"
                                  color="indigo_A700"
                                  size="sm"
                                  variant="fill"
                                ></Input>
                                <Text
                                  className="text-[15px] text-white-A700"
                                  size="txtSatoshiRegular15"
                                >
                                  Changing your password will log you out of all
                                  your active sessions.
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                  renderDotsItem={({ isActive }) => {
                    if (isActive) {
                      return (
                        <div className="inline-block cursor-pointer h-[3px] bg-indigo-A700_7e w-[34px] relative rounded-[1px]" />
                      );
                    }
                    return (
                      <div
                        className="inline-block cursor-pointer h-[3px] bg-indigo-A700 w-[34px] relative rounded-[1px]"
                        role="button"
                        tabIndex={0}
                      />
                    );
                  }}
                />
                <PagerIndicator
                  className="absolute flex h-[3px] left-[37%] top-[44%] w-[108px]"
                  count={3}
                  activeCss="inline-block cursor-pointer h-[3px] bg-indigo-A700_7e w-[34px] relative rounded-[1px]"
                  activeIndex={sliderState}
                  inactiveCss="inline-block cursor-pointer h-[3px] bg-indigo-A700 w-[34px] relative rounded-[1px]"
                  sliderRef={sliderRef}
                  selectedWrapperCss="inline-block mx-[1.50px]"
                  unselectedWrapperCss="inline-block mx-[1.50px]"
                />
              </div>
            </div>
            <div className="absolute bottom-[35%] flex flex-col gap-[17px] inset-x-[0] items-start justify-start mx-auto w-full">
              <Text
                className="capitalize sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
                size="txtChillaxRegular41"
              >
                Active sessions
              </Text>
              <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border140 flex flex-col font-satoshi items-start justify-start p-[27px] sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-col gap-[39px] items-start justify-start ml-4 md:ml-[0] w-[91%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[91%] md:w-full">
                    <Text
                      className="md:mt-0 mt-[3px] text-[15px] text-white-A700"
                      size="txtSatoshiBold15"
                    >
                      SIGNED IN
                    </Text>
                    <Text
                      className="mb-[3px] md:ml-[0] ml-[67px] text-[15px] text-white-A700"
                      size="txtSatoshiBold15"
                    >
                      BROWSER
                    </Text>
                    <Text
                      className="mb-[3px] md:ml-[0] ml-[154px] text-[15px] text-white-A700"
                      size="txtSatoshiBold15"
                    >
                      IP ADDRESS
                    </Text>
                    <Text
                      className="mb-[3px] md:ml-[0] ml-[100px] text-[15px] text-white-A700"
                      size="txtSatoshiBold15"
                    >
                      LOCATION
                    </Text>
                    <Text
                      className="mb-[3px] md:ml-[0] ml-[83px] text-[15px] text-white-A700"
                      size="txtSatoshiBold15"
                    >
                      CURRENT
                    </Text>
                  </div>
                  <List
                    className="flex flex-col gap-9 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="md:mt-0 mt-0.5 text-[15px] text-white-A700"
                        size="txtSatoshiMedium15"
                      >
                        1 week ago
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[68px] md:mt-0 mt-0.5 text-[15px] text-white-A700"
                        size="txtSatoshiMedium15"
                      >
                        Chrome (OS X 10.15.7)
                      </Text>
                      <Text
                        className="sm:flex-1 leading-[23.00px] md:ml-[0] ml-[79px] text-[15px] text-white-A700 w-[18%] sm:w-full"
                        size="txtSatoshiMedium15"
                      >
                        2404:3100:1043:cce3:7837:cccc:4a93:2428
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[37px] text-[15px] text-white-A700"
                        size="txtSatoshiMedium15"
                      >
                        Unknown
                      </Text>
                      <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border141 flex flex-col h-[17px] items-start justify-start md:ml-[0] ml-[94px] md:mt-0 my-[5px] p-[3px] rounded-[3px] w-[17px]">
                        <Img
                          className="h-[7px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      </div>
                      <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border142 flex flex-col h-[17px] items-center justify-start md:ml-[0] ml-[114px] md:mt-0 my-[5px] p-0.5 rounded-[3px] w-[17px]">
                        <Img
                          className="h-3 w-3"
                          src="images/img_search_gray_900_05.svg"
                          alt="search"
                        />
                      </div>
                    </div>
                    <Line className="self-center h-px bg-white-A700_6c w-full" />
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="md:mt-0 mt-0.5 text-[15px] text-white-A700"
                        size="txtSatoshiMedium15"
                      >
                        1 week ago
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[68px] md:mt-0 mt-0.5 text-[15px] text-white-A700"
                        size="txtSatoshiMedium15"
                      >
                        Chrome (OS X 10.15.7)
                      </Text>
                      <Text
                        className="sm:flex-1 leading-[23.00px] md:ml-[0] ml-[79px] text-[15px] text-white-A700 w-[18%] sm:w-full"
                        size="txtSatoshiMedium15"
                      >
                        2404:3100:1043:cce3:7837:cccc:4a93:2428
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[37px] text-[15px] text-white-A700"
                        size="txtSatoshiMedium15"
                      >
                        Unknown
                      </Text>
                      <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border143 flex flex-col h-[17px] items-start justify-start md:ml-[0] ml-[94px] md:mt-0 my-[5px] p-[3px] rounded-[3px] w-[17px]">
                        <Img
                          className="h-[7px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      </div>
                      <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border144 flex flex-col h-[17px] items-center justify-start md:ml-[0] ml-[114px] md:mt-0 my-[5px] p-0.5 rounded-[3px] w-[17px]">
                        <Img
                          className="h-3 w-3"
                          src="images/img_search_gray_900_05.svg"
                          alt="search"
                        />
                      </div>
                    </div>
                    <Line className="self-center h-px bg-white-A700_6c w-full" />
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="flex flex-col md:gap-10 gap-[89px] items-start justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <Text
                            className="md:mt-0 mt-0.5 text-[15px] text-white-A700"
                            size="txtSatoshiMedium15"
                          >
                            1 week ago
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[68px] md:mt-0 mt-0.5 text-[15px] text-white-A700"
                            size="txtSatoshiMedium15"
                          >
                            Chrome (OS X 10.15.7)
                          </Text>
                          <Text
                            className="sm:flex-1 leading-[23.00px] md:ml-[0] ml-[79px] text-[15px] text-white-A700 w-[18%] sm:w-full"
                            size="txtSatoshiMedium15"
                          >
                            2404:3100:1043:cce3:7837:cccc:4a93:2428
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[37px] text-[15px] text-white-A700"
                            size="txtSatoshiMedium15"
                          >
                            Unknown
                          </Text>
                          <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border145 flex flex-col h-[17px] items-start justify-start md:ml-[0] ml-[94px] md:mt-0 my-[5px] p-[3px] rounded-[3px] w-[17px]">
                            <Img
                              className="h-[7px]"
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          </div>
                          <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border146 flex flex-col h-[17px] items-center justify-start md:ml-[0] ml-[114px] md:mt-0 my-[5px] p-0.5 rounded-[3px] w-[17px]">
                            <Img
                              className="h-3 w-3"
                              src="images/img_search_gray_900_05.svg"
                              alt="search"
                            />
                          </div>
                        </div>
                        <Text
                          className="text-[15px] text-indigo-A700"
                          size="txtSatoshiMedium15IndigoA700"
                        >
                          End all sessions except current one
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[13%] flex flex-col gap-[17px] inset-x-[0] items-start justify-start mx-auto w-full">
              <Text
                className="capitalize sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
                size="txtChillaxRegular41"
              >
                Active sessions
              </Text>
              <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border147 flex flex-col font-satoshi items-start justify-start p-[27px] sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-col gap-[39px] items-start justify-start ml-4 md:ml-[0] w-[91%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[91%] md:w-full">
                    <Text
                      className="md:mt-0 mt-[3px] text-[15px] text-white-A700"
                      size="txtSatoshiBold15"
                    >
                      SIGNED IN
                    </Text>
                    <Text
                      className="mb-[3px] md:ml-[0] ml-[67px] text-[15px] text-white-A700"
                      size="txtSatoshiBold15"
                    >
                      BROWSER
                    </Text>
                    <Text
                      className="mb-[3px] md:ml-[0] ml-[154px] text-[15px] text-white-A700"
                      size="txtSatoshiBold15"
                    >
                      IP ADDRESS
                    </Text>
                    <Text
                      className="mb-[3px] md:ml-[0] ml-[100px] text-[15px] text-white-A700"
                      size="txtSatoshiBold15"
                    >
                      LOCATION
                    </Text>
                    <Text
                      className="mb-[3px] md:ml-[0] ml-[83px] text-[15px] text-white-A700"
                      size="txtSatoshiBold15"
                    >
                      CURRENT
                    </Text>
                  </div>
                  <List
                    className="flex flex-col gap-9 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="md:mt-0 mt-0.5 text-[15px] text-white-A700"
                        size="txtSatoshiMedium15"
                      >
                        1 week ago
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[68px] md:mt-0 mt-0.5 text-[15px] text-white-A700"
                        size="txtSatoshiMedium15"
                      >
                        Chrome (OS X 10.15.7)
                      </Text>
                      <Text
                        className="sm:flex-1 leading-[23.00px] md:ml-[0] ml-[79px] text-[15px] text-white-A700 w-[18%] sm:w-full"
                        size="txtSatoshiMedium15"
                      >
                        2404:3100:1043:cce3:7837:cccc:4a93:2428
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[37px] text-[15px] text-white-A700"
                        size="txtSatoshiMedium15"
                      >
                        Unknown
                      </Text>
                      <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border148 flex flex-col h-[17px] items-start justify-start md:ml-[0] ml-[94px] md:mt-0 my-[5px] p-[3px] rounded-[3px] w-[17px]">
                        <Img
                          className="h-[7px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      </div>
                      <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border149 flex flex-col h-[17px] items-center justify-start md:ml-[0] ml-[114px] md:mt-0 my-[5px] p-0.5 rounded-[3px] w-[17px]">
                        <Img
                          className="h-3 w-3"
                          src="images/img_search_gray_900_05.svg"
                          alt="search"
                        />
                      </div>
                    </div>
                    <Line className="self-center h-px bg-white-A700_6c w-full" />
                    <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Text
                        className="md:mt-0 mt-0.5 text-[15px] text-white-A700"
                        size="txtSatoshiMedium15"
                      >
                        1 week ago
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[68px] md:mt-0 mt-0.5 text-[15px] text-white-A700"
                        size="txtSatoshiMedium15"
                      >
                        Chrome (OS X 10.15.7)
                      </Text>
                      <Text
                        className="sm:flex-1 leading-[23.00px] md:ml-[0] ml-[79px] text-[15px] text-white-A700 w-[18%] sm:w-full"
                        size="txtSatoshiMedium15"
                      >
                        2404:3100:1043:cce3:7837:cccc:4a93:2428
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[37px] text-[15px] text-white-A700"
                        size="txtSatoshiMedium15"
                      >
                        Unknown
                      </Text>
                      <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border150 flex flex-col h-[17px] items-start justify-start md:ml-[0] ml-[94px] md:mt-0 my-[5px] p-[3px] rounded-[3px] w-[17px]">
                        <Img
                          className="h-[7px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                      </div>
                      <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border151 flex flex-col h-[17px] items-center justify-start md:ml-[0] ml-[114px] md:mt-0 my-[5px] p-0.5 rounded-[3px] w-[17px]">
                        <Img
                          className="h-3 w-3"
                          src="images/img_search_gray_900_05.svg"
                          alt="search"
                        />
                      </div>
                    </div>
                    <Line className="self-center h-px bg-white-A700_6c w-full" />
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <div className="flex flex-col md:gap-10 gap-[89px] items-start justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <Text
                            className="md:mt-0 mt-0.5 text-[15px] text-white-A700"
                            size="txtSatoshiMedium15"
                          >
                            1 week ago
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[68px] md:mt-0 mt-0.5 text-[15px] text-white-A700"
                            size="txtSatoshiMedium15"
                          >
                            Chrome (OS X 10.15.7)
                          </Text>
                          <Text
                            className="sm:flex-1 leading-[23.00px] md:ml-[0] ml-[79px] text-[15px] text-white-A700 w-[18%] sm:w-full"
                            size="txtSatoshiMedium15"
                          >
                            2404:3100:1043:cce3:7837:cccc:4a93:2428
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[37px] text-[15px] text-white-A700"
                            size="txtSatoshiMedium15"
                          >
                            Unknown
                          </Text>
                          <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border152 flex flex-col h-[17px] items-start justify-start md:ml-[0] ml-[94px] md:mt-0 my-[5px] p-[3px] rounded-[3px] w-[17px]">
                            <Img
                              className="h-[7px]"
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          </div>
                          <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border153 flex flex-col h-[17px] items-center justify-start md:ml-[0] ml-[114px] md:mt-0 my-[5px] p-0.5 rounded-[3px] w-[17px]">
                            <Img
                              className="h-3 w-3"
                              src="images/img_search_gray_900_05.svg"
                              alt="search"
                            />
                          </div>
                        </div>
                        <Text
                          className="text-[15px] text-indigo-A700"
                          size="txtSatoshiMedium15IndigoA700"
                        >
                          End all sessions except current one
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountsettingsecurityPage;
