import React from "react";
import styled from "@emotion/styled";
import arrowIcon from "../../public/images/arrow-right-orange.svg";
import { GREY_2, WHITE_PRIMARY, PARAGRAPH_TEXT } from "../colors";
import { BOX_SHADOW_5 } from "../shadowDepths";

const BoxStyle = styled.div`
  height: 78px;
  width: 656px;
  box-sizing: border-box;
  border: 1px solid ${GREY_2};
  border-radius: 5px;
  background-color: ${WHITE_PRIMARY};
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    box-shadow: ${BOX_SHADOW_5};
  }
  @media only screen and (max-width: 656px) {
    height: auto;
    width: auto;
  }
`;
const IconStyle = styled.div`
  margin: 15px 33px 15px 15px;
`;

const TextStyle = styled.div`
  height: 50px;
  width: 506.84px;
  color: ${PARAGRAPH_TEXT};
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 25px;
  margin: 14px auto;
  @media only screen and (max-width: 656px) {
    height: auto;
    width: auto;
  }
`;

const ArrowStyle = styled.div`
  margin: 19px;
`;

type Props = {
  icon: string;
  text: string;
};

function InlineCTA({ icon, text }: Props) {
  return (
    <BoxStyle>
      <IconStyle>
        <img src={icon} alt="" />
      </IconStyle>
      <TextStyle>{text}</TextStyle>
      <ArrowStyle>
        <img src={arrowIcon} alt="Arrow right" />
      </ArrowStyle>
    </BoxStyle>
  );
}

export default InlineCTA;
