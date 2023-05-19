"use client";
import { revalidatePath } from "next/dist/server/web/spec-extension/revalidate-path";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function CustomSubmitButton() {
  const { pending } = useFormStatus();
  function redirectToAdminPage() {
    window.location.href = "http://localhost:3000/shop";
  }
  return (
    <button
      disabled={pending}
      type="submit"
      onClick={redirectToAdminPage}
      className="bg-blue-600 disabled:bg-gray-500 inline-flex items-center justify-center rounded-full py-4 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
    >
      Save
    </button>
  );
}
