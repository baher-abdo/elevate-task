import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 z-30 flex justify-center flex-col items-center">
      <div
        className="inline-block h-16 w-16 animate-spin rounded-full border-8 border-emerald-400 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              </span>
          </div>
          <h2 className="text-2xl font-medium text-zinc-700 mt-4">Loading...</h2>
    </div>
  );
}
