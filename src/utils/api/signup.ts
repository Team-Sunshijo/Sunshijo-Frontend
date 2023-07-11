import Uri from "../../constant/uri";
import { instance } from "../axios";

export interface SignupType {
  account_id: string;
  password: string;
  name: string;
  sign_up_code: string;
}

export const postAdminSignup = async (data: SignupType) => {
  return await instance.post(Uri.signup.get(), data);
};
