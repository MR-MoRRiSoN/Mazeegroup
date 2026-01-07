"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("Error");

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center px-4">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("title")}</h2>
        <p className="text-lg text-gray-600 mb-8">{t("message")}</p>
        <button
          onClick={() => reset()}
          className="px-8 py-4 bg-[#032685] text-white rounded-lg hover:bg-[#021d5a] transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          {t("retry")}
        </button>
      </div>
    </div>
  );
}
