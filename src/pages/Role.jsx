import React, { useState } from "react";
import SideBar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import FilterTable from "../components/FilterTable";
import FooterTable from "../components/FooterTable";
import { PlusIcon } from "@heroicons/react/24/outline";
function Role() {
  let [modalOpen, setModalOpen] = useState(false);
  let [pagination, setPagination] = useState(1);
  const handlePagingChange = () => {};
  return (
    <div className="App overflow-hidden">
      <div className="flex flex-row gap-0">
        <SideBar page={"Roles"} />
        <div className="flex flex-col w-full dark:bg-slate-600">
          <Navbar page={"Roles"} />
          <div className="px-2 flex flex-col gap-x-5 gap-y-1 md:gap-y-0 dark:bg-slate-800 m-2 border border-y-indigo-100 dark:border-0 rounded-md shadow-md dark:shadow-none p-5">
            <div className="w-full flex justify-end mb-3 items-center">
              <button
                onClick={() => {
                  setModalOpen((modalOpen) => !modalOpen);
                }}
                className="px-3 py-2 hover:bg-green-500 bg-green-600 rounded text-slate-50"
              >
                <PlusIcon className="h-6 w-6 inline-block" /> Add Role
              </button>
            </div>
            <FilterTable />
            <table className="w-full">
              <thead>
                <tr className="border-y-2 border-slate-300">
                  <th className="py-2 text-start dark:text-slate-50">No</th>
                  <th className="py-2 text-start dark:text-slate-50">Role</th>
                  <th className="py-2 text-start dark:text-slate-50">
                    Description
                  </th>
                  <th className="py-2 text-start dark:text-slate-50">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-slate-300">
                  <td className="py-2 dark:text-slate-50">1</td>
                  <td className="py-2 dark:text-slate-50">2</td>
                  <td className="py-2 dark:text-slate-50">3</td>
                  <td className="py-2 dark:text-slate-50">4</td>
                </tr>
              </tbody>
              <FooterTable handleStateChange={setPagination} />
            </table>
            {/* modal create role */}
            <div
              className="relative z-10"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
            >
              <div
                className={`${
                  modalOpen ? "fixed" : "hidden"
                } inset-0 bg-gray-500 bg-opacity-75 transition-opacity`}
                aria-hidden="true"
              ></div>

              <div
                className={`${
                  modalOpen ? "fixed" : "hidden"
                } inset-0 z-10 w-screen overflow-y-auto`}
              >
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <div className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 w-full max-w-lg">
                    <div className="bg-white dark:bg-slate-600 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:flex-col sm:items-start">
                        <div className=" mx-auto flex h-12 w-12 sm:w-full flex-shrink-0 items-center justify-center sm:mx-0 sm:h-10 sm:gap-x-5">
                          <div className="rounded-full bg-green-100">
                            <PlusIcon className="h-12 w-12 text-green-600" />
                          </div>
                          <div className="hidden sm:block sm:text-2xl font-semibold">
                            Add Role
                          </div>
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <form>
                            <div className="space-y-12">
                              <div className="pb-7">
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:gap-y-8">
                                  <div className="col-span-1">
                                    <label
                                      htmlFor="role"
                                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100"
                                    >
                                      Role
                                    </label>
                                    <div className="mt-2">
                                      <input
                                        id="role"
                                        name="role"
                                        type="text"
                                        autoComplete="off"
                                        className="px-3 block w-full rounded-md border-0 py-1.5 dark:bg-slate-500 text-gray-900 dark:text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-0 sm:text-sm sm:leading-6"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-span-1">
                                    <label
                                      htmlFor="description"
                                      className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-100"
                                    >
                                      Description
                                    </label>
                                    <div className="mt-2">
                                      <textarea
                                        id="description"
                                        name="description"
                                        type="text"
                                        rows={3}
                                        autoComplete="off"
                                        className="resize-none px-3 block w-full rounded-md border-0 py-1.5 dark:bg-slate-500 text-gray-900 dark:text-slate-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 dark:focus:ring-0 sm:text-sm sm:leading-6"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 dark:bg-slate-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                        onClick={() => setModalOpen((modalOpen) => !modalOpen)}
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setModalOpen((modalOpen) => !modalOpen)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Role;
