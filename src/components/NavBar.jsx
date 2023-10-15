import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const navigation = [
  { name: "Inicio", href: "/", current: false },
  { name: "Sobre mí", href: "/sobre-mi", current: false },
  { name: "Habilidades", href: "/habilidades", current: false },
  { name: "Proyectos", href: "/proyectos", current: false },
  { name: "Contacto", href: "/contacto", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure
      as="nav"
      className="bg-custom-azul sticky quick top-0 z-50 w-full border-b-2 border-custom-oro_2"
    >
      {({ open }) => (
        <>
          <div
            className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10"
          >
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-custom-oro hover:bg-custom-oro hover:text-custom-azul focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <img
                      className="hidden w-auto sm:inline md:h-12 lg:h-20 lg:block my-1"
                      src="/imagen/logo2.PNG"
                      alt="logo"
                    />
                  </Link>
                </div>

                <div className="container flex items-center">
                  <div className="hidden md:inline flex items-center sm:ml-20 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-custom-oro hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-md lg:text-xl font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-custom-oro hover-bg-gray-700 hover-text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

