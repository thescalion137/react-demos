import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image from "next/image";
import css from "styled-jsx/css";

export const Container = styled("div")`
  // max-width: 1000px;
  // margin: 0px auto;
  // padding: 100px;
  // @media screen and (max-width: 2560px) {
  //   max-width: 1800px;
  // }

  // @media screen and (max-width: 1920px) {
  //   max-width: 1350px;
  // }

  // @media screen and (max-width: 1440px) {
  //   max-width: 1000px;
  // }

  // @media screen and (max-width: 1024px) {
  //   margin: 0px 20px;
  // }
  max-width: 1000px;
  margin: 120px auto;

  .header {
    font-family: "IBM Plex Sans";
    font-weight: 600;
    font-size: 16px;
    text-transform: capitalize;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 2560px) {
    max-width: 1800px;

    .header {
      font-size: 35px;
    }
  }

  @media screen and (max-width: 1920px) {
    max-width: 1350px;

    .header {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1440px) {
    max-width: 1000px;

    .header {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1024px) {
    margin: 70px 20px;
  }

  @media screen and (max-width: 500px) {
    margin: 50px 20px;

    .header {
      font-size: 18px;
      text-align: justify;
    }
  }
`;

export const BlogTitle = styled("div")`
  font-family: "Prumo Deck";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  text-transform: capitalize;
  color: #000000;
  text-align: center;
  margin-bottom: 57px;
`;

export const CardTitle = styled("div")`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  color: #ffffff;

  @media screen and (max-width: 1440px) {
    font-size: 15px;
  }
`;

export const MainCardTitle = styled("div")`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-transform: uppercase;
  color: #ffffff;
  width: 100%;
  max-width: 732px;

  @media screen and (max-width: 1440px) {
    font-size: 15px;
    max-width: 466px;
  }
`;

export const CardDate = styled("div")`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  text-transform: capitalize;
  color: #ffffff;
  margin-top: 10px;

  @media screen and (max-width: 1440px) {
    font-size: 10px;
    margin-top: 5px;
  }
`;

export const MainCardDate = styled("div")`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  text-transform: capitalize;
  color: #ffffff;
  margin-top: 10px;

  @media screen and (max-width: 1440px) {
    margin-top: 5px;
  }
`;

export const CardDescription = styled("div")`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-transform: capitalize;
  color: #ffffff;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  margin: 20px 0px 32px;

  @media screen and (max-width: 1440px) {
    margin: 5px 0px 20px;
    font-size: 12px;
  }
`;

export const MainCardDescription = styled("div")`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-transform: capitalize;
  color: #ffffff;
  width: 100%;
  max-width: 392px;
  margin-top: 40px;
  margin-bottom: 30px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: hidden;
`;

export const CardWrapper = styled("div")`
  width: 100%;
  display: grid;
  grid-gap: 16px;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 177px;
  margin-top: 57px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const BlogCard = styled("div")`
  border: none;
  background-color: #024638;
  color: #fff;
  height: 100%;
`;

export const CardImage = styled("img")`
  height: 50%;
  width: 100%;
  border: none;

  @media screen and (max-width: 1024px) {
    height: 100%;
  }
`;
export const MainCardImage = styled("img")`
  height: 60%;
  width: 100%;
  border: none;
  @media screen and (max-width: 1024px) {
    height: 100%;
  }
`;

export const CardBody = styled("div")`
  height: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  @media screen and (max-width: 1440px) {
    padding: 15px;
  }
  @media screen and (max-width: 1024px) {
    height: 100%;
  }
`;

export const MainCardBody = styled("div")`
  height: 40%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    height: 100%;
  }
`;

export const CardButton = styled("button")`
  padding: 4px 27px;
  background-color: #a4c89a;
  border: none;
  outline: none;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  color: #024638;
`;

export const QuateCard = styled("div")`
  grid-row: 1/3;
  grid-column: 3/4;
  background: #024638;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  .date-text {
    font-family: "IBM Plex Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    display: flex;
    align-items: flex-end;
    text-transform: capitalize;
    color: #ffffff;
    width: 100%;
    flex-grow: 1;
    justify-content: flex-start;
    padding: 56px;
  }
`;
export const QuateWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  // height: 100%;
  flex-grow: 2;
  padding: 30px;
`;

export const QuateOne = styled("div")`
  width: 100%;
  margin-bottom: 25px;
`;
export const QuateTwo = styled("div")`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const QuateText = styled("div")`
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: #ffffff;

  @media screen and (max-width: 1440px) {
    font-size: 30px;
  }
  @media screen and (max-width: 425px) {
    font-size: 20px;
  }
`;

export const BasicCard = styled("div")`
  @media screen and (max-width: 1024px) {
    height: 100%;
    width: 100%;
  }
`;
export const MainCard = styled("div")`
  grid-row: 2/4;
  grid-column: 1/3;
  @media screen and (max-width: 1024px) {
    height: 100%;
    width: 100%;
  }
`;
