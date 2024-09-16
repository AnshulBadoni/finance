"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const MobileNav = ({ user }:MobileNavProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <section>
      <div className="text-center">
        <button onClick={toggleDrawer}>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </button>
      </div>

      <div
        id="drawer"
        className={cn(
          "fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 shadow-md",
          { "-translate-x-full": !isOpen }
        )}
      >
        <Link href="/" className="cursor-pointer flex item-center gap-1 px-4">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="vivekfinance"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Finance
          </h1>
        </Link>

        <div className="mobilenav-sheet">
          <div id="sidebar-close" >
            <nav className="flex flex-col h-full gap-6 pt-16 text-white">
              {sidebarLinks.map((item) => {
                const isActive =
                  pathname === item.route ||
                  pathname.startsWith(`${item.route}/`);

                return (
                  <div key={item.route} onClick={() => closeDrawer()} >
                    <Link
                      href={item.route}
                      key={item.label}
                      className={cn("mobilenav-sheet_close w-full", {
                        "bg-bank-gradient": isActive,
                      })}
                    >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                        />
                      <p
                        className={cn("text-16 font-semibold text-black-2", {
                          "!text-white": isActive,
                        })}
                      >
                        {item.label}
                      </p>
                    </Link>
                  </div>
                );
              })}
            </nav>
          </div>
          <Footer user={user} type="mobile" />
        </div>
      </div>
    </section>
  );
};

export default MobileNav;
