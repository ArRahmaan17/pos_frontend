import React from "react";
function AnalyticCard(props) {
  return (
    <>
      <div
        className={`flex flex-col ${props.size ?? "w-full"} ${
          props.color ? `bg-${props.color}-500/30` : "bg-orange-500/30"
        } dark:${
          props.color ? `bg-${props.color}-700` : "bg-orange-700"
        } dark:shadow-slate-50/20 dark:shadow-2xl rounded-md shadow-lg h-fit`}
      >
        <div className="w-full flex justify-between pt-3 px-3 h-fit items-center">
          <div className="text-xs font-light md:font-semibold w-full lg:w-2/3 text-slate-900 dark:text-slate-50 lg:font-bold truncate">
            {props.title ?? "Card Title"}
          </div>
          {props.icon ? (
            <div
              className={`sm:hidden lg:block ${
                props.color ? `bg-${props.color}-50/25` : "bg-orange-50/25"
              } shadow-md shadow-inherit dark:${
                props.color ? `bg-${props.color}-50/25` : "bg-orange-50/25"
              } rounded-md`}
            >
              <props.icon className="h-6 w-6 m-2 text-slate-900 dark:text-slate-50" />
            </div>
          ) : (
            <div
              className={`sm:hidden lg:block ${
                props.color ? `bg-${props.color}-50/25` : "bg-orange-50/25"
              } shadow-md shadow-inherit dark:${
                props.color ? `bg-${props.color}-50/25` : "bg-orange-50/25"
              } rounded-md`}
            >
              <div className="h-6 w-6 m-2 text-slate-900 dark:text-slate-50 text-xs text-center">
                Icon
              </div>
            </div>
          )}
        </div>
        <div className="w-full flex flex-col pt-0 sm:pt-4 px-3 h-fit items-start mb-3 gap-y-2 md:gap-y-5">
          <div className="text-base md:text-md font-semibold lg:text-xl w-full text-slate-900 dark:text-slate-50">
            {props.valueChange ?? "card body"}
          </div>
          <div className="text-xs/tight font-light w-full text-slate-900 dark:text-slate-300 truncate">
            {props.description ?? "*card Description"}
          </div>
        </div>
      </div>
    </>
  );
}

export default AnalyticCard;
