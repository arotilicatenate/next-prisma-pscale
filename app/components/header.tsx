import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-between pt-2">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center   pb-6 pt-8  lg:static lg:w-auto  lg:rounded-xl lg:p-4">
          <a href="/shop">
            <button className="px-4 py-2 mr-4 bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 rounded-lg">
              Shop
            </button>
          </a>
          <a href="/about">
            {" "}
            <button className="px-4 py-2 mr-4 bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 rounded-lg">
              About
            </button>
          </a>
          <a href="/contacts">
            {" "}
            <button className="px-4 py-2 mr-4 bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 rounded-lg">
              Contacts
            </button>
          </a>
          <a href="/admin">
            <button className="px-4 py-2 bg-green-400 hover:bg-green-300 focus:bg-green-300 rounded-lg">
              Admin
            </button>
          </a>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            rel="noopener noreferrer"
          >
            By{" "}
            <img
              src="/lava_international.png"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
