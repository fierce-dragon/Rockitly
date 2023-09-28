
    import React from 'react';

    

    import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel, AccordionItemState } from "react-accessible-accordion"
  
  import { createColumnHelper } from "@tanstack/react-table"
  
  import { Button, Img, Input, Line, List, ReactTable, Text } from "components"
  import P2pTradingColumn from "components/P2pTradingColumn"
  import P2pTradingStack from "components/P2pTradingStack"
  import RockitlyMarketplaceOneRowgroup1000006364 from "components/RockitlyMarketplaceOneRowgroup1000006364"
  
  

    

    

    

    const P2ptradingPage = () => {
      const tableData = React.useRef([{advertisers:  "10 orders       100.00%"   ,unitprice:  "0.03 BTC
2.00-200.00 USD"   ,availableorder:  "PayPal
Skrill"   ,paymentmethods:  "PayPal
Skrill"   ,buysell0Fees:  "Buy"   ,},{advertisers:  "10 orders       100.00%"   ,unitprice:  "0.03 BTC
2.00-200.00 USD"   ,availableorder:  "PayPal
Skrill"   ,paymentmethods:  "PayPal
Skrill"   ,buysell0Fees:  "Buy"   ,},{advertisers:  "10 orders       100.00%"   ,unitprice:  "0.03 BTC
2.00-200.00 USD"   ,availableorder:  "PayPal
Skrill"   ,paymentmethods:  "PayPal
Skrill"   ,buysell0Fees:  "Buy"   ,},{advertisers:  "10 orders       100.00%"   ,unitprice:  "0.03 BTC
2.00-200.00 USD"   ,availableorder:  "PayPal
Skrill"   ,paymentmethods:  "PayPal
Skrill"   ,buysell0Fees:  "Buy"   ,},{advertisers:  "10 orders       100.00%"   ,unitprice:  "0.03 BTC
2.00-200.00 USD"   ,availableorder:  "PayPal
Skrill"   ,paymentmethods:  "PayPal
Skrill"   ,buysell0Fees:  "Buy"   ,},{advertisers:  "10 orders       100.00%"   ,unitprice:  "0.03 BTC
2.00-200.00 USD"   ,availableorder:  "PayPal
Skrill"   ,paymentmethods:  "PayPal
Skrill"   ,buysell0Fees:  "Buy"   ,},{advertisers:  "10 orders       100.00%"   ,unitprice:  "0.03 BTC
2.00-200.00 USD"   ,availableorder:  "PayPal
Skrill"   ,paymentmethods:  "PayPal
Skrill"   ,buysell0Fees:  "Buy"   ,},{advertisers:  "10 orders       100.00%"   ,unitprice:  "0.03 BTC
2.00-200.00 USD"   ,availableorder:  "PayPal
Skrill"   ,paymentmethods:  "PayPal
Skrill"   ,buysell0Fees:  "Buy"   ,},]);
  const tableColumns = React.useMemo(() => {
          const tableColumnHelper = createColumnHelper();
          return [
    tableColumnHelper.accessor("advertisers", {
      cell: (info) => <div
className="flex flex-col items-start justify-end pt-[13px] px-[13px]"



><Text
  className="mt-[34px] text-[16.74px] text-gray-100"
  size="txtSatoshiBold1674"
  
  
>LATINOAMERICAUNIDA</Text><Text
  className="mt-1 text-[11px] text-gray-100_87"
  size="txtSatoshiMedium11"
  
  
>{info?.getValue()}</Text></div>,
      header: (info) => <Text
  className="min-w-[304px] pl-[13px] text-right text-sm text-white-A700_87"
  size="txtSatoshiMedium14WhiteA70087"
  
  
>Advertisers</Text>
    })
  ,
    tableColumnHelper.accessor("unitprice", {
      cell: (info) => <Text
  className="leading-[160.00%] pb-[3px] pt-[35px] text-[13px] text-gray-100"
  size="txtSatoshiMedium13Gray100"
  
  
>{info?.getValue()}</Text>,
      header: (info) => <Text
  className="min-w-[211px] text-sm text-white-A700_87"
  size="txtSatoshiMedium14WhiteA70087"
  
  
>Unit price</Text>
    })
  ,
    tableColumnHelper.accessor("availableorder", {
      cell: (info) => <Text
  className="pl-[-465px] text-[13px] text-gray-100"
  size="txtSatoshiMedium13Gray100"
  
  
>{info?.getValue()}</Text>,
      header: (info) => <Text
  className="min-w-[254px] text-sm text-white-A700_87"
  size="txtSatoshiMedium14WhiteA70087"
  
  
>Available/Order limit</Text>
    })
  ,
    tableColumnHelper.accessor("paymentmethods", {
      cell: (info) => <Text
  className="pl-[-465px] text-[13px] text-gray-100"
  size="txtSatoshiMedium13Gray100"
  
  
>{info?.getValue()}</Text>,
      header: (info) => <Text
  className="min-w-[249px] text-sm text-white-A700_87"
  size="txtSatoshiMedium14WhiteA70087"
  
  
>Payment methods</Text>
    })
  ,
    tableColumnHelper.accessor("buysell0Fees", {
      cell: (info) => <div
className="flex flex-row items-center justify-center pr-1.5 py-1.5"


><Button
className="capitalize cursor-pointer font-bold min-w-[108px] mr-9 mt-[38px] rounded-[19px] text-[19.93px] text-center tracking-[1.99px]"
  
  color="indigo_A700"
size="xs"
variant="fill"
>{info?.getValue()}</Button></div>,
      header: (info) => <Text
  className="min-w-[152px] text-center text-sm text-white-A700_87"
  size="txtSatoshiMedium14WhiteA70087"
  
  
>Buy/Sell (0 fees)</Text>
    })
  ];
        }, []);
  

      const p2PTradingColumnPropList = [{"userimage":"images/img_star.svg"},{"besttradingplatform":" Comfortable Ecosystem"},{"besttradingplatform":" Trusted Security"}]
  

      

      return (<><div
    className="bg-white-A700 flex font-satoshi h-[4697px] justify-end mx-auto relative w-full"
      

    
  ><div
    className="md:h-[6362px] sm:h-[6979px] h-[7226px] mt-auto mx-auto md:px-5 w-full"
      

    
  ><div
    className="absolute flex flex-col inset-[0] justify-center m-auto w-full"
      

    
  ><div
    className="h-[864px] mx-auto w-full"
      

    
  ><Img className="h-[864px] m-auto object-cover w-full" src="images/img_rectangle40003_1.png" alt="rectangle40003" /><Img className="absolute h-[864px] inset-[0] justify-center m-auto object-cover w-full" src="images/img_rectangle40008_1.png" alt="rectangle40008" /></div><Img className="h-[6376px] mt-[-14px] mx-auto object-cover w-full z-[1]" src="images/img_rectangle40011_1.png" alt="rectangle40011" /></div><div
  className="absolute bg-gradient1  flex flex-col md:gap-10 gap-[2516px] h-full inset-[0] justify-center m-auto p-[74px] md:px-10 sm:px-5 w-full"
  

  
  ><div
  className="flex flex-col items-start justify-start md:ml-[0] ml-[893px] mt-[84px] pr-[13px] py-[13px] w-[39%] md:w-full"
  

  
  ><div
  className="flex flex-col items-start justify-start mb-0.5 w-[534px] md:w-full"
  

  
  ><div
    className="overflow-x-auto w-full"
    
    
  ><div
    className="md:h-[444px] sm:h-[505px] h-[535px] relative w-full"
      

    
  ><div
    className="md:h-[444px] sm:h-[505px] h-[535px] m-auto w-full"
      

    
  ><div
    className="md:h-[444px] sm:h-[505px] h-[535px] m-auto w-full"
      

    
  ><div
    className="absolute md:h-[193px] h-[488px] inset-x-[0] mx-auto top-[0] w-[99%] md:w-full"
      

    
  ><div
    className="absolute md:h-[193px] h-[427px] inset-x-[0] mx-auto top-[0] w-full"
      

    
  ><div
    className="md:h-[193px] h-[427px] m-auto w-full"
      

    
  ><div
    className="absolute flex flex-col inset-x-[0] mx-auto top-[0] w-full"
      

    
  ><Img className="h-[193px] object-cover" src="images/img_viewangle.png" alt="viewangle" /><div
    className="h-[143px] md:h-[NaNpx] ml-auto mt-[-NaNpx] w-[27%] z-[1]"
      

    
  ><div
    className="absolute md:h-[135px] h-[137px] inset-[0] justify-center m-auto w-[97%]"
      

    
  ><div
    className="md:h-[135px] h-[137px] m-auto w-full"
      

    
  ><div
    className="md:h-[135px] h-[137px] m-auto w-full"
      

    
  ><div
    className="md:h-[135px] h-[137px] m-auto w-full"
      

    
  ><div
    className="md:h-[135px] h-[137px] m-auto w-full"
      

    
  ><div
    className="md:h-[135px] h-[137px] m-auto w-full"
      

    
  ><div
    className="md:h-[135px] h-[137px] m-auto w-full"
      

    
  ><div
    className="absolute md:h-[104px] h-[137px] inset-[0] justify-center m-auto w-full"
      

    
  ><div
    className="absolute md:h-[104px] h-[137px] inset-[0] justify-center m-auto w-full"
      

    
  ><div
  className="absolute bg-cover bg-no-repeat flex flex-col h-[104px] items-center justify-start left-[0] top-[0] w-[71%]"
  style={{"backgroundImage":"url('images/img_group_light_blue_500.svg')"}}

  
  ><Img className="h-[104px]" src="images/img_vector_light_blue_500.svg" alt="vector" /></div><div
  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[104px] items-center justify-start right-[0] w-[71%]"
  style={{"backgroundImage":"url('images/img_group_light_blue_500_104x109.svg')"}}

  
  ><Img className="h-[104px]" src="images/img_vector_light_blue_500_104x109.svg" alt="vector_One" /></div></div><Img className="absolute h-[34px] right-[0] top-[0]" src="images/img_group_light_blue_500_34x142.svg" alt="group" /></div><Img className="absolute h-[135px] inset-y-[0] my-auto right-[0]" src="images/img_group_light_blue_500_135x58.svg" alt="group_One" /></div><Img className="absolute bottom-[0] h-[34px] left-[0]" src="images/img_group_34x142.svg" alt="group_Two" /></div><Img className="absolute h-[135px] inset-y-[0] left-[0] my-auto" src="images/img_group_light_blue_500_135x58.svg" alt="group_Three" /><Img className="absolute h-[135px] inset-y-[0] my-auto right-[0]" src="images/img_group_light_blue_500_135x58.svg" alt="group_Four" /></div><Img className="absolute h-[34px] right-[0] top-[0]" src="images/img_group_34x142.svg" alt="group_Five" /></div><Img className="absolute h-[135px] inset-y-[0] left-[0] my-auto" src="images/img_group_light_blue_500_135x58.svg" alt="group_Six" /></div><Img className="absolute bottom-[0] h-[34px] left-[0]" src="images/img_group_light_blue_500_34x142.svg" alt="group_Seven" /></div><Img className="absolute h-1.5 left-[35%] object-cover top-[23%] w-1.5" src="images/img_vector_33x33.png" alt="vector_Two" /><Img className="absolute bottom-[22%] h-1.5 object-cover right-[35%] w-1.5" src="images/img_vector_24x24.png" alt="vector_Three" /></div><Img className="absolute bottom-[22%] h-[5px] left-[0] object-cover w-1.5" src="images/img_vector_5x6.png" alt="vector_Four" /><Img className="absolute h-1.5 left-[7%] object-cover top-[0] w-1.5" src="images/img_vector_24x24.png" alt="vector_Five" /><Img className="absolute h-1.5 object-cover right-[28%] top-[0] w-1.5" src="images/img_vector_33x33.png" alt="vector_Six" /><Img className="absolute h-1.5 object-cover right-[0] top-[22%] w-1.5" src="images/img_vector_24x24.png" alt="vector_Seven" /><Img className="absolute bottom-[0] h-1.5 object-cover right-[7%] w-1.5" src="images/img_vector_33x33.png" alt="vector_Eight" /><Img className="absolute bottom-[0] h-1.5 left-[28%] object-cover w-1.5" src="images/img_vector_24x24.png" alt="vector_Nine" /></div><Img className="h-[148px] mb-[68px] ml-[132px] mt-[-43.85px] z-[1]" src="images/img_group_light_blue_500_148x132.svg" alt="group_Eight" /></div><Img className="absolute bottom-[0] h-[173px] left-[32%]" src="images/img_group_light_blue_500_173x190.svg" alt="group_Nine" /></div><div
  className="absolute flex flex-col items-center justify-start right-[31%] top-[10%] w-[31%]"
  

  
  ><div
    className="md:h-[147px] h-[170px] relative w-full"
      

    
  ><div
    className="md:h-[147px] h-[170px] m-auto w-full"
      

    
  ><div
    className="md:h-[147px] h-[170px] m-auto w-full"
      

    
  ><div
    className="md:h-[147px] h-[170px] m-auto w-full"
      

    
  ><div
    className="md:h-[147px] h-[170px] m-auto w-full"
      

    
  ><div
    className="absolute md:h-[147px] h-[170px] inset-[0] justify-center m-auto w-full"
      

    
  ><div
    className="absolute md:h-[147px] h-[170px] inset-[0] justify-center m-auto w-full"
      

    
  ><div
    className="md:h-[147px] h-[170px] m-auto w-full"
      

    
  ><div
    className="md:h-[147px] h-[170px] m-auto w-full"
      

    
  ><Img className="absolute bottom-[0] h-[147px] left-[0]" src="images/img_group_light_blue_500_147x129.svg" alt="group_Ten" /><Img className="absolute h-[147px] right-[0] top-[0]" src="images/img_group_light_blue_500_147x129.svg" alt="group_Eleven" /></div><Img className="absolute h-[108px] left-[0] top-[0]" src="images/img_group_light_blue_500_34x142.svg" alt="group_Twelve" /></div><Img className="absolute h-[85px] right-[0] top-[0]" src="images/img_group_light_blue_500_135x58.svg" alt="group_Thirteen" /></div><div
  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[108px] items-center justify-start right-[0] w-[54%]"
  style={{"backgroundImage":"url('images/img_group_light_blue_500_108x97.svg')"}}

  
  ><Img className="h-[108px]" src="images/img_vector_light_blue_500_108x97.svg" alt="vector_Ten" /></div></div><Img className="absolute bottom-[0] h-[85px] left-[0]" src="images/img_group_light_blue_500_135x58.svg" alt="group_Fourteen" /></div><Img className="absolute h-[85px] right-[0] top-[0]" src="images/img_group_light_blue_500_135x58.svg" alt="group_Fifteen" /></div><div
  className="absolute bg-cover bg-no-repeat flex flex-col h-[108px] items-start justify-start left-[0] p-5 top-[0] w-[54%]"
  style={{"backgroundImage":"url('images/img_group_34x142.svg')"}}

  
  ><Img className="h-1.5 md:h-auto mb-[61px] md:ml-[0] ml-[22px] object-cover w-1.5" src="images/img_vector_6x6.png" alt="vector_Eleven" /></div></div><Img className="absolute bottom-[0] h-[85px] left-[0]" src="images/img_group_light_blue_500_135x58.svg" alt="group_Sixteen" /></div><div
  className="absolute bottom-[0] flex flex-row gap-[29px] items-start justify-between right-[0] w-[74%]"
  
  
  ><Img className="h-1.5 md:h-auto mt-5 object-cover w-1.5" src="images/img_vector_33x33.png" alt="vector_Twelve" /><div
  className="bg-cover bg-no-repeat flex flex-col h-[108px] items-center justify-start"
  style={{"backgroundImage":"url('images/img_group_light_blue_500_108x97.svg')"}}

  
  ><div
  className="bg-cover bg-no-repeat flex flex-col h-[108px] items-center justify-end p-5 w-full"
  style={{"backgroundImage":"url('images/img_group203.svg')"}}

  
  ><div
  className="flex flex-col gap-[55px] items-start justify-start w-1/5 md:w-full"
  

  
  ><Img className="h-1.5 md:h-auto object-cover w-1.5" src="images/img_vector_24x24.png" alt="vector_Thirteen" /><Img className="h-1.5 md:h-auto ml-1 md:ml-[0] object-cover w-1.5" src="images/img_vector_6x6.png" alt="vector_Fourteen" /></div></div></div></div></div></div></div><Img className="absolute h-1.5 object-cover right-[45%] top-[8%] w-1.5" src="images/img_vector_33x33.png" alt="vector_Fifteen" /><Img className="absolute h-1.5 object-cover right-[31%] top-[21%] w-1.5" src="images/img_vector_33x33.png" alt="vector_Sixteen" /><Img className="absolute h-1.5 object-cover right-[47%] top-[43%] w-1.5" src="images/img_vector_24x24.png" alt="vector_Seventeen" /><div
  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[157px] justify-end p-[5px] right-[16%] w-[31%]"
  style={{"backgroundImage":"url('images/img_group201.svg')"}}

  
  ><Img className="h-1.5 md:h-auto md:ml-[0] ml-[57px] mr-[107px] object-cover w-1.5" src="images/img_vector_33x33.png" alt="vector_Eighteen" /><Img className="h-1.5 md:h-auto md:ml-[0] ml-[45px] mr-[119px] mt-[53px] object-cover w-1.5" src="images/img_vector_33x33.png" alt="vector_Nineteen" /><Img className="h-1.5 md:h-auto md:ml-[0] ml-[119px] mr-[45px] mt-3.5 object-cover w-1.5" src="images/img_vector_24x24.png" alt="vector_Twenty" /><Img className="h-1.5 md:h-auto md:ml-[0] ml-[107px] mr-[57px] mt-[52px] object-cover w-1.5" src="images/img_vector_5x6.png" alt="vector_TwentyOne" /></div></div><Img className="absolute bottom-[22%] h-1.5 object-cover right-[16%] w-1.5" src="images/img_vector_33x33.png" alt="vector_TwentyTwo" /><Img className="absolute bottom-[8%] h-1.5 object-cover right-[36%] w-1.5" src="images/img_vector_5x6.png" alt="vector_TwentyThree" /><div
  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[506px] items-end justify-end p-[30px] sm:px-5 right-[0] w-[78%]"
  style={{"backgroundImage":"url('images/img_group200.png')"}}

  
  ><div
  className="flex flex-col md:gap-10 gap-[101px] justify-start mr-1.5 mt-6 w-[88%] md:w-full"
  

  
  ><Img className="h-32 md:ml-[0] ml-[221px] w-32" src="images/img_bit.svg" alt="bit" /><div
  className="flex flex-row items-start justify-between w-full"
  
  
  ><Img className="h-[126px]" src="images/img_bit_teal_900.svg" alt="bit_One" /><Img className="h-[168px] mt-6" src="images/img_bit_light_blue_900.svg" alt="bit_Two" /></div></div></div></div><Img className="absolute h-[140px] left-[22%] top-[6%]" src="images/img_bit_light_blue_900_140x168.svg" alt="bit_Three" /></div><div
    className="absolute md:h-[202px] h-[210px] inset-y-[0] my-auto right-[24%] w-[34%]"
      

    
  ><div
    className="md:h-[202px] h-[210px] m-auto w-full"
      

    
  ><div
    className="absolute md:h-[202px] h-[210px] inset-[0] justify-center m-auto w-full"
      

    
  ><Img className="absolute h-[202px] inset-y-[0] my-auto right-[0]" src="images/img_vector_teal_900.svg" alt="vector_TwentyFour" /><Img className="absolute h-[202px] inset-y-[0] left-[0] my-auto" src="images/img_vector_teal_900.svg" alt="vector_TwentyFive" /></div><div
    className="absolute bg-cover bg-no-repeat md:h-[196px] h-[202px] inset-y-[0] left-[0] my-auto p-0.5 w-[96%]"
      style={{"backgroundImage":"url('images/img_group204.svg')"}}

    
  ><div
  className="bg-cover bg-no-repeat flex flex-col h-full items-start justify-start ml-[17px] mt-5 p-[15px] w-[73%]"
  style={{"backgroundImage":"url('images/img_group206.svg')"}}

  
  ><div
    className="h-[110px] md:h-[113px] mb-1.5 relative w-[84%]"
      

    
  ><Img className="absolute bottom-[0] h-[104px] inset-x-[0] mx-auto" src="images/img_vector_teal_900_104x92.svg" alt="vector_TwentySix" /><Img className="absolute h-[107px] inset-[0] justify-center m-auto" src="images/img_vector_blue_200.svg" alt="vector_TwentySeven" /></div></div><Img className="absolute h-[196px] inset-[0] justify-center m-auto" src="images/img_vector_teal_900_196x186.svg" alt="vector_TwentyEight" /></div></div><div
    className="absolute bg-cover bg-no-repeat md:h-[199px] h-[202px] inset-y-[0] left-[0] my-auto w-[96%]"
      style={{"backgroundImage":"url('images/img_group205.png')"}}

    
  ><div
    className="absolute h-[184px] inset-[0] justify-center m-auto w-[91%]"
      

    
  ><div
    className="h-[184px] m-auto w-full"
      

    
  ><div
    className="h-[184px] m-auto w-full"
      

    
  ><div
    className="h-[184px] m-auto w-full"
      

    
  ><div
    className="h-[184px] m-auto w-full"
      

    
  ><div
    className="absolute h-[184px] inset-[0] justify-center m-auto w-[98%]"
      

    
  ><div
    className="absolute h-[184px] inset-[0] justify-center m-auto w-full"
      

    
  ><div
    className="absolute h-[184px] inset-[0] justify-center m-auto w-full"
      

    
  ><div
    className="absolute h-[184px] inset-[0] justify-center m-auto w-[99%]"
      

    
  ><div
    className="absolute h-[184px] inset-[0] justify-center m-auto w-full"
      

    
  ><div
  className="absolute flex flex-row h-full inset-[0] items-start justify-center m-auto w-[99%]"
  
  
  ><div
    className="md:h-[119px] h-[184px] relative w-[97%]"
      

    
  ><div
    className="absolute flex inset-[0] justify-center m-auto w-[99%]"
      

    
  ><div
    className="md:h-[119px] h-[184px] m-auto w-[97%]"
      

    
  ><div
    className="md:h-[119px] h-[184px] m-auto w-full"
      

    
  ><div
    className="md:h-[119px] h-[184px] m-auto w-full"
      

    
  ><div
    className="md:h-[119px] h-[184px] m-auto w-full"
      

    
  ><div
    className="md:h-[119px] h-[184px] m-auto w-full"
      

    
  ><div
    className="md:h-[119px] h-[184px] m-auto w-full"
      

    
  ><div
    className="md:h-[119px] h-[184px] m-auto w-full"
      

    
  ><div
    className="md:h-[119px] h-[184px] m-auto w-full"
      

    
  ><div
    className="md:h-[119px] h-[184px] m-auto w-full"
      

    
  ><div
    className="absolute md:h-[119px] h-[183px] inset-[0] justify-center m-auto w-full"
      

    
  ><div
    className="absolute bottom-[0] md:h-[119px] h-[169px] inset-x-[0] mx-auto w-full"
      

    
  ><div
  className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-full"
  

  
  ><Img className="h-1 md:ml-[0] ml-[51px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_TwentyNine" /><div
    className="h-40 md:h-[115px] mt-0.5 relative w-full"
      

    
  ><div
  className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full"
  

  
  ><div
  className="flex flex-col gap-[5px] justify-start w-full"
  

  
  ><Img className="h-1 md:ml-[0] ml-[39px] w-[3px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_Thirty" /><div
    className="h-[148px] relative w-full"
      

    
  ><Img className="h-[3px] mb-[-1.46px] ml-[29px] w-[3px] z-[1]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_EightySeven" /><div
    className="h-[146px] m-auto w-full"
      

    
  ><Img className="h-[3px] mb-[-1.3px] ml-7 w-[3px] z-[1]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_EightySix" /><div
    className="h-36 m-auto w-full"
      

    
  ><Img className="h-[7px] mb-[undefinedpx] ml-2 mt-[23px] w-1.5 z-[1]" src="images/img_ticket.svg" alt="ticket_Two" /><Img className="h-[7px] mb-[undefinedpx] ml-[15px] mt-2.5 w-1.5 z-[1]" src="images/img_vector_light_blue_400.svg" alt="vector_EightyFour" /><Img className="h-1.5 mb-[-2.2px] ml-[23px] w-[5px] z-[1]" src="images/img_vector_light_blue_400_1x4.svg" alt="vector_EightyFive" /><div
    className="h-[140px] m-auto w-full"
      

    
  ><Img className="h-0.5 mb-[-0.96px] ml-[23px] w-[3px] z-[1]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_EightyThree" /><div
    className="h-[138px] m-auto w-full"
      

    
  ><Img className="h-[3px] mb-[-0.85px] ml-[21px] w-1 z-[1]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_EightyTwo" /><div
  className="flex flex-col gap-[7px] justify-start m-auto w-full"
  

  
  ><Img className="h-0.5 ml-5 md:ml-[0] w-[3px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_ThirtyOne" /><div
    className="h-[127px] relative w-full"
      

    
  ><Img className="h-0.5 mb-[-0.11px] ml-3.5 z-[1]" src="images/img_vector_light_blue_400_1x4.svg" alt="vector_Eighty" /><Img className="h-px mb-[undefinedpx] ml-2 mt-[13px] z-[1]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_EightyOne" /><div
  className="flex flex-col justify-start m-auto w-full"
  

  
  ><Img className="h-0.5 ml-3 md:ml-[0]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_ThirtyTwo" /><div
  className="flex flex-col items-start justify-start ml-1.5 md:ml-[0] mt-2.5 w-[5px] md:w-full"
  

  
  ><Img className="h-0.5" src="images/img_vector_light_blue_400_2x4.svg" alt="vector_ThirtyThree" /><Img className="h-px" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_ThirtyFour" /></div><div
    className="md:h-20 h-[106px] relative w-full"
      

    
  ><div
  className="absolute bottom-[0] flex flex-col gap-2 inset-x-[0] items-start justify-start mx-auto w-full"
  

  
  ><div
  className="flex flex-col items-start justify-start w-[5%] md:w-full"
  

  
  ><Img className="h-px md:ml-[0] ml-[3px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_ThirtyFive" /><Img className="h-px ml-0.5 md:ml-[0]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_ThirtySix" /><Img className="h-px ml-0.5 md:ml-[0]" src="images/img_vector_light_blue_400_1x4.svg" alt="vector_ThirtySeven" /><Img className="h-0.5 mt-[9px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_ThirtyEight" /><Img className="h-0.5" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_ThirtyNine" /></div><div
    className="md:h-14 h-[73px] relative w-full"
      

    
  ><div
    className="absolute md:h-14 h-[71px] inset-[0] justify-center m-auto w-full"
      

    
  ><div
    className="absolute bottom-[0] md:h-14 h-[68px] inset-x-[0] mx-auto w-full"
      

    
  ><div
    className="absolute md:h-14 h-[66px] inset-[0] justify-center m-auto w-full"
      

    
  ><div
    className="absolute bottom-[0] md:h-14 h-[61px] inset-x-[0] mx-auto w-full"
      

    
  ><div
    className="absolute md:h-14 h-[59px] inset-[0] justify-center m-auto w-full"
      

    
  ><div
  className="absolute bottom-[0] flex flex-col gap-1.5 inset-x-[0] items-start justify-start mx-auto w-full"
  

  
  ><Img className="h-[3px] w-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_Forty" /><div
    className="h-[47px] ml-0.5 md:ml-[0] relative w-[98%]"
      

    
  ><div
  className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
  

  
  ><div
  className="flex flex-row items-start justify-evenly w-full"
  
  
  ><Img className="h-1 mt-0.5 w-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_FortyOne" /><div
    className="h-[47px] relative w-[96%]"
      

    
  ><div
    className="absolute h-[47px] inset-[0] justify-center m-auto w-[99%]"
      

    
  ><div
    className="absolute h-[47px] inset-[0] justify-center m-auto w-full"
      

    
  ><div
    className="absolute h-[47px] inset-[0] justify-center m-auto w-[98%]"
      

    
  ><div
    className="absolute h-[47px] inset-[0] justify-center m-auto w-[99%]"
      

    
  ><div
  className="absolute flex flex-row h-full inset-[0] items-center justify-center m-auto w-[99%]"
  
  
  ><Img className="h-[5px] w-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_FortyTwo" /><div
    className="h-[47px] relative w-[94%]"
      

    
  ><div
  className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[99%]"
  

  
  ><div
  className="flex flex-row gap-2 items-start justify-between w-full"
  
  
  ><Img className="h-1.5 mt-[31px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_FortyThree" /><div
    className="h-[47px] relative w-[89%]"
      

    
  ><div
    className="absolute h-[47px] inset-[0] justify-center m-auto w-[98%]"
      

    
  ><div
    className="absolute h-[47px] inset-[0] justify-center m-auto w-[99%]"
      

    
  ><div
  className="absolute flex flex-row h-full inset-y-[0] items-start justify-evenly my-auto right-[0] w-[95%]"
  
  
  ><div
  className="flex flex-row items-start justify-evenly mt-9 w-[44%]"
  
  
  ><Img className="h-1.5 mt-[3px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_FortyFour" /><Img className="h-1.5 mt-[3px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_FortyFive" /><Img className="h-1.5 mt-[3px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_FortySix" /><Img className="h-1.5 mt-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_FortySeven" /><Img className="h-1.5 mt-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_FortyEight" /><Img className="h-1.5" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_FortyNine" /><Img className="h-[7px] mb-[3px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_Fifty" /><Img className="h-1.5" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_FiftyOne" /></div><div
    className="md:h-[31px] h-[42px] mb-[5px] relative w-[55%]"
      

    
  ><div
    className="absolute md:h-[26px] h-[39px] right-[0] top-[0] w-[91%]"
      

    
  ><div
    className="absolute md:h-[26px] h-[38px] inset-y-[0] my-auto right-[0] w-[96%]"
      

    
  ><div
  className="absolute flex flex-col justify-start right-[0] top-[0] w-[92%]"
  

  
  ><div
    className="md:h-5 h-[29px] md:ml-[0] ml-[11px] relative w-[30px]"
      

    
  ><div
  className="absolute flex flex-col gap-[5px] h-[27px] justify-start right-[0] top-[0] w-[27px]"
  

  
  ><div
    className="h-[15px] md:h-[9px] md:ml-[0] ml-[13px] relative w-3.5"
      

    
  ><div
    className="absolute h-[11px] md:h-[9px] right-[0] top-[0] w-[11px]"
      

    
  ><Img className="absolute h-[9px] right-[0] top-[0] w-[9px]" src="images/img_arrowdown_light_blue_400.svg" alt="arrowdown" /><Img className="absolute bottom-[0] h-[5px] left-[0] w-[5px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_FiftyTwo" /></div><Img className="absolute bottom-[0] h-1.5 left-[0] w-1.5" src="images/img_bookmark.svg" alt="bookmark" /></div><Img className="h-1.5 w-[5px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_FiftyThree" /></div><Img className="absolute bottom-[0] h-[7px] left-[0]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_FiftyFour" /><Img className="absolute h-[5px] inset-y-[0] my-auto right-[37%] w-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_FiftyFive" /></div><Img className="h-1.5" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_FiftySix" /></div><Img className="absolute bottom-[0] h-[7px] left-[0]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_FiftySeven" /></div><Img className="absolute bottom-[0] h-1.5 left-[0]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_FiftyEight" /></div><Img className="absolute h-[11px] right-1/4 top-[31%] w-[11px]" src="images/img_arrowdown_light_blue_400.svg" alt="arrowdown_One" /><Img className="absolute bottom-[14%] h-2.5 left-1/4 w-2.5" src="images/img_ticket.svg" alt="ticket" /><Img className="absolute bottom-[0] h-2 left-[0] w-[7px]" src="images/img_arrowdown_light_blue_400.svg" alt="arrowdown_Two" /></div></div><div
  className="absolute bottom-[0] flex flex-row gap-2 items-start justify-center left-[13%] w-1/4"
  
  
  ><Img className="h-1.5" src="images/img_arrowdown_light_blue_400.svg" alt="arrowdown_Three" /><Img className="h-2 w-2" src="images/img_camera.svg" alt="camera" /></div><Img className="absolute bottom-[0] h-[7px] left-[0] w-1.5" src="images/img_camera.svg" alt="camera_One" /></div><Img className="absolute bottom-[4%] h-1.5 left-[0]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_FiftyNine" /></div><Img className="absolute bottom-[6%] h-1.5 left-[0]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_Sixty" /></div></div></div><Img className="absolute bottom-[21%] h-1.5 left-[0]" src="images/img_vector_light_blue_400_6x4.svg" alt="vector_SixtyOne" /><Img className="absolute bottom-[9%] h-1.5 left-[10%]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_SixtyTwo" /></div></div><Img className="absolute bottom-[40%] h-1.5 left-[0]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_SixtyThree" /></div><Img className="absolute h-[5px] inset-y-[0] left-[0] my-auto w-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_SixtyFour" /></div><div
  className="absolute bottom-[11%] flex flex-row items-start justify-center left-[6%] w-[15%]"
  
  
  ><Img className="h-[9px] mb-[7px] w-2" src="images/img_vector_light_blue_400.svg" alt="vector_SixtyFive" /><Img className="h-[9px] ml-[3px] mt-[7px] w-2" src="images/img_ticket.svg" alt="ticket_One" /></div><Img className="absolute h-2 left-[0] top-[34%]" src="images/img_arrowdown_light_blue_400.svg" alt="arrowdown_Four" /></div><Img className="absolute h-1 left-[0] top-[32%] w-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_SixtySix" /></div><Img className="absolute h-[5px] left-[0] top-[28%] w-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_SixtySeven" /></div></div></div><Img className="absolute h-1 left-[0] top-[0] w-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_SixtyEight" /><Img className="absolute h-1 left-[4%] top-[23%] w-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_SixtyNine" /></div></div><Img className="absolute h-1 left-[0] top-[0] w-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_Seventy" /></div><Img className="absolute h-0.5 left-[0] top-[0]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_SeventyOne" /></div><div
  className="absolute flex flex-col items-start justify-start left-[1%] top-[17%] w-[8%]"
  

  
  ><Img className="h-[9px]" src="images/img_vector_light_blue_400_9x5.svg" alt="vector_SeventyTwo" /><Img className="h-[9px] ml-1 md:ml-[0] mt-[3px]" src="images/img_arrowdown_light_blue_400.svg" alt="arrowdown_Five" /></div><Img className="absolute h-1.5 left-[0] top-[0] w-[5px]" src="images/img_vector_light_blue_400_2x4.svg" alt="vector_SeventyThree" /></div><Img className="absolute h-0.5 left-[0] top-[0]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_SeventyFour" /></div><Img className="absolute h-[3px] left-[0] top-[0] w-1" src="images/img_vector_light_blue_400_2x4.svg" alt="vector_SeventyFive" /></div><Img className="absolute h-0.5 left-[0] top-[0]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_SeventySix" /></div></div><Img className="absolute h-2 left-[0] top-[24%]" src="images/img_vector_light_blue_400_8x4.svg" alt="vector_SeventySeven" /><Img className="absolute h-[7px] left-[0] top-[10%]" src="images/img_vector_light_blue_400_2x4.svg" alt="vector_SeventyEight" /><Img className="absolute h-1 left-[3%] top-[0] w-[5px]" src="images/img_vector_light_blue_400_4x5.svg" alt="vector_SeventyNine" /></div></div></div></div></div></div></div></div></div></div></div><Img className="absolute h-1 left-[27%] top-[0] w-[3px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_EightyEight" /><Img className="absolute h-[3px] left-[21%] top-[6%] w-0.5" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_EightyNine" /></div></div><Img className="absolute h-1 left-[35%] top-[0]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_Ninety" /><Img className="absolute h-1 left-[37%] top-[0]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_NinetyOne" /></div><Img className="absolute h-[7px] left-[22%] top-[15%] w-[7px]" src="images/img_arrowdown_light_blue_400.svg" alt="arrowdown_Six" /><Img className="absolute h-[7px] left-[29%] top-[9%] w-[7px]" src="images/img_camera.svg" alt="camera_Two" /><Img className="absolute h-1.5 left-[37%] top-[6%] w-[5px]" src="images/img_vector_light_blue_400_2x4.svg" alt="vector_NinetyTwo" /><Img className="absolute h-1 left-[41%] top-[5%]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_NinetyThree" /><div
  className="absolute flex flex-row items-start justify-center right-[36%] top-[0] w-[22%]"
  
  
  ><Img className="h-1 mt-2" src="images/img_vector_light_blue_400_1x4.svg" alt="vector_NinetyFour" /><Img className="h-1 mt-[7px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_NinetyFive" /><Img className="h-[5px] ml-2 my-[3px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_NinetySix" /><Img className="h-1 mt-0.5" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_NinetySeven" /><Img className="h-1 ml-2" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_NinetyEight" /><Img className="h-[5px] mb-2" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_NinetyNine" /><Img className="h-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundred" /></div></div><div
  className="absolute flex flex-row gap-[7px] items-start justify-center right-[41%] top-[0] w-[14%]"
  
  
  ><Img className="h-1.5 mt-[3px] w-1.5" src="images/img_camera.svg" alt="camera_Three" /><Img className="h-1.5 mb-1 w-1.5" src="images/img_arrowdown_light_blue_400.svg" alt="arrowdown_Seven" /></div><Img className="absolute h-[5px] right-[33%] top-[0] w-[5px]" src="images/img_vector_light_blue_400_8x4.svg" alt="vector_OneHundredOne" /><Img className="absolute h-1 right-[31%] top-[0]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredTwo" /></div><Img className="absolute h-1 right-[29%] top-[0] w-[3px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredThree" /></div><Img className="absolute h-[5px] right-[20%] top-[0] w-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredFour" /></div><div
  className="absolute flex flex-row items-start justify-center right-[12%] top-[0] w-[17%]"
  
  
  ><Img className="h-[5px] mb-[5px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredFive" /><Img className="h-[5px] ml-[9px] my-0.5 w-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredSix" /><Img className="h-[5px] ml-[5px] mt-[5px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredSeven" /></div></div><Img className="absolute h-[5px] right-[10%] top-[3%] w-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredEight" /></div><Img className="absolute h-1 right-[9%] top-[4%] w-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredNine" /></div><div
  className="absolute flex flex-row items-start justify-center right-[6%] top-[0] w-[22%]"
  
  
  ><Img className="h-[5px]" src="images/img_vector_light_blue_400_8x4.svg" alt="vector_OneHundredTen" /><Img className="h-1.5 ml-1 my-[3px]" src="images/img_vector_light_blue_400.svg" alt="vector_OneHundredEleven" /><Img className="h-1.5 ml-0.5 mt-[7px] w-[7px]" src="images/img_arrowdown_light_blue_400.svg" alt="arrowdown_Eight" /></div></div><Img className="absolute h-1 right-[5%] top-[5%] w-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredTwelve" /></div><Img className="absolute h-[5px] right-[3%] top-[6%] w-[5px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredThirteen" /></div><Img className="h-[5px] ml-[-1.02px] mt-5 w-1.5 z-[1]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredFourteen" /></div><Img className="absolute h-[5px] right-[0] top-[12%] w-1.5" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredFifteen" /><Img className="absolute h-1 right-[6%] top-[7%] w-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredSixteen" /></div><Img className="h-1 mt-8" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredSeventeen" /></div><Img className="absolute h-1 right-[0] top-[18%]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredEighteen" /></div><Img className="absolute h-[3px] right-[0] top-[20%]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredNineteen" /></div><div
  className="absolute flex flex-col h-[19px] justify-start right-[3%] top-[8%] w-[19px]"
  

  
  ><Img className="h-2 mr-[9px] w-[9px]" src="images/img_arrowdown_light_blue_400.svg" alt="arrowdown_Nine" /><Img className="h-[9px] md:ml-[0] ml-[9px] w-[9px]" src="images/img_ticket.svg" alt="ticket_Three" /></div><Img className="absolute h-[7px] right-[0] top-[21%] w-2" src="images/img_arrowdown_light_blue_400.svg" alt="arrowdown_Ten" /></div><Img className="absolute h-[3px] right-[0] top-[24%]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredTwenty" /></div><Img className="absolute h-1 right-[0] top-1/4" src="images/img_vector_light_blue_400_6x4.svg" alt="vector_OneHundredTwentyOne" /></div><Img className="absolute h-[3px] right-[0] top-[34%]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredTwentyTwo" /><Img className="absolute h-[3px] right-[0] top-[35%]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredTwentyThree" /><Img className="absolute h-0.5 right-[1%] top-[27%]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredTwentyFour" /><Img className="absolute h-px right-[0] top-[43%]" src="images/img_vector_light_blue_400_2x4.svg" alt="vector_OneHundredTwentyFive" /><Img className="absolute h-0.5 right-[0] top-[45%]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredTwentySix" /><Img className="absolute h-px right-[0] top-[47%]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredTwentySeven" /></div><Img className="absolute h-[9px] right-[0] top-[28%] w-2" src="images/img_camera.svg" alt="camera_Four" /><Img className="absolute h-[9px] right-[0] top-[38%]" src="images/img_arrowdown_light_blue_400.svg" alt="arrowdown_Eleven" /><div
  className="absolute bottom-[35%] flex flex-col gap-[13px] justify-start right-[0] w-[9%]"
  

  
  ><div
  className="flex flex-col items-start justify-start ml-1.5 md:ml-[0] w-3/5 md:w-full"
  

  
  ><Img className="h-1.5 w-[7px]" src="images/img_forward.svg" alt="forward" /><Img className="h-px" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredTwentyEight" /><Img className="h-[3px]" src="images/img_vector_light_blue_400_2x4.svg" alt="vector_OneHundredTwentyNine" /></div><Img className="h-1" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredThirty" /></div></div><div
  className="absolute bottom-[33%] flex flex-col gap-[13px] justify-start right-[2%] w-[8%]"
  

  
  ><Img className="h-0.5 md:ml-[0] ml-[7px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredThirtyOne" /><Img className="h-1 mr-1.5" src="images/img_vector_light_blue_400_1x4.svg" alt="vector_OneHundredThirtyTwo" /></div><Img className="absolute bottom-[27%] h-1 right-[10%]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredThirtyThree" /></div><Img className="absolute bottom-[24%] h-[5px] right-[11%] w-1.5" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredThirtyFour" /></div><Img className="absolute bottom-[23%] h-1 right-[13%] w-[5px]" src="images/img_vector_light_blue_400_4x1.svg" alt="vector_OneHundredThirtyFive" /><Img className="absolute bottom-[38%] h-2.5 right-[2%] w-[9px]" src="images/img_ticket.svg" alt="ticket_Four" /></div><Img className="absolute bottom-[30%] h-[11px] right-[12%] w-2.5" src="images/img_vector_light_blue_400.svg" alt="vector_OneHundredThirtySix" /><Img className="absolute h-[165px] inset-y-[0] left-[6%] my-auto" src="images/img_vector_light_blue_400_165x157.svg" alt="vector_OneHundredThirtySeven" /><Img className="absolute h-[199px] inset-[0] justify-center m-auto object-cover" src="images/img_vector_199x189.png" alt="vector_OneHundredThirtyEight" /></div></div></div></div></div></div><div
  className="flex flex-col items-center justify-start mb-[3197px] ml-48 md:ml-[0] mr-[182px] w-3/4 md:w-full"
  

  
  ><Text
    className="md:text-5xl text-6xl text-center text-white-A700 uppercase"
    size="txtChillaxBold60"
    
    
  >FAQ’s</Text><Text
    className="capitalize text-[19px] text-center text-white-A700"
    size="txtSatoshiRegular19"
    
    
  >Sed ut perspiciatis unde omnis iste natus error sit voluptatem</Text><div
  className="flex flex-col font-satoshi indigo_A700_82_indigo_A700_02_border11 items-center justify-end mt-[33px] outline outline-[2px] p-[52px] md:px-10 sm:px-5 rounded-[16px] w-full"
  

  
  ><Accordion preExpanded={[0]}
    className="flex flex-col gap-7 mt-[5px] w-full"
    
    
  >{[...Array(5)].map((item, index)=> <AccordionItem uuid={index} key={Math.random()} ><div
  className="flex flex-col items-center justify-start pb-[13px] px-[13px] w-full"
  

  
  ><div
  className="flex flex-col items-center justify-start mb-[13px] w-full"
  

  
  >
      <AccordionItemHeading className="w-full">
      <AccordionItemButton>
      <AccordionItemState>{({ expanded }) => <div
  className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full"
  
  
  ><Text
    className="text-[22px] text-indigo-A700 sm:text-lg md:text-xl"
    size="txtSatoshiBold22IndigoA700"
    
    
  >Sed ut perspiciatis unde omnis iste natus error sit voluptatem?</Text>{ expanded &&<Img className="h-2" src="images/img_arrowup_white_a700.svg" alt="arrowup" /> }{ !expanded &&<Img className="h-2" src="images/img_arrowdown.svg" alt="arrowdown_Twelve" /> }</div> }</AccordionItemState>
      </AccordionItemButton>
      </AccordionItemHeading><AccordionItemPanel className="w-full "><div
  className="flex flex-col items-center justify-start mx-auto"
  

  
  ><Text
    className="leading-[26.00px] text-[17px] text-white-A700_87 w-full"
    size="txtSatoshiMedium17"
    
    
  >Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</Text></div></AccordionItemPanel></div></div><Line
    className="self-center h-px bg-white-A700_66 w-full"
    
    
  /></AccordionItem> )}</Accordion></div></div></div><div
    className="absolute backdrop-opacity-[0.5] blur-[200.00px] h-[1129px] left-[0] rotate-[-167deg] top-[1%] w-1/4 sm:w-full"
      

    
  ><div
    className="h-[837px] my-auto w-3/5"
      

    
  ><Img className="h-[837px] m-auto object-cover rotate-[-135deg] w-full" src="images/img_ellipse264_4.png" alt="ellipse264" /><Img className="absolute h-[799px] inset-y-[0] left-[0] my-auto object-cover rounded-[106px]" src="images/img_rectangle26_799x212.png" alt="rectangleTwentySix" /></div><Img className="absolute h-[1129px] inset-[0] justify-center m-auto object-cover w-full" src="images/img_noise_1129x386.png" alt="noise" /></div><div
    className="absolute backdrop-opacity-[0.5] blur-[200.00px] h-[1023px] right-[0] rotate-[179deg] top-[12%] w-[21%]"
      

    
  ><div
    className="h-[860px] ml-auto my-auto w-[81%]"
      

    
  ><Img className="h-[860px] m-auto object-cover rotate-[-135deg] w-full" src="images/img_ellipse264_5.png" alt="ellipse264_One" /><Img className="absolute h-[821px] inset-[0] justify-center m-auto object-cover rounded-[127px]" src="images/img_rectangle26.png" alt="rectangleTwentySix_One" /></div><Img className="absolute h-[1023px] inset-[0] justify-center m-auto object-cover w-full" src="images/img_noise_1023x322.png" alt="noise_One" /></div><div
    className="absolute backdrop-opacity-[0.5] blur-[200.00px] bottom-[41%] h-[789px] right-[0] rotate-[179deg] w-[13%]"
      

    
  ><div
    className="h-[664px] ml-auto my-auto w-[77%]"
      

    
  ><Img className="h-[664px] m-auto object-cover rotate-[-135deg] w-full" src="images/img_ellipse264_6.png" alt="ellipse264_Two" /><Img className="absolute h-[633px] inset-[0] justify-center m-auto object-cover rounded-[78px]" src="images/img_rectangle26.png" alt="rectangleTwentySix_Two" /></div><Img className="absolute h-[789px] inset-[0] justify-center m-auto object-cover w-full" src="images/img_noise_789x208.png" alt="noise_Two" /></div><div
    className="absolute backdrop-opacity-[0.5] blur-[200.00px] h-[789px] left-[0] rotate-[179deg] top-[29%] w-[16%]"
      

    
  ><div
    className="h-[664px] my-auto w-[86%]"
      

    
  ><Img className="h-[664px] m-auto object-cover rotate-[-135deg] w-full" src="images/img_ellipse264_7.png" alt="ellipse264_Three" /><Img className="absolute h-[633px] inset-y-[0] left-[0] my-auto object-cover rounded-[96px]" src="images/img_rectangle26.png" alt="rectangleTwentySix_Three" /></div><Img className="absolute h-[789px] inset-[0] justify-center m-auto object-cover w-full" src="images/img_noise_789x243.png" alt="noise_Three" /></div></div><div
    className="absolute backdrop-opacity-[0.5] blur-[200.00px] bottom-[0] h-[789px] md:px-5 right-[0] rotate-[179deg] w-[15%]"
      

    
  ><div
    className="h-[664px] ml-auto my-auto w-4/5"
      

    
  ><Img className="h-[664px] m-auto object-cover rotate-[-135deg] w-full" src="images/img_ellipse264_8.png" alt="ellipse264_Four" /><Img className="absolute h-[633px] inset-[0] justify-center m-auto object-cover rounded-[93px]" src="images/img_rectangle26.png" alt="rectangleTwentySix_Four" /></div><Img className="absolute h-[789px] inset-[0] justify-center m-auto object-cover w-full" src="images/img_noise_789x239.png" alt="noise_Four" /></div><div
  className="absolute flex flex-col md:gap-10 gap-[150px] inset-x-[0] items-center justify-start max-w-[1403px] mx-auto md:px-5 top-[1%] w-full"
  

  
  ><div
  className="flex flex-col md:gap-10 gap-32 items-center justify-start w-full"
  

  
  ><RockitlyMarketplaceOneRowgroup1000006364 className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full"  language={<Text
    className="capitalize font-medium md:ml-[0] ml-[182px] text-base text-center text-white-A700 tracking-[1.60px]"
    
    
    
  ><span  className="text-white-A700 font-satoshi" >Marketplace</span><span  className="text-white-A700 font-satoshi" >       </span><span  className="text-indigo-A700 font-satoshi" >P2P Trading</span><span  className="text-white-A700 font-satoshi" >       </span><span  className="text-white-A700 font-satoshi" >About us</span><span  className="text-white-A700 font-satoshi" >       Finance       Contact</span></Text>} /><div
  className="flex flex-col font-chillax items-start justify-start w-[86%] md:w-full"
  

  
  ><div
  className="flex flex-col md:gap-10 gap-[74px] items-start justify-start w-[49%] md:w-full"
  

  
  ><Text
    className="md:text-5xl text-6xl text-white-A700 uppercase"
    size="txtChillaxRegular60"
    
    
  >P2p Trading</Text><div
  className="flex flex-col items-center justify-start w-full"
  

  
  ><div
  className="flex flex-col gap-2.5 items-center justify-start w-full"
  

  
  ><Text
    className="leading-[46.00px] sm:text-[29px] md:text-[31px] text-[33px] text-white-A700 uppercase w-full"
    size="txtChillaxSemibold33"
    
    
  ><span  className="text-white-A700 font-chillax text-left font-semibold" >Duis aute </span><span  className="text-indigo-A700 font-chillax text-left font-semibold" >irure dolor</span><span  className="text-white-A700 font-chillax text-left font-semibold" > in reprehenderit in voluptate</span></Text><Text
    className="capitalize leading-[31.00px] text-[19px] text-white-A700_87 w-full"
    size="txtSatoshiRegular19WhiteA70087"
    
    
  >Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam</Text></div></div></div><div
  className="flex flex-col font-satoshi gap-[30px] items-center justify-start mt-[151px] w-full"
  

  
  ><div
  className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full"
  
  
  ><div
  className="flex sm:flex-1 flex-col items-center justify-start w-1/4 sm:w-full"
  

  
  ><div
    className="h-[49px] relative w-full"
      

    
  ><Text
    className="bg-indigo-A700 capitalize h-[39px] justify-center ml-1.5 my-auto pt-1.5 sm:px-5 px-[31px] rounded-[19px] sm:text-[19px] md:text-[21px] text-[23px] text-center text-shadow-ts text-white-A700 tracking-[2.30px] w-[109px]"
    size="txtSatoshiBold23"
    
    
  >Buy</Text><Text
    className="absolute border border-indigo-A700_7e border-solid capitalize h-full inset-[0] justify-center m-auto sm:px-5 px-[35px] py-2 rounded-[24px] sm:text-[19px] md:text-[21px] text-[23px] text-center text-white-A700 tracking-[2.30px] w-max"
    size="txtSatoshiBold23"
    
    
  >Sell</Text></div></div><div
  className="flex sm:flex-1 flex-row gap-3 items-start justify-start w-[10%] sm:w-full"
  
  
  ><Img className="h-[15px] mt-0.5 w-[15px]" src="images/img_plus.svg" alt="plus" /><Text
    className="capitalize text-base text-center text-white-A700 tracking-[1.60px]"
    size="txtSatoshiMedium16WhiteA700"
    
    
  >Create ad</Text></div></div><Line
    className="bg-white-A700_6a h-px w-full"
    
    
  /><div
  className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full"
  
  
  ><div
  className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border12 flex md:flex-1 flex-col items-center justify-start p-3 rounded-[10px] w-[13%] md:w-full"
  

  
  ><div
  className="flex flex-row items-center justify-start w-full"
  
  
  ><Img className="h-[22px] w-[22px]" src="images/img_close_yellow_900.svg" alt="close" /><Text
    className="ml-[7px] text-[16.87px] text-white-A700"
    size="txtSatoshiBold1687"
    
    
  >BTC</Text><Img className="h-1 ml-[57px]" src="images/img_vector10.svg" alt="vectorTen" /></div></div><div
  className="bg-gradient  border border-solid deep_purple_A400_4c_gray_50_00_border13 flex md:flex-1 flex-col items-center justify-start ml-5 md:ml-[0] p-3 rounded-[10px] w-[16%] md:w-full"
  

  
  ><div
  className="flex flex-row items-start justify-start w-[99%] md:w-full"
  
  
  ><Text
    className="text-[16.87px] text-white-A700"
    size="txtSatoshiBold1687"
    
    
  >0.00</Text><Img className="h-[22px] ml-[39px] w-[22px]" src="images/img_group1000006492.svg" alt="group1000006492" /><Text
    className="ml-1 text-[16.87px] text-white-A700"
    size="txtSatoshiBold1687"
    
    
  >USD</Text><Img className="h-1 ml-3.5 mt-[9px]" src="images/img_vector10.svg" alt="vectorTen_One" /></div></div><Input
    name="group1000006492_One" placeholder="All Payments" className="font-bold p-0 placeholder:text-white-A700 text-[16.87px] text-left w-full" wrapClassName="flex md:flex-1 ml-5 md:ml-[0] rounded-[10px] w-[16%] md:w-full"
    
    
    suffix={<div className="mt-1.5 mb-[11px] ml-[35px] sm:w-full sm:mx-0 w-[1%] border-white-A700 border-2 border-solid"><Img className="my-auto" src="images/img_vector10.svg" alt="Vector 10" /></div>}size="sm"
variant="outline"color="deep_purple_A400_4c_gray_50_00"
  ></Input><Button
  className="flex h-[50px] items-center justify-center ml-5 md:ml-[0] w-[50px]"
  
  
  shape="round"
size="md"
variant="outline"color="deep_purple_A400_4c_gray_50_00"
><Img className="h-[29px]" src="images/img_filter.svg" alt="filter" /></Button><Button
  className="cursor-pointer flex items-center justify-center min-w-[191px] md:ml-[0] ml-[363px]"
    
    rightIcon={<div className="mt-1.5 mb-[11px] ml-[17px] border-white-A700 border-2 border-solid"><Img src="images/img_vector10.svg" alt="Vector 10" /></div>}shape="round"
size="md"
variant="outline"color="deep_purple_A400_4c_gray_50_00"
  ><div className="font-bold text-[16.87px] text-left">Price: Low - high</div></Button></div><div
  className="flex flex-col items-center justify-start w-full"
  

  
  ><div
    className="bg-indigo-A200_1e md:h-[771px] h-[792px] pt-5 relative rounded-[16px] w-full"
      

    
  ><div
  className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[14%] w-full"
  

  
  ><div
  className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full"
  
  
  ><div
    className="backdrop-opacity-[0.5] blur-[200.00px] md:h-[360px] h-[380px] mb-[136px] md:pr-10 sm:pr-5 pr-[67px] py-[67px] relative rotate-[-105deg] w-1/5 sm:w-full"
      

    
  ><div
    className="absolute h-56 inset-y-[0] left-[0] my-auto w-[71%]"
    
    
  ></div></div><div
    className="backdrop-opacity-[0.5] blur-[200.00px] h-[380px] sm:mt-0 mt-[136px] rotate-[-105deg] w-[30%]"
    
    
  ></div></div></div><div className="overflow-auto absolute inset-[0] justify-center m-auto w-[98%]" >
<ReactTable  columns={tableColumns} data={tableData.current} rowClass={"border-b border-white-A700_66"} headerClass="border-b border-white-A700_66"
   />
</div></div></div></div><div
  className="flex flex-col font-satoshi gap-[52px] items-center justify-start mt-[139px] w-full"
  

  
  ><div
  className="flex flex-col items-center justify-start w-[51%] md:w-full"
  

  
  ><div
  className="flex flex-col items-center justify-start w-full"
  

  
  ><Text
    className="md:text-5xl text-6xl text-center text-white-A700 uppercase"
    size="txtChillaxBold60"
    
    
  >Why Rockitly P2P</Text><Text
    className="capitalize text-[19px] text-center text-white-A700"
    size="txtSatoshiRegular19"
    
    
  >We always provide our best quality for users</Text></div></div><List
    className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
    
    orientation="horizontal"
    
  >{p2PTradingColumnPropList.map((props, index) => (
<React.Fragment key={`P2pTradingColumn${index}`}>
<P2pTradingColumn className="flex flex-1 flex-col indigo_A700_82_indigo_A700_02_border12 items-center justify-end outline outline-[2px] p-3.5 rounded-[16px] w-full"   {...props} />
</React.Fragment>
))}</List></div></div></div><div
  className="flex flex-col items-center justify-start w-[88%] md:w-full"
  

  
  ><div
  className="flex flex-col items-center justify-start w-full"
  

  
  ><div
    className="md:h-[684px] h-[692px] relative w-full"
      

    
  ><div
    className="md:h-[684px] h-[692px] m-auto w-full"
      

    
  ><div
    className="md:h-[684px] h-[692px] m-auto w-full"
      

    
  ><div
    className="md:h-[684px] h-[692px] m-auto w-full"
      

    
  ><div
    className="absolute h-[684px] inset-[0] justify-center m-auto w-full"
      

    
  ><div
    className="absolute bg-white-A700 h-[684px] inset-[0] justify-center m-auto rounded-[16px] w-full"
    
    
  ></div><Img className="absolute bottom-[28%] h-24 right-[0]" src="images/img_group1000006439.svg" alt="group1000006439" /></div><Img className="absolute bottom-[0] h-24 right-[0]" src="images/img_group1000006439.svg" alt="group1000006440" /><Img className="absolute bottom-[29%] h-24 left-[0]" src="images/img_group1000006439.svg" alt="group1000006438" /></div><Img className="absolute bottom-[0] h-24 left-[0]" src="images/img_group1000006439.svg" alt="group1000006441" /><div
  className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[63%]"
  

  
  ><div
  className="flex flex-col items-center justify-start w-full"
  

  
  ><div
  className="flex flex-col items-center justify-start w-full"
  

  
  ><Text
    className="md:text-5xl text-6xl text-center text-indigo-A700 uppercase"
    size="txtChillaxBold60IndigoA700"
    
    
  >Ready to get started?</Text><Text
    className="leading-[30.00px] text-center text-gray-900_87 text-xl w-[96%] sm:w-full"
    size="txtSatoshiMedium20Gray90087"
    
    
  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text></div><Img className="h-[196px] mt-[69px]" src="images/img_frame_lime_700.svg" alt="frame" /><div
  className="bg-indigo-A700 flex flex-col items-center justify-end mt-12 p-[17px] rounded-[10px] shadow-bs"
  

  
  ><Text
    className="capitalize text-center text-lg text-white-A700 tracking-[1.80px]"
    size="txtSatoshiMedium18"
    
    
  >Create Your Account</Text></div></div></div></div><Img className="absolute bottom-[15%] h-24 right-[0]" src="images/img_group1000006439.svg" alt="group1000006439_One" /></div><Img className="absolute bottom-[15%] h-24 left-[0]" src="images/img_group1000006439.svg" alt="group1000006438_One" /></div></div></div></div><P2pTradingStack className="absolute bottom-[0] md:h-[1177px] h-[872px] inset-x-[0] mx-auto md:px-5 w-full"   /></div></>);
    };

    

    export default P2ptradingPage;
  