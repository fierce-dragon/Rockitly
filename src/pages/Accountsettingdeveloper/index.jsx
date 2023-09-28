import React from "react";

import { Button, Img, Line, List, Radio, Text } from "components";
import AccountsettingProfileRowrectangle40052 from "components/AccountsettingProfileRowrectangle40052";
import Header1 from "components/Header1";
import P2pTradingStack from "components/P2pTradingStack";

const AccountsettingdeveloperPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-satoshi h-[1339px] justify-end mx-auto relative w-full">
        <div className="sm:h-[7224px] h-[7226px] md:h-[7490px] mt-auto mx-auto md:px-5 w-full">
          <div className="absolute flex flex-col inset-[0] justify-center m-auto w-full">
            <div className="h-[864px] mx-auto w-full">
              <Img
                className="h-[864px] m-auto object-cover w-full"
                src="images/img_rectangle40003_26.png"
                alt="rectangle40003"
              />
              <Img
                className="absolute h-[864px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_rectangle40008_24.png"
                alt="rectangle40008"
              />
            </div>
            <Img
              className="h-[6376px] mt-[-14px] mx-auto object-cover w-full z-[1]"
              src="images/img_rectangle40011_25.png"
              alt="rectangle40011"
            />
          </div>
          <div className="absolute bg-gradient1  flex flex-col h-full inset-[0] items-start justify-center m-auto pl-1 py-1 w-full">
            <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[94px] mt-5 w-full" />
            <Line className="bg-white-A700_7e h-px mt-[17px] w-full" />
            <div className="flex flex-row gap-2.5 items-start justify-start mb-[7089px] md:ml-[0] ml-[93px] mt-[13px] w-[18%] md:w-full">
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
                Payment Method
              </Text>
            </div>
          </div>
          <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] bottom-[16%] h-[789px] right-[0] rotate-[179deg] w-[15%]">
            <div className="h-[664px] ml-auto my-auto w-4/5">
              <Img
                className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_60.png"
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
                className="absolute bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border161 flex flex-row gap-5 h-max inset-[0] items-start justify-center m-auto rounded-[10px] w-full"
                usermenuimage="images/img_menu_white_a700_27x27.svg"
                userorderlightimage="images/img_ticket_indigo_a700.svg"
              />
            </div>
          </div>
          <div className="flex md:flex-1 flex-col font-chillax items-center justify-start w-[73%] md:w-full">
            <div className="flex flex-col gap-[17px] items-start justify-start w-full">
              <Text
                className="capitalize sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
                size="txtChillaxRegular41"
              >
                Bank Accounts
              </Text>
              <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border162 flex flex-col font-satoshi gap-[13px] items-start justify-center p-[26px] sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] w-[10%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                      size="txtSatoshiMedium26"
                    >
                      API Key
                    </Text>
                  </div>
                </div>
                <div className="md:h-80 sm:h-[426px] h-[455px] mb-0.5 relative w-[93%] md:w-full">
                  <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                    <div className="flex flex-col md:gap-10 gap-[116px] items-start justify-start w-full">
                      <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border163 h-[196px] rounded-[11px] w-full"></div>
                      <Button
                        className="capitalize cursor-pointer font-medium min-w-[300px] text-center text-lg tracking-[1.80px]"
                        shape="round"
                        color="indigo_A700"
                        size="md"
                        variant="fill"
                      >
                        Enable 2FA login
                      </Button>
                    </div>
                  </div>
                  <div className="absolute bottom-[0] flex flex-col gap-[51px] inset-x-[0] items-center justify-start mx-auto w-[98%]">
                    <div className="flex flex-col gap-[11px] items-start justify-start">
                      <Text
                        className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                        size="txtSatoshiBold23"
                      >
                        OAuth 2.0 Support
                      </Text>
                      <Text
                        className="leading-[31.00px] text-[15px] text-white-A700"
                        size="txtSatoshiBold15"
                      >
                        <span className="text-white-A700 font-satoshi text-left text-[17px] font-medium">
                          <>
                            Managing your API just got more flexible with our
                            newly added OAuth 2.0 support. Check it out for
                            yourself in the developer&#39;s portal
                            <br />
                          </>
                        </span>
                        <span className="text-white-A700 font-satoshi text-left text-xl font-bold">
                          <>
                            View more
                            <br />
                          </>
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col md:gap-10 gap-[146px] items-start justify-start">
                      <Text
                        className="leading-[31.00px] text-[17px] text-white-A700 w-full"
                        size="txtSatoshiMedium17WhiteA700"
                      >
                        To generate an API key, you must first set up two-factor
                        authentication for logging into your account. You can
                        use email or Google Authenticator for authenticating
                        your account.
                      </Text>
                      <Text
                        className="text-[17px] text-white-A700"
                        size="txtSatoshiMedium17WhiteA700"
                      >
                        <span className="text-white-A700 font-satoshi text-left font-medium">
                          Please read developer introduction{" "}
                        </span>
                        <a
                          href="javascript:"
                          className="text-white-A700 font-satoshi text-left font-medium underline"
                        >
                          here
                        </a>
                        <span className="text-white-A700 font-satoshi text-left font-medium">
                          {" "}
                          and find API documentation{" "}
                        </span>
                        <a
                          href="javascript:"
                          className="text-white-A700 font-satoshi text-left font-medium underline"
                        >
                          here
                        </a>
                        <span className="text-white-A700 font-satoshi text-left font-medium">
                          .
                        </span>
                      </Text>
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

export default AccountsettingdeveloperPage;
