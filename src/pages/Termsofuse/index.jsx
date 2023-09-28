import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Header from "components/Header";
import P2pTradingStack from "components/P2pTradingStack";

const TermsofusePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex font-satoshi h-[2282px] justify-end mx-auto relative w-full">
        <div className="flex flex-col mt-auto mx-auto md:px-5 w-full">
          <div className="h-[864px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]">
            <Img
              className="h-[864px] m-auto object-cover w-full"
              src="images/img_rectangle40003_3.png"
              alt="rectangle40003"
            />
            <Img
              className="absolute h-[864px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_rectangle40008_3.png"
              alt="rectangle40008"
            />
          </div>
          <Img
            className="h-[5806px] mt-[-14px] mx-auto object-cover w-full z-[1]"
            src="images/img_rectangle40011_2.png"
            alt="rectangle40011"
          />
          <div className="bg-gradient1  flex flex-col items-center justify-start mb-auto mt-[-NaNpx] mx-auto p-6 sm:px-5 w-full z-[1]">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center mb-[6551px] w-full" />
          </div>
          <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] mb-[2093px] ml-auto mt-[-NaNpx] rotate-[179deg] w-[13%] z-[1]">
            <div className="h-[664px] ml-auto my-auto w-[77%]">
              <Img
                className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_16.png"
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
          <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] mb-[986px] mt-[-NaNpx] rotate-[179deg] w-[16%] z-[1]">
            <div className="h-[664px] my-auto w-[86%]">
              <Img
                className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_17.png"
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
              src="images/img_noise_1.png"
              alt="noise_One"
            />
          </div>
          <div className="backdrop-opacity-[0.5] blur-[200.00px] h-[789px] md:h-[NaNpx] mb-[560px] ml-auto mt-[-NaNpx] rotate-[179deg] w-[15%] z-[1]">
            <div className="h-[664px] ml-auto my-auto w-4/5">
              <Img
                className="h-[664px] m-auto object-cover rotate-[-135deg] w-full"
                src="images/img_ellipse264_18.png"
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
          <P2pTradingStack className="h-[872px] md:h-[NaNpx] mt-[-NaNpx] mx-auto w-full z-[1]" />
        </div>
        <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-start justify-start max-w-[1200px] mx-auto p-[55px] md:px-5 rounded-[20px] top-[7%] w-full">
          <Text
            className="md:ml-[0] ml-[22px] md:text-5xl text-6xl text-indigo-A700 uppercase"
            size="txtChillaxMedium60"
          >
            Terms of Use
          </Text>
          <Text
            className="md:ml-[0] ml-[22px] text-[15px] text-blue_gray-400_01"
            size="txtSatoshiMedium15Bluegray40001"
          >
            Effective Date: May 4, 2023
          </Text>
          <Text
            className="leading-[30.00px] mb-2 md:ml-[0] ml-[22px] mt-[38px] text-[17px] text-gray-900"
            size="txtSatoshiMedium17Gray900"
          >
            <span className="text-gray-900 font-satoshi text-left font-medium">
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
              </>
            </span>
            <span className="text-gray-900 font-satoshi text-left text-xl font-black">
              <>
                Section 1.10.32 of &quot;de Finibus Bonorum et Malorum&quot;,
                written by Cicero in 45 BC
                <br />
              </>
            </span>
            <span className="text-gray-900 font-satoshi text-left font-medium">
              <>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur.
                <br />
                <br />
              </>
            </span>
            <span className="text-gray-900 font-satoshi text-left text-xl font-black">
              <>
                1914 translation by H. Rackham
                <br />
              </>
            </span>
            <span className="text-gray-900 font-satoshi text-left font-medium">
              <>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not
                know how to pursue pleasure rationally encounter consequences
                that are extremely painful. Nor again is there anyone who loves
                or pursues or desires to obtain pain of itself, because it is
                pain, but because occasionally circumstances occur in which toil
                and pain can procure him some great pleasure. To take a trivial
                example, which of us ever undertakes laborious physical
                exercise, except to obtain some advantage from it? But who has
                any right to find fault with a man who chooses to enjoy a
                pleasure that has no annoying consequences, or one who avoids a
                pain that produces no resultant pleasure.
                <br />
                <br />
              </>
            </span>
            <span className="text-gray-900 font-satoshi text-left text-xl font-black">
              <>
                Section 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot;,
                written by Cicero in 45 BC
                <br />
              </>
            </span>
            <span className="text-gray-900 font-satoshi text-left font-medium">
              <>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
                <br />
                <br />
              </>
            </span>
            <span className="text-gray-900 font-satoshi text-left text-xl font-black">
              <>
                1914 translation by H. Rackham
                <br />
              </>
            </span>
            <span className="text-gray-900 font-satoshi text-left font-medium">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, every
              pleasure is to be welcomed and every pain avoided. But in certain
              circumstances and owing to the claims of duty or the obligations
              of business it will frequently occur that pleasures have to be
              repudiated and annoyances accepted. The wise man therefore always
              holds in these matters to this principle of selection: he rejects
              pleasures to secure other greater pleasures, or else he endures
              pains to avoid worse pains
            </span>
          </Text>
        </div>
      </div>
    </>
  );
};

export default TermsofusePage;
