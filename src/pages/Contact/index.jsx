import React from "react";

import { Img, Text } from "components";
import Header from "components/Header";

const ContactPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-satoshi h-[962px] justify-end mx-auto relative w-full">
        <div className="h-[7226px] mt-auto mx-auto md:px-5 w-full">
          <Img
            className="absolute h-[1583px] inset-x-[0] mx-auto object-cover top-[0] w-full"
            src="images/img_rectangle40003_1583x1600.png"
            alt="rectangle40003"
          />
          <Img
            className="absolute h-[1523px] inset-x-[0] mx-auto object-cover top-[0] w-full"
            src="images/img_rectangle40008_1523x1600.png"
            alt="rectangle40008"
          />
          <Img
            className="absolute h-[1523px] inset-x-[0] mx-auto object-cover top-[0] w-full"
            src="images/img_rectangle40011_1523x1600.png"
            alt="rectangle40011"
          />
          <Img
            className="absolute h-[7226px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_rectangle40010.png"
            alt="rectangle40010"
          />
          <Img
            className="absolute h-[962px] inset-x-[0] mx-auto object-cover top-[0] w-full"
            src="images/img_image20.png"
            alt="imageTwenty"
          />
          <div className="absolute bg-gradient3  flex flex-col inset-x-[0] justify-start mx-auto p-6 sm:px-5 top-[0] w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center mx-auto w-full" />
            <div className="flex flex-col font-chillax items-center justify-start md:ml-[0] ml-[895px] mt-32">
              <Text
                className="md:text-5xl text-6xl text-white-A700 uppercase"
                size="txtChillaxRegular60"
              >
                Contact Us
              </Text>
            </div>
            <div className="flex flex-col font-satoshi items-center justify-start md:ml-[0] ml-[879px] mt-[84px] w-[21%] md:w-full">
              <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                <Img
                  className="h-[60px] w-[60px]"
                  src="images/img_mail_indigo_a700.svg"
                  alt="mail"
                />
                <div className="flex flex-col gap-3.5 items-start justify-start mt-3.5">
                  <Text
                    className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtSatoshiBold22"
                  >
                    Email Us:
                  </Text>
                  <Text
                    className="sm:text-[23px] md:text-[25px] text-[27px] text-white-A700"
                    size="txtSatoshiLight27"
                  >
                    abc@domaname.com
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-satoshi items-center justify-start mb-[298px] md:ml-[0] ml-[889px] mt-20 w-[14%] md:w-full">
              <div className="flex flex-col gap-5 justify-start w-full">
                <div className="flex flex-row gap-5 items-start justify-start w-[66%] md:w-full">
                  <Img
                    className="h-[39px] rounded-[5px] w-[39px]"
                    src="images/img_car.svg"
                    alt="car"
                  />
                  <Text
                    className="mt-[3px] text-[22px] sm:text-lg text-white-A700 md:text-xl"
                    size="txtSatoshiBold22"
                  >
                    Find Us:
                  </Text>
                </div>
                <Img
                  className="h-[27px] md:ml-[0] ml-[59px]"
                  src="images/img_group1618.svg"
                  alt="group1618"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] bottom-[0] h-[789px] md:px-5 right-[0] rotate-[179deg] w-[13%]">
          <div className="h-[664px] ml-auto my-auto w-[77%]">
            <Img
              className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
              src="images/img_ellipse264_13.png"
              alt="ellipse264"
            />
            <Img
              className="absolute h-[633px] inset-[0] justify-center m-auto object-cover rounded-[78px]"
              src="images/img_rectangle26.png"
              alt="rectangleTwentySix"
            />
          </div>
          <Img
            className="absolute h-[789px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_noise_789x208.png"
            alt="noise"
          />
        </div>
        <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] bottom-[0] h-[789px] left-[0] md:px-5 rotate-[179deg] w-[16%]">
          <div className="h-[664px] my-auto w-[86%]">
            <Img
              className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
              src="images/img_ellipse264_14.png"
              alt="ellipse264_One"
            />
            <Img
              className="absolute h-[633px] inset-y-[0] left-[0] my-auto object-cover rounded-[96px]"
              src="images/img_rectangle26.png"
              alt="rectangleTwentySix_One"
            />
          </div>
          <Img
            className="absolute h-[789px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_noise_789x243.png"
            alt="noise_One"
          />
        </div>
        <div className="absolute backdrop-opacity-[0.5] blur-[200.00px] bottom-[0] h-[789px] md:px-5 right-[0] rotate-[179deg] w-[15%]">
          <div className="h-[664px] ml-auto my-auto w-4/5">
            <Img
              className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
              src="images/img_ellipse264_15.png"
              alt="ellipse264_Two"
            />
            <Img
              className="absolute h-[633px] inset-[0] justify-center m-auto object-cover rounded-[93px]"
              src="images/img_rectangle26.png"
              alt="rectangleTwentySix_Two"
            />
          </div>
          <Img
            className="absolute h-[789px] inset-[0] justify-center m-auto object-cover w-full"
            src="images/img_noise_789x239.png"
            alt="noise_Two"
          />
        </div>
        <div className="absolute bottom-[0] h-[1331px] md:h-[962px] left-[0] pb-[369px] md:px-5 w-[83%] md:w-full">
          <Img
            className="h-[962px] mx-auto object-cover w-full"
            src="images/img_mrmkrocketbl_962x1321.png"
            alt="mrmkrocketbl"
          />
          <div className="absolute md:h-[497px] h-[549px] sm:h-[742px] left-[14%] top-[16%] w-[43%] sm:w-full">
            <div className="absolute border border-indigo-A200_3d border-solid flex flex-col gap-[26px] sm:h-auto h-full inset-[0] justify-center m-auto p-2.5 rounded-[274px] w-[549px]">
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
        </div>
      </div>
    </>
  );
};

export default ContactPage;
