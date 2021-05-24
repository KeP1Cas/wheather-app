import styled from "styled-components";
import { DESIGN_VARS } from "../../constants";

const WeatherCardContainer = styled.div<{ isWide?: boolean }>`
  background-color: ${DESIGN_VARS.color.blue};
  box-shadow: 0px 4px 4px rgba(4, 5, 73, 0.25),
    14px 14px 20px rgba(5, 6, 114, 0.2);
  border-radius: 8px;
  width: ${({ isWide }) => (isWide ? "544px" : "174px")};
  margin-right: 10px;

  @media (max-width: ${DESIGN_VARS.deviceFormats.smallTablet}) {
    max-height: unset;
    width: ${({ isWide }) => (isWide ? "252px" : "174px")};
  }

  :last-child {
    margin-right: 0;
  }

  img {
    margin: 0 auto;
    width: ${({ isWide }) => (isWide ? "160px" : "120")};
  }
`;

const WeatherCardContent = styled.div`
  height: 238px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const WeatherCardDate = styled.div`
  color: ${DESIGN_VARS.color.white};
  display: flex;
  font-family: UbuntuBold;
`;

const WeatherCardImg = styled.img``;

const WeatherCardTemp = styled.div`
  color: ${DESIGN_VARS.color.white};
  display: flex;
  justify-content: flex-end;
  font-family: UbuntuBold;
  font-size: 32px;
`;

export {
  WeatherCardContainer,
  WeatherCardContent,
  WeatherCardDate,
  WeatherCardImg,
  WeatherCardTemp,
};
