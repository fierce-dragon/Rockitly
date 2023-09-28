import React from "react";

import { Img, Text } from "components";

const RockitlyMarketplaceOneRowgroup1000006364 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-14"
          src="images/img_group1000006364.svg"
          alt="group1000006364"
        />
        {!!props?.language ? props?.language : null}
        <div className="flex flex-row gap-[34px] items-start justify-center md:ml-[0] ml-[181px] w-[14%] md:w-full">
          <div className="flex flex-row gap-2 items-start justify-start w-[38%]">
            <Img className="h-6" src="images/img_qrcode.svg" alt="qrcode" />
            <Text
              className="capitalize text-base text-center text-white-A700 tracking-[1.60px]"
              size="txtSatoshiMedium16WhiteA700"
            >
              {props?.login}
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
              {props?.signup}
            </Text>
          </div>
        </div>
        <Img
          className="h-[22px] md:ml-[0] ml-[54px]"
          src="images/img_menu.svg"
          alt="menu"
        />
      </div>
    </>
  );
};

RockitlyMarketplaceOneRowgroup1000006364.defaultProps = {
  language: (
    <Text
      className="capitalize md:ml-[0] ml-[182px] text-base text-center text-white-A700 tracking-[1.60px]"
      size="txtSatoshiMedium16WhiteA700"
    >
      <span className="text-white-A700 font-satoshi font-medium">
        Marketplace
      </span>
      <span className="text-white-A700 font-satoshi font-medium"> </span>
      <span className="text-indigo-A700 font-satoshi font-medium">
        P2P Trading
      </span>
      <span className="text-white-A700 font-satoshi font-medium"> </span>
      <span className="text-white-A700 font-satoshi font-medium">About us</span>
      <span className="text-white-A700 font-satoshi font-medium">
        {" "}
        Finance Contact
      </span>
    </Text>
  ),
  login: "Login",
  signup: "Signup",
};

export default RockitlyMarketplaceOneRowgroup1000006364;
