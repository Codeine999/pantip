"use client";

import { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

import Link from "next/link";

import { Input } from "./ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar"

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
  {
    title: "เข้าสู่ระบบ / สมัครสมาชิก",
    link: "https://google.com"
  },
]


export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <nav className="w-full flex items-center justify-between px-4 py-1.5 border-b bg-background sticky top-0 z-50">
      <Link href="/">
        <Button variant="ghost" className='flex gap-6 items-center font-semibold'>
          <Menu className='!w-6 !h-6' />
          <span className='text-[#ff395c] text-lg'>Pantip</span>
        </Button>
      </Link>

      <div className="w-full px-30 flex items-center">

        <Input type="text" placeholder="ค้นหาบน pantip" />
        <Search className='w-4 h-4 -mx-7' />

      </div>

      <div className="flex items-center gap-2">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="!h-4.5 !w-4.5" /> : <Moon className="!h-4.5 !w-4.5" />}
        </Button>


        {menu.map((item, i) => (
          <Button
            key={i}
            variant="ghost"
            className='flex gap-1 items-center text-gray-600'
          >
            {item.icon &&
              <item.icon className="!w-5 !h-5 scale-x-[-1]"
              />}
            <p className='whitespace-nowrap text-sm font-sans'>
              {item.title}
            </p>
          </Button>
        ))}


      </div>
    </nav>
  );
}
