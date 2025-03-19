// File utama (misalnya SidebarDemo.tsx)
"use client";
import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/app/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconSun,
  IconMoon,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/app/lib/utils";
import Home from "@/app/page/home"; // Impor Home dari lokasi baru

export default function SidebarDemo() {
  const links = [
    {
      label: "Home",
      href: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Member",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Alma'surat",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const Logo = () => {
    return (
      <Link
        href="#"
        className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
      >
        <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg font-medium whitespace-pre text-black dark:text-white"
        >
          Arkhosophia
        </motion.span>
      </Link>
    );
  };

  const LogoIcon = () => {
    return (
      <Link
        href="#"
        className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
      >
        <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
      </Link>
    );
  };

  return (
    <div
      className={cn(
        "flex w-full h-full flex-col overflow-hidden bg-gray-100 md:flex-row dark:bg-neutral-800"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <Home />
    </div>
  );
}
