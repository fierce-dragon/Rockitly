import React from "react";

import { Img, Text } from "components";

const P2pTradingColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start mb-1.5 mt-10 w-full">
          {!!props?.userimage ? (
            <Img
              className="h-[42px] md:ml-[0] ml-[3px] rounded-[1px]"
              alt="star"
              src="props?.userimage"
            />
          ) : null}
          <Text
            className="mt-8 text-[22px] sm:text-lg text-white-A700 md:text-xl"
            size="txtSatoshiBold22"
          >
            {props?.besttradingplatform}
          </Text>
          <Text
            className="leading-[26.00px] mt-[5px] text-[17px] text-white-A700_87 w-full"
            size="txtSatoshiMedium17"
          >
            {props?.maecenasdiamdolor}
          </Text>
        </div>
      </div>
    </>
  );
};

P2pTradingColumn.defaultProps = {
  besttradingplatform: "Best Trading Platform",
  maecenasdiamdolor:
    "Maecenas diam dolor, fringilla vel mollis sed scelerisque vestibulum vel felis.",
};

export default P2pTradingColumn;
