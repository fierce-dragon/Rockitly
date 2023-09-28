import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import AccountsettingProfileRowrectangle40052 from "components/AccountsettingProfileRowrectangle40052";
import Header1 from "components/Header1";
import P2pTradingStack from "components/P2pTradingStack";

const AccountsettingpaymentmethodsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-satoshi h-[1755px] justify-end mx-auto relative w-full">
        <div className="flex flex-col mt-auto mx-auto md:px-5 w-full">
          <div className="h-[864px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
            <Img
              className="h-[864px] m-auto object-cover w-full"
              src="images/img_rectangle40003_25.png"
              alt="rectangle40003"
            />
            <Img
              className="absolute h-[864px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_rectangle40008_23.png"
              alt="rectangle40008"
            />
          </div>
          <Img
            className="h-[6376px] mt-[-14px] mx-auto object-cover w-full z-[1]"
            src="images/img_rectangle40011_24.png"
            alt="rectangle40011"
          />
          <div className="bg-gradient1  flex flex-col items-center justify-start mb-auto mt-[-NaNpx] mx-auto pl-1 py-1 w-full z-[1]">
            <div className="flex flex-col items-center justify-start mb-[6424px] mt-5 w-full">
              <Header1 className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
              <Line className="bg-white-A700_7e h-px mt-[17px] w-full" />
              <div className="flex md:flex-col flex-row gap-11 items-start justify-start mt-[13px] w-[88%] md:w-full">
                <div className="flex flex-col gap-[15px] items-start justify-start w-1/4 md:w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-[85%] md:w-full">
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
                        className="absolute bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border154 flex flex-row gap-5 h-max inset-[0] items-start justify-center m-auto rounded-[10px] w-full"
                        usermenuimage="images/img_menu_white_a700_27x27.svg"
                        userclockimage="images/img_clock.svg"
                        userlocalizationtext="Localization"
                        userclockoneimage="images/img_orderlight_indigo_a700_27x27.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-chillax items-center justify-start md:mt-0 mt-[17px] w-[73%] md:w-full">
                  <div className="flex flex-col gap-[17px] items-start justify-start w-full">
                    <Text
                      className="capitalize sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
                      size="txtChillaxRegular41"
                    >
                      Bank Accounts
                    </Text>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col font-satoshi h-[593px] items-start justify-start p-[27px] sm:px-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_group95.png')",
                      }}
                    >
                      <div className="flex flex-col gap-[21px] items-start justify-start mb-[19px] mt-[5px] w-[96%] md:w-full">
                        <div className="flex flex-col md:gap-10 gap-[62px] items-start justify-start w-full">
                          <Text
                            className="text-base text-white-A700"
                            size="txtSatoshiMedium16WhiteA700"
                          >
                            Add your bank account details below. You can share
                            these details with your trade partner via trade
                            chat, for bank transfer trades.
                          </Text>
                          <Text
                            className="sm:text-[19px] md:text-[21px] text-[23px] text-white-A700"
                            size="txtSatoshiBold23"
                          >
                            Add your first bank account
                          </Text>
                        </div>
                        <div className="md:h-[157px] h-[377px] sm:h-[465px] relative w-[48%] sm:w-full">
                          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[91%]">
                            <div className="flex flex-col md:gap-10 gap-[260px] justify-start w-full">
                              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                                <div className="bg-indigo-A700 border border-solid deep_purple_A400_4c_gray_50_00_border155 flex sm:flex-1 flex-col items-start justify-end p-[17px] rounded-[16px] w-[48%] sm:w-full">
                                  <div className="flex flex-row items-center justify-start ml-0.5 md:ml-[0] w-[86%] md:w-full">
                                    <Img
                                      className="h-[34px] w-[34px]"
                                      src="images/img_user_white_a700.svg"
                                      alt="user"
                                    />
                                    <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col h-3 items-center justify-start ml-3 my-[11px] rounded-[50%] w-3">
                                      <div className="bg-indigo-A700 border border-solid border-white-A700 h-2.5 rounded-[50%] w-2.5"></div>
                                    </div>
                                    <Text
                                      className="ml-[11px] text-base text-white-A700"
                                      size="txtSatoshiBold16"
                                    >
                                      Personal
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex sm:flex-1 flex-col items-center justify-start w-[48%] sm:w-full">
                                  <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border156 flex flex-col items-start justify-end p-[18px] rounded-[16px] w-full">
                                    <div className="flex flex-row items-center justify-start ml-0.5 md:ml-[0] mt-0.5 w-[84%] md:w-full">
                                      <Img
                                        className="h-[31px] w-[31px]"
                                        src="images/img_mail_indigo_a700_31x31.svg"
                                        alt="mail"
                                      />
                                      <div className="bg-gradient5  border border-solid deep_purple_A400_4c_gray_50_00_border157 h-3 ml-3 rounded-[50%] w-3"></div>
                                      <Text
                                        className="ml-[11px] text-base text-white-A700"
                                        size="txtSatoshiMedium16WhiteA700"
                                      >
                                        Business
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <Button
                                className="capitalize cursor-pointer font-medium min-w-[179px] md:ml-[0] ml-[7px] mr-[214px] text-center text-lg tracking-[1.80px]"
                                shape="round"
                                color="indigo_A700"
                                size="md"
                                variant="fill"
                              >
                                Next
                              </Button>
                            </div>
                          </div>
                          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[27%] w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="capitalize text-[19px] text-white-A700"
                                size="txtSatoshiRegular19"
                              >
                                Bank account country
                              </Text>
                              <Input
                                name="groupSixty"
                                placeholder="United States"
                                className="font-bold p-0 placeholder:text-white-A700 text-[16.87px] text-left w-full"
                                wrapClassName="flex w-full"
                                prefix={
                                  <Img
                                    className="mt-auto mb-px h-[22px] mr-2.5"
                                    src="images/img_group1000006492.svg"
                                    alt="Group 1000006492"
                                  />
                                }
                                suffix={
                                  <div className="ml-[35px] sm:w-full sm:mx-0 w-[3%] border-white-A700 border-2 border-solid my-[9px]">
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
                            </div>
                          </div>
                          <div className="absolute bottom-[19%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="capitalize text-[19px] text-white-A700"
                                size="txtSatoshiRegular19"
                              >
                                Currency
                              </Text>
                              <Input
                                name="price_One"
                                placeholder="US Dollar (USD)"
                                className="font-bold p-0 placeholder:text-white-A700 text-[16.87px] text-left w-full"
                                wrapClassName="flex w-full"
                                prefix={
                                  <Img
                                    className="mt-auto mb-0.5 h-[22px] mr-2.5"
                                    src="images/img_group1000006492.svg"
                                    alt="Group 1000006492"
                                  />
                                }
                                suffix={
                                  <div className="mt-[9px] mb-2.5 ml-[35px] sm:w-full sm:mx-0 w-[3%] border-white-A700 border-2 border-solid">
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] mb-[1130px] ml-auto mt-[-NaNpx] rotate-[179deg] w-[15%] z-[1]">
            <div className="h-[664px] ml-auto my-auto w-4/5">
              <Img
                className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_59.png"
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
        <div className="absolute bottom-[36%] flex flex-col font-chillax items-center justify-start md:px-5 right-[6%] w-[64%]">
          <div className="flex flex-col gap-[17px] items-start justify-start w-full">
            <Text
              className="capitalize sm:text-[31px] md:text-[37px] text-[41px] text-white-A700"
              size="txtChillaxRegular41"
            >
              Online Wallets
            </Text>
            <div className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border159 flex flex-col font-satoshi gap-[33px] items-start justify-start p-[26px] sm:px-5 rounded-[10px] w-full">
              <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-1.5 w-[23%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Text
                    className="text-base text-white-A700"
                    size="txtSatoshiMedium16WhiteA700"
                  >
                    Add your online wallets below.
                  </Text>
                </div>
              </div>
              <Button
                className="capitalize cursor-pointer font-medium mb-[31px] min-w-[179px] text-center text-lg tracking-[1.80px]"
                shape="round"
                color="indigo_A700"
                size="md"
                variant="fill"
              >
                Add New
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountsettingpaymentmethodsPage;
