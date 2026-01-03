import {
  ClipboardCopyIcon,
  Laptop,
  LucideVenetianMask,
  MessageCircleMore,
} from "lucide-react";

const GridCard = () => {
  return (
    <>
      <div className="w-md h-[500px] bg-white rounded-4xl p-1 shadow-m">
        <div
          className="w-full h-80 rounded-t-4xl rounded-b-lg flex justify-end items-center relative"
          style={{
            background:
              "linear-gradient(318deg, oklch(0.95 0.02 254.32), transparent)",
          }}
        >
          <div
            className="w-[80%] h-46 border-t border-b border-l border-neutral-300 p-2 rounded-3xl"
            style={{
              maskImage:
                "linear-gradient(to left, transparent, black 90%), linear-gradient(to top, transparent, black 30%)",
              WebkitMaskImage:
                "linear-gradient(to left, transparent, black 90%), linear-gradient(to top, transparent, black 30%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          >
            <div className="w-full h-full bg-white rounded-3xl p-4 shadow-s">
              <h1 className="text-md font-bold text-gray-900">Activity</h1>
              <div className="mt-3 w-full h-full flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <ClipboardCopyIcon className="h-6 w-6 text-blue-500" />
                  <div className="w-full flex flex-col gap-1">
                    <div className="w-16 bg-neutral-300 rounded-4xl py-1"></div>
                    <div className="w-38 bg-neutral-200 rounded-4xl py-1"></div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <MessageCircleMore className="h-6 w-6 text-green-500" />
                  <div className="w-full flex flex-col gap-1">
                    <div className="w-16 bg-neutral-300 rounded-4xl py-1"></div>
                    <div className="w-38 bg-neutral-200 rounded-4xl py-1"></div>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <Laptop className="h-6 w-6 text-red-300" />
                  <div className="w-full flex flex-col gap-1">
                    <div className="w-16 bg-neutral-300 rounded-4xl py-1"></div>
                    <div className="w-38 bg-neutral-200 rounded-4xl py-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 w-full h-full">
          <button className="flex items-center gap-2 border rounded-lg border-neutral-300 py-1 px-2 text-sm font-medium my-4 border-dashed">
            <LucideVenetianMask className="h-4 w-4 text-blue-300" />
            RealTime Events
          </button>
          <h1 className="text-lg font-bold text-gray-900 my-1">
            Events Update
          </h1>
          <p className="text-sm text-neutral-500">
            This is realtime SAAS dashboard where you can track evens of your
            application in realtime you will get all events what you want.
          </p>
        </div>
      </div>
    </>
  );
};

export default GridCard;
