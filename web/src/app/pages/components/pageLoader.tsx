import { Spinner } from "@nextui-org/react";
import { useState, useEffect } from "react";

const PageLoader = ({ loadingText }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center h-screen w-screen fixed top-0 left-0 z-50`}
    >
      <Spinner size="lg" />
      {loadingText && <p className="mt-4 text-gray-600">{loadingText}</p>}
    </div>
  );
};

export default PageLoader;
