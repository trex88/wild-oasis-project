import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      // if we uild app where everyone can sign up, we would make the newly created uer
      //the new active user of the app, the nredirect them to the app
      toast.success(
        "Account succesully created! Please verify the new account from the user's email address"
      );
    },
  });
  return { signup, isLoading };
}
