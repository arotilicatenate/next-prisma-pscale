"use client";

import { redirectToPage } from "@/services/utils/utils";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type Data = {
  content: string;
  goToPage: string;
  alertMessage: string;
};
export const CustomButton: React.FC<Data> = ({
  content,
  goToPage,
  alertMessage,
}) => {
  const { pending } = useFormStatus();

  function clickHandler() {
    redirectToPage(goToPage);

    if (alertMessage) alert(alertMessage);
  }

  return (
    <button
      disabled={pending}
      type="submit"
      onClick={clickHandler}
      className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center justify-center rounded-full py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
    >
      {content}
    </button>
  );
};
