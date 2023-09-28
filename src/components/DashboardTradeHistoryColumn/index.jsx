import React from "react";

import { Img, Line, Text } from "components";

const DashboardTradeHistoryColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="md:h-[594px] sm:h-[602px] h-[621px] relative w-full">
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[444px] h-max inset-[0] justify-center m-auto pr-2.5 py-2.5 w-full"
            style={{ backgroundImage: "url('images/img_group95.png')" }}
          >
            {!!props?.rectangle40052 ? (
              <Line className="bg-indigo-A700 h-[41px] mr-[325px] mt-[5px] w-0.5" />
            ) : null}
            <Line className="bg-white-A700_6c h-px mb-[91px] md:ml-[0] ml-[11px] w-[97%]" />
          </div>
          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[7%] my-auto w-[63%]">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row gap-[13px] items-end justify-start w-[70%] md:w-full">
                <Img
                  className="h-[27px] w-[27px]"
                  alt="menu"
                  src="props?.usermenuimage"
                />
                <Text
                  className="mt-[5px] text-[17px] text-indigo-A700"
                  size="txtSatoshiBold17IndigoA700"
                >
                  {props?.usertradehistorytext}
                </Text>
              </div>
              <div className="flex flex-row gap-[13px] items-start justify-start mt-[29px] w-[97%] md:w-full">
                {!!props?.userclockimage ? (
                  <Img
                    className="h-[27px] w-[27px]"
                    alt="clock"
                    src="props?.userclockimage"
                  />
                ) : null}
                {!!props?.userrecenttradepartnerstext ? (
                  <Text
                    className="mt-[3px] text-[17px] text-white-A700"
                    size="txtSatoshiRegular17"
                  >
                    {props?.userrecenttradepartnerstext}
                  </Text>
                ) : null}
              </div>
              <div className="flex flex-row gap-[13px] items-end justify-start mt-[31px] w-[54%] md:w-full">
                <Img
                  className="h-[27px] w-[27px]"
                  alt="computer"
                  src="props?.usercomputerimage"
                />
                <Text
                  className="mt-[5px] text-[17px] text-white-A700"
                  size="txtSatoshiRegular17"
                >
                  {props?.usermyofferstext}
                </Text>
              </div>
              <div className="flex flex-row gap-[13px] items-start justify-start mt-[29px] w-[71%] md:w-full">
                <Img
                  className="h-[27px] w-[27px]"
                  alt="favorite"
                  src="props?.userfavoriteimage"
                />
                <Text
                  className="mt-[3px] text-[17px] text-white-A700"
                  size="txtSatoshiRegular17"
                >
                  {props?.userfavoriteofferstext}
                </Text>
              </div>
              <div className="flex flex-row gap-[13px] items-start justify-start mt-[31px] w-[72%] md:w-full">
                <Img
                  className="h-[27px] w-[27px]"
                  alt="clock_One"
                  src="props?.userclockoneimage"
                />
                <Text
                  className="mt-[3px] text-[17px] text-white-A700"
                  size="txtSatoshiRegular17"
                >
                  {props?.usertradestatisticstext}
                </Text>
              </div>
              <div className="flex flex-row gap-[13px] items-end justify-start mt-[31px] w-full">
                <Img
                  className="h-[27px] w-[27px]"
                  alt="orderlight"
                  src="props?.userorderlightimage"
                />
                <Text
                  className="mt-[5px] text-[17px] text-white-A700"
                  size="txtSatoshiRegular17"
                >
                  {props?.usertradeprogrambadgestext}
                </Text>
              </div>
              <div className="flex flex-row gap-[13px] items-start justify-start mt-[29px] w-[64%] md:w-full">
                <Img
                  className="h-[27px] w-[27px]"
                  alt="settings"
                  src="props?.usersettingsimage"
                />
                <Text
                  className="mt-[3px] text-[17px] text-white-A700"
                  size="txtSatoshiRegular17"
                >
                  {props?.usershareprofiletext}
                </Text>
              </div>
              <div className="flex flex-row gap-[13px] items-end justify-start mt-[31px] w-[78%] md:w-full">
                <Img
                  className="h-[27px] w-[27px]"
                  alt="cut"
                  src="props?.usercutimage"
                />
                <Text
                  className="mt-[5px] text-[17px] text-white-A700"
                  size="txtSatoshiRegular17"
                >
                  {props?.userpartnerprogramtext}
                </Text>
              </div>
              <div className="flex flex-row gap-[13px] items-end justify-start mt-[78px] w-[79%] md:w-full">
                <Img
                  className="h-[27px] w-[27px]"
                  src="images/img_settings_white_a700.svg"
                  alt="settings_One"
                />
                <Text
                  className="mt-[5px] text-[17px] text-white-A700"
                  size="txtSatoshiRegular17"
                >
                  {props?.useraccountsettingstext}
                </Text>
              </div>
              <div className="flex flex-row gap-[13px] items-end justify-start mt-[29px] w-[55%] md:w-full">
                <Img
                  className="h-[27px] w-[27px]"
                  src="images/img_rewind.svg"
                  alt="rewind"
                />
                <Text
                  className="mt-[5px] text-[17px] text-white-A700"
                  size="txtSatoshiRegular17"
                >
                  {props?.userdevelopertext}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardTradeHistoryColumn.defaultProps = {
  usermenuimage: "images/img_menu_indigo_a700_37x37.svg",
  usertradehistorytext: "Trade History",
  usercomputerimage: "images/img_computer_white_a700.svg",
  usermyofferstext: "My Offers",
  userfavoriteimage: "images/img_favorite.svg",
  userfavoriteofferstext: "Favorite Offers",
  userclockoneimage: "images/img_clock_white_a700.svg",
  usertradestatisticstext: "Trade Statistics",
  userorderlightimage: "images/img_orderlight.svg",
  usertradeprogrambadgestext: "Trade Program Badges",
  usersettingsimage: "images/img_settings.svg",
  usershareprofiletext: "Share Profile",
  usercutimage: "images/img_cut.svg",
  userpartnerprogramtext: "Partner Program",
  useraccountsettingstext: "Account Settings",
  userdevelopertext: "Developer",
};

export default DashboardTradeHistoryColumn;
