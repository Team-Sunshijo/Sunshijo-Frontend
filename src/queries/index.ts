import { useMutation } from "@tanstack/react-query";
import { postAdminSignup, SignupType } from "../utils/api/signup";

export const useAdminSignup = () =>
  useMutation((data: SignupType) => postAdminSignup(data), {});
