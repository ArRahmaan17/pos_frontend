import React from "react";

function filterTable(props) {
  return (
    <div className="w-full flex items-center justify-between mb-2">
      <div className="flex gap-1">
        <div>
          {props.lengthMenu ? (
            <select className="py-1 px-1 bg-white border border-slate-300 rounded-md">
              {props.lengthMenu.map((value, index) => {
                return (
                  <option value={value} key={index}>
                    {value}
                  </option>
                );
              })}
            </select>
          ) : (
            <select className="py-1 px-1 bg-white dark:bg-slate-500 dark:text-slate-50 border border-slate-300 rounded-md">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          )}
        </div>
        <div className="hidden sm:inline-block dark:text-slate-50">
          entries per page
        </div>
        <div className="inline-block sm:hidden dark:text-slate-50">entries</div>
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Filter data"
          className="border border-slate-300 dark:bg-slate-500 dark:text-slate-50 placeholder:dark:text-slate-400 rounded px-2"
        />
      </div>
    </div>
  );
}

export default filterTable;
