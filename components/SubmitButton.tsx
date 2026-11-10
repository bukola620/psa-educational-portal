"use client";

import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  text: string;
  loadingText?: string;
};

export default function SubmitButton({
  text,
  loadingText = "Processing...",
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-lg bg-[#9c0d38] py-3.5 font-semibold text-white shadow-md hover:bg-[#2b303a] focus:outline-none focus:ring-2 focus:ring-[#9c0d38] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
    >
      {pending ? (
        <>
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <span>{loadingText}</span>
        </>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
}
