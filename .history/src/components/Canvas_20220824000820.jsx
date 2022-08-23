import React ,{ Suspense} from "react";
import Spline from "@splinetool/react-spline";

export default function Canvas() {
  const splineURL = "https://prod.spline.design/5um24XZoU2bJ42i0/scene.splinecode";
  return (
    <div className="relative w-screen h-3/4" id="home">
      <Suspense >
      <Spline scene={splineURL} />
      </Suspense>
      <div className="absolute bottom-10 w-full justify-center items-center flex">
        <div
          className="shadow-md p-4 flex items-center justify-center
         bg-zinc-900 rounded-3xl"
        >
          <p className="text-zinc-300">Press and drag to orbit</p>
        </div>
      </div>
    </div>
  );
}
