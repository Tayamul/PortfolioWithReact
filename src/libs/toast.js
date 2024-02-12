import toast from "react-hot-toast";

const notify = (type, text) => {
  if (type === "dismiss") {
    toast.dismiss();
    return;
  }

  if (text) {
    switch (type) {
      case "success":
        toast.success(text);
        break;
      case "error":
        toast.error(text);
        break;
      case "loading":
        toast.loading(text);
        break;
      default:
        break;
    }
  }
};

export default notify;
