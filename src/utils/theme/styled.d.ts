import "styled-components";
import { ColorsTypes, FontTypes } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
    font: FontTypes;
  }
}
