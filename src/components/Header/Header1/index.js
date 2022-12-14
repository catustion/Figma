import React from "react";

import { Stack, Column, Row, Text, Input, Img, Line } from "components";
import { CloseSVG } from "../../../assets/images/index.js";

const Header1 = (props) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <Stack className="xl:h-[104px] 2xl:h-[117px] 3xl:h-[140px] lg:h-[83px] w-[100%]">
          <Column className="absolute bg-indigo_900 items-center justify-end 2xl:p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px] w-[100%]">
            <Column className="items-center justify-start mt-[3px] w-[81%]">
              <Column className="justify-start w-[100%]">
                <Row className="items-start w-[100%]">
                  <Text
                    className="cursor-pointer hover:font-normal font-ptsans lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-white_A700_99 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    HalalHoliday{" "}
                  </Text>
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-normal font-ptsans not-italic p-[0] lg:text-[11px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-white_A700_99 text-white_A700_99 w-[100%]"
                    wrapClassName="2xl:ml-[528px] 2xl:mt-[7px] 3xl:ml-[633px] 3xl:mt-[8px] flex lg:ml-[375px] lg:mt-[4px] w-[23%] xl:ml-[469px] xl:mt-[6px]"
                    name="Searchbar"
                    placeholder="Search for reservations"
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          className="cursor-pointer lg:w-[17px] lg:h-[18px] lg:ml-[24px] lg:mr-[7px] xl:w-[22px] xl:h-[23px] xl:ml-[31px] xl:mr-[8px] 2xl:w-[25px] 2xl:h-[26px] 2xl:ml-[35px] 2xl:mr-[10px] 3xl:w-[30px] 3xl:h-[31px] 3xl:ml-[42px] 3xl:mr-[12px] my-[auto]"
                          onClick={() => setInputvalue("")}
                          color="#99ffffff"
                        />
                      ) : (
                        <Img
                          src="images/img_search.svg"
                          className="cursor-pointer lg:w-[17px] lg:h-[18px] lg:ml-[24px] lg:mr-[7px] xl:w-[22px] xl:h-[23px] xl:ml-[31px] xl:mr-[8px] 2xl:w-[25px] 2xl:h-[26px] 2xl:ml-[35px] 2xl:mr-[10px] 3xl:w-[30px] 3xl:h-[31px] 3xl:ml-[42px] 3xl:mr-[12px] my-[auto]"
                          alt="search"
                        />
                      )
                    }
                    size="smSrc"
                    variant="srcOutlineBlack9003f"
                  ></Input>
                  <Column className="items-center justify-start lg:ml-[13px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[7%]">
                    <Img
                      src="images/img_mdihomegroup.svg"
                      className="lg:h-[21px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:w-[20px] xl:w-[25px] 2xl:w-[29px] 3xl:w-[34px]"
                      alt="mdihomegroup"
                    />
                    <Text
                      className="cursor-pointer hover:font-normal font-normal font-ptsans lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic text-white_A700_99 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Properties
                    </Text>
                  </Column>
                  <Column className="items-center justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[5%]">
                    <Img
                      src="images/img_user_29X29.svg"
                      className="lg:h-[21px] xl:h-[26px] 2xl:h-[30px] 3xl:h-[35px] lg:w-[20px] xl:w-[25px] 2xl:w-[29px] 3xl:w-[34px]"
                      alt="user"
                    />
                    <Text
                      className="cursor-pointer hover:font-normal font-normal font-ptsans mt-[3px] not-italic text-white_A700_99 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Account
                    </Text>
                  </Column>
                </Row>
                <Row className="items-start xl:ml-[117px] 2xl:ml-[132px] 3xl:ml-[158px] lg:ml-[93px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[40%]">
                  <Text
                    className="font-bold font-ptsans mt-[1px] text-white_A700_99 w-[auto]"
                    variant="body4"
                  >
                    Reviews
                  </Text>
                  <Text
                    className="font-bold font-ptsans lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] mt-[1px] text-white_A700_99 w-[auto]"
                    variant="body4"
                  >
                    Reservations
                  </Text>
                  <Text
                    className="font-bold font-ptsans lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] mt-[3px] text-white_A700_99 w-[auto]"
                    variant="body4"
                  >
                    Group Oppurtunity Center
                  </Text>
                  <Row className="items-start justify-evenly lg:ml-[16px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[27px] w-[25%]">
                    <Text
                      className="font-bold font-ptsans mt-[4px] text-white_A700_99 w-[auto]"
                      variant="body4"
                    >
                      Bulk Editting
                    </Text>
                    <Text
                      className="bg-light_green_A700_84 font-bold font-ptsans mb-[1px] px-[3px] py-[1px] text-white_A700_99 w-[33px]"
                      variant="body4"
                    >
                      New
                    </Text>
                  </Row>
                </Row>
              </Column>
            </Column>
          </Column>
          <Column className="absolute bottom-[0] items-center justify-start left-[11%] w-[8%]">
            <Text
              className="bg-bluegray_100_6c font-bold font-ptsans 2xl:pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] lg:pt-[11px] xl:pt-[14px] 2xl:pt-[16px] 3xl:pt-[19px] lg:px-[4px] xl:px-[5px] 2xl:px-[6px] 3xl:px-[7px] text-white_A700_99 w-[115px]"
              variant="body4"
            >
              Group homepage
            </Text>
            <Line className="bg-blue_600 h-[3px] mt-[2px] w-[100%]" />
          </Column>
        </Stack>
      </header>
    </>
  );
};

export default Header1;
