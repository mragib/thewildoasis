import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

function useCreateUser() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success("A new user is created.Please verify the mail.");
    },
    onError: () => {
      toast.error("Sign up failed");
    },
  });

  return { signup, isLoading };
}

export default useCreateUser;
