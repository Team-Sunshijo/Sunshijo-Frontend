import { DefaultTheme } from "styled-components";

const colors = {
  Main800: "#FFC94A",
  Main: "#FFBD21",
  Main900: "#FCB203",
  Sub: "#242424",
  Black: "#000000",
  Gray900: "#1A1A1A",
  Gray800: "#333333",
  Gray700: "#4D4D4D",
  Gray600: "#666666",
  Gray500: "#808080",
  Gray400: "#999999",
  Gray300: "#E8E8E8",
  Gray200: "#F0F0F0",
  Gray100: "#F7F7F7",
  Gray50: "#FBFBFB",
  White: "#FFFFFF",
  Green: "#04DF00",
  Green100: "#04C900",
  Red: "#E84045",
  Red100: "#D13A3E",
};

const font = {
  Bold40: `900 2.5rem 'Pretendard'`,
  Bold32: `900 2rem 'Pretendard'`,
  SemiBold32: `700 2rem 'Pretendard'`,
  SemiBold24: `700 1.5rem 'Pretendard'`,
  SemiBold20: `700 1.3rem 'Pretendard'`,
  SemiBold18: `700 1.125rem 'Pretendard'`,
  SemiBold16: `700 1rem 'Pretendard'`,
  Regular32: `400 2rem 'Pretendard'`,
  Regular24: `400 1.5rem 'Pretendard'`,
  Regular16: `400 1rem 'Pretendard'`,
  Regular14: `400 0.875rem 'Pretendard'`,
  Regular12: `400 0.75rem 'Pretendard'`,
  Medium16: `500 1rem 'Pretendard'`,
  Medium14: `500 0.875rem 'Pretendard'`,
  Medium12: `500 0.75rem 'Pretendard'`,
};

export type ColorsTypes = typeof colors;
export type FontTypes = typeof font;

const theme: DefaultTheme = {
  colors,
  font,
};

export default theme;
