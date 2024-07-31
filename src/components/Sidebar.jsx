import React from "react";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import { XMarkIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
const solutions = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
function SideBar() {
  return (
    <div className="md:block h-screen w-screen max-w-16 md:max-w-xs flex-auto overflow-hidden bg-white dark:bg-slate-800 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
      <div className="md:p-1 relative h-5/6 w-full">
        <div className="rounded-0 md:rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-600">
          <div className="font-semibold text-gray-900 dark:text-slate-100 text-center text-md lg:text-4xl">
            <a href={"/"}>POS</a>
          </div>
        </div>
        {solutions.map((item) => (
          <div
            key={item.name}
            className="group relative flex md:gap-x-6 rounded-none md:rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <div className="mt-1 flex h-11 w-11 md:flex-none items-center justify-center rounded-lg md:bg-gray-50 dark:md:bg-slate-600 group-hover:md:bg-white group-hover:md:dark:bg-slate-500">
              <item.icon
                aria-hidden="true"
                className="h-6 w-6 text-gray-600 dark:text-slate-100 group-hover:text-indigo-600 group-hover:dark:text-slate-50"
              />
            </div>
            <div>
              <a
                href={item.href}
                className="font-semibold text-gray-900 dark:text-slate-100 hidden md:block"
              >
                {item.name}
                <span className="absolute inset-0" />
              </a>
              <p className="mt-1 text-gray-600 dark:text-slate-400 hidden md:block">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="relative h-1/6 w-full">
        <div className="absolute inset-x-0 bottom-0 grid md:grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:bg-slate-800">
          {callsToAction.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100 dark:hover:bg-slate-600"
            >
              <item.icon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400 dark:text-slate-200"
              />
              <div className="hidden md:block text-gray-600 dark:text-slate-200">
                {item.name}
              </div>
            </a>
          ))}
          <div className="flex cursor-pointer md:hidden items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-600">
            <span className="sr-only">Open main menu</span>
            <ChevronDoubleRightIcon
              aria-hidden="true"
              className="block h-6 w-6"
            />
            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
