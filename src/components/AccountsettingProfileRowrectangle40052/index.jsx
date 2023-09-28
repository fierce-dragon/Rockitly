import React from "react";

import { Img, Line, Text } from "components";

const AccountsettingProfileRowrectangle40052 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Line className="bg-indigo-A700 h-[41px] mb-[536px] mt-3.5 w-0.5" />
        <div className="flex flex-col items-center justify-start mb-[135px] mt-[21px] w-[73%]">
          <div className="flex flex-col gap-[31px] items-start justify-start w-full">
            <div className="flex flex-row gap-[13px] items-start justify-start w-[38%] md:w-full">
              <Img
                className="h-[27px] w-[27px]"
                alt="menu"
                src="props?.usermenuimage"
              />
              <Text
                className="mt-[3px] text-[17px] text-indigo-A700"
                size="txtSatoshiBold17IndigoA700"
              >
                {props?.userprofiletext}
              </Text>
            </div>
            <div className="flex flex-row gap-[13px] items-start justify-start w-[52%] md:w-full">
              {!!props?.userclockimage ? (
                <Img
                  className="h-[27px] w-[27px]"
                  alt="clock"
                  src="props?.userclockimage"
                />
              ) : null}
              {!!props?.userlocalizationtext ? (
                <Text
                  className="mt-[3px] text-[17px] text-white-A700"
                  size="txtSatoshiRegular17"
                >
                  {props?.userlocalizationtext}
                </Text>
              ) : null}
            </div>
            <div className="flex flex-row gap-[13px] items-end justify-start w-[96%] md:w-full">
              <Img
                className="h-[27px] w-[27px]"
                src="images/img_computer_white_a700.svg"
                alt="computer"
              />
              <Text
                className="mt-[5px] text-[17px] text-white-A700"
                size="txtSatoshiRegular17"
              >
                {props?.usermessengernotificationtext}
              </Text>
            </div>
            <div className="flex flex-row gap-[13px] items-end justify-start w-[41%] md:w-full">
              <Img
                className="h-[27px] w-[27px]"
                src="images/img_favorite.svg"
                alt="favorite"
              />
              <Text
                className="mt-[5px] text-[17px] text-white-A700"
                size="txtSatoshiRegular17"
              >
                {props?.usersecuritytext}
              </Text>
            </div>
            <div className="flex flex-row gap-[13px] items-end justify-start w-[72%] md:w-full">
              <Img
                className="h-[27px] w-[27px]"
                alt="clock_One"
                src="props?.userclockoneimage"
              />
              <Text
                className="mt-[5px] text-[17px] text-white-A700"
                size="txtSatoshiRegular17"
              >
                {props?.userpaymentmethodstext}
              </Text>
            </div>
            <div className="flex flex-row gap-[13px] items-end justify-start w-[51%] md:w-full">
              <Img
                className="h-[27px] w-[27px]"
                alt="orderlight"
                src="props?.userorderlightimage"
              />
              <Text
                className="mt-[5px] text-[17px] text-white-A700"
                size="txtSatoshiRegular17"
              >
                {props?.userdeveloperstext}
              </Text>
            </div>
            <div className="flex flex-row gap-[13px] items-end justify-start w-full">
              <Img
                className="h-[27px] w-[27px]"
                src="images/img_settings.svg"
                alt="settings"
              />
              <Text
                className="mt-[5px] text-[17px] text-white-A700"
                size="txtSatoshiRegular17"
              >
                {props?.userconnectedappswebsitetext}
              </Text>
            </div>
            <div className="flex flex-row gap-[13px] items-end justify-start w-[73%] md:w-full">
              <Img
                className="h-[27px] w-[27px]"
                src="images/img_cut_white_a700_27x27.svg"
                alt="cut_One"
              />
              <Text
                className="mt-[5px] text-[17px] text-white-A700"
                size="txtSatoshiRegular17"
              >
                {props?.usersecurityquestionstext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AccountsettingProfileRowrectangle40052.defaultProps = {
  usermenuimage: "images/img_menu_indigo_a700_37x37.svg",
  userprofiletext: "Profile",
  usermessengernotificationtext: "Messenger & Notifications",
  usersecuritytext: "Security",
  userclockoneimage: "images/img_clock_white_a700.svg",
  userpaymentmethodstext: "Payment Methods",
  userorderlightimage: "images/img_orderlight.svg",
  userdeveloperstext: "Developers",
  userconnectedappswebsitetext: "Connected Apps & Website",
  usersecurityquestionstext: "Security Questions",
};

export default AccountsettingProfileRowrectangle40052;
