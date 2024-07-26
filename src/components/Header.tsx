import { FaAngleRight, FaBars } from "react-icons/fa6";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  PopoverGroup,
} from "@headlessui/react";

import { FaHome } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => (
  <>
    <header className="bg-black">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Solera</span>
            <Image alt="solera logo" src="/logo.webp" width={110} height={50} />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="h-6 w-6 text-white" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Dashboard
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-white bg-blue-400 px-2 rounded-xl"
          >
            Servicios
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Ventas
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Stock
          </a>
        </PopoverGroup>
        <Menu
          as="div"
          className="relative ml-3 hidden lg:flex lg:flex-1 lg:justify-end"
        >
          <div>
            <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <Image
                alt="user avatar"
                src="/user.avif"
                width={36}
                height={32}
                className="rounded-full"
              />
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-10 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-0 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
              >
                Your Profile
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
              >
                Settings
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
              >
                Sign out
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </nav>
    </header>
    <div className="relative py-5 max-w-7xl mx-auto lg:px-8">
      <nav className="flex justify-between" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="#"
              className="text-gray-700 dark:text-white text-base font-urbanist font-semibold hover:text-gray-900 inline-flex items-center"
            >
              <FaHome />
            </Link>
          </li>
          <li className="ml-2">
            <div className="flex items-center">
              <FaAngleRight className="text-gray-700 dark:text-white" />
              <Link
                href="#"
                className="text-gray-700 dark:text-white text-base font-urbanist font-semibold hover:text-gray-900 ml-1 md:ml-2"
              >
                Servicios
              </Link>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  </>
);

export default Header;
