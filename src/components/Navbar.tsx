"use client";

import { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

import Link from "next/link";

import { Input } from "./ui/input";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"

import {
  Moon,
  Sun,
  MessageCirclePlus,
  Menu,
  UsersRound,
  Search,
} from "lucide-react";

import { themeStore } from "@/stores/themeStore";




const menu = [
  {
    title: "ตั้งกระทู้",
    icon: MessageCirclePlus,
    link: "https://google.com"
  },
  {
    title: "คอมมูนิตี้",
    icon: UsersRound,
    link: "https://google.com"
  },
]


export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { open } = useSidebar()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <nav
      className="w-full flex items-center justify-between px-4 md:py-2.5 py-3.5 border-b 
        bg-background sticky top-0 z-50 shadow-sm"
    >
      <Link href="/" className='flex items-center gap-2'>

        <SidebarTrigger />

        <span className='md:block hidden text-[#ff395c] text-xl font-semibold'>Pantip</span>
      </Link>

      <div className="w-full lg:px-30 px-4  flex items-center">

        <Input
          type="text"
          placeholder="ค้นหาบน pantip"
          className='md:h-9 h-10 rounded-2xl shadow-sm'
        />
        <Search className='w-4 h-5 -mx-7' />

      </div>


      <div className="items-center">
        <div className='md:flex hidden gap-2'>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="!h-4.5 !w-4.5" /> : <Moon className="!h-4.5 !w-4.5" />}
          </Button>

          {menu.map((item, i) => (
            <div key={i} className='flex'>
              <Button

                variant="ghost"
                className='flex gap-1 items-center'
              >
                {item.icon &&
                  <item.icon className="!w-5 !h-5 scale-x-[-1]"
                  />}
                <p className='whitespace-nowrap text-sm'>
                  {item.title}
                </p>
              </Button>

            </div>
          ))}
          <Button variant="login" size="sm">
            เข้าสู่ระบบ
          </Button>
        </div>

        <Button variant="ghost" className='md:hidden block text-sm -px-2'>
          เข้าสู่ระบบ
        </Button>


      </div>
    </nav>
  );
}
