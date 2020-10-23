import { toast } from "react-toastify";

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN": { // bisa tidak pakai kurung kurawal
      toast("Welcome back..");
      return state;
    }
    case "SIGN_IN_ERR": {
      toast.error("Sign in error...");
      return state;
    }

    case "SIGN_OUT": {
        toast("You signed out..");
        return state;
    }
    default:
      return state;
  }
};

export default authReducer;
