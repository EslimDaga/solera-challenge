"use client";

import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  PopoverGroup,
} from "@headlessui/react";
import { FaBars, FaRightFromBracket, FaXmark } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: "Electricidad",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <>
      <header className="bg-black">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Solera</span>
              <Image
                alt="solera logo"
                src="/logo.webp"
                width={110}
                height={50}
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
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
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Solera</span>
                <Image
                  alt="solera logo"
                  src="/logo.webp"
                  width={110}
                  height={50}
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <FaXmark className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
                  >
                    Servicios
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
                  >
                    Ventas
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black"
                  >
                    Stock
                  </a>
                </div>
                <div className="absolute bottom-6">
                  <Link
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-50 bg-white"
                  >
                    Cerrar sesión
                    <FaRightFromBracket className="inline-block ml-2 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <main className="max-w-7xl mx-auto">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="border max-h-52 rounded-xl shadow-md flex flex-col justify-between"
                >
                  <h2 className="text-xl font-bold mb-2 mx-4 mt-4">
                    {service.title}
                  </h2>
                  <p className="mb-4 mx-4">
                    {service.description.length <= 50
                      ? service.description
                      : `${service.description.slice(0, 50)}...`}
                  </p>
                  <div className="flex justify-between bg-gray-100 w-full p-4 rounded-b-xl">
                    <button className="text-blue-500 hover:underline">
                      Editar
                    </button>
                    <button className="text-red-500 hover:underline">
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-1 border p-4 rounded-xl shadow-md">
              <h2 className="text-xl font-bold mb-4">Servicio</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full border-2 border-gray-300 rounded-xl shadow-sm p-2 focus:outline-none focus:ring-black focus:border-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Descripción
                  </label>
                  <textarea
                    className="mt-1 block w-full border-2 border-gray-300 rounded-xl shadow-sm p-2 focus:outline-none focus:ring-black focus:border-black"
                    rows={5}
                    maxLength={100}
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="border-2 text-green-500 border-green-500 px-4 py-2 rounded-xl hover:bg-green-500 hover:text-white focus:outline-none"
                  >
                    Grabar
                  </button>
                  <button
                    type="button"
                    className="border-2 text-red-500 border-red-500 px-4 py-2 rounded-xl hover:bg-red-600 hover:text-white focus:outline-none"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
