import React from "react";

import { Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img
          className="h-14"
          src="images/img_group1000006364.svg"
          alt="group1000006364"
        />
        <Text
          className="capitalize mb-3.5 md:ml-[0] ml-[182px] md:mt-0 mt-[19px] text-base text-center text-white-A700 tracking-[1.60px]"
          size="txtSatoshiMedium16WhiteA700"
        >
          <span className="text-white-A700 font-satoshi font-medium">
            Marketplace P2P Trading{" "}
          </span>
          <span className="text-indigo-A700 font-satoshi font-medium">
            About us
          </span>
          <span className="text-white-A700 font-satoshi font-medium">
            {" "}
            Finance Contact
          </span>
        </Text>
        <div className="flex flex-row gap-[34px] items-start justify-center mb-3 md:ml-[0] ml-[181px] md:mt-0 mt-[19px] w-[14%] md:w-full">
          <div className="flex flex-row gap-2 items-start justify-start w-[38%]">
            <Img className="h-6" src="images/img_qrcode.svg" alt="qrcode" />
            <Text
              className="capitalize text-base text-center text-white-A700 tracking-[1.60px]"
              size="txtSatoshiMedium16WhiteA700"
            >
              Login
            </Text>
          </div>
          <div className="flex flex-row gap-[5px] items-start justify-evenly w-[45%]">
            <Img
              className="h-[18px] w-[17px]"
              src="images/img_user.svg"
              alt="user"
            />
            <Text
              className="capitalize text-base text-center text-white-A700 tracking-[1.60px]"
              size="txtSatoshiMedium16WhiteA700"
            >
              Signup
            </Text>
          </div>
        </div>
        <Img
          className="h-[22px] md:ml-[0] ml-[54px] md:mt-0 my-[17px]"
          src="images/img_menu.svg"
          alt="menu"
        />
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
