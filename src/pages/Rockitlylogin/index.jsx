import React from "react";

import { Button, Img, Input, Text } from "components";
import Header from "components/Header";

const RockitlyloginPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-satoshi mx-auto relative w-full">
        <div className="h-[864px] md:h-[NaNpx] mb-auto mt-[-NaNpx] mx-auto md:px-5 w-full z-[1]">
          <Img
            className="h-[864px] m-auto object-cover w-full"
            src="images/img_rectangle40003_6.png"
            alt="rectangle40003"
          />
          <Img
            className="absolute h-[864px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_rectangle40008_6.png"
            alt="rectangle40008"
          />
        </div>
        <Img
          className="h-[5806px] mt-[-14px] mx-auto object-cover w-full z-[1]"
          src="images/img_rectangle40011_5.png"
          alt="rectangle40011"
        />
        <div className="bg-gradient1  h-[6656px] md:h-[NaNpx] mt-[-NaNpx] mx-auto md:px-5 py-5 w-full z-[1]">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[88%]">
            <div className="flex flex-col md:gap-10 gap-[170px] justify-start w-full">
              <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
              <div className="md:h-[432px] h-[441px] md:ml-[0] ml-[857px] relative w-[35%] sm:w-full">
                <div className="absolute flex flex-col font-satoshi h-max inset-[0] items-start justify-center m-auto sm:pr-5 pr-[39px] pt-[39px] w-full">
                  <div className="flex flex-col items-start justify-start mt-5 w-full">
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="capitalize text-[19px] text-white-A700"
                        size="txtSatoshiRegular19"
                      >
                        <span className="text-white-A700 font-satoshi text-left font-normal">
                          New Here?{" "}
                        </span>
                        <span className="text-indigo-A700 font-satoshi text-left font-normal">
                          Create an Account
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start mt-[35px] w-full">
                      <Text
                        className="capitalize text-[19px] text-white-A700"
                        size="txtSatoshiRegular19"
                      >
                        Email
                      </Text>
                      <Input
                        name="emailaddress"
                        placeholder="emailaddress@domainname.com"
                        className="!placeholder:text-white-A700_75 !text-white-A700_75 font-medium p-0 text-[19px] text-left w-full"
                        wrapClassName="mt-[3px] w-full"
                        type="email"
                        shape="round"
                        size="lg"
                        variant="outline"
                        color="deep_purple_A400_4c_gray_50_00"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[46px] w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row items-end justify-between w-full">
                          <Text
                            className="capitalize text-[19px] text-white-A700"
                            size="txtSatoshiRegular19"
                          >
                            Password
                          </Text>
                          <a
                            href="javascript:"
                            className="mt-1.5 text-indigo-A700 text-right text-sm"
                          >
                            <Text size="txtSatoshiMedium14IndigoA700">
                              Forgot Password?
                            </Text>
                          </a>
                        </div>
                        <Input
                          name="passwordvalue"
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
                    <div className="flex flex-row gap-[15px] items-center justify-start mt-10 w-[82%] md:w-full">
                      <Button
                        className="capitalize cursor-pointer font-medium min-w-[109px] text-center text-lg tracking-[1.80px]"
                        shape="round"
                        color="indigo_A700"
                        size="md"
                        variant="fill"
                      >
                        Sign In
                      </Button>
                      <Input
                        name="signingoogle"
                        placeholder="Sign in with Google"
                        className="font-bold leading-[normal] p-0 placeholder:text-blue-400 text-[15px] text-center w-full"
                        wrapClassName="flex rounded-md w-[66%]"
                        prefix={
                          <Img
                            className="h-5 mr-1.5 my-px"
                            src="images/img_googleicon_1.svg"
                            alt="google-icon 1"
                          />
                        }
                        color="blue_50"
                        size="sm"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute left-[0] sm:text-[31px] md:text-[37px] text-[41px] text-white-A700 top-[0] uppercase"
                  size="txtChillaxRegular41"
                >
                  sign in
                </Text>
              </div>
            </div>
          </div>
          <Img
            className="absolute h-[494px] left-[13%] top-[3%]"
            src="images/img_frame_lime_700.svg"
            alt="frame"
          />
          <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] h-[454px] left-[0] rotate-[-179deg] top-[0] w-[8%]">
            <div className="h-96 my-auto w-[82%]">
              <Img
                className="h-96 m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_384x92.png"
                alt="ellipse264"
              />
              <Img
                className="absolute h-[366px] inset-y-[0] left-[0] my-auto object-cover rounded-[41px]"
                src="images/img_rectangle26_366x83.png"
                alt="rectangleTwentySix"
              />
            </div>
            <Img
              className="absolute h-[454px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_noise_454x113.png"
              alt="noise"
            />
          </div>
          <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] flex md:h-96 h-[185px] justify-end left-[5%] rotate-[179deg] top-[12%] w-[18%]">
            <div className="flex md:h-96 h-[149px] justify-end mt-auto mx-auto w-[84%]">
              <div className="backdrop-opacity-[0.5] bg-gradient2  blur-[264.00px] h-96 mt-auto mx-auto rotate-[-135deg] rounded-[192px] w-full"></div>
              <Img
                className="absolute bottom-[0] h-[366px] inset-x-[0] mx-auto object-cover rounded-[111px]"
                src="images/img_rectangle26.png"
                alt="rectangleTwentySix_One"
              />
            </div>
            <Img
              className="absolute h-[185px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_noise_185x277.png"
              alt="noise_One"
            />
          </div>
          <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] h-[455px] right-[0] rotate-[179deg] top-[9%] w-[12%]">
            <div className="h-96 ml-auto my-auto w-[85%]">
              <Img
                className="h-96 m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_384x150.png"
                alt="ellipse264_Two"
              />
              <Img
                className="absolute h-[366px] inset-[0] justify-center m-auto object-cover rounded-[74px]"
                src="images/img_rectangle26.png"
                alt="rectangleTwentySix_Two"
              />
            </div>
            <Img
              className="absolute h-[455px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_noise_455x177.png"
              alt="noise_Two"
            />
          </div>
        </div>
        <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] mt-[-NaNpx] md:px-5 rotate-[179deg] w-[16%] z-[1]">
          <div className="h-[664px] my-auto w-[86%]">
            <Img
              className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
              src="images/img_ellipse264_28.png"
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
            src="images/img_noise_1.png"
            alt="noise_Three"
          />
        </div>
        <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] ml-auto mt-[-NaNpx] md:px-5 rotate-[179deg] w-[15%] z-[1]">
          <div className="h-[664px] ml-auto my-auto w-4/5">
            <Img
              className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
              src="images/img_ellipse264_29.png"
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
    </>
  );
};

export default RockitlyloginPage;
