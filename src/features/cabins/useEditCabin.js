import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addAndEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => addAndEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("The cabin has been updated");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editCabin };
}

export default useEditCabin;
