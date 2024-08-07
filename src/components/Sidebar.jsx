import React from "react";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import {
  XMarkIcon,
  ChevronDoubleRightIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const solutions = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "/home",
    icon: ChartPieIcon,
  },
  {
    name: "Roles",
    description: "role management on your store",
    href: "/role",
    icon: ShieldCheckIcon,
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
  { name: "Contact admin", href: "#", icon: PhoneIcon },
];
function SideBar(props) {
  return (
    <div className="md:block h-screen w-screen max-w-16 md:max-w-40 lg:max-w-xs flex-auto overflow-hidden bg-white dark:bg-slate-800 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
      <div className="md:p-1 relative h-5/6 w-full">
        <div className="rounded-0 md:rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-600">
          <Link
            to={"/home"}
            className="font-semibold text-gray-900 dark:text-slate-100 text-center text-md lg:text-4xl"
          >
            <div>POS</div>
          </Link>
        </div>
        {solutions.map((item) => (
          <div
            key={item.name}
            className={`group relative flex md:gap-x-6 rounded-none md:rounded-lg p-1 ${
              props.page === item.name
                ? "bg-gray-50 dark:bg-gray-600"
                : "hover:bg-gray-50 dark:hover:bg-gray-600"
            }`}
          >
            <div
              className={`mt-1 flex h-11 w-11 md:flex-none items-center justify-center rounded-lg ${
                props.page === item.name
                  ? "md:bg-white md:dark:bg-slate-500"
                  : "md:bg-gray-50 dark:md:bg-slate-600 group-hover:md:bg-white group-hover:md:dark:bg-slate-500"
              } `}
            >
              <item.icon
                aria-hidden="true"
                className="h-6 w-6 text-gray-600 dark:text-slate-100 group-hover:text-indigo-600 group-hover:dark:text-slate-50"
              />
            </div>
            <div>
              <Link
                to={item.href}
                className="font-medium lg:font-semibold text-gray-900 dark:text-slate-100 hidden md:block md:mt-3 md:-mx-4"
              >
                {item.name}
                <span className="absolute inset-0" />
              </Link>
              <p className="mt-1 text-gray-600 dark:text-slate-400 hidden lg:block">
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
              className="flex md:flex-col lg:flex-row items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100 dark:hover:bg-slate-600"
            >
              <item.icon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400 dark:text-slate-200"
              />
              <div className="text-xs font-light lg:font-semibold hidden md:block text-gray-600 dark:text-slate-200 truncate">
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
